import type { Metadata } from "next";
import ShopProfilePage from "@/features/shops/pages/shop-profile-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.shopProfile;

export default function Page() {
  return <ShopProfilePage />;
}
