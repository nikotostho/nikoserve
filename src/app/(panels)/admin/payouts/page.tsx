import type { Metadata } from "next";
import PayoutsPage from "@/features/admin/pages/payouts-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminPayouts;

export default function Page() {
  return <PayoutsPage />;
}
