import type { PanelShellConfig } from "@/components/dashboard/panel-config";

/**
 * Vendor panel ("/vendor") shell configuration.
 * Navigation, branding, topbar actions and identity for the Seller Centre.
 * Passed to `<DashboardShell>` from
 * `src/app/(panels)/vendor/layout.tsx`. Mirrors the original `vendor/*.html`
 * sidebar/topbar. User and Admin provide their own configs from their
 * feature folders — do not import this file there.
 */
export const vendorPanelConfig: PanelShellConfig = {
  rootPath: "/vendor",
  brand: { href: "/vendor/dashboard", subtitle: "Seller Centre" },
  user: { initial: "R", name: "Rahim Electric", role: "Verified Pro seller" },
  nav: [
    {
      title: "Overview",
      items: [
        {
          href: "/vendor/dashboard",
          label: "Dashboard",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14 16 9"/><path d="M4 18a9 9 0 1 1 16 0"/></svg>
          ),
        },
        {
          href: "/vendor/analytics",
          label: "Analytics & Insights",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>
          ),
        },
      ],
    },
    {
      title: "Product Business",
      items: [
        {
          href: "/vendor/products",
          label: "All Products",
          pill: "248",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2h12l1 5H5z"/><path d="M5 7v15h14V7"/><path d="M9 12h6"/></svg>
          ),
        },
        {
          href: "/vendor/add-product",
          label: "Add New Product",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          ),
        },
        {
          href: "/vendor/inventory",
          label: "Inventory & Stock",
          pill: "6",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg>
          ),
        },
        {
          href: "/vendor/orders",
          label: "Orders",
          pill: "32",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 7h12l1 14H5z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>
          ),
        },
        {
          href: "/vendor/returns",
          label: "Returns & Refunds",
          pill: "4",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h9a7 7 0 0 1 0 14H8"/></svg>
          ),
        },
        {
          href: "/vendor/shipping",
          label: "Shipping & Couriers",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"/><circle cx="6.5" cy="17.5" r="1.5"/><circle cx="17.5" cy="17.5" r="1.5"/></svg>
          ),
        },
        {
          href: "/vendor/questions",
          label: "Product Q&A",
          pill: "9",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"/></svg>
          ),
        },
      ],
    },
    {
      title: "Service Business",
      items: [
        {
          href: "/vendor/services",
          label: "Service Listings",
          pill: "18",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4.5 19 9l-9 9H5v-5z"/><path d="M13 6l5 5"/></svg>
          ),
        },
        {
          href: "/vendor/add-service",
          label: "Add New Service",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          ),
        },
        {
          href: "/vendor/leads",
          label: "Leads & Enquiries",
          pill: "12",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/></svg>
          ),
        },
        {
          href: "/vendor/bookings",
          label: "Bookings",
          pill: "7",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>
          ),
        },
        {
          href: "/vendor/business-profile",
          label: "Business Profile",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
          ),
        },
      ],
    },
    {
      title: "Customers",
      items: [
        {
          href: "/vendor/customers",
          label: "My Customers",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"/></svg>
          ),
        },
        {
          href: "/vendor/reviews",
          label: "Reviews & Ratings",
          pill: "3",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"/></svg>
          ),
        },
        {
          href: "/vendor/messages",
          label: "Messages",
          pill: "5",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 1 1-3.2-6.4"/><path d="M8 12h8M8 9h5"/></svg>
          ),
        },
      ],
    },
    {
      title: "Growth",
      items: [
        {
          href: "/vendor/promotions",
          label: "Promotions & Vouchers",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"/><path d="M12 7v10"/></svg>
          ),
        },
        {
          href: "/vendor/ads",
          label: "Ads & Boost",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"/></svg>
          ),
        },
        {
          href: "/vendor/academy",
          label: "Seller Academy",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-4 9 4-9 4z"/><path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4"/></svg>
          ),
        },
      ],
    },
    {
      title: "Finance",
      items: [
        {
          href: "/vendor/payouts",
          label: "Payouts & Balance",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10 12 4l9 6"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>
          ),
        },
        {
          href: "/vendor/transactions",
          label: "Transactions",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/></svg>
          ),
        },
        {
          href: "/vendor/invoices",
          label: "Invoices & Tax",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/></svg>
          ),
        },
        {
          href: "/vendor/reports",
          label: "Reports & Statements",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg>
          ),
        },
      ],
    },
    {
      title: "My Store",
      items: [
        {
          href: "/vendor/shop-profile",
          label: "Shop Profile",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h16v12H4z"/><path d="M9 8V4h6v4"/></svg>
          ),
        },
        {
          href: "/vendor/staff",
          label: "Staff & Permissions",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="14" r="4"/><path d="m11 11 8-8 3 3-2 2 2 2-3 3-2-2-2 2"/></svg>
          ),
        },
        {
          href: "/vendor/documents",
          label: "Verification & KYC",
          pill: "1",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><circle cx="8.5" cy="11" r="2.2"/><path d="M5.5 16.5a3.5 3.5 0 0 1 6 0M14 10h4M14 13.5h4"/></svg>
          ),
        },
        {
          href: "/vendor/subscription",
          label: "Plan & Billing",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="5"/><path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"/></svg>
          ),
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          href: "/vendor/notifications",
          label: "Notifications",
          pill: "4",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>
          ),
        },
        {
          href: "/vendor/settings",
          label: "Settings",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>
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
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18"/></svg>
      ),
    },
    {
      href: "/help-center",
      label: "Help centre",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"/></svg>
      ),
    },
    {
      href: "/login",
      label: "Sign out",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
      ),
    },
  ],
  topbar: {
    searchPlaceholder: "Search products, orders, leads…",
    primaryAction: {
      href: "/vendor/add-product",
      label: "Add product",
      variant: "primary",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
      ),
    },
    notificationsHref: "/vendor/notifications",
    notificationCount: "3",
    messagesHref: "/vendor/messages",
    messageCount: "5",
    accountMenu: [
      {
        href: "/vendor/settings",
        label: "My profile",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>
        ),
      },
      {
        href: "/vendor/settings",
        label: "Settings",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>
        ),
      },
      {
        href: "/vendor/payouts",
        label: "Balance — ৳1,84,320",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10 12 4l9 6"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>
        ),
      },
      {
        href: "/vendor/shop-profile",
        label: "My shop page",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h16v12H4z"/><path d="M9 8V4h6v4"/></svg>
        ),
      },
      {
        href: "/help-center",
        label: "Help centre",
        separatorAbove: true,
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"/></svg>
        ),
      },
      {
        href: "/login",
        label: "Sign out",
        danger: true,
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
        ),
      },
    ],
  },
};
