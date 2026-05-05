'use client'

import { db } from "@/firebase-config";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
    const [policyText, setPolicyText] = useState('');

    useEffect(() => {
        async function setPolicy() {
            const q = query(collection(db, "policy"));
            const querySnapshot = await getDocs(q);
            let html = '';
            querySnapshot.forEach((doc) => {
                html = doc.data().detail;
            });
            setPolicyText(html);
        }
        setPolicy();
    }, []);

    return <div>
        <div dangerouslySetInnerHTML={{ __html: policyText }}></div>
    </div>
}