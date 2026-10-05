export interface ApiErrorPayload {
  statusCode?: number;
  message?: string | string[];
  error?: string;
  code?: string;
  [key: string]: unknown;
}

export class ApiError extends Error {
  readonly status: number;
  readonly code?: string;
  readonly payload: unknown;

  constructor(message: string, status: number, payload: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.payload = payload;
    this.code =
      typeof payload === "object" && payload !== null && "code" in payload && typeof payload.code === "string"
        ? payload.code
        : undefined;
  }
}
