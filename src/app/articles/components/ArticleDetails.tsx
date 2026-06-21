import { useEffect, useState } from "react";
import { fetchData } from "@/services/fireStoreService";
import { Article } from "@/types";
import { where } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase-config";

export const ArticleDetails = ({ article }: { article: string }) => {
	const [details, setDetails] = useState<Article | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!article) return;

		async function loadArticleDetails() {
			const results = await fetchData<Article>("article_data", [
				where("articleid", "==", article),
			]);
			setDetails(results[0]);
			setLoading(false);
		}

		loadArticleDetails();
	}, [article]);

	if (loading) {
		return (
			<div className="bg-white rounded-md shadow-sm p-4">Loading article…</div>
		);
	}

	if (!details) {
		return (
			<div className="bg-white rounded-md shadow-sm p-4">
				Article not found.
			</div>
		);
	}

	const like = async () => {
		const articleRef = doc(db, "article_data", article);
		const res = await updateDoc(articleRef, {
			like_count: details.like_count + 1,
		});
		console.log("res", res);
	};

	return (
		<div>
			<img src={details.image} />
			<h1 className="text-2xl font-semibold mb-2">{details.title}</h1>
			<p className="text-gray-700 mb-4">{details.description}</p>
		</div>
	);
};
