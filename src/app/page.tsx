"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div style={{ fontFamily: "var(--font-poppins)" }} className="relative h-screen w-full flex flex-col justify-end text-center rounded-none">
      {/* Background Image */}
      <Image
        src="/images/bg.webp"
        alt="Background"
        fill
        className="bg-contain bg-center"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>

      {/* Top bar */}
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

      {/* Bottom card */}
      <div className="relative z-10">
        <div className="bg-white/40 backdrop-blur-[4px] h-80 rounded-t-[40px] shadow-lg py-8 border-t-[1.5px] border-t-[#eba4a4]">
          <p className="text-base text-gray-900">Hi There!</p>
          <p className="text-base text-gray-900">Know more about yourself</p>
          <h1 className="text-2xl text-[#2D0404] font-bold mt-2">Let's get Started</h1>

          <div className="mt-6 space-y-6 px-20">
            <button
              onClick={() => router.push("/login")}
              className="w-full bg-black text-white py-3 rounded-full text-lg font-normal"
            >
              Log In
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="w-full bg-white text-black py-3 rounded-full text-lg shadow"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
