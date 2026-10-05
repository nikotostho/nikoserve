import type { Metadata } from "next";
import MessagesPage from "@/features/vendor/pages/messages-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorMessages;

export default function Page() {
  return <MessagesPage />;
}
