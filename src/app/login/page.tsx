"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // ✅ Validate credentials or call API here
        router.push("/home");
    };

    return (
        <div style={{ fontFamily: "var(--font-poppins)" }} className="relative h-screen w-full flex flex-col justify-end text-center">
            {/* Background Image */}
            <Image
                src="/images/bg.webp"
                alt="Background"
                fill
                className="bg-contain bg-center"
                priority
            />
            {/* Top Bar with branding + Skip */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                {/* Personality Profile Logo */}
                <div className="flex items-start">
                    <div className="w-12 h-12 relative">
                        <Image
                            src="/images/black-logo.svg"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Skip button */}
                <button
                    onClick={() => router.push("/home")}
                    className="text-sm font-normal text-white hover:underline"
                >
                    Skip
                </button>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>

            {/* Login Card */}
            <form
                onSubmit={handleLogin}
                className="absolute bottom-0 left-0 right-0 bg-white/40 backdrop-blur-[4px] rounded-t-[40px] shadow-lg py-8 border-t-[1.5px] border-t-[#eba4a4] z-10 flex flex-col items-center px-6"
            >
                <p className="text-sm text-[#000000]">Hi There!</p>
                <p className="text-md text-[#000000]">Know more about yourself</p>
                <h1 className="text-2xl font-bold mt-2 text-[#000000]">Let's get Started</h1>

                <div className="w-full max-w-sm mt-6 space-y-4">
                    <div className="relative w-full">
                        <span className="absolute inset-y-0 left-4 flex items-center text-black">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 13.125V11.875C13 11.212 12.7366 10.5761 12.2678 10.1072C11.7989 9.63839 11.163 9.375 10.5 9.375H5.5C4.83696 9.375 4.20107 9.63839 3.73223 10.1072C3.26339 10.5761 3 11.212 3 11.875V13.125" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 6.875C9.38071 6.875 10.5 5.75571 10.5 4.375C10.5 2.99429 9.38071 1.875 8 1.875C6.61929 1.875 5.5 2.99429 5.5 4.375C5.5 5.75571 6.61929 6.875 8 6.875Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </span>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-white border text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="relative w-full">
                        <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.875 6.875H3.125C2.43464 6.875 1.875 7.43464 1.875 8.125V12.5C1.875 13.1904 2.43464 13.75 3.125 13.75H11.875C12.5654 13.75 13.125 13.1904 13.125 12.5V8.125C13.125 7.43464 12.5654 6.875 11.875 6.875Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.375 6.875V4.375C4.375 3.5462 4.70424 2.75134 5.29029 2.16529C5.87634 1.57924 6.6712 1.25 7.5 1.25C8.3288 1.25 9.12366 1.57924 9.70971 2.16529C10.2958 2.75134 10.625 3.5462 10.625 4.375V6.875" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full pl-12 pr-12 py-3 rounded-full bg-white border text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-black"
                        >
                            {showPassword ? (
                                <AiOutlineEye size={22} />
                            ) : (

                                <AiOutlineEyeInvisible size={22} />
                            )}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition"
                    >
                        Submit
                    </button>

                    <div className="text-sm mt-4 text-center text-[#000000] font-medium">
                        Or Sign In with
                    </div>
                    <button
                        type="button"
                        onClick={() => alert("Google Sign-In coming soon")}
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto hover:scale-105 transition"
                    >
                        <Image
                            src="/images/google-logo.svg"
                            alt="Google Logo"
                            width={28}
                            height={28}
                        />
                    </button>
                </div>
            </form>
        </div>
    );
}