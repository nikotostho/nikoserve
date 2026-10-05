import type { Metadata } from "next";
import OrderDetailsPage from "@/features/user/pages/order-details-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userOrderDetails;

export default function Page() {
  return <OrderDetailsPage />;
}
