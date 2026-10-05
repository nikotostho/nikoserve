import type { Metadata } from "next";
import ShippingPage from "@/features/vendor/pages/shipping-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorShipping;

export default function Page() {
  return <ShippingPage />;
}
