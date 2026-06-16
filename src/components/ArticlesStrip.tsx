"use client";
import { fetchData } from "@/services/fireStoreService";
import { useEffect, useState } from "react";
import { Article } from "@/types";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { limit } from "firebase/firestore";

export function ArticlesStrip() {
    const [articles, setArticles] = useState<Article[]>([]);
    const fetchArticles = async () => {
        const articles = await fetchData("article_data", [limit(4)]);
        setArticles(articles as Article[]);
    }

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <div>
            <div className="px-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Articles</h2>
                <Link href="/articles" className="text-sm text-blue-600 mt-1">
                    View All
                </Link>
            </div>
            <div className="overflow-x-auto py-4 hide-scrollbar" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="flex space-x-4 px-4">
                    {articles.map((a, idx) => (
                        <div key={(a as any).articleid ?? idx} className="min-w-[80vw] max-w-[80vw] flex-shrink-0">
                            <ArticleCard article={a as Article} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

