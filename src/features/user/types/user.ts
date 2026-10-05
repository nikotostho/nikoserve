/**
 * User panel domain types.
 * These interfaces mirror the static sample data shown in the original HTML
 * templates. Replace the mock fields with the real NestJS DTOs once the
 * backend contract is available. Keep DTOs next to the owning feature and
 * derive them from the OpenAPI output instead of guessing field names.
 */

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "returned";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  loyaltyPoints: number;
  memberTier: "Bronze" | "Silver" | "Gold" | "Platinum";
  memberSince: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  title: string;
  seller: string;
  quantity: number;
  price: number;
  imageTone: "ph-a" | "ph-b" | "ph-c" | "ph-d" | "ph-e" | "ph-f";
  status: OrderStatus;
  placedAt: string;
  deliveredAt?: string;
  trackingCode?: string;
}

export interface Order {
  id: string;
  status: OrderStatus;
  total: number;
  placedAt: string;
  seller: string;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  voucherDiscount?: number;
  walletCreditUsed?: number;
}

export interface Address {
  id: string;
  label: "Home" | "Office" | "Other";
  fullName: string;
  phone: string;
  street: string;
  area: string;
  district: string;
  division: string;
  postalCode: string;
  isDefaultShipping: boolean;
  isDefaultBilling: boolean;
}

export interface WalletTransaction {
  id: string;
  type: "topup" | "refund" | "payment" | "withdrawal";
  amount: number;
  description: string;
  createdAt: string;
  balanceAfter: number;
}

export interface Voucher {
  id: string;
  code: string;
  title: string;
  discount: string;
  expiresAt: string;
  isUsed: boolean;
}

export interface Booking {
  id: string;
  serviceTitle: string;
  providerName: string;
  scheduledAt: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
  price: number;
}

export interface Review {
  id: string;
  productTitle: string;
  rating: number;
  comment: string;
  createdAt: string;
  seller: string;
  status: "published" | "pending";
}

export interface SupportTicket {
  id: string;
  subject: string;
  status: "open" | "pending" | "resolved" | "closed";
  createdAt: string;
  updatedAt: string;
  priority: "low" | "medium" | "high";
}

export interface Notification {
  id: string;
  title: string;
  body?: string;
  isRead: boolean;
  createdAt: string;
  type: "order" | "promo" | "booking" | "review" | "system";
}

export interface MessageThread {
  id: string;
  participantName: string;
  participantAvatar: string;
  lastMessage: string;
  unreadCount: number;
  updatedAt: string;
}
