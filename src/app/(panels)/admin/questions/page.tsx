import type { Metadata } from "next";
import QuestionsPage from "@/features/admin/pages/questions-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata.adminQuestions;

export default function Page() {
  return <QuestionsPage />;
}
