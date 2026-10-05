import type { ReactNode } from "react";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { adminPanelConfig } from "@/features/admin/lib/admin-panel-config";

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  // TODO: verify staff/admin permission server-side.
  // NestJS must enforce every /admin endpoint.
  return <DashboardShell config={adminPanelConfig}>{children}</DashboardShell>;
}
