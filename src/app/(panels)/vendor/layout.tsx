import type { ReactNode } from "react";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { vendorPanelConfig } from "@/features/vendor/lib/vendor-panel-config";

export default function VendorLayout({ children }: Readonly<{ children: ReactNode }>) {
  // TODO: verify session and that user has vendor/provider role.
  // Redirect to /login or /become-seller if not authorized.
  // NestJS must still enforce role on every /vendor API.
  return <DashboardShell config={vendorPanelConfig}>{children}</DashboardShell>;
}
