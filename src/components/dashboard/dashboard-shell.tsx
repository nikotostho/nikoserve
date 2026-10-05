import type { ReactNode } from "react";
import DashboardSidebar from "./dashboard-sidebar";
import DashboardTopbar from "./dashboard-topbar";
import DashboardInteractions from "./dashboard-interactions";
import type { PanelShellConfig } from "./panel-config";

/**
 * Shared shell for every account panel (User, Vendor, and later Admin).
 * The shell is intentionally dumb: it renders the dashboard frame and defers
 * all panel-specific content to the `config` object supplied by the panel's
 * layout. See `panel-config.ts` for the contract; each panel area provides
 * its concrete config from its own feature lib.
 */
export default function DashboardShell({ config, children }: Readonly<{ config: PanelShellConfig; children: ReactNode }>) {
  return (
    <div className="dash" id="dash">
      <aside className="sidebar" id="sidebar">
        <DashboardSidebar config={config} />
      </aside>

      <div className="drawer lg:hidden" id="sidebar-drawer">
        <div className="drawer-backdrop" data-drawer-close></div>
        <div className="drawer-panel !bg-ink-950 !p-0">
          <aside className="sidebar !static !w-full">
            <DashboardSidebar config={config} />
          </aside>
        </div>
      </div>

      <div className="main">
        <DashboardTopbar config={config} />
        <div className="page">{children}</div>
        <footer className="px-5 py-4 border-t border-[#e7e9ef] bg-white flex flex-wrap items-center justify-between gap-2 text-[12px] text-ink-400">
          <p>© 2026 HaatBazar Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-brand-600">
              Terms
            </a>
            <a href="/privacy-policy" className="hover:text-brand-600">
              Privacy
            </a>
            <a href="/help-center" className="hover:text-brand-600">
              Help
            </a>
            <span>v4.2.0</span>
          </div>
        </footer>
      </div>
      <DashboardInteractions />
    </div>
  );
}
