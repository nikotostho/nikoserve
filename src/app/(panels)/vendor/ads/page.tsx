import type { Metadata } from "next";
import AdsPage from "@/features/vendor/pages/ads-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorAds;

export default function Page() {
  return <AdsPage />;
}
