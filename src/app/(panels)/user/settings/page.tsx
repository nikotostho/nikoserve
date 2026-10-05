import type { Metadata } from "next";
import SettingsPage from "@/features/user/pages/settings-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userSettings;

export default function Page() {
  return <SettingsPage />;
}
