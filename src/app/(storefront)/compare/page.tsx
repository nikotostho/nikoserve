import type { Metadata } from "next";
import ComparePage from "@/features/commerce/pages/compare-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.compare;

export default function Page() {
  return <ComparePage />;
}
