import type { Metadata } from "next";
import ReviewsPage from "@/features/admin/pages/reviews-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminReviews;

export default function Page() {
  return <ReviewsPage />;
}
