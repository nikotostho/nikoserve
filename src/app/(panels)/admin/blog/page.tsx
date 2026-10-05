import type { Metadata } from "next";
import BlogPage from "@/features/admin/pages/blog-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminBlog;

export default function Page() {
  return <BlogPage />;
}
