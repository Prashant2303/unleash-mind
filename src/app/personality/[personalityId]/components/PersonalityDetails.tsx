"use client";
import { useEffect, useState } from "react";
import { Personality } from "@/types";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/firebase-config";

type Tab = "overview" | "qualities" | "limitations";
const tabs = [
    { id: "overview", label: "Overview" },
    { id: "qualities", label: "Qualities" },
    { id: "limitations", label: "Limitations" },
];

export default function PersonalityDetails({ personality }: { personality: Personality }) {
    const [tab, setTab] = useState<Tab>("overview");

    return (
        <div className="space-y-6">
            <div>
                <p className="text-2xl font-semibold">{personality.title}</p>
            </div>

            <img src={personality.img} alt={personality.title} className="w-full max-w-md rounded-xl object-cover" />

            <div>
                <div role="tablist" aria-label="Personality sections" className="flex gap-2 mt-4 border-b-1 border-gray-300">
                    {tabs.map(({ id, label }) => (
                        <button
                            key={id}
                            role="tab"
                            aria-selected={tab === id}
                            onClick={() => setTab(id as Tab)}
                            className={`flex-1 rounded-none px-4 py-3 text-sm font-semibold transition ${tab === id
                                    ? "border-b-4 border-black bg-transparent text-slate-900"
                                    : "border-b-transparent bg-transparent text-slate-500 hover:text-slate-900"
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="mt-5">
                    {tab === "overview" && <Overview personality={personality} />}
                    {tab === "qualities" && <List personality={personality} attribute="strength" />}
                    {tab === "limitations" && <List personality={personality} attribute="weakness" />}
                </div>
            </div>
        </div>
    )
}

function Overview({ personality }: { personality: Personality }) {
    const [overview, setOverview] = useState<string>("");

    const fetchOverview = async () => {
        let personalityOverview;
        const q = query(collection(db, `${personality.type}_overview`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            personalityOverview = doc.data().desc;
        });

        setOverview(personalityOverview as unknown as string);
    }

    useEffect(() => {
        fetchOverview();
    }, []);

    return <div>{overview}</div>
}

type AttributeDetail = {
    description: string;
    image: string;
    title: string;
}

function List({ personality, attribute }: { personality: Personality; attribute: "strength" | "weakness" }) {
    const [list, setList] = useState<AttributeDetail[]>([]);

    const fetchList = async () => {
        const tempList: AttributeDetail[] = [];
        const q = query(collection(db, `${personality.type}_${attribute}`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            tempList.push(doc.data() as AttributeDetail);
        });
        setList(tempList);
    }

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className="space-y-4">
            {list.map((quality, idx) => (
                <div key={idx} className="flex items-center gap-6 rounded-lg border border-slate-200 p-4 hover:shadow-md transition">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900">{quality.title}</h3>
                        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{quality.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                        <img
                            src={quality.image}
                            alt={quality.title}
                            className="w-24 h-24 rounded-lg object-cover"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}