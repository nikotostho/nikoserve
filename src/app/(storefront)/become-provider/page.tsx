import type { Metadata } from "next";
import BecomeProviderPage from "@/features/onboarding/pages/become-provider-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.becomeProvider;

export default function Page() {
  return <BecomeProviderPage />;
}
