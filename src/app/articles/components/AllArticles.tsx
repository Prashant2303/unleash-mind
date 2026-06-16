import { useEffect, useState } from "react";
import { fetchData } from "@/services/fireStoreService";
import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types";

export function AllArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      const data = await fetchData("article_data");
      setArticles(data as Article[]);
      setLoading(false);
    }

    loadArticles();
  }, []);

  if (loading) {
    return <div className="px-4 py-6 text-gray-500">Loading articles…</div>;
  }

  if (!articles.length) {
    return <div className="px-4 py-6 text-gray-500">No articles found.</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Articles</h1>
      <div className="-mx-4">
        {articles.map((article) => (
          <div key={article.articleid} className="w-screen max-w-[100vw]">
            <ArticleCard article={article} className="m-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
