import type { Metadata } from "next";
import PrivacyPolicyPage from "@/features/content/pages/privacy-policy-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.privacyPolicy;

export default function Page() {
  return <PrivacyPolicyPage />;
}
