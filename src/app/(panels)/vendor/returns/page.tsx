import type { Metadata } from "next";
import ReturnsPage from "@/features/vendor/pages/returns-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorReturns;

export default function Page() {
  return <ReturnsPage />;
}
