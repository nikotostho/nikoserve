# Admin Panel (`/admin`)

Platform operations dashboard ("Admin Console") migrated from `admin/*.html`
templates. Covers marketplace approvals, catalog and service moderation, sales
and finance operations, people/KYC, marketing content, support and system
health.

## Routes

| URL | Feature page | Purpose |
| --- | --- | --- |
| `/admin` | redirect → `/admin/dashboard` | Entry point |
| `/admin/abandoned-carts` | `features/admin/pages/abandoned-carts-page.tsx` | Recover lost revenue with reminders, vouchers and price-drop alerts. |
| `/admin/activity` | `features/admin/pages/activity-page.tsx` | Every action taken by admins, staff, vendors and the system — immutable and searchable. |
| `/admin/ads` | `features/admin/pages/ads-page.tsx` | Sponsored listings, banner inventory, vendor ad campaigns and ad revenue. |
| `/admin/analytics` | `features/admin/pages/analytics-page.tsx` | Visitors, conversion funnel, cohorts and marketplace performance. |
| `/admin/attributes` | `features/admin/pages/attributes-page.tsx` | Variant options, filters and specification templates used by listings. |
| `/admin/blog` | `features/admin/pages/blog-page.tsx` | Buying guides, service tips, news posts, categories and author management. |
| `/admin/bookings` | `features/admin/pages/bookings-page.tsx` | All appointments and service bookings made through the platform. |
| `/admin/brands` | `features/admin/pages/brands-page.tsx` | Brand directory, authorisation control and brand store pages. |
| `/admin/campaigns` | `features/admin/pages/campaigns-page.tsx` | Plan festival campaigns, flash sales, vendor participation and campaign budgets. |
| `/admin/categories` | `features/admin/pages/categories-page.tsx` | Product category tree, commission rates and homepage placement. |
| `/admin/chats` | `features/admin/pages/chats-page.tsx` | Monitor and join live conversations between customers, vendors and agents. |
| `/admin/cms` | `features/admin/pages/cms-page.tsx` | Control every block on the storefront home page, sliders, banners and placements. |
| `/admin/commissions` | `features/admin/pages/commissions-page.tsx` | Commission rules, subscription plans, lead pricing and vendor-specific overrides. |
| `/admin/customers` | `features/admin/pages/customers-page.tsx` | All registered buyers with orders, wallet, loyalty tier and risk signals. |
| `/admin/dashboard` | `features/admin/pages/dashboard-page.tsx` | Live overview of marketplace performance, approvals and system health. |
| `/admin/disputes` | `features/admin/pages/disputes-page.tsx` | Return requests, refund claims and buyer–seller disputes needing resolution. |
| `/admin/email-templates` | `features/admin/pages/email-templates-page.tsx` | Every transactional message sent by the platform, with variables and previews. |
| `/admin/faq` | `features/admin/pages/faq-page.tsx` | FAQ articles, categories, ordering and helpfulness feedback. |
| `/admin/gift-cards` | `features/admin/pages/gift-cards-page.tsx` | Issue gift cards, manage customer wallet balances and loyalty points. |
| `/admin/integrations` | `features/admin/pages/integrations-page.tsx` | Third-party services, couriers, SMS, analytics, webhooks and API keys. |
| `/admin/inventory` | `features/admin/pages/inventory-page.tsx` | Marketplace-wide stock levels, low-stock risks and price change monitoring. |
| `/admin/invoices` | `features/admin/pages/invoices-page.tsx` | Customer invoices, vendor commission invoices and subscription bills. |
| `/admin/kyc` | `features/admin/pages/kyc-page.tsx` | Identity, business and bank verification for vendors and high-value customers. |
| `/admin/leads` | `features/admin/pages/leads-page.tsx` | Customer enquiries sent to service providers, with quality and billing control. |
| `/admin/locations` | `features/admin/pages/locations-page.tsx` | Divisions, districts, cities, areas, delivery zones and service coverage. |
| `/admin/logs` | `features/admin/pages/logs-page.tsx` | Application errors, background jobs, emails, SMS, webhooks and API traffic. |
| `/admin/media` | `features/admin/pages/media-page.tsx` | All images, videos and documents uploaded by staff and vendors. |
| `/admin/moderation` | `features/admin/pages/moderation-page.tsx` | User reports, counterfeit complaints, prohibited items and enforcement actions. |
| `/admin/notifications` | `features/admin/pages/notifications-page.tsx` | Send push, SMS, email and in-app messages to customers, vendors and staff. |
| `/admin/orders` | `features/admin/pages/orders-page.tsx` | All marketplace orders with payment, fulfilment and dispute status. |
| `/admin/pages` | `features/admin/pages/pages-page.tsx` | All policy, informational and landing pages on the storefront. |
| `/admin/payment-methods` | `features/admin/pages/payment-methods-page.tsx` | Gateways, mobile wallets, cards, COD, EMI and payout channels. |
| `/admin/payouts` | `features/admin/pages/payouts-page.tsx` | Settlement cycles, payout approvals and bank disbursement files. |
| `/admin/product-approvals` | `features/admin/pages/product-approvals-page.tsx` | Review new and edited listings before they go live. |
| `/admin/products` | `features/admin/pages/products-page.tsx` | Every product listing across all vendors on the marketplace. |
| `/admin/promotions` | `features/admin/pages/promotions-page.tsx` | Platform-funded coupons, vendor coupons, free-delivery codes and referral rewards. |
| `/admin/questions` | `features/admin/pages/questions-page.tsx` | Customer questions on products and services, vendor answers and community replies. |
| `/admin/reports` | `features/admin/pages/reports-page.tsx` | Generate, schedule and download every platform report. |
| `/admin/reviews` | `features/admin/pages/reviews-page.tsx` | Product and service reviews, ratings, photos, replies and fake-review detection. |
| `/admin/roles` | `features/admin/pages/roles-page.tsx` | Granular access control for every admin module and action. |
| `/admin/seo` | `features/admin/pages/seo-page.tsx` | Meta tags, URL slugs, sitemaps, redirects, schema markup and search performance. |
| `/admin/service-approvals` | `features/admin/pages/service-approvals-page.tsx` | Approve new listings, verification documents and business ownership claims. |
| `/admin/service-categories` | `features/admin/pages/service-categories-page.tsx` | Directory category tree, lead pricing and city-wise availability. |
| `/admin/services` | `features/admin/pages/services-page.tsx` | All directory listings from service providers across Bangladesh. |
| `/admin/settings` | `features/admin/pages/settings-page.tsx` | Global configuration for the marketplace, storefront, orders, services and security. |
| `/admin/shipping` | `features/admin/pages/shipping-page.tsx` | Courier partners, delivery zones, rates and shipment performance. |
| `/admin/staff` | `features/admin/pages/staff-page.tsx` | Platform team members, their roles, departments and access activity. |
| `/admin/system-health` | `features/admin/pages/system-health-page.tsx` | Uptime, performance, infrastructure, backups and incident status. |
| `/admin/taxes` | `features/admin/pages/taxes-page.tsx` | VAT rates, tax classes, HS codes, TDS/VDS rules and NBR reporting. |
| `/admin/tickets` | `features/admin/pages/tickets-page.tsx` | Customer and vendor tickets across orders, bookings, payments and accounts. |
| `/admin/transactions` | `features/admin/pages/transactions-page.tsx` | Every money movement — payments, refunds, payouts, fees and wallet activity. |
| `/admin/vendor-approvals` | `features/admin/pages/vendor-approvals-page.tsx` | Review seller and service-provider applications before they go live. |
| `/admin/vendors` | `features/admin/pages/vendors-page.tsx` | All product sellers and service providers with performance, plan and compliance data. |

