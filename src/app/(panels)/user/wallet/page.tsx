import type { Metadata } from "next";
import WalletPage from "@/features/user/pages/wallet-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userWallet;

export default function Page() {
  return <WalletPage />;
}
