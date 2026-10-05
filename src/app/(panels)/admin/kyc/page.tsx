import type { Metadata } from "next";
import KycPage from "@/features/admin/pages/kyc-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminKyc;

export default function Page() {
  return <KycPage />;
}
