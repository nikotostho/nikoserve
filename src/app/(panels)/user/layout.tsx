import type { ReactNode } from "react";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { userPanelConfig } from "@/features/user/lib/user-panel-config";

export default function UserLayout({ children }: Readonly<{ children: ReactNode }>) {
  // Future: add server-side session/role check here.
  // Redirect to /login if not authenticated.
  // Verify user role = "user" via NestJS session.
  return <DashboardShell config={userPanelConfig}>{children}</DashboardShell>;
}
