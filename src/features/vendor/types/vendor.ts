/**
 * Vendor panel domain types.
 * These interfaces mirror the static sample data shown in the original
 * `vendor/*.html` templates. Replace the mock fields with the real NestJS DTOs
 * once the backend contract is available. Keep DTOs next to the owning feature
 * and derive them from the OpenAPI output instead of guessing field names.
 */

export type VendorOrderStatus = "new" | "processing" | "ready_to_ship" | "shipped" | "delivered" | "cancelled" | "returned";

export type VendorProductStatus = "active" | "pending" | "rejected" | "paused" | "out_of_stock" | "low_stock" | "draft";

export type VendorBookingStatus = "new" | "confirmed" | "scheduled" | "completed" | "cancelled";

export type VendorLeadStatus = "new" | "contacted" | "quoted" | "won" | "lost";

export type PayoutStatus = "pending" | "processing" | "completed" | "failed";

export type ReturnRequestStatus = "pending" | "approved" | "rejected" | "received" | "refunded";

export interface VendorProfile {
  id: string;
  shopName: string;
  ownerName: string;
  email: string;
  phone: string;
  avatarInitial: string;
  isVerified: boolean;
  sellerTier: "Starter" | "Pro" | "Enterprise";
  rating: number;
  reviewCount: number;
  balance: number;
  pendingPayout: number;
}

export interface VendorProduct {
  id: string;
  title: string;
  sku: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  stock: number;
  sold: number;
  status: VendorProductStatus;
  imageTone: "ph-a" | "ph-b" | "ph-c" | "ph-d" | "ph-e" | "ph-f";
  rating?: number;
  variants?: number;
}

export interface VendorOrderItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  imageTone: "ph-a" | "ph-b" | "ph-c" | "ph-d" | "ph-e" | "ph-f";
}

export interface VendorOrder {
  id: string;
  customerName: string;
  placedAt: string;
  items: VendorOrderItem[];
  total: number;
  paymentMethod: string;
  paymentStatus: "paid" | "pending" | "refunded" | "failed";
  status: VendorOrderStatus;
  courier?: string;
  trackingCode?: string;
}

export interface VendorBooking {
  id: string;
  serviceTitle: string;
  customerName: string;
  scheduledAt: string;
  address: string;
  technician?: string;
  price: number;
  status: VendorBookingStatus;
}

export interface VendorLead {
  id: string;
  customerName: string;
  serviceTitle: string;
  message: string;
  receivedAt: string;
  status: VendorLeadStatus;
  phone?: string;
}

export interface VendorCustomer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  ordersCount: number;
  totalSpent: number;
  lastOrderAt: string;
  segment: "new" | "repeat" | "vip" | "dormant";
}

export interface VendorReview {
  id: string;
  productTitle: string;
  customerName: string;
  rating: number;
  comment: string;
  createdAt: string;
  reply?: string;
  status: "published" | "pending";
}

export interface Payout {
  id: string;
  amount: number;
  method: string;
  requestedAt: string;
  completedAt?: string;
  status: PayoutStatus;
  reference: string;
}

export interface VendorTransaction {
  id: string;
  type: "sale" | "payout" | "refund" | "fee" | "adjustment" | "subscription";
  amount: number;
  description: string;
  createdAt: string;
  balanceAfter: number;
}

export interface VendorInvoice {
  id: string;
  orderId: string;
  customerName: string;
  amount: number;
  vatAmount: number;
  issuedAt: string;
  status: "paid" | "pending" | "cancelled";
}

export interface Promotion {
  id: string;
  title: string;
  type: "discount" | "voucher" | "bundle" | "flash_deal" | "free_shipping";
  value: string;
  code?: string;
  startsAt: string;
  endsAt: string;
  used: number;
  status: "active" | "scheduled" | "paused" | "expired";
}

export interface AdCampaign {
  id: string;
  name: string;
  placement: "search" | "homepage" | "category" | "product";
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  status: "active" | "paused" | "completed";
}

export interface StaffMember {
  id: string;
  name: string;
  email: string;
  role: "owner" | "manager" | "support" | "operations" | "accountant";
  permissions: string[];
  lastActiveAt: string;
  status: "active" | "invited" | "suspended";
}

export interface VerificationDocument {
  id: string;
  title: string;
  type: "trade_licence" | "tin" | "nid" | "bank" | "other";
  uploadedAt: string;
  expiresAt?: string;
  status: "verified" | "pending" | "rejected";
}

export interface VendorNotification {
  id: string;
  title: string;
  body?: string;
  isRead: boolean;
  createdAt: string;
  type: "order" | "lead" | "payout" | "review" | "policy" | "system";
}

export interface VendorMessageThread {
  id: string;
  participantName: string;
  participantAvatar: string;
  lastMessage: string;
  unreadCount: number;
  updatedAt: string;
}
