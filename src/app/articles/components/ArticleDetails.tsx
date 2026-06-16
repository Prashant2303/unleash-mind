import { useEffect, useState } from "react";
import { fetchData } from "@/services/fireStoreService";
import { Article } from "@/types";
import { where } from "firebase/firestore";

export const ArticleDetails = ({ article }: { article: string }) => {
  const [details, setDetails] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!article) return;

    async function loadArticleDetails() {
      const results = await fetchData("article_data", [
        where("articleid", "==", article),
      ]);
      setDetails((results[0] ?? null) as Article | null);
      setLoading(false);
    }

    loadArticleDetails();
  }, [article]);

  if (loading) {
    return <div className="bg-white rounded-md shadow-sm p-4">Loading article…</div>;
  }

  if (!details) {
    return <div className="bg-white rounded-md shadow-sm p-4">Article not found.</div>;
  }

  return (
    <div>
      <img src={details.image} />
      <h1 className="text-2xl font-semibold mb-2">{details.title}</h1>
      <p className="text-gray-700 mb-4">{details.description}</p>
    </div>
  );
};