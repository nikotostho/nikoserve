/**
 * Vendor panel constants and helpers that are not tied to a single page.
 * Keep panel-specific values here; keep cross-panel UI primitives in
 * `src/components/dashboard` or `src/components/shared`.
 * Shell navigation/branding lives in `vendor-panel-config.tsx`.
 */

export const VENDOR_ORDER_STATUSES = [
  { value: "all", label: "All orders" },
  { value: "new", label: "New" },
  { value: "processing", label: "Processing" },
  { value: "ready_to_ship", label: "Ready to ship" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
  { value: "returned", label: "Returned" },
] as const;

export const VENDOR_NAV_BADGES: Record<string, string> = {
  products: "248",
  inventory: "6",
  orders: "32",
  returns: "4",
  questions: "9",
  services: "18",
  leads: "12",
  bookings: "7",
  reviews: "3",
  messages: "5",
  documents: "1",
  notifications: "4",
};

/**
 * Example guard for future NestJS session integration.
 * Layouts can call this server-side and redirect to /login when needed.
 * Do not rely on it as authorization — NestJS must enforce vendor ownership
 * and role on every protected endpoint independently.
 */
export function getVendorPanelMeta() {
  return {
    title: "Seller Centre",
    description: "Manage products, services, orders, bookings and payouts.",
  };
}
