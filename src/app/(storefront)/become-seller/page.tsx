import type { Metadata } from "next";
import BecomeSellerPage from "@/features/onboarding/pages/become-seller-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.becomeSeller;

export default function Page() {
  return <BecomeSellerPage />;
}
