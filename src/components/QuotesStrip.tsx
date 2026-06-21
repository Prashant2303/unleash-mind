"use client";
import { fetchData } from "@/services/fireStoreService";
import { useEffect, useState } from "react";
import { Quote } from "@/types";
import Link from "next/link";
import { limit } from "firebase/firestore";
import QuoteCard from "@/app/quotes/components/QuoteCard";

export function QuotesStrip() {
	const [quotes, setQuotes] = useState<Quote[]>([]);

	const fetchQuotes = async () => {
		const quotes = await fetchData("qoutes_data", [limit(4)]);
		setQuotes(quotes as Quote[]);
	};

	useEffect(() => {
		fetchQuotes();
	}, []);

	return (
		<div>
			<div className="px-4 flex items-center justify-between">
				<h2 className="text-2xl font-bold">Quotes</h2>
				<Link href="/quotes" className="text-sm text-blue-600 mt-1">
					View All
				</Link>
			</div>
			<div
				className="overflow-x-auto py-4 hide-scrollbar"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				<div className="flex space-x-4 px-4">
					{quotes.map((quote, idx) => (
						<div
							key={quote.docid ?? idx}
							className="min-w-[80vw] max-w-[80vw] flex-shrink-0"
						>
							<QuoteCard quote={quote} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
