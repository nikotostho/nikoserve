import type { Metadata } from "next";
import AddServicePage from "@/features/vendor/pages/add-service-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorAddService;

export default function Page() {
  return <AddServicePage />;
}
