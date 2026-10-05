import type { Metadata } from "next";
import ForgotPasswordPage from "@/features/auth/pages/forgot-password-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.forgotPassword;

export default function Page() {
  return <ForgotPasswordPage />;
}
