import type { Metadata } from "next";
import QuestionsPage from "@/features/vendor/pages/questions-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.vendorQuestions;

export default function Page() {
  return <QuestionsPage />;
}
