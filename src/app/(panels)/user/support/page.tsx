import type { Metadata } from "next";
import SupportPage from "@/features/user/pages/support-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userSupport;

export default function Page() {
  return <SupportPage />;
}
