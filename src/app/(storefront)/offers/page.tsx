import type { Metadata } from "next";
import OffersPage from "@/features/catalog/pages/offers-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.offers;

export default function Page() {
  return <OffersPage />;
}
