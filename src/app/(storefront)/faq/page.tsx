import type { Metadata } from "next";
import FaqPage from "@/features/content/pages/faq-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.faq;

export default function Page() {
  return <FaqPage />;
}
