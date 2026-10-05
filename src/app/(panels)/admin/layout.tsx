import type { ReactNode } from "react";
import DashboardShell from "@/components/dashboard/dashboard-shell";

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  // TODO: verify staff/admin permission server-side.
  // NestJS must enforce every /admin endpoint.
  return <DashboardShell>{children}</DashboardShell>;
}
