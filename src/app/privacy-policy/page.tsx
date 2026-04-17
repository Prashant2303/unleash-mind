import { db } from "@/firebase-config";
import { collection, getDocs, query } from "firebase/firestore";

export default async function PrivacyPolicy() {
    const q = query(collection(db, "policy"));
    const querySnapshot = await getDocs(q);
    let __html = '';
    querySnapshot.forEach((doc) => {
        __html = doc.data().detail;
    });

    return <div>
        <div dangerouslySetInnerHTML={{ __html }}></div>
    </div>
}