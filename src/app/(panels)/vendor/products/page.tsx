import type { Metadata } from "next";
import ProductsPage from "@/features/vendor/pages/products-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorProducts;

export default function Page() {
  return <ProductsPage />;
}
