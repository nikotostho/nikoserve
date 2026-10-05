import type { Metadata } from "next";
import LocationsPage from "@/features/admin/pages/locations-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminLocations;

export default function Page() {
  return <LocationsPage />;
}
