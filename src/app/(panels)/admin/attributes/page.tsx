import type { Metadata } from "next";
import AttributesPage from "@/features/admin/pages/attributes-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminAttributes;

export default function Page() {
  return <AttributesPage />;
}
