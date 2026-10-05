import type { Metadata } from "next";
import BlogPage from "@/features/content/pages/blog-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.blog;

export default function Page() {
  return <BlogPage />;
}
