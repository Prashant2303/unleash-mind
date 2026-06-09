import { collection, query, getDocs, limit } from "firebase/firestore";
import { db } from "@/firebase-config";

export async function fetchData(collectionName: string, maxItems?: number) {
    const collectionRef = collection(db, collectionName);
    const q = maxItems ? query(collectionRef, limit(maxItems)) : query(collectionRef);
    const snapshot = await getDocs(q);
    const data: any[] = [];
    snapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
}