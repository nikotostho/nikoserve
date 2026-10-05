import type { Metadata } from "next";
import AcademyPage from "@/features/vendor/pages/academy-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorAcademy;

export default function Page() {
  return <AcademyPage />;
}
