import type { Metadata } from "next";
import SitemapPage from "@/features/content/pages/sitemap-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.sitemap;

export default function Page() {
  return <SitemapPage />;
}
