import type { Metadata } from "next";
import GiftCardsPage from "@/features/admin/pages/gift-cards-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminGiftCards;

export default function Page() {
  return <GiftCardsPage />;
}
