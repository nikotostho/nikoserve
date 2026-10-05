import type { Metadata } from "next";
import NotificationsPage from "@/features/vendor/pages/notifications-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorNotifications;

export default function Page() {
  return <NotificationsPage />;
}
