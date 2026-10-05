import type { Metadata } from "next";
import RegisterPage from "@/features/auth/pages/register-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.register;

export default function Page() {
  return <RegisterPage />;
}
