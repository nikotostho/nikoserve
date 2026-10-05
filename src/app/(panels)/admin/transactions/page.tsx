import type { Metadata } from "next";
import TransactionsPage from "@/features/admin/pages/transactions-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminTransactions;

export default function Page() {
  return <TransactionsPage />;
}
