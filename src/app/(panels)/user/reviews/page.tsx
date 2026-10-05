import type { Metadata } from "next";
import ReviewsPage from "@/features/user/pages/reviews-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userReviews;

export default function Page() {
  return <ReviewsPage />;
}
