import type { Metadata } from "next";
import CartPage from "@/features/commerce/pages/cart-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.cart;

export default function Page() {
  return <CartPage />;
}
