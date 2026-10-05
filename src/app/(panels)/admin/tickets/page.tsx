import type { Metadata } from "next";
import TicketsPage from "@/features/admin/pages/tickets-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminTickets;

export default function Page() {
  return <TicketsPage />;
}
