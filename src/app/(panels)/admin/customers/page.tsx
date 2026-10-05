import type { Metadata } from "next";
import CustomersPage from "@/features/admin/pages/customers-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminCustomers;

export default function Page() {
  return <CustomersPage />;
}
