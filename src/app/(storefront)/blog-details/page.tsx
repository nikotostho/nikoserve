import type { Metadata } from "next";
import BlogDetailsPage from "@/features/content/pages/blog-details-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.blogDetails;

export default function Page() {
  return <BlogDetailsPage />;
}
