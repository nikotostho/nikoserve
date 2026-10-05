import type { Metadata } from "next";
import ShopsPage from "@/features/shops/pages/shops-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.shops;

export default function Page() {
  return <ShopsPage />;
}
