import type { Metadata } from "next";
import CommissionsPage from "@/features/admin/pages/commissions-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminCommissions;

export default function Page() {
  return <CommissionsPage />;
}
