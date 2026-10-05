import type { Metadata } from "next";
import OrdersPage from "@/features/vendor/pages/orders-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorOrders;

export default function Page() {
  return <OrdersPage />;
}
