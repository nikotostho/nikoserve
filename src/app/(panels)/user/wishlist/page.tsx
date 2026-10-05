import type { Metadata } from "next";
import WishlistPage from "@/features/user/pages/wishlist-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userWishlist;

export default function Page() {
  return <WishlistPage />;
}
