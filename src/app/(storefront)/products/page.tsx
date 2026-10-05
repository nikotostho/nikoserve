import type { Metadata } from "next";
import ProductsPage from "@/features/catalog/pages/products-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.products;

export default function Page() {
  return <ProductsPage />;
}
