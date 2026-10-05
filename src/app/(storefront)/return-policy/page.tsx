import type { Metadata } from "next";
import ReturnPolicyPage from "@/features/content/pages/return-policy-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.returnPolicy;

export default function Page() {
  return <ReturnPolicyPage />;
}
