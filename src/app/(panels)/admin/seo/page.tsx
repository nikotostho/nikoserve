import type { Metadata } from "next";
import SeoPage from "@/features/admin/pages/seo-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminSeo;

export default function Page() {
  return <SeoPage />;
}
