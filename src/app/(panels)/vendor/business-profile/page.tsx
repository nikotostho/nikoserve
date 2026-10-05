import type { Metadata } from "next";
import BusinessProfilePage from "@/features/vendor/pages/business-profile-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorBusinessProfile;

export default function Page() {
  return <BusinessProfilePage />;
}
