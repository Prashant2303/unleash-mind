import { Quote } from "@/types";

export default function QuoteCard({ quote }: { quote: Quote }) {
    return (
        <div
            className="relative overflow-hidden rounded-3xl shadow-lg min-h-[320px] bg-cover bg-center"
            style={{ backgroundImage: `url(${quote.image})` }}
        >
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 text-center text-white">
                <p className="max-w-2xl text-xl font-semibold sm:text-2xl md:text-3xl leading-tight">
                    {quote.text}
                </p>
            </div>
        </div>
    );
}
