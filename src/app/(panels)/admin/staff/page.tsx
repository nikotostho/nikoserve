import type { Metadata } from "next";
import StaffPage from "@/features/admin/pages/staff-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminStaff;

export default function Page() {
  return <StaffPage />;
}
