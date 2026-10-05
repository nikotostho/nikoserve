import type { Metadata } from "next";
import PromotionsPage from "@/features/admin/pages/promotions-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminPromotions;

export default function Page() {
  return <PromotionsPage />;
}
