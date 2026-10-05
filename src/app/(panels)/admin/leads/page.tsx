import type { Metadata } from "next";
import LeadsPage from "@/features/admin/pages/leads-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminLeads;

export default function Page() {
  return <LeadsPage />;
}
