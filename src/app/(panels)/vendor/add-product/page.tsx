import type { Metadata } from "next";
import AddProductPage from "@/features/vendor/pages/add-product-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorAddProduct;

export default function Page() {
  return <AddProductPage />;
}
