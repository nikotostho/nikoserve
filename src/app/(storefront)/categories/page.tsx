import type { Metadata } from "next";
import CategoriesPage from "@/features/catalog/pages/categories-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.categories;

export default function Page() {
  return <CategoriesPage />;
}
