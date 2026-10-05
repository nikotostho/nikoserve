import type { Metadata } from "next";
import HomePage from "@/features/home/pages/home-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.home;

export default function Page() {
  return <HomePage />;
}