All 53 routes share `src/app/(panels)/admin/layout.tsx` →
`src/components/dashboard/dashboard-shell.tsx` with
`features/admin/lib/admin-panel-config.tsx` (11 sidebar groups + shortcuts).

## Folder map

```
src/app/(panels)/admin/         # App Router: URL → layout + page files (thin)
src/features/admin/
  pages/                        # 53 migrated page components (presentation, static data)
  lib/admin-panel-config.tsx    # Sidebar nav, brand, topbar & identity for the shell
  lib/constants.ts              # Panel-specific constants (statuses, nav badges)
  types/admin.ts                # DTO placeholders — replace with OpenAPI output
  api/admin-api.ts              # apiRequest wrappers — UI never calls fetch directly
src/components/dashboard/       # Shared shell for User / Vendor / Admin
  dashboard-shell.tsx           # Frame (sidebar + topbar + drawer + footer)
  dashboard-sidebar.tsx         # Config-driven navigation with active state
  dashboard-topbar.tsx          # Config-driven search, actions, status badge & flyouts
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
- Feature API functions in `features/admin/api` wrap `apiRequest<T>`.
- Types in `features/admin/types` are placeholders derived from the static HTML
  sample data — replace them with the real NestJS DTOs when the contract is
  confirmed.
- `src/app/(panels)/admin/layout.tsx` may add a server-side session check and
  redirect to `/login?next=/admin/...`, but NestJS must enforce the staff role,
  permissions and every `/admin` endpoint independently.

## Preserving the original panel

The page components are a 1:1 JSX translation of the original templates: only
attribute names change (`class` → `className`, `stroke-width` → `strokeWidth`,
`value` → `defaultValue`, `checked` → `defaultChecked`, inline `style` objects,
HTML entities/`{}` escaping). Links are rewritten to clean routes
(`dashboard.html` → `/admin/dashboard`, `../help-center.html` → `/help-center`).

Prototype interactions (modals, dropdowns, tabs, toasts, bulk row selection,
repeatable form rows, printing…) are handled globally by
`src/components/shared/prototype-interactions.tsx` +
`dashboard-interactions.tsx` through `data-*` hooks. Do not turn them into a
data store and do not add `onClick` handlers for these behaviours.

## Static templates vs. real data

Current pages keep the original HTML sample content as typed JSX. When API
responses arrive, pass records as props from a server component or a client
fetch via the feature API module; do not copy endpoint logic into pages.
