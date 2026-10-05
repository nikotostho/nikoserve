import type { Metadata } from "next";
import AdsPage from "@/features/admin/pages/ads-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminAds;

export default function Page() {
  return <AdsPage />;
}
