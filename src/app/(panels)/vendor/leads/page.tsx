import type { Metadata } from "next";
import LeadsPage from "@/features/vendor/pages/leads-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorLeads;

export default function Page() {
  return <LeadsPage />;
}
