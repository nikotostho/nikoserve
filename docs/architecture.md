# Frontend architecture and extension guide

This document is the project map for future implementation work. The repository now contains the public storefront plus the migrated Customer (User), Vendor and Admin dashboards. It does not yet contain a NestJS service or persisted business data.

## Current route groups

Next.js App Router file paths are the source of truth. Route groups in parentheses are organization-only and do not appear in URLs.

| Route group | URL examples | Responsibility |
| --- | --- | --- |
| `src/app/(storefront)` | `/`, `/products`, `/product-details`, `/services`, `/shops`, `/cart`, `/checkout`, `/about`, `/terms` | Shared public navigation/footer plus public marketplace and content pages. |
| `src/app/(auth)` | `/login`, `/register`, `/otp-verify`, `/forgot-password`, `/reset-password` | Standalone account-entry and recovery layouts. Authentication is not connected yet. |
| `src/app/(panels)/user` | `/user/dashboard`, `/user/orders`, `/user/orders/[orderId]`, `/user/wallet`, `/user/wishlist` (15 pages) | Customer dashboard shell (sidebar + topbar) and account pages. |
| `src/app/(panels)/vendor` | `/vendor/dashboard`, `/vendor/orders`, `/vendor/products`, `/vendor/payouts` (31 pages) | Seller/provider dashboard shell (sidebar + topbar) and business pages. |
| `src/app/(panels)/admin` | `/admin/dashboard`, `/admin/orders`, `/admin/vendors` (53 pages) | Staff/Admin Console shell (sidebar + topbar) and platform operations pages. |
| `src/app/not-found.tsx` | unmatched URL | Shared storefront-styled 404 response. |

The other public routes (categories, offers, search, product/service details, policies, help, onboarding, etc.) follow the same split: a small `app` route file and a feature-owned page component.

## Source tree

```text
src/
  app/
    layout.tsx                    # root metadata, global styles and client behavior mount
    (storefront)/                 # public site layout and URL routes
    (auth)/                       # sign-in/register/recovery URLs and layout
    (panels)/
      user/                       # /user/* customer shell + 15 migrated pages
      vendor/                     # /vendor/* seller/provider shell + 31 migrated pages
      admin/                      # /admin/* staff shell + 53 migrated pages
    not-found.tsx
  components/
    shared/                       # cross-route client behavior for the current static templates
    catalog/                       # reusable product-card actions
    storefront/                   # announcement bar, header, footer, mobile nav, dialogs
    dashboard/                    # shared shell for User/Vendor/Admin (config-driven sidebar/topbar, panel-config.ts contract, PageHeader, StatusBadge)
  features/
    home/pages/                    # homepage
    catalog/pages/                 # categories, listings, search, product detail, offers, brands
    services/pages/                # service directory and service detail
    shops/pages/                   # shop directory and shop profile
    commerce/pages/                # cart, checkout, compare, tracking, confirmation
    content/pages/                 # editorial, support, policy, sitemap, not-found
    onboarding/pages/              # seller/provider landing and application forms
    auth/pages/                    # account-entry and recovery screens
    user/                          # customer dashboard domain
      pages/                       # 15 migrated pages (dashboard, orders, bookings, wallet …)
      lib/user-panel-config.tsx    # shell nav/brand/topbar for /user
      lib/constants.ts
      types/user.ts                # DTO placeholders — replace with OpenAPI output
      api/user-api.ts              # apiRequest wrappers
    vendor/                        # seller/provider dashboard domain
      pages/                       # 31 migrated pages (products, orders, bookings, payouts …)
      lib/vendor-panel-config.tsx  # shell nav/brand/topbar for /vendor
      lib/constants.ts
      types/vendor.ts              # DTO placeholders — replace with OpenAPI output
      api/vendor-api.ts            # apiRequest wrappers
    admin/                         # platform operations domain (53 pages, lib/admin-panel-config.tsx, types, api, constants)
  lib/
    api/                           # shared HTTP client and normalized API error
    page-metadata.ts
    legacy-redirects.json
  styles/
    style.css
    components.css
    fonts.css
    dashboard.css                  # shell, stat cards, status pills, chat, calendar
```

Page files under `features/*/pages` preserve the existing static sample content. Keep route entrypoints thin: they should set route metadata and render the owning feature page, not duplicate the global header or footer. Put a new public feature in its domain folder; put its URL in the appropriate route group.

## Panel architecture (User + Vendor + Admin done)

Do not add dashboards to the public storefront layout. Each panel keeps an explicit URL prefix, its own layout and its own shell config:

```text
src/app/(panels)/user/layout.tsx       # /user/* customer shell and session check (done)
src/app/(panels)/vendor/layout.tsx     # /vendor/* seller/provider shell and role check (done)
src/app/(panels)/admin/layout.tsx      # /admin/* staff shell and permission check

src/features/user/                    # customer account, orders, addresses, bookings, etc. (15 pages migrated)
src/features/vendor/                  # seller/provider operations — catalog, orders, services, finance (31 pages migrated)
src/features/admin/                   # platform operations, approvals, moderation, finance and system (53 pages)
```

