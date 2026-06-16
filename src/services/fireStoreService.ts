import { collection, query, getDocs, QueryConstraint } from "firebase/firestore";
import { db } from "@/firebase-config";

export async function fetchData(
  collectionName: string,
  constraints: QueryConstraint[] = []
) {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, ...constraints);
  const snapshot = await getDocs(q);
  const data: any[] = [];

  snapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
}
