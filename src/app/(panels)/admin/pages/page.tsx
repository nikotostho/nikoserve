import type { Metadata } from "next";
import PagesPage from "@/features/admin/pages/pages-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminPages;

export default function Page() {
  return <PagesPage />;
}
