import type { PanelShellConfig } from "@/components/dashboard/panel-config";

/**
 * Admin panel ("/admin") shell configuration.
 * Sidebar navigation, branding, topbar actions and signed-in identity for
 * the platform Admin Console, migrated 1:1 from the original
 * `admin/*.html` templates. Passed to `<DashboardShell>` from
 * `src/app/(panels)/admin/layout.tsx`; User and Vendor provide their own
 * configs from their feature folders — do not import this file there.
 */
export const adminPanelConfig: PanelShellConfig = {
  rootPath: "/admin",
  brand: { href: "/admin/dashboard", subtitle: "Admin Panel" },
  user: { initial: "A", name: "Arif Hossain", role: "Super admin" },
  nav: [
    {
      title: "Overview",
      items: [
        {
          href: "/admin/dashboard",
          label: "Dashboard",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14 16 9"/><path d="M4 18a9 9 0 1 1 16 0"/></svg>
          ),
        },
        {
          href: "/admin/analytics",
          label: "Traffic & Analytics",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>
          ),
        },
        {
          href: "/admin/reports",
          label: "Reports Centre",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg>
          ),
        },
      ],
    },
    {
      title: "Catalog",
      items: [
        {
          href: "/admin/products",
          label: "Products",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2h12l1 5H5z"/><path d="M5 7v15h14V7"/><path d="M9 12h6"/></svg>
          ),
        },
        {
          href: "/admin/product-approvals",
          label: "Product Approvals",
          pill: "86",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          ),
        },
        {
          href: "/admin/categories",
          label: "Categories",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg>
          ),
        },
        {
          href: "/admin/brands",
          label: "Brands",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="5"/><path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"/></svg>
          ),
        },
        {
          href: "/admin/attributes",
          label: "Attributes & Specs",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h10M18 18h2"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="16" cy="18" r="2"/></svg>
          ),
        },
        {
          href: "/admin/inventory",
          label: "Stock Overview",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></svg>
          ),
        },
      ],
    },
    {
      title: "Services",
      items: [
        {
          href: "/admin/services",
          label: "Service Listings",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4.5 19 9l-9 9H5v-5z"/><path d="M13 6l5 5"/></svg>
          ),
        },
        {
          href: "/admin/service-approvals",
          label: "Listing Approvals",
          pill: "27",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          ),
        },
        {
          href: "/admin/service-categories",
          label: "Service Categories",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
          ),
        },
        {
          href: "/admin/bookings",
          label: "Bookings",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>
          ),
        },
        {
          href: "/admin/leads",
          label: "Leads & Quotes",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/></svg>
          ),
        },
      ],
    },
    {
      title: "Sales",
      items: [
        {
          href: "/admin/orders",
          label: "Orders",
          pill: "412",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 7h12l1 14H5z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>
          ),
        },
        {
          href: "/admin/shipping",
          label: "Shipments & Couriers",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"/><circle cx="6.5" cy="17.5" r="1.5"/><circle cx="17.5" cy="17.5" r="1.5"/></svg>
          ),
        },
        {
          href: "/admin/disputes",
          label: "Returns & Disputes",
          pill: "24",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21V4h9l-1 3h7l-2 6 2 6H5"/></svg>
          ),
        },
        {
          href: "/admin/abandoned-carts",
          label: "Abandoned Carts",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
          ),
        },
        {
          href: "/admin/invoices",
          label: "Invoices",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/></svg>
          ),
        },
      ],
    },
    {
      title: "Finance",
      items: [
        {
          href: "/admin/transactions",
          label: "Transactions",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/></svg>
          ),
        },
        {
          href: "/admin/payouts",
          label: "Vendor Payouts",
          pill: "18",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10 12 4l9 6"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>
          ),
        },
        {
          href: "/admin/commissions",
          label: "Commission Plans",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 19 14-14"/><circle cx="7.5" cy="7.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>
          ),
        },
        {
          href: "/admin/gift-cards",
          label: "Gift Cards & Wallets",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18M12 8v13"/><path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"/></svg>
          ),
        },
        {
          href: "/admin/taxes",
          label: "Tax & VAT",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16M7 8h10M4 20h16"/><path d="m7 8-3 6h6zM17 8l-3 6h6z"/></svg>
          ),
        },
      ],
    },
    {
      title: "People",
      items: [
        {
          href: "/admin/customers",
          label: "Customers",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"/></svg>
          ),
        },
        {
          href: "/admin/vendors",
          label: "Vendors",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h16v12H4z"/><path d="M9 8V4h6v4"/></svg>
          ),
        },
        {
          href: "/admin/vendor-approvals",
          label: "Vendor Approvals",
          pill: "31",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="m9 12 2 2 4-4"/></svg>
          ),
        },
        {
          href: "/admin/kyc",
          label: "KYC Verification",
          pill: "14",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><circle cx="8.5" cy="11" r="2.2"/><path d="M5.5 16.5a3.5 3.5 0 0 1 6 0M14 10h4M14 13.5h4"/></svg>
          ),
        },
        {
          href: "/admin/staff",
          label: "Staff & Admins",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="14" r="4"/><path d="m11 11 8-8 3 3-2 2 2 2-3 3-2-2-2 2"/></svg>
          ),
        },
        {
          href: "/admin/roles",
          label: "Roles & Permissions",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
          ),
        },
      ],
    },
    {
      title: "Marketing",
      items: [
        {
          href: "/admin/cms",
          label: "Homepage & Banners",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h14v6H5z"/><path d="M12 9v4a3 3 0 0 0 3 3v3h-6v-3a3 3 0 0 1 3-3"/></svg>
          ),
        },
        {
          href: "/admin/campaigns",
          label: "Campaigns & Flash Sales",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c4 2 6 5.5 6 10l-3 4H9l-3-4c0-4.5 2-8 6-10z"/><circle cx="12" cy="10" r="2"/><path d="M9 17l-2 4 5-2 5 2-2-4"/></svg>
          ),
        },
        {
          href: "/admin/promotions",
          label: "Coupons & Vouchers",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"/><path d="M12 7v10"/></svg>
          ),
        },
        {
          href: "/admin/ads",
          label: "Ads Manager",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10v4l12 5V5z"/><path d="M16 8.5a3.5 3.5 0 0 1 0 7M4 12H3M7 19v2"/></svg>
          ),
        },
        {
          href: "/admin/notifications",
          label: "Push & Broadcast",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>
          ),
        },
        {
          href: "/admin/seo",
          label: "SEO Manager",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18"/></svg>
          ),
        },
      ],
    },
    {
      title: "Content",
      items: [
        {
          href: "/admin/pages",
          label: "Static Pages",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg>
          ),
        },
        {
          href: "/admin/blog",
          label: "Blog & Guides",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 0-2 2z"/><path d="M8 7h7"/></svg>
          ),
        },
        {
          href: "/admin/media",
          label: "Media Library",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m4 19 5.5-5.5 4 4L17 14l3 3"/></svg>
          ),
        },
        {
          href: "/admin/faq",
          label: "Help Centre",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"/></svg>
          ),
        },
        {
          href: "/admin/email-templates",
          label: "Email & SMS Templates",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
          ),
        },
      ],
    },
    {
      title: "Moderation",
      items: [
        {
          href: "/admin/reviews",
          label: "Reviews",
          pill: "47",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"/></svg>
          ),
        },
        {
          href: "/admin/questions",
          label: "Q&A Moderation",
          pill: "18",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 1 1-3.2-6.4"/><path d="M8 12h8M8 9h5"/></svg>
          ),
        },
        {
          href: "/admin/moderation",
          label: "Reports & Abuse",
          pill: "12",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="m6 6 12 12"/></svg>
          ),
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          href: "/admin/tickets",
          label: "Support Tickets",
          pill: "63",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"/></svg>
          ),
        },
        {
          href: "/admin/chats",
          label: "Live Chat Monitor",
          pill: "4",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 1 1-3.2-6.4"/><path d="M8 12h8M8 9h5"/></svg>
          ),
        },
      ],
    },
    {
      title: "System",
      items: [
        {
          href: "/admin/settings",
          label: "Platform Settings",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>
          ),
        },
        {
          href: "/admin/locations",
          label: "Locations & Zones",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
          ),
        },
        {
          href: "/admin/payment-methods",
          label: "Payment Methods",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M16 12h2"/></svg>
          ),
        },
        {
          href: "/admin/integrations",
          label: "Integrations & API",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 18a4.5 4.5 0 0 1 .3-9 6 6 0 0 1 11.4 1.6A3.9 3.9 0 0 1 17.5 18z"/></svg>
          ),
        },
        {
          href: "/admin/activity",
          label: "Audit Log",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>
          ),
        },
        {
          href: "/admin/logs",
          label: "System Logs",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 10 2.5 2L7 14M12 15h5"/></svg>
          ),
        },
        {
          href: "/admin/system-health",
          label: "System Health",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>
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
    searchPlaceholder: "Search orders, users, vendors, products…",
    statusBadge: {
      label: "All systems normal",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="m9 12 2 2 4-4"/></svg>
      ),
    },
    notificationsHref: "/admin/notifications",
    notificationCount: "3",
    messagesHref: "/admin/chats",
    messageCount: "5",
    accountMenu: [
      {
        href: "/admin/settings",
        label: "My profile",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>
        ),
      },
      {
        href: "/admin/settings",
        label: "Settings",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>
        ),
      },
      {
        href: "/admin/activity",
        label: "Activity log",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>
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
