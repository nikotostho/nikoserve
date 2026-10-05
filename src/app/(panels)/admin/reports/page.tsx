import type { Metadata } from "next";
import ReportsPage from "@/features/admin/pages/reports-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminReports;

export default function Page() {
  return <ReportsPage />;
}
