import type { Metadata } from "next";
import CategoriesPage from "@/features/admin/pages/categories-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminCategories;

export default function Page() {
  return <CategoriesPage />;
}
