import { ApiError, type ApiErrorPayload } from "@/lib/api/api-error";

type ApiBody = BodyInit | Record<string, unknown> | unknown[] | null;

export interface ApiRequestOptions extends Omit<RequestInit, "body"> {
  body?: ApiBody;
}

const browserApiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "/api";

function normalizePath(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

function getRequestUrl(path: string): string {
  const base = (typeof window === "undefined" ? process.env.NEST_API_URL : browserApiBase) ?? browserApiBase;
  const cleanBase = base.replace(/\/$/, "");
  const endpoint = `${cleanBase}${normalizePath(path)}`;

  if (/^https?:\/\//i.test(endpoint)) return endpoint;
  if (typeof window !== "undefined") return endpoint;

  throw new Error(
    "Server-side API requests need NEST_API_URL set to an absolute NestJS API root. " +
      "Browser requests can use the same-origin /api proxy.",
  );
}

function isJsonBody(body: ApiBody): body is Record<string, unknown> | unknown[] {
  if (Array.isArray(body)) return true;
  if (typeof body !== "object" || body === null) return false;
  const prototype = Object.getPrototypeOf(body);
  return prototype === Object.prototype || prototype === null;
}

async function readResponse(response: Response): Promise<unknown> {
  if (response.status === 204) return undefined;
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) return response.json();
  const text = await response.text();
  return text || undefined;
}

function getErrorMessage(payload: unknown, status: number): string {
  if (typeof payload === "string" && payload.trim()) return payload;
  if (typeof payload === "object" && payload !== null && "message" in payload) {
    const message = (payload as ApiErrorPayload).message;
    if (typeof message === "string") return message;
    if (Array.isArray(message)) return message.join(", ");
  }
  return `API request failed with status ${status}`;
}

/**
 * The only shared HTTP entry point for feature API modules. Use feature-owned
 * service functions (for example `features/catalog/api/*`) instead of calling
 * fetch with hand-written NestJS URLs from view components.
 */
export async function apiRequest<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set("Accept", "application/json");

  let body: BodyInit | null | undefined;
  if (options.body === undefined || options.body === null) {
    body = options.body;
  } else if (isJsonBody(options.body)) {
    headers.set("Content-Type", "application/json");
    body = JSON.stringify(options.body);
  } else {
    body = options.body;
  }

  const response = await fetch(getRequestUrl(path), {
    ...options,
    body,
    headers,
    credentials: options.credentials ?? "include",
    cache: options.cache ?? "no-store",
  });
  const payload = await readResponse(response);

  if (!response.ok) {
    throw new ApiError(getErrorMessage(payload, response.status), response.status, payload);
  }

  return payload as T;
}
