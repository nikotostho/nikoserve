import type { Metadata } from "next";
import ProductsPage from "@/features/admin/pages/products-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminProducts;

export default function Page() {
  return <ProductsPage />;
}
