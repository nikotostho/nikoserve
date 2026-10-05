import type { Metadata } from "next";
import ServiceDetailsPage from "@/features/services/pages/service-details-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.serviceDetails;

export default function Page() {
  return <ServiceDetailsPage />;
}
