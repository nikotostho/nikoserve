# User Panel (`/user`)

Customer account dashboard migrated from `user/*.html` templates.

## Routes

| URL | Feature page | Purpose |
| --- | --- | --- |
| `/user` | redirect → `/user/dashboard` | Entry point |
| `/user/dashboard` | `features/user/pages/dashboard-page.tsx` | Overview stats, activity charts, wishlist drops |
| `/user/orders` | `features/user/pages/orders-page.tsx` | Filtered order list with pagination |
| `/user/orders/[orderId]` | `features/user/pages/order-details-page.tsx` | Timeline, items, delivery & payment |
| `/user/order-details` | redirect → `/user/orders/HB-884213` | Legacy `.html` compatibility |
| `/user/returns` | `features/user/pages/returns-page.tsx` | Return requests & cancellations |
| `/user/bookings` | `features/user/pages/bookings-page.tsx` | Service bookings calendar |
| `/user/wishlist` | `features/user/pages/wishlist-page.tsx` | Saved products, price alerts |
| `/user/reviews` | `features/user/pages/reviews-page.tsx` | Written & pending reviews |
| `/user/wallet` | `features/user/pages/wallet-page.tsx` | Balance, transactions, saved methods |
| `/user/vouchers` | `features/user/pages/vouchers-page.tsx` | Vouchers, points, referrals |
| `/user/addresses` | `features/user/pages/addresses-page.tsx` | Delivery & billing addresses |
| `/user/profile` | `features/user/pages/profile-page.tsx` | Personal info & preferences |
| `/user/notifications` | `features/user/pages/notifications-page.tsx` | Notification center |
| `/user/messages` | `features/user/pages/messages-page.tsx` | Chat with sellers/providers |
| `/user/support` | `features/user/pages/support-page.tsx` | Support tickets |
| `/user/settings` | `features/user/pages/settings-page.tsx` | Security, privacy, sessions |

All routes share `src/app/(panels)/user/layout.tsx` → `src/components/dashboard/dashboard-shell.tsx` with `features/user/lib/user-panel-config.tsx`.

## Folder map

```
src/app/(panels)/user/          # App Router: URL → layout + page files (thin)
src/features/user/
  pages/                        # 15 migrated page components (presentation, static data)
  lib/user-panel-config.tsx     # Sidebar nav, brand, topbar & identity for the shell
  types/user.ts                 # DTO placeholders — replace with OpenAPI output
  api/user-api.ts               # apiRequest wrappers — UI never calls fetch directly
  lib/constants.ts              # Panel-specific constants
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
- Feature API functions in `features/user/api` wrap `apiRequest<T>`.
- Types in `features/user/types` are placeholders derived from the static HTML sample data — replace them with the real NestJS DTOs when the contract is confirmed.
- Layouts may add a server-side session check and redirect to `/login?next=/user/...` but NestJS must enforce ownership and role on every endpoint.

## Vendor / Admin panels

The Vendor panel follows the same pattern (see `src/features/vendor/README.md`).
The Admin panel has a scaffold under `src/features/admin` waiting for its
migration:

```
src/app/(panels)/vendor/layout.tsx   # /vendor/* shell + role check
src/app/(panels)/admin/layout.tsx    # /admin/* shell + permission check
src/features/vendor/...  src/features/admin/...
```

Each panel passes its own `PanelShellConfig` (see
`src/components/dashboard/panel-config.ts`) to the shared `DashboardShell`.
Reuse `src/components/shared` for neutral primitives. Keep domain API and
types inside each feature folder; do not import one panel's UI into another.

## Static templates vs. real data

Current pages keep the original HTML sample content as typed JSX. When API responses arrive, pass records as props from a server component or a client fetch via the feature API module. Replace inline duplication with the shared components in `features/user/components` rather than copying endpoint logic into every page.

Prototype interactions (modals, dropdowns, tabs, toasts) are handled globally by `src/components/shared/prototype-interactions.tsx` + `dashboard-interactions.tsx`. Do not turn them into a cart/auth/order store.

Panel page headers and status pills can use the shared primitives in
`src/components/dashboard` (`page-header.tsx`, `status-badge.tsx`) instead of
repeating markup in several pages of the same panel.
