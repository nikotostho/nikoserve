import type { Metadata } from "next";
import SearchPage from "@/features/catalog/pages/search-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.search;

export default function Page() {
  return <SearchPage />;
}
