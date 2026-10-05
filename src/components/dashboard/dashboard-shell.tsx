import type { ReactNode } from "react";
import DashboardSidebar from "./dashboard-sidebar";
import DashboardTopbar from "./dashboard-topbar";
import DashboardInteractions from "./dashboard-interactions";

export default function DashboardShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="dash" id="dash">
      <aside className="sidebar" id="sidebar">
        <DashboardSidebar />
      </aside>

      <div className="drawer lg:hidden" id="sidebar-drawer">
        <div className="drawer-backdrop" data-drawer-close></div>
        <div className="drawer-panel !bg-ink-950 !p-0">
          <aside className="sidebar !static !w-full">
            <DashboardSidebar />
          </aside>
        </div>
      </div>

      <div className="main">
        <DashboardTopbar />
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
