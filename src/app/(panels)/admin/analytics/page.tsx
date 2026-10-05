import type { Metadata } from "next";
import AnalyticsPage from "@/features/admin/pages/analytics-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminAnalytics;

export default function Page() {
  return <AnalyticsPage />;
}
