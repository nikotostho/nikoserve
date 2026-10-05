import type { Metadata } from "next";
import InvoicesPage from "@/features/vendor/pages/invoices-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorInvoices;

export default function Page() {
  return <InvoicesPage />;
}
