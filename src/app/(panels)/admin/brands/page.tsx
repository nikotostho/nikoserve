import type { Metadata } from "next";
import BrandsPage from "@/features/admin/pages/brands-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminBrands;

export default function Page() {
  return <BrandsPage />;
}
