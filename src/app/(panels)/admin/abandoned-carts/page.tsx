import type { Metadata } from "next";
import AbandonedCartsPage from "@/features/admin/pages/abandoned-carts-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminAbandonedCarts;

export default function Page() {
  return <AbandonedCartsPage />;
}
