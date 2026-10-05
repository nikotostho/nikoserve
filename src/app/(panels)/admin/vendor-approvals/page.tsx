import type { Metadata } from "next";
import VendorApprovalsPage from "@/features/admin/pages/vendor-approvals-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminVendorApprovals;

export default function Page() {
  return <VendorApprovalsPage />;
}
