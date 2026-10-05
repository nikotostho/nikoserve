# HaatBazar storefront

HaatBazar is a Next.js App Router conversion of the existing storefront and account-panel templates. It keeps the original visual system and page layouts, replaces `.html` navigation with file-based routes, and shares the site chrome across public pages and the User, Vendor and Admin dashboards.

## Local development

Requirements: Node.js 20.9 or later and npm.

```bash
npm install
npm run dev
```

Useful checks and production commands:

```bash
npm run typecheck
npm run build
npm run start
```

The dev server binds to `0.0.0.0` for preview/container environments. Copy `.env.example` to `.env.local` when configuring a NestJS API.

## Current scope

- Storefront, product/service discovery, cart/checkout, content, seller/provider onboarding, and account-entry pages are included.
- `/login`, `/register`, OTP, and password pages are presentation templates. There is no NestJS server or real authentication/cart/order persistence in this repository yet.
- The `/user`, `/vendor` and `/admin` dashboards render the original panel pages through a shared shell (`src/components/dashboard`).
- `PrototypeInteractions` preserves lightweight browser-only sample interactions (menus, dialogs, quantity controls, search navigation, toasts, etc.). It is not a source of truth for customer, seller, provider, or admin data.
- Old public `.html` URLs permanently redirect to their clean Next.js route where a matching public page exists. Unknown URLs use the shared Next.js not-found page.

## Architecture

See [docs/architecture.md](docs/architecture.md) for the route groups, feature boundaries, NestJS integration contract, auth/security guidance, and the extension points for the User, Vendor, and Admin panels.
