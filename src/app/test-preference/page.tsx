// components/TestPreference.tsx
"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const TestPreference = () => {
    const router = useRouter();


    return (
        <div className="bg-[#fde1e1] min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Back Arrow */}
            <Link href="/">
                <div className="px-5 py-2 cursor-pointer inline-block">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </Link>

            {/* Page Content */}
            <div className="flex flex-col items-center p-5">
                {/* Video Section */}
                <div className="w-full max-w-md">
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/VIDEO_ID?controls=1"
                            title="Introduction Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Question */}
                <h2
                    style={{ fontFamily: "var(--font-poppins)" }}
                    className="text-base font-normal text-black mt-6"
                >
                    Would you prefer a short or a long test?
                </h2>

                {/* Buttons */}
                <div
                    style={{ fontFamily: "var(--font-poppins)" }}
                    className="flex flex-row gap-4 mt-4 w-full max-w-xs"
                >
                    <button className="flex-1 py-4 px-4 text-base rounded-full text-black bg-white hover:bg-gray-100 transition">
                        Short test
                    </button>
                    <button
                        onClick={() => router.push("/qna")}
                        className="flex-1 py-4 px-4 text-base rounded-full bg-black text-white hover:bg-gray-900 transition"
                    >
                        Accurate Test
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestPreference;
