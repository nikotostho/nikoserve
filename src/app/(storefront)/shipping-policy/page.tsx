import type { Metadata } from "next";
import ShippingPolicyPage from "@/features/content/pages/shipping-policy-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.shippingPolicy;

export default function Page() {
  return <ShippingPolicyPage />;
}
