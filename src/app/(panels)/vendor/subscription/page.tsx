import type { Metadata } from "next";
import SubscriptionPage from "@/features/vendor/pages/subscription-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorSubscription;

export default function Page() {
  return <SubscriptionPage />;
}
