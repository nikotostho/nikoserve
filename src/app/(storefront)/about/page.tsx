import type { Metadata } from "next";
import AboutPage from "@/features/content/pages/about-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.about;

export default function Page() {
  return <AboutPage />;
}
