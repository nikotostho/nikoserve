import type { Metadata } from "next";
import ProfilePage from "@/features/user/pages/profile-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.userProfile;

export default function Page() {
  return <ProfilePage />;
}
