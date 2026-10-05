import type { Metadata } from "next";
import DashboardPage from "@/features/user/pages/dashboard-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userDashboard;

export default function Page() {
  return <DashboardPage />;
}
