import type { Metadata } from "next";
import BrandsPage from "@/features/catalog/pages/brands-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.brands;

export default function Page() {
  return <BrandsPage />;
}
