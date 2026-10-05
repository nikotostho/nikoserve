import type { Metadata } from "next";
import ChatsPage from "@/features/admin/pages/chats-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminChats;

export default function Page() {
  return <ChatsPage />;
}
