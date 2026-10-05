import type { Metadata } from "next";
import CampaignsPage from "@/features/admin/pages/campaigns-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminCampaigns;

export default function Page() {
  return <CampaignsPage />;
}
