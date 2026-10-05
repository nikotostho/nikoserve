import type { Metadata } from "next";
import CmsPage from "@/features/admin/pages/cms-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminCms;

export default function Page() {
  return <CmsPage />;
}
