import type { Metadata } from "next";
import NotificationsPage from "@/features/admin/pages/notifications-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminNotifications;

export default function Page() {
  return <NotificationsPage />;
}
