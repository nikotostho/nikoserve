import type { Metadata } from "next";
import DashboardPage from "@/features/admin/pages/dashboard-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminDashboard;

export default function Page() {
  return <DashboardPage />;
}
