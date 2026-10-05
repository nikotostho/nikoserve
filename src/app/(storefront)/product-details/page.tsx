import type { Metadata } from "next";
import ProductDetailsPage from "@/features/catalog/pages/product-details-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.productDetails;

export default function Page() {
  return <ProductDetailsPage />;
}
