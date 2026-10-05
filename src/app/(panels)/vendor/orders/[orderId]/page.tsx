import type { Metadata } from "next";
import OrderDetailsPage from "@/features/vendor/pages/order-details-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorOrderDetails;

export default function Page() {
  return <OrderDetailsPage />;
}