Every panel layout renders the same shared `DashboardShell` and injects its own `PanelShellConfig` (`src/components/dashboard/panel-config.ts`) from `features/<panel>/lib/<panel>-panel-config.tsx`. The config declares the sidebar nav, brand subtitle, topbar search placeholder/primary action, optional status badge, badge counts, account menu and the signed-in identity. The shell owns the frame; the config owns everything panel-specific. To add another panel, copy the structure of `src/features/admin/lib/admin-panel-config.tsx`, add routes under `src/app/(panels)/<panel>/`, and add pages/types/api/constants under `src/features/<panel>/` — the User, Vendor and Admin panels are the reference implementations.

Reuse the shared `src/components/dashboard` shell and neutral primitives from `src/components/shared` where appropriate, but do not make the storefront header responsible for dashboard permissions or panel state. Shared business concepts should be exposed through feature/domain APIs rather than imported from another panel's UI.

Detailed route maps live in `src/features/user/README.md`, `src/features/vendor/README.md` and `src/features/admin/README.md`.

The NestJS API is the authority for identity, role membership, record ownership, and permissions. Route/layout checks improve navigation and user experience; every protected NestJS endpoint must independently enforce authorization. Never rely on hidden links or client-side role checks as access control.

## NestJS API integration

### Configuration

- Browser code should call the same-origin base path in `NEXT_PUBLIC_API_BASE_URL` (default: `/api`). Do not put `localhost` in browser components.
- When running Next.js and NestJS separately, set server-only `NEST_API_URL` to the full Nest API root, including its global prefix (example: `http://localhost:3001/api` when Next.js uses port 3000). `next.config.js` rewrites `/api/*` to this target, which also avoids browser CORS/origin inconsistencies in the preview.
- In production, point `NEST_API_URL` at the private/internal NestJS origin and keep the browser-facing URL same-origin. Configure NestJS CORS only for other explicitly required clients.

### API code placement

`src/lib/api/api-client.ts` is the single HTTP transport boundary. It centralizes JSON handling, credentials, no-store behavior, and normalized errors. Do not add ad-hoc `fetch("http://localhost:...")` calls in components.

When the NestJS contract exists, add a feature-owned API module and types, for example:

```text
src/features/catalog/api/catalog-api.ts
src/features/catalog/types/catalog.ts
src/features/commerce/api/cart-api.ts
src/features/auth/api/auth-api.ts
```

Those functions call `apiRequest<T>()`; components/pages consume the feature function and never reconstruct endpoint strings or response shapes. Derive DTOs from NestJS's agreed OpenAPI/contract output instead of guessing field names. Keep DTOs next to the feature that owns them; move only genuinely shared API contracts to a deliberate shared-contract package.

The panel features (`features/user/api`, `features/vendor/api`) already contain placeholder endpoint wrappers and DTO sketches derived from the static sample data; reconcile them with the real NestJS contract before wiring data into the UI. Public storefront domains have no feature API modules yet because the NestJS application and its route/DTO contract have not been supplied.

### Authentication and session handling

The existing auth screens are visual templates. When connecting them:

1. Confirm NestJS login, registration, OTP, recovery, logout, and session endpoints and error DTOs.
2. Prefer an `HttpOnly`, `Secure`, appropriately `SameSite` cookie session; keep access/refresh credentials out of `localStorage` and JavaScript-readable storage.
3. Put auth requests and session types in `src/features/auth/api` and `src/features/auth/types`.
4. Verify the session server-side in protected route-group layouts or a server-side session helper. Redirect unauthorized users to `/login` with a validated local return path.
5. Make NestJS enforce role and ownership rules on every protected resource. Avoid treating a browser-supplied role as authorization.

Do not build a mock auth provider or a guessed guard before the real NestJS contract is known.

## Static-demo behavior vs. real feature state

`src/components/shared/prototype-interactions.tsx` is a compatibility layer for the existing design demo. It owns only ephemeral UI effects: dropdowns, drawers, modal visibility, sample toasts, carousel behavior, and client-side search navigation. It must not become a cart/auth/order store. Once a feature gets real data, replace its sample interaction with a feature component/service and keep the API call in that feature's `api` module.

The current page JSX is static presentation data. When API responses arrive, move repeated domain records to typed feature data/components (such as `ProductCard`, `ServiceCard`, and `ShopCard`) and pass data as props; do not copy API DTOs into markup or duplicate endpoint logic across pages.

## AI-assisted change checklist

1. Identify the route group and owning `features/<domain>` before editing.
2. Keep route files small and feature components domain-specific.
3. Reuse the existing `StorefrontShell` only for public pages; do not wrap auth/panels in it accidentally.
4. Add/adjust one route and its metadata together; preserve clean URLs and `.html` redirects only where compatibility is needed.
5. Put all Nest request paths/types in a feature API module and use `apiRequest` as transport.
6. Do not invent Nest endpoints or DTO names. Confirm them from the backend contract.
7. Keep backend authorization authoritative; use frontend role checks only for navigation/UX.
8. Run `npm run typecheck` and `npm run build` before handing off.
