import type { Metadata } from "next";
import PaymentMethodsPage from "@/features/admin/pages/payment-methods-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminPaymentMethods;

export default function Page() {
  return <PaymentMethodsPage />;
}
