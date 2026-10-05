import type { Metadata } from "next";
import ContactPage from "@/features/content/pages/contact-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.contact;

export default function Page() {
  return <ContactPage />;
}
