import type { Metadata } from "next";
import CustomersPage from "@/features/vendor/pages/customers-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorCustomers;

export default function Page() {
  return <CustomersPage />;
}
