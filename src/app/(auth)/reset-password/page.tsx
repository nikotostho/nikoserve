import type { Metadata } from "next";
import ResetPasswordPage from "@/features/auth/pages/reset-password-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.resetPassword;

export default function Page() {
  return <ResetPasswordPage />;
}
