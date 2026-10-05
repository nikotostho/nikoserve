import type { Metadata } from "next";
import TransactionsPage from "@/features/vendor/pages/transactions-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorTransactions;

export default function Page() {
  return <TransactionsPage />;
}
