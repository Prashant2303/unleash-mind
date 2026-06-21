import {
	collection,
	query,
	getDocs,
	QueryConstraint,
} from "firebase/firestore";
import { db } from "@/firebase-config";

export async function fetchData<T = any>(
	collectionName: string,
	constraints: QueryConstraint[] = [],
) {
	const collectionRef = collection(db, collectionName);
	const q = query(collectionRef, ...constraints);
	const snapshot = await getDocs(q);
	const data: T[] = [];

	snapshot.forEach((doc) => {
		data.push(doc.data() as unknown as T);
	});

	return data;
}

export async function fetchPaginatedData<T = any>(
	collectionName: string,
	constraints: QueryConstraint[] = [],
	pageSize: number,
) {
	const collectionRef = collection(db, collectionName);
	const q = query(collectionRef, ...constraints);
	const snapshot = await getDocs(q);
	const data: T[] = [];

	snapshot.forEach((doc) => {
		data.push(doc.data() as unknown as T);
	});

	const lastVisible =
		snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1] : null;
	const hasMore = snapshot.docs.length === pageSize;

	return { data, lastVisible, hasMore };
}
