import type { Metadata } from "next";
import VendorsPage from "@/features/admin/pages/vendors-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminVendors;

export default function Page() {
  return <VendorsPage />;
}
