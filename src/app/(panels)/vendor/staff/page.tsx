import type { Metadata } from "next";
import StaffPage from "@/features/vendor/pages/staff-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorStaff;

export default function Page() {
  return <StaffPage />;
}
