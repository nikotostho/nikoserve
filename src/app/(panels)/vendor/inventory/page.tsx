import type { Metadata } from "next";
import InventoryPage from "@/features/vendor/pages/inventory-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorInventory;

export default function Page() {
  return <InventoryPage />;
}
