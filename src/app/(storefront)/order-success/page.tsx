import type { Metadata } from "next";
import OrderSuccessPage from "@/features/commerce/pages/order-success-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.orderSuccess;

export default function Page() {
  return <OrderSuccessPage />;
}
