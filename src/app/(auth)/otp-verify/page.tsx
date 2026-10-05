import type { Metadata } from "next";
import OtpVerifyPage from "@/features/auth/pages/otp-verify-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.otpVerify;

export default function Page() {
  return <OtpVerifyPage />;
}
