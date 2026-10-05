import type { Metadata } from "next";
import AnalyticsPage from "@/features/vendor/pages/analytics-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorAnalytics;

export default function Page() {
  return <AnalyticsPage />;
}
