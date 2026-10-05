import type { Metadata } from "next";
import SystemHealthPage from "@/features/admin/pages/system-health-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminSystemHealth;

export default function Page() {
  return <SystemHealthPage />;
}
