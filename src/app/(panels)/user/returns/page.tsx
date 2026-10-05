import type { Metadata } from "next";
import ReturnsPage from "@/features/user/pages/returns-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userReturns;

export default function Page() {
  return <ReturnsPage />;
}
