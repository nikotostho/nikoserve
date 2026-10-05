"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PanelShellConfig } from "./panel-config";

function isActivePath(pathname: string, href: string, rootPath: string): boolean {
  // The dashboard item also represents the panel root ("/user", "/vendor", …).
  if (href === `${rootPath}/dashboard` && (pathname === rootPath || pathname === href)) return true;
  if (pathname === href) return true;
  if (pathname.startsWith(href + "/")) return true;
  return false;
}

/**
 * Config-driven sidebar for the shared dashboard shell. Renders the panel
 * brand, nav groups, shortcuts and the signed-in identity. Also rendered
 * inside the mobile drawer, so the close button stays part of the brand row.
 */
export default function DashboardSidebar({ config }: Readonly<{ config: PanelShellConfig }>) {
  const pathname = usePathname();

  return (
    <>
      <div className="sidebar-brand">
        <Link href={config.brand.href} className="flex items-center gap-2.5">
          <span className="logo-mark">H</span>
          <span className="logo-text">
            HaatBazar<small>{config.brand.subtitle}</small>
          </span>
        </Link>
        <button className="ml-auto lg:hidden text-white/60 hover:text-white" data-drawer-close aria-label="Close menu" type="button">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="sidebar-scroll thin-scroll">
        {config.nav.map((group) => (
          <div className="nav-group" key={group.title}>
            <p className="nav-title">{group.title}</p>
            {group.items.map((item) => {
              const active = isActivePath(pathname, item.href, config.rootPath);
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
          {config.shortcuts.map((item) => (
            <Link key={item.href} href={item.href} className="sb-item">
              {item.icon}
              <span className="lbl">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="sidebar-foot">
        <div className="sb-user">
          <span className="avatar avatar-sm bg-brand-500">{config.user.initial}</span>
          <div className="meta min-w-0">
            <p className="name clamp-1">{config.user.name}</p>
            <p className="role">{config.user.role}</p>
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
