import type { Metadata } from "next";
import ServicesPage from "@/features/admin/pages/services-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminServices;

export default function Page() {
  return <ServicesPage />;
}
