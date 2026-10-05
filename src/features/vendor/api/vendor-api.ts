/**
 * Vendor feature API layer.
 * All HTTP calls must go through the shared `apiRequest` transport so that
 * base-URL, credentials, JSON handling and error normalization stay central.
 * No component should call `fetch("/api/...")` directly.
 *
 * The endpoints below are placeholders — replace the paths and DTOs with the
 * real NestJS contract (OpenAPI) once available. Keeping the calls inside this
 * module means the UI can switch from mock data to real data without rewriting
 * page components. NestJS must enforce vendor ownership on every endpoint.
 */

import { apiRequest } from "@/lib/api/api-client";
import type {
  Payout,
  Promotion,
  VendorBooking,
  VendorLead,
  VendorOrder,
  VendorProduct,
  VendorProfile,
  VendorReview,
  VendorTransaction,
} from "@/features/vendor/types/vendor";

export async function getVendorProfile(): Promise<VendorProfile> {
  return apiRequest<VendorProfile>("/vendor/profile");
}

export async function updateVendorProfile(payload: Partial<VendorProfile>): Promise<VendorProfile> {
  return apiRequest<VendorProfile>("/vendor/profile", {
    method: "PATCH",
    body: payload,
  });
}

export async function getVendorProducts(params?: { status?: string; page?: number; limit?: number }): Promise<{ data: VendorProduct[]; total: number }> {
  const query = new URLSearchParams();
  if (params?.status) query.set("status", params.status);
  if (params?.page) query.set("page", String(params.page));
  if (params?.limit) query.set("limit", String(params.limit));
  const qs = query.toString();
  return apiRequest<{ data: VendorProduct[]; total: number }>(`/vendor/products${qs ? `?${qs}` : ""}`);
}

export async function createVendorProduct(payload: Omit<VendorProduct, "id" | "sold">): Promise<VendorProduct> {
  return apiRequest<VendorProduct>("/vendor/products", { method: "POST", body: payload });
}

export async function getVendorOrders(params?: { status?: string; page?: number; limit?: number }): Promise<{ data: VendorOrder[]; total: number }> {
  const query = new URLSearchParams();
  if (params?.status) query.set("status", params.status);
  if (params?.page) query.set("page", String(params.page));
  if (params?.limit) query.set("limit", String(params.limit));
  const qs = query.toString();
  return apiRequest<{ data: VendorOrder[]; total: number }>(`/vendor/orders${qs ? `?${qs}` : ""}`);
}

export async function getVendorOrderById(orderId: string): Promise<VendorOrder> {
  return apiRequest<VendorOrder>(`/vendor/orders/${encodeURIComponent(orderId)}`);
}

export async function updateVendorOrderStatus(orderId: string, status: VendorOrder["status"]): Promise<VendorOrder> {
  return apiRequest<VendorOrder>(`/vendor/orders/${encodeURIComponent(orderId)}/status`, {
    method: "PATCH",
    body: { status },
  });
}

export async function getVendorBookings(): Promise<VendorBooking[]> {
  return apiRequest<VendorBooking[]>("/vendor/bookings");
}

export async function getVendorLeads(): Promise<VendorLead[]> {
  return apiRequest<VendorLead[]>("/vendor/leads");
}

export async function getVendorReviews(): Promise<VendorReview[]> {
  return apiRequest<VendorReview[]>("/vendor/reviews");
}

export async function getVendorPromotions(): Promise<Promotion[]> {
  return apiRequest<Promotion[]>("/vendor/promotions");
}

export async function getVendorPayouts(): Promise<{ balance: number; pending: number; payouts: Payout[] }> {
  return apiRequest<{ balance: number; pending: number; payouts: Payout[] }>("/vendor/payouts");
}

export async function getVendorTransactions(params?: { page?: number; limit?: number }): Promise<{ data: VendorTransaction[]; total: number }> {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", String(params.page));
  if (params?.limit) query.set("limit", String(params.limit));
  const qs = query.toString();
  return apiRequest<{ data: VendorTransaction[]; total: number }>(`/vendor/transactions${qs ? `?${qs}` : ""}`);
}
