import type { Metadata } from "next";
import NotificationsPage from "@/features/user/pages/notifications-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userNotifications;

export default function Page() {
  return <NotificationsPage />;
}
