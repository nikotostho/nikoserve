import type { Metadata } from "next";
import FaqPage from "@/features/admin/pages/faq-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminFaq;

export default function Page() {
  return <FaqPage />;
}
