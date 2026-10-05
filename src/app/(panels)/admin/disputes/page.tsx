import type { Metadata } from "next";
import DisputesPage from "@/features/admin/pages/disputes-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminDisputes;

export default function Page() {
  return <DisputesPage />;
}
