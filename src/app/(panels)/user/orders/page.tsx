import type { Metadata } from "next";
import OrdersPage from "@/features/user/pages/orders-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userOrders;

export default function Page() {
  return <OrdersPage />;
}
