"use client";
import BottomNav from "@/components/BottomNav";
import QuoteCard from "@/app/quotes/components/QuoteCard";
import { fetchData } from "@/services/fireStoreService";
import { Quote } from "@/types";
import { useEffect, useState } from "react";

export default function Quotes() {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [selectedType, setSelectedType] = useState<string>("All");

    const fetchQuotes = async () => {
        const res = await fetchData("qoutes_data"); // intentionally misspelled "quotes_data" to match your original code
        setQuotes(res as Quote[]);
    }

    const filteredQuotes = selectedType === "All"
        ? quotes
        : quotes.filter(quote => quote.type === selectedType);

    const types = ["All", "Motivation", "Spiritual", "Relationship"];

    useEffect(() => {
        fetchQuotes();
    }, []);

    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-6">Quotes</h1>

            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar">
                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap flex-shrink-0 ${selectedType === type
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {filteredQuotes.length === 0 ? (
                <div className="px-4 py-6 text-gray-500">No quotes found.</div>
            ) : (
                <div className="space-y-4">
                    {filteredQuotes.map((quote) => (
                        <QuoteCard key={quote.docid} quote={quote} />
                    ))}
                </div>
            )}
            <BottomNav />
        </main>
    );
}