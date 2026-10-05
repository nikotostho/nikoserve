import type { Metadata } from "next";
import ReviewsPage from "@/features/vendor/pages/reviews-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorReviews;

export default function Page() {
  return <ReviewsPage />;
}
