"use client";
import React from "react";
import { Article } from "@/types";

type Props = {
  article: Article;
  className?: string;
};

export function ArticleCard({ article, className }: Props) {
  const firstLine = (article.description || "").split(/\r?\n/).find(Boolean) || "";

  return (
    <article className={"bg-white rounded-md shadow-sm p-4 overflow-hidden " + (className || "")}>
      <h2 className="font-bold text-lg mb-2">{article.title}</h2>
      {firstLine && (
        <p
          className="text-gray-600 mb-3"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {firstLine}
        </p>
      )}
      {article.image && (
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover block rounded" />
      )}
    </article>
  );
}

export default ArticleCard;
