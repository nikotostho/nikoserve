import type { Metadata } from "next";
import BookingsPage from "@/features/vendor/pages/bookings-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorBookings;

export default function Page() {
  return <BookingsPage />;
}
