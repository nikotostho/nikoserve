import type { Metadata } from "next";
import ShippingPage from "@/features/admin/pages/shipping-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminShipping;

export default function Page() {
  return <ShippingPage />;
}
