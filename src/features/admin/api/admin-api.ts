/**
 * Admin feature API layer.
 * All HTTP calls must go through the shared `apiRequest` transport so that
 * base-URL, credentials, JSON handling and error normalization stay central.
 * No component should call `fetch("/api/...")` directly.
 *
 * The endpoints below are placeholders — replace the paths and DTOs with the
 * real NestJS contract (OpenAPI) once available. Keeping the calls inside this
 * module means the UI can switch from mock data to real data without rewriting
 * page components. NestJS must enforce the staff role and permissions on every
 * endpoint; the frontend panel config only controls navigation.
 */

import { apiRequest } from "@/lib/api/api-client";
import type {
  AdminApprovalStatus,
  AdminAuditLogEntry,
  AdminDispute,
  AdminKycSubmission,
  AdminKycStatus,
  AdminOrder,
  AdminPayout,
  AdminPayoutStatus,
  AdminProduct,
  AdminProfile,
  AdminReview,
  AdminReviewStatus,
  AdminServiceListing,
  AdminTicket,
  AdminTicketStatus,
  AdminTransaction,
  AdminVendor,
  AdminVendorStatus,
} from "@/features/admin/types/admin";

type ListParams = { status?: string; page?: number; limit?: number; q?: string };

function toQuery(params?: ListParams): string {
  const query = new URLSearchParams();
  if (params?.status) query.set("status", params.status);
  if (params?.q) query.set("q", params.q);
  if (params?.page) query.set("page", String(params.page));
  if (params?.limit) query.set("limit", String(params.limit));
  const qs = query.toString();
  return qs ? `?${qs}` : "";
}

export async function getAdminProfile(): Promise<AdminProfile> {
  return apiRequest<AdminProfile>("/admin/profile");
}

export async function getAdminVendors(params?: ListParams): Promise<{ data: AdminVendor[]; total: number }> {
  return apiRequest<{ data: AdminVendor[]; total: number }>(`/admin/vendors${toQuery(params)}`);
}

export async function updateVendorStatus(vendorId: string, status: AdminVendorStatus): Promise<AdminVendor> {
  return apiRequest<AdminVendor>(`/admin/vendors/${encodeURIComponent(vendorId)}/status`, {
    method: "PATCH",
    body: { status },
  });
}

export async function getProductApprovals(params?: ListParams): Promise<{ data: AdminProduct[]; total: number }> {
  return apiRequest<{ data: AdminProduct[]; total: number }>(`/admin/product-approvals${toQuery(params)}`);
}

export async function decideProductApproval(productId: string, decision: AdminApprovalStatus): Promise<AdminProduct> {
  return apiRequest<AdminProduct>(`/admin/product-approvals/${encodeURIComponent(productId)}`, {
    method: "PATCH",
    body: { decision },
  });
}

export async function getServiceApprovals(params?: ListParams): Promise<{ data: AdminServiceListing[]; total: number }> {
  return apiRequest<{ data: AdminServiceListing[]; total: number }>(`/admin/service-approvals${toQuery(params)}`);
}

export async function decideServiceApproval(serviceId: string, decision: AdminApprovalStatus): Promise<AdminServiceListing> {
  return apiRequest<AdminServiceListing>(`/admin/service-approvals/${encodeURIComponent(serviceId)}`, {
    method: "PATCH",
    body: { decision },
  });
}

export async function getAdminOrders(params?: ListParams): Promise<{ data: AdminOrder[]; total: number }> {
  return apiRequest<{ data: AdminOrder[]; total: number }>(`/admin/orders${toQuery(params)}`);
}

export async function getAdminOrderById(orderId: string): Promise<AdminOrder> {
  return apiRequest<AdminOrder>(`/admin/orders/${encodeURIComponent(orderId)}`);
}

export async function getAdminPayouts(params?: ListParams): Promise<{ data: AdminPayout[]; total: number }> {
  return apiRequest<{ data: AdminPayout[]; total: number }>(`/admin/payouts${toQuery(params)}`);
}

export async function updatePayoutStatus(payoutId: string, status: AdminPayoutStatus): Promise<AdminPayout> {
  return apiRequest<AdminPayout>(`/admin/payouts/${encodeURIComponent(payoutId)}/status`, {
    method: "PATCH",
    body: { status },
  });
}

export async function getKycSubmissions(params?: ListParams): Promise<{ data: AdminKycSubmission[]; total: number }> {
  return apiRequest<{ data: AdminKycSubmission[]; total: number }>(`/admin/kyc${toQuery(params)}`);
}

export async function decideKycSubmission(submissionId: string, status: AdminKycStatus, note?: string): Promise<AdminKycSubmission> {
  return apiRequest<AdminKycSubmission>(`/admin/kyc/${encodeURIComponent(submissionId)}`, {
    method: "PATCH",
    body: { status, note },
  });
}

export async function getAdminDisputes(params?: ListParams): Promise<{ data: AdminDispute[]; total: number }> {
  return apiRequest<{ data: AdminDispute[]; total: number }>(`/admin/disputes${toQuery(params)}`);
}

export async function resolveDispute(disputeId: string, resolution: string): Promise<AdminDispute> {
  return apiRequest<AdminDispute>(`/admin/disputes/${encodeURIComponent(disputeId)}/resolve`, {
    method: "POST",
    body: { resolution },
  });
}

export async function getAdminTickets(params?: ListParams): Promise<{ data: AdminTicket[]; total: number }> {
  return apiRequest<{ data: AdminTicket[]; total: number }>(`/admin/tickets${toQuery(params)}`);
}

export async function updateTicketStatus(ticketId: string, status: AdminTicketStatus): Promise<AdminTicket> {
  return apiRequest<AdminTicket>(`/admin/tickets/${encodeURIComponent(ticketId)}/status`, {
    method: "PATCH",
    body: { status },
  });
}

export async function getAdminReviews(params?: ListParams): Promise<{ data: AdminReview[]; total: number }> {
  return apiRequest<{ data: AdminReview[]; total: number }>(`/admin/reviews${toQuery(params)}`);
}

export async function moderateReview(reviewId: string, status: AdminReviewStatus): Promise<AdminReview> {
  return apiRequest<AdminReview>(`/admin/reviews/${encodeURIComponent(reviewId)}`, {
    method: "PATCH",
    body: { status },
  });
}

export async function getAdminTransactions(params?: ListParams): Promise<{ data: AdminTransaction[]; total: number }> {
  return apiRequest<{ data: AdminTransaction[]; total: number }>(`/admin/transactions${toQuery(params)}`);
}

export async function getAuditLog(params?: ListParams): Promise<{ data: AdminAuditLogEntry[]; total: number }> {
  return apiRequest<{ data: AdminAuditLogEntry[]; total: number }>(`/admin/audit-log${toQuery(params)}`);
}
