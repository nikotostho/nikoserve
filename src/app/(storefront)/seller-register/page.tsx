import type { Metadata } from "next";
import SellerRegisterPage from "@/features/onboarding/pages/seller-register-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.sellerRegister;

export default function Page() {
  return <SellerRegisterPage />;
}
