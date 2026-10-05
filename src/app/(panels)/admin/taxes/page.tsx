import type { Metadata } from "next";
import TaxesPage from "@/features/admin/pages/taxes-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminTaxes;

export default function Page() {
  return <TaxesPage />;
}
