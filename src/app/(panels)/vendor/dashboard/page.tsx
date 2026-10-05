import type { Metadata } from "next";
import DashboardPage from "@/features/vendor/pages/dashboard-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorDashboard;

export default function Page() {
  return <DashboardPage />;
}
