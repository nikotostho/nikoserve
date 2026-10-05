import type { Metadata } from "next";
import ServiceCategoriesPage from "@/features/admin/pages/service-categories-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminServiceCategories;

export default function Page() {
  return <ServiceCategoriesPage />;
}
