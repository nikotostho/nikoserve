import type { Metadata } from "next";
import CareersPage from "@/features/content/pages/careers-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.careers;

export default function Page() {
  return <CareersPage />;
}
