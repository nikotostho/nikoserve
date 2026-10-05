import type { Metadata } from "next";
import LogsPage from "@/features/admin/pages/logs-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminLogs;

export default function Page() {
  return <LogsPage />;
}
