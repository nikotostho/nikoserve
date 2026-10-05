import type { PanelShellConfig } from "@/components/dashboard/panel-config";

/**
 * Admin panel ("/admin") shell configuration — scaffold.
 *
 * The Admin dashboard has not been migrated yet; this minimal config keeps
 * `/admin` on the same shared shell as User and Vendor so the future Admin
 * migration only has to:
 *   1. extend `nav`/`topbar` below (copy the structure of
 *      `src/features/vendor/lib/vendor-panel-config.tsx`),
 *   2. add routes under `src/app/(panels)/admin/`,
 *   3. add feature pages under `src/features/admin/pages/`,
 *      plus `types/`, `api/` and `lib/constants.ts` next to this file,
 *   4. enforce the staff role server-side in
 *      `src/app/(panels)/admin/layout.tsx`.
 */
export const adminPanelConfig: PanelShellConfig = {
  rootPath: "/admin",
  brand: { href: "/admin", subtitle: "Admin Console" },
  user: { initial: "A", name: "Admin", role: "Administrator" },
  nav: [
    {
      title: "Overview",
      items: [
        {
          href: "/admin",
          label: "Dashboard",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 14 16 9" />
              <path d="M4 18a9 9 0 1 1 16 0" />
            </svg>
          ),
        },
      ],
    },
  ],
  shortcuts: [
    {
      href: "/",
      label: "View storefront",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" />
        </svg>
      ),
    },
    {
      href: "/help-center",
      label: "Help centre",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01" />
        </svg>
      ),
    },
    {
      href: "/login",
      label: "Sign out",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
      ),
    },
  ],
  topbar: {
    searchPlaceholder: "Search…",
    accountMenu: [
      {
        href: "/help-center",
        label: "Help centre",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01" />
          </svg>
        ),
      },
      {
        href: "/login",
        label: "Sign out",
        danger: true,
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="10" width="16" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
        ),
      },
    ],
  },
};
