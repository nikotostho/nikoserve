/**
 * Admin panel constants and helpers that are not tied to a single page.
 * Keep panel-specific values here; keep cross-panel UI primitives in
 * `src/components/dashboard` or `src/components/shared`.
 * Shell navigation/branding lives in `admin-panel-config.tsx`.
 */

export const ADMIN_VENDOR_STATUSES = [
  { value: "all", label: "All vendors" },
  { value: "pending", label: "Pending review" },
  { value: "active", label: "Active" },
  { value: "suspended", label: "Suspended" },
  { value: "rejected", label: "Rejected" },
] as const;

export const ADMIN_APPROVAL_STATUSES = [
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
  { value: "changes_requested", label: "Changes requested" },
] as const;

export const ADMIN_ORDER_STATUSES = [
  { value: "all", label: "All orders" },
  { value: "pending", label: "Pending" },
  { value: "processing", label: "Processing" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
  { value: "returned", label: "Returned" },
  { value: "disputed", label: "Disputed" },
] as const;

export const ADMIN_PAYOUT_STATUSES = [
  { value: "all", label: "All payouts" },
  { value: "pending", label: "Pending" },
  { value: "processing", label: "Processing" },
  { value: "completed", label: "Completed" },
  { value: "failed", label: "Failed" },
  { value: "on_hold", label: "On hold" },
] as const;

export const ADMIN_KYC_STATUSES = [
  { value: "all", label: "All submissions" },
  { value: "pending", label: "Pending" },
  { value: "verified", label: "Verified" },
  { value: "rejected", label: "Rejected" },
] as const;

export const ADMIN_TICKET_STATUSES = [
  { value: "all", label: "All tickets" },
  { value: "open", label: "Open" },
  { value: "pending", label: "Pending" },
  { value: "resolved", label: "Resolved" },
  { value: "closed", label: "Closed" },
] as const;

/**
 * Sidebar queue counters. They mirror the static counts rendered by the
 * original templates and become API-driven (NestJS) later, at which point the
 * panel config should read them instead of the inline literals.
 */
export const ADMIN_NAV_BADGES: Record<string, string> = {
  "product-approvals": "86",
  "service-approvals": "27",
  orders: "412",
  disputes: "24",
  payouts: "18",
  "vendor-approvals": "31",
  kyc: "14",
  reviews: "47",
  questions: "18",
  moderation: "12",
  tickets: "63",
  chats: "4",
};

/**
 * Example guard for future NestJS session integration.
 * Layouts can call this server-side and redirect to /login when needed.
 * Do not rely on it as authorization — NestJS must enforce the staff role and
 * permissions on every protected endpoint independently.
 */
export function getAdminPanelMeta() {
  return {
    title: "Admin Console",
    description: "Platform operations, approvals, moderation and system health.",
  };
}
