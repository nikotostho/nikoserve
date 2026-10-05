import type { Metadata } from "next";
import HelpCenterPage from "@/features/content/pages/help-center-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.helpCenter;

export default function Page() {
  return <HelpCenterPage />;
}
