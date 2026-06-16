'use client';
import { useSearchParams } from "next/navigation";
import { AllArticles } from "../components/AllArticles";
import { ArticleDetails } from "../components/ArticleDetails";

export default function Articles() {
  const searchParams = useSearchParams();
  const articleId = searchParams.get("articleId");

  return (
    <main className="px-4 py-6">
      {articleId ? <ArticleDetails article={articleId} /> : <AllArticles />}
    </main>
  );
}
