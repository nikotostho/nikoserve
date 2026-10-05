import type { Metadata } from "next";
import DocumentsPage from "@/features/vendor/pages/documents-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorDocuments;

export default function Page() {
  return <DocumentsPage />;
}
