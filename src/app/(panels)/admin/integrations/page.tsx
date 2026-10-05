import type { Metadata } from "next";
import IntegrationsPage from "@/features/admin/pages/integrations-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminIntegrations;

export default function Page() {
  return <IntegrationsPage />;
}
