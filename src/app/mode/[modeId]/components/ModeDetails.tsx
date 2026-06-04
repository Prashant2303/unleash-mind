"use client";
import { useEffect, useState } from "react";
import { Mode } from "@/types";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/firebase-config";

type ModeDetail = {
    tab: "nature" | "qualities";
    title: string;
    image: string;
    isblack: boolean;
    description: string;
    docid: string;
    order: number;
};

type Tab = "overview" | "qualities" | "nature";
const tabs = [
    { id: "overview", label: "Overview" },
    { id: "qualities", label: "Qualities" },
    { id: "nature", label: "Nature" },
];

export default function ModeDetails({ mode }: { mode: Mode }) {
    const { id } = mode;
    const [tab, setTab] = useState<Tab>("overview");
    const [modeOverview, setModeOverview] = useState<string | null>(null);
    const [qualitiesList, setQualitiesList] = useState<ModeDetail[]>([]);
    const [natureList, setNatureList] = useState<ModeDetail[]>([]);

    async function fetchModeDetails() {
        const modeOverviewQuery = query(collection(db, `${id}_overview`));
        const modeOverviewSnapshot = await getDocs(modeOverviewQuery);
        let overview: string | null = null;
        modeOverviewSnapshot.forEach((doc) => {
            overview = doc.data().desc as string;
        });
        setModeOverview(overview);

        const q = query(collection(db, `${id}`));
        const querySnapshot = await getDocs(q);
        const qualitiesItems: ModeDetail[] = [];
        const natureItems: ModeDetail[] = [];
        querySnapshot.forEach((doc) => {
            const item = doc.data() as ModeDetail;
            if (item.tab === "qualities") {
                qualitiesItems.push(item);
            } else if (item.tab === "nature") {
                natureItems.push(item);
            }
        });
        setQualitiesList(qualitiesItems);
        setNatureList(natureItems);
    }

    useEffect(() => {
        fetchModeDetails();
    }, []);

    return <div className="space-y-6">
        <div>
            <p className="text-2xl font-semibold">{mode.title}</p>
            <img src={mode.img} alt={mode.title} className="w-full max-w-md rounded-xl object-cover" />
        </div>
        <div role="tablist" aria-label="Mode sections" className="flex gap-2 mt-4 border-b-1 border-gray-300">
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
            {tab === "overview" && <div>{modeOverview}</div>}
            {tab === "qualities" && <List list={qualitiesList} />}
            {tab === "nature" && <List list={natureList} />}
        </div>
    </div>
}

function List({ list }: { list: ModeDetail[] }) {
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