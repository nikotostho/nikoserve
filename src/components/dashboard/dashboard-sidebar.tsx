"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  pill?: string;
  icon: React.ReactNode;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const groups: NavGroup[] = [
  {
    title: "Overview",
    items: [
      {
        href: "/user/dashboard",
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
  {
    title: "Shopping",
    items: [
      {
        href: "/user/orders",
        label: "My Orders",
        pill: "8",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2h12l1 5H5z" />
            <path d="M5 7v15h14V7" />
            <path d="M9 12h6" />
          </svg>
        ),
      },
      {
        href: "/user/returns",
        label: "Returns & Cancellations",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 14 4 9l5-5" />
            <path d="M4 9h9a7 7 0 0 1 0 14H8" />
          </svg>
        ),
      },
      {
        href: "/user/bookings",
        label: "Service Bookings",
        pill: "2",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 4.5 19 9l-9 9H5v-5z" />
            <path d="M13 6l5 5" />
          </svg>
        ),
      },
      {
        href: "/user/wishlist",
        label: "Wishlist",
        pill: "14",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z" />
          </svg>
        ),
      },
      {
        href: "/user/reviews",
        label: "My Reviews",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Payments",
    items: [
      {
        href: "/user/wallet",
        label: "Wallet & Payments",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="6" width="18" height="12" rx="2" />
            <path d="M16 12h2" />
          </svg>
        ),
      },
      {
        href: "/user/vouchers",
        label: "Vouchers & Rewards",
        pill: "5",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z" />
            <path d="M12 7v10" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        href: "/user/addresses",
        label: "Address Book",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
        ),
      },
      {
        href: "/user/profile",
        label: "My Profile",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 21a7 7 0 0 1 14 0" />
          </svg>
        ),
      },
      {
        href: "/user/notifications",
        label: "Notifications",
        pill: "3",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6" />
            <path d="M10 19a2 2 0 0 0 4 0" />
          </svg>
        ),
      },
      {
        href: "/user/messages",
        label: "Messages",
        pill: "2",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a8 8 0 1 1-3.2-6.4" />
            <path d="M8 12h8M8 9h5" />
          </svg>
        ),
      },
      {
        href: "/user/support",
        label: "Support Tickets",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01" />
          </svg>
        ),
      },
      {
        href: "/user/settings",
        label: "Settings",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3.2" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
          </svg>
        ),
      },
    ],
  },
];

const shortcutItems: NavItem[] = [
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
];

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/user/dashboard" && (pathname === "/user" || pathname === "/user/dashboard")) return true;
  if (href === "/user/orders" && pathname.startsWith("/user/orders")) return true;
  // exact match for others, plus prefix for nested?
  if (pathname === href) return true;
  if (pathname.startsWith(href + "/")) return true;
  return false;
}

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className="sidebar-brand">
        <Link href="/user/dashboard" className="flex items-center gap-2.5">
          <span className="logo-mark">H</span>
          <span className="logo-text">
            HaatBazar<small>My Account</small>
          </span>
        </Link>
        <button className="ml-auto lg:hidden text-white/60 hover:text-white" data-drawer-close aria-label="Close menu" type="button">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="sidebar-scroll thin-scroll">
        {groups.map((group) => (
          <div className="nav-group" key={group.title}>
            <p className="nav-title">{group.title}</p>
            {group.items.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link key={item.href} href={item.href} className={`sb-item ${active ? "is-active" : ""}`}>
                  {item.icon}
                  <span className="lbl">{item.label}</span>
                  {item.pill ? <span className="pill">{item.pill}</span> : null}
                </Link>
              );
            })}
          </div>
        ))}

        <div className="nav-group">
          <p className="nav-title">Shortcuts</p>
          {shortcutItems.map((item) => (
            <Link key={item.href} href={item.href} className="sb-item">
              {item.icon}
              <span className="lbl">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="sidebar-foot">
        <div className="sb-user">
          <span className="avatar avatar-sm bg-brand-500">N</span>
          <div className="meta min-w-0">
            <p className="name clamp-1">Nusrat Jahan</p>
            <p className="role">Gold member</p>
          </div>
          <button className="meta ml-auto text-white/40 hover:text-white" type="button" aria-label="Account menu">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
