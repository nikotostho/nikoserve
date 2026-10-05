import type { Metadata } from "next";
import InventoryPage from "@/features/admin/pages/inventory-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminInventory;

export default function Page() {
  return <InventoryPage />;
}
