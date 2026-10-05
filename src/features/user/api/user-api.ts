/**
 * User feature API layer.
 * All HTTP calls must go through the shared `apiRequest` transport so that
 * base-URL, credentials, JSON handling and error normalization stay central.
 * No component should call `fetch("/api/...")` directly.
 *
 * The endpoints below are placeholders — replace the paths and DTOs with the
 * real NestJS contract (OpenAPI) once available. Keeping the calls inside this
 * module means the UI can switch from mock data to real data without rewriting
 * page components.
 */

import { apiRequest } from "@/lib/api/api-client";
import type { Address, Booking, Order, UserProfile, WalletTransaction } from "@/features/user/types/user";

export async function getUserProfile(): Promise<UserProfile> {
  return apiRequest<UserProfile>("/user/profile");
}

export async function updateUserProfile(payload: Partial<UserProfile>): Promise<UserProfile> {
  return apiRequest<UserProfile>("/user/profile", {
    method: "PATCH",
    body: payload,
  });
}

export async function getUserOrders(params?: { status?: string; page?: number; limit?: number }): Promise<{ data: Order[]; total: number }> {
  const query = new URLSearchParams();
  if (params?.status) query.set("status", params.status);
  if (params?.page) query.set("page", String(params.page));
  if (params?.limit) query.set("limit", String(params.limit));
  const qs = query.toString();
  return apiRequest<{ data: Order[]; total: number }>(`/user/orders${qs ? `?${qs}` : ""}`);
}

export async function getOrderById(orderId: string): Promise<Order> {
  return apiRequest<Order>(`/user/orders/${encodeURIComponent(orderId)}`);
}

export async function getAddresses(): Promise<Address[]> {
  return apiRequest<Address[]>("/user/addresses");
}

export async function createAddress(payload: Omit<Address, "id">): Promise<Address> {
  return apiRequest<Address>("/user/addresses", { method: "POST", body: payload });
}

export async function getBookings(): Promise<Booking[]> {
  return apiRequest<Booking[]>("/user/bookings");
}

export async function getWalletTransactions(): Promise<{ balance: number; transactions: WalletTransaction[] }> {
  return apiRequest<{ balance: number; transactions: WalletTransaction[] }>("/user/wallet");
}

export async function getSupportTickets(): Promise<unknown[]> {
  return apiRequest<unknown[]>("/user/support/tickets");
}
