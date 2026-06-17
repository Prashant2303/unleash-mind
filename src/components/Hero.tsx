// components/Hero.tsx
import React from "react";

const Hero = () => {
    return (
        <section className="p-5">
            <h2
                style={{ fontFamily: "var(--font-poppins)" }}
                className="text-sm font-normal text-[#380505]"
            >
                Hi User!
            </h2>
            <p
                style={{ fontFamily: "var(--font-poppins)" }}
                className="text-[#380505] font-normal text-sm">
                Feel free to go ahead and assess your Personality.
            </p>
        </section>
    );
};

export default Hero;
