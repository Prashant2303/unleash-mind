"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignupPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Handle signup logic
        router.push("/login");
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
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
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
            {/* Frosted Glass Signup Card */}
            <form
                onSubmit={handleSubmit}
                className="absolute bottom-0 left-0 right-0 bg-white/20 backdrop-blur-[4px] rounded-t-[40px] py-8 px-6 text-center z-10 flex flex-col items-center border-t-[1.5px] border-t-[#eba4a4]"
            >
                <p className="text-sm text-black">Hi There!</p>
                <p className="text-md text-black">Know more about yourself</p>
                <h1 className="text-2xl font-bold mt-2 text-black">Sign Up</h1>

                <div className="w-full max-w-[300px] mt-6 space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-full bg-white/50 backdrop-blur-sm text-black placeholder-gray-900 focus:outline-none focus:ring-[1.5px] focus:ring-gray-300"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Id"
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-full bg-white/60 backdrop-blur-sm text-black placeholder-gray-900 focus:outline-none focus:ring-[1.5px] focus:ring-gray-300"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-full bg-white/60 backdrop-blur-sm text-black placeholder-gray-900 focus:outline-none focus:ring-[1.5px] focus:ring-gray-300"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-full bg-white/60 backdrop-blur-sm text-black placeholder-gray-900 focus:outline-none focus:ring-[1.5px] focus:ring-gray-300"
                    />

                    <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-900 transition">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}