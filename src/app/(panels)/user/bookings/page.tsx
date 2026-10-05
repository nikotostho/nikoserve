import type { Metadata } from "next";
import BookingsPage from "@/features/user/pages/bookings-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userBookings;

export default function Page() {
  return <BookingsPage />;
}
