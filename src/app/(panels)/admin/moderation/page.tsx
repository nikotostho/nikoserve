import type { Metadata } from "next";
import ModerationPage from "@/features/admin/pages/moderation-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminModeration;

export default function Page() {
  return <ModerationPage />;
}
