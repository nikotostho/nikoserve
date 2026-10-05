import NotFoundPage from "@/features/content/pages/not-found-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata.notFound;

export default function NotFoundRoute() {
  return <NotFoundPage />;
}
