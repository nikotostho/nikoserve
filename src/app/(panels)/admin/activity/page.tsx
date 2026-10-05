import type { Metadata } from "next";
import ActivityPage from "@/features/admin/pages/activity-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminActivity;

export default function Page() {
  return <ActivityPage />;
}
