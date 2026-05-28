import { modes } from "@/constants";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/firebase-config";

export async function generateStaticParams() {
  return modes.map(({ id }) => ({ modeId: id }));
}

export default async function Page({ params }: { params: Promise<{ modeId: string }> }) {
  const { modeId } = await params;
  const mode = modes.find(({ id }) => id === modeId)!;
  
  const { title } = mode;
  
  let personalityOverview;
  const q = query(collection(db, `${modeId}`));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    personalityOverview = doc.data().desc;
  });

  return (
    <div>
      <h1>{title}</h1>
      <p>{personalityOverview}</p>
    </div>
  )
}
