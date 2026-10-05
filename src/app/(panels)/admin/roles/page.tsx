import type { Metadata } from "next";
import RolesPage from "@/features/admin/pages/roles-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminRoles;

export default function Page() {
  return <RolesPage />;
}
