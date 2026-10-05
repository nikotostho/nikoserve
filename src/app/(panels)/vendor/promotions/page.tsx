import type { Metadata } from "next";
import PromotionsPage from "@/features/vendor/pages/promotions-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorPromotions;

export default function Page() {
  return <PromotionsPage />;
}
