import type { Metadata } from "next";
import TermsPage from "@/features/content/pages/terms-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.terms;

export default function Page() {
  return <TermsPage />;
}
