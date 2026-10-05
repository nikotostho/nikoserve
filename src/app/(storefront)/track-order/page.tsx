import type { Metadata } from "next";
import TrackOrderPage from "@/features/commerce/pages/track-order-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.trackOrder;

export default function Page() {
  return <TrackOrderPage />;
}
