import type { Metadata } from "next";
import ServicesPage from "@/features/services/pages/services-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.services;

export default function Page() {
  return <ServicesPage />;
}
