import { useEffect, useState } from "react";
import { fetchData } from "@/services/fireStoreService";
import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types";
import BottomNav from "@/components/BottomNav";

const ARTICLE_TYPES = ["all", "modes", "growth", "personality"];

const TYPE_LABELS: Record<string, string> = {
  all: "All",
  modes: "Modes of Nature",
  growth: "Personal Growth",
  personality: "Personality Type",
};

export function AllArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>("all");

  useEffect(() => {
    async function loadArticles() {
      const data = await fetchData("article_data");
      setArticles(data as Article[]);
      setLoading(false);
    }

    loadArticles();
  }, []);

  const filteredArticles = selectedType === "all"
    ? articles
    : articles.filter((article) => article.type === selectedType);

  if (loading) {
    return <div className="px-4 py-6 text-gray-500">Loading articles…</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Articles</h1>

      <div className="flex flex-wrap gap-3 mb-6">
        {ARTICLE_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedType === type
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {TYPE_LABELS[type]}
          </button>
        ))}
      </div>

      {filteredArticles.length === 0 ? (
        <div className="px-4 py-6 text-gray-500">No articles found.</div>
      ) : (
        <div className="-mx-4">
          {filteredArticles.map((article) => (
            <div key={article.articleid} className="w-screen max-w-[100vw]">
              <ArticleCard article={article} className="m-4" />
            </div>
          ))}
        </div>
      )}
      <BottomNav />
    </div>
  );
}
