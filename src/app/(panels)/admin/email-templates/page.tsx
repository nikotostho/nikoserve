import type { Metadata } from "next";
import EmailTemplatesPage from "@/features/admin/pages/email-templates-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminEmailTemplates;

export default function Page() {
  return <EmailTemplatesPage />;
}
