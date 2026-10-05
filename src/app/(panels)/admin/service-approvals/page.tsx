import type { Metadata } from "next";
import ServiceApprovalsPage from "@/features/admin/pages/service-approvals-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminServiceApprovals;

export default function Page() {
  return <ServiceApprovalsPage />;
}
