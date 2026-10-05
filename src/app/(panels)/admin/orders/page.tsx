import type { Metadata } from "next";
import OrdersPage from "@/features/admin/pages/orders-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminOrders;

export default function Page() {
  return <OrdersPage />;
}
