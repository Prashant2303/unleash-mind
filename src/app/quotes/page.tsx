"use client";
import BottomNav from "@/components/BottomNav";
import QuoteCard from "@/app/quotes/components/QuoteCard";
import { fetchPaginatedData } from "@/services/fireStoreService";
import type { Quote } from "@/types";
import { useEffect, useRef, useState } from "react";
import {
	limit,
	type QueryDocumentSnapshot,
	startAfter,
} from "firebase/firestore";

const types = ["All", "Motivation", "Spiritual", "Relationship"];
const pageSize = 20;

export default function Quotes() {
	const [quotes, setQuotes] = useState<Quote[]>([]);
	const [selectedType, setSelectedType] = useState<string>("All");
	const [listComplete, setListComplete] = useState<boolean>(false);
	const loadingRef = useRef<HTMLDivElement | null>(null);
	const lastQuoteRef = useRef<QueryDocumentSnapshot | null>(null);

	useEffect(() => {
		if (listComplete) return;

		const fetchQuotes = async () => {
			const constraints = lastQuoteRef.current
				? [startAfter(lastQuoteRef.current), limit(pageSize)]
				: [limit(pageSize)];
			const { data, lastVisible, hasMore } = await fetchPaginatedData(
				"qoutes_data", // intentionally misspelled "quotes_data"
				constraints,
				pageSize,
			);
			if (!hasMore) setListComplete(true);
			lastQuoteRef.current = lastVisible;
			setQuotes((prevQuotes) => [...prevQuotes, ...(data as Quote[])]);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) fetchQuotes();
			},
			{ threshold: 0.0 },
		);
		loadingRef.current && observer.observe(loadingRef.current);

		return () => {
			loadingRef.current && observer.unobserve(loadingRef.current);
		};
	}, [listComplete]);

	const filteredQuotes =
		selectedType === "All"
			? quotes
			: quotes.filter((quote) => quote.type === selectedType);

	return (
		<main className="p-4">
			<h1 className="text-3xl font-bold mb-6">Quotes</h1>

			<div className="flex gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar">
				{types.map((type) => (
					<button
						key={type}
						type="button"
						onClick={() => setSelectedType(type)}
						className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
							selectedType === type
								? "bg-blue-600 text-white"
								: "bg-gray-200 text-gray-800 hover:bg-gray-300"
						}`}
					>
						{type}
					</button>
				))}
			</div>
			<div className="space-y-4">
				{filteredQuotes.map((quote) => (
					<QuoteCard key={quote.docid} quote={quote} />
				))}
			</div>
			<div
				className="px-4 py-6 text-gray-500 mb-8 text-center"
				ref={loadingRef}
			>
				{listComplete ? "No more quotes to load." : "Loading more quotes..."}
			</div>
			<BottomNav />
		</main>
	);
}
