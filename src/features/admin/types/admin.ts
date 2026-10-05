/**
 * Admin panel domain types.
 * These interfaces mirror the static sample data shown in the original
 * `admin/*.html` templates. Replace the mock fields with the real NestJS DTOs
 * once the backend contract is available. Keep DTOs next to the owning feature
 * and derive them from the OpenAPI output instead of guessing field names.
 */

export type AdminStaffRole = "super_admin" | "admin" | "moderator" | "support" | "finance";

export type AdminVendorType = "seller" | "provider" | "hybrid";

export type AdminVendorStatus = "pending" | "active" | "suspended" | "rejected";

export type AdminVendorPlan = "Starter" | "Pro" | "Platinum" | "Enterprise";

export type AdminApprovalStatus = "pending" | "approved" | "rejected" | "changes_requested";

export type AdminKycStatus = "unverified" | "pending" | "verified" | "rejected";

export type AdminOrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "returned" | "disputed";

export type AdminPayoutStatus = "pending" | "processing" | "completed" | "failed" | "on_hold";

export type AdminDisputeStatus = "open" | "investigating" | "resolved" | "rejected";

export type AdminTicketStatus = "open" | "pending" | "resolved" | "closed";

export type AdminReviewStatus = "published" | "pending" | "hidden" | "flagged";

export type AdminTransactionType = "payment" | "refund" | "payout" | "fee" | "wallet";

export interface AdminProfile {
  id: string;
  name: string;
  email: string;
  role: AdminStaffRole;
  permissions: string[];
}

export interface AdminVendor {
  id: string;
  name: string;
  type: AdminVendorType;
  plan: AdminVendorPlan;
  location: string;
  listingCount: number;
  orderCount: number;
  gmv30d: number;
  commissionDue: number;
  rating: number;
  reviewCount: number;
  disputeRate: number;
  kycStatus: AdminKycStatus;
  status: AdminVendorStatus;
  joinedAt: string;
}

export interface AdminProduct {
  id: string;
  title: string;
  vendor: string;
  category: string;
  price: number;
  stock: number;
  approvalStatus: AdminApprovalStatus;
  submittedAt: string;
}

export interface AdminServiceListing {
  id: string;
  title: string;
  provider: string;
  category: string;
  priceFrom: number;
  approvalStatus: AdminApprovalStatus;
  submittedAt: string;
}

export interface AdminOrder {
  id: string;
  customer: string;
  vendor: string;
  itemCount: number;
  total: number;
  paymentStatus: "paid" | "pending" | "refunded";
  fulfilmentStatus: AdminOrderStatus;
  placedAt: string;
}

export interface AdminPayout {
  id: string;
  vendor: string;
  amount: number;
  method: string;
  requestedAt: string;
  status: AdminPayoutStatus;
}

export interface AdminKycSubmission {
  id: string;
  vendor: string;
  documentTypes: string[];
  submittedAt: string;
  status: AdminKycStatus;
}

export interface AdminDispute {
  id: string;
  orderId: string;
  customer: string;
  vendor: string;
  reason: string;
  amount: number;
  openedAt: string;
  status: AdminDisputeStatus;
}

export interface AdminTicket {
  id: string;
  subject: string;
  requester: string;
  channel: "email" | "chat" | "phone" | "social";
  priority: "low" | "normal" | "high" | "urgent";
  status: AdminTicketStatus;
  updatedAt: string;
}

export interface AdminReview {
  id: string;
  product: string;
  customer: string;
  vendor: string;
  rating: number;
  text: string;
  status: AdminReviewStatus;
  createdAt: string;
}

export interface AdminTransaction {
  id: string;
  reference: string;
  type: AdminTransactionType;
  amount: number;
  party: string;
  status: "completed" | "pending" | "failed" | "reversed";
  createdAt: string;
}

export interface AdminAuditLogEntry {
  id: string;
  actor: string;
  action: string;
  target: string;
  ip: string;
  createdAt: string;
}
