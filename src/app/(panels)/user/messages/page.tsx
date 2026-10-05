import type { Metadata } from "next";
import MessagesPage from "@/features/user/pages/messages-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userMessages;

export default function Page() {
  return <MessagesPage />;
}
