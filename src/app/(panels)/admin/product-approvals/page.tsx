import type { Metadata } from "next";
import ProductApprovalsPage from "@/features/admin/pages/product-approvals-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminProductApprovals;

export default function Page() {
  return <ProductApprovalsPage />;
}
