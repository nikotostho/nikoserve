import type { Metadata } from "next";
import LoginPage from "@/features/auth/pages/login-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.login;

export default function Page() {
  return <LoginPage />;
}
