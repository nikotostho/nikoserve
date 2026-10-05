import type { Metadata } from "next";
import AddressesPage from "@/features/user/pages/addresses-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userAddresses;

export default function Page() {
  return <AddressesPage />;
}
