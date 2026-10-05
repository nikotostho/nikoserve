import type { Metadata } from "next";
import VouchersPage from "@/features/user/pages/vouchers-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userVouchers;

export default function Page() {
  return <VouchersPage />;
}
