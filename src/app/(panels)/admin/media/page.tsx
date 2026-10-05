import type { Metadata } from "next";
import MediaPage from "@/features/admin/pages/media-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminMedia;

export default function Page() {
  return <MediaPage />;
}
