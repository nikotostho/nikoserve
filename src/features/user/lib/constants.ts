/**
 * User panel constants and helpers that are not tied to a single page.
 * Keep panel-specific values here; keep cross-panel UI primitives in
 * `src/components/dashboard` or `src/components/shared`.
 */

export const USER_ORDER_STATUSES = [
  { value: "all", label: "All orders" },
  { value: "pending", label: "To pay" },
  { value: "processing", label: "To ship" },
  { value: "shipped", label: "To receive" },
  { value: "delivered", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
  { value: "returned", label: "Returns" },
] as const;

export const USER_NAV_BADGES: Record<string, string> = {
  orders: "8",
  bookings: "2",
  wishlist: "14",
  vouchers: "5",
  notifications: "3",
  messages: "2",
};

/**
 * Example guard for future NestJS session integration.
 * Layouts can call this server-side and redirect to /login when needed.
 * Do not rely on it as authorization — NestJS must enforce every protected
 * endpoint independently.
 */
export function getUserPanelMeta() {
  return {
    title: "My Account",
    description: "Manage your HaatBazar orders, bookings and account settings.",
  };
}
