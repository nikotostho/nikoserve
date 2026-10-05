import type { Metadata } from "next";
import ProviderRegisterPage from "@/features/onboarding/pages/provider-register-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.providerRegister;

export default function Page() {
  return <ProviderRegisterPage />;
}
