import type { Metadata } from "next";
import PayoutsPage from "@/features/vendor/pages/payouts-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorPayouts;

export default function Page() {
  return <PayoutsPage />;
}
