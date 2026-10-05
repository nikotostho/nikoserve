import type { Metadata } from "next";
import ReportsPage from "@/features/vendor/pages/reports-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorReports;

export default function Page() {
  return <ReportsPage />;
}
