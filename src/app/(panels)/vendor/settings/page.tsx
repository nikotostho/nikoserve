import type { Metadata } from "next";
import SettingsPage from "@/features/vendor/pages/settings-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorSettings;

export default function Page() {
  return <SettingsPage />;
}
