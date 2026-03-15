"use client";

import { FC } from "react";
import Image from "next/image";

const Navbar: FC = () => {
    return (
        <nav className="w-full bg-black text-white flex items-center justify-between px-5 py-3">
            {/* Left Section - Logo */}
            <div className="flex items-center">
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </div>

            {/* Right Section - Profile Icon */}
            <div className="flex items-center">
                <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.5"
                        y="0.592041"
                        width="23"
                        height="23"
                        rx="11.5"
                        stroke="white"
                    />
                    <path
                        d="M20 21.092V19.092C20 18.0312 19.5786 17.0138 18.8284 16.2636C18.0783 15.5135 17.0609 15.092 16 15.092H8C6.93913 15.092 5.92172 15.5135 5.17157 16.2636C4.42143 17.0138 4 18.0312 4 19.092V21.092"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 11.092C14.2091 11.092 16 9.30118 16 7.09204C16 4.8829 14.2091 3.09204 12 3.09204C9.79086 3.09204 8 4.8829 8 7.09204C8 9.30118 9.79086 11.092 12 11.092Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </nav>
    );
};

export default Navbar;
