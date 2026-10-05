import type { Metadata } from "next";
import SettingsPage from "@/features/admin/pages/settings-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminSettings;

export default function Page() {
  return <SettingsPage />;
}
