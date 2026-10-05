# Vendor Panel (`/vendor`)

Seller & service-provider dashboard ("Seller Centre") migrated from `vendor/*.html` templates.

## Routes

| URL | Feature page | Purpose |
| --- | --- | --- |
| `/vendor` | redirect → `/vendor/dashboard` | Entry point |
| `/vendor/dashboard` | `features/vendor/pages/dashboard-page.tsx` | Overview stats, sales charts, action queue |
| `/vendor/analytics` | `features/vendor/pages/analytics-page.tsx` | Traffic, conversion and customer insights |
| `/vendor/products` | `features/vendor/pages/products-page.tsx` | Product list with bulk actions & pagination |
| `/vendor/add-product` | `features/vendor/pages/add-product-page.tsx` | New product form (images, variants, stock) |
| `/vendor/inventory` | `features/vendor/pages/inventory-page.tsx` | Stock levels, alerts and adjustments |
| `/vendor/orders` | `features/vendor/pages/orders-page.tsx` | Order queue with filters & bulk actions |
| `/vendor/orders/[orderId]` | `features/vendor/pages/order-details-page.tsx` | Fulfilment, items, customer & payment |
| `/vendor/order-details` | redirect → `/vendor/orders/HB-884213` | Legacy `.html` compatibility |
| `/vendor/returns` | `features/vendor/pages/returns-page.tsx` | Return & refund requests |
| `/vendor/shipping` | `features/vendor/pages/shipping-page.tsx` | Delivery zones, rates and couriers |
| `/vendor/questions` | `features/vendor/pages/questions-page.tsx` | Product Q&A |
| `/vendor/services` | `features/vendor/pages/services-page.tsx` | Service listings |
| `/vendor/add-service` | `features/vendor/pages/add-service-page.tsx` | New service form (packages, area, pricing) |
| `/vendor/leads` | `features/vendor/pages/leads-page.tsx` | Service enquiries & quotes |
| `/vendor/bookings` | `features/vendor/pages/bookings-page.tsx` | Confirmed jobs, calendar & technicians |
| `/vendor/business-profile` | `features/vendor/pages/business-profile-page.tsx` | Public service business info |
| `/vendor/customers` | `features/vendor/pages/customers-page.tsx` | Customer list & segments |
| `/vendor/reviews` | `features/vendor/pages/reviews-page.tsx` | Review replies & rating health |
| `/vendor/messages` | `features/vendor/pages/messages-page.tsx` | Chat with customers |
| `/vendor/promotions` | `features/vendor/pages/promotions-page.tsx` | Discounts, vouchers, bundles, flash deals |
| `/vendor/ads` | `features/vendor/pages/ads-page.tsx` | Sponsored placements & boosts |
| `/vendor/academy` | `features/vendor/pages/academy-page.tsx` | Seller courses & guides |
| `/vendor/payouts` | `features/vendor/pages/payouts-page.tsx` | Balance, settlements, bank accounts |
| `/vendor/transactions` | `features/vendor/pages/transactions-page.tsx` | Seller ledger history |
| `/vendor/invoices` | `features/vendor/pages/invoices-page.tsx` | Invoices, VAT & tax documents |
| `/vendor/reports` | `features/vendor/pages/reports-page.tsx` | Business reports & exports |
| `/vendor/shop-profile` | `features/vendor/pages/shop-profile-page.tsx` | Public product storefront settings |
| `/vendor/staff` | `features/vendor/pages/staff-page.tsx` | Team members & permissions |
| `/vendor/documents` | `features/vendor/pages/documents-page.tsx` | Verification & KYC documents |
| `/vendor/subscription` | `features/vendor/pages/subscription-page.tsx` | Seller plan & billing |
| `/vendor/notifications` | `features/vendor/pages/notifications-page.tsx` | Notification center |
| `/vendor/settings` | `features/vendor/pages/settings-page.tsx` | Account, shop, security & integrations |

All routes share `src/app/(panels)/vendor/layout.tsx` → `src/components/dashboard/dashboard-shell.tsx` with `features/vendor/lib/vendor-panel-config.tsx`.

## Folder map

```
src/app/(panels)/vendor/        # App Router: URL → layout + page files (thin)
src/features/vendor/
  pages/                        # 31 migrated page components (presentation, static data)
  lib/vendor-panel-config.tsx   # Sidebar nav, brand, topbar & identity for the shell
  lib/constants.ts              # Panel-specific constants
  types/vendor.ts               # DTO placeholders — replace with OpenAPI output
  api/vendor-api.ts             # apiRequest wrappers — UI never calls fetch directly
src/components/dashboard/       # Shared shell for User / Vendor / Admin
  dashboard-shell.tsx           # Frame (sidebar + topbar + drawer + footer)
  dashboard-sidebar.tsx         # Config-driven navigation with active state
  dashboard-topbar.tsx          # Config-driven search, actions & flyouts
  dashboard-interactions.tsx    # Collapse / drawer behaviour
  panel-config.ts               # PanelShellConfig contract — read this first
  page-header.tsx               # Shared breadcrumb/title/actions header
  status-badge.tsx              # Shared `st` status pill
src/styles/dashboard.css        # Shell, stat cards, status pills, chat, calendar
```

## Backend integration

- Browser calls use `NEXT_PUBLIC_API_BASE_URL` (default `/api` same-origin).
- Server calls use `NEST_API_URL` (e.g. `http://localhost:3001/api`).
- `src/lib/api/api-client.ts` is the only transport boundary.
- Feature API functions in `features/vendor/api` wrap `apiRequest<T>`.
- Types in `features/vendor/types` are placeholders derived from the static HTML sample data — replace them with the real NestJS DTOs when the contract is confirmed.
- The layout may add a server-side session check and redirect to `/login?next=/vendor/...` but NestJS must enforce vendor ownership and role on every endpoint.

## Adding Admin later

Follow the same pattern (a scaffold already exists):

```
src/app/(panels)/admin/layout.tsx    # /admin/* shell + permission check
src/features/admin/lib/admin-panel-config.tsx
src/features/admin/pages/...  types/...  api/...
```

Extend the admin config by copying the structure of
`features/vendor/lib/vendor-panel-config.tsx`. Keep domain API and types
inside each feature folder; do not import one panel's UI into another.

## Static templates vs. real data

Current pages keep the original HTML sample content as typed JSX. When API responses arrive, pass records as props from a server component or a client fetch via the feature API module. Replace inline duplication with the shared primitives in `src/components/dashboard` rather than copying endpoint logic into every page.

Prototype interactions (modals, dropdowns, tabs, toasts, bulk row selection,
repeatable form rows, progress rings, printing) are handled globally by
`src/components/shared/prototype-interactions.tsx` +
`dashboard-interactions.tsx`. Do not turn them into a store.
