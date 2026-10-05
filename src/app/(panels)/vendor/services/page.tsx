import type { Metadata } from "next";
import ServicesPage from "@/features/vendor/pages/services-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorServices;

export default function Page() {
  return <ServicesPage />;
}
