import type { Metadata } from "next";
import CheckoutPage from "@/features/commerce/pages/checkout-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.checkout;

export default function Page() {
  return <CheckoutPage />;
}
