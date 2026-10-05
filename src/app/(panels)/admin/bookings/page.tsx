import type { Metadata } from "next";
import BookingsPage from "@/features/admin/pages/bookings-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminBookings;

export default function Page() {
  return <BookingsPage />;
}
