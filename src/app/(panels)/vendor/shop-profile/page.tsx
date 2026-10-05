import type { Metadata } from "next";
import ShopProfilePage from "@/features/vendor/pages/shop-profile-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorShopProfile;

export default function Page() {
  return <ShopProfilePage />;
}
