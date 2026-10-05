import type { Metadata } from "next";
import InvoicesPage from "@/features/admin/pages/invoices-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminInvoices;

export default function Page() {
  return <InvoicesPage />;
}
