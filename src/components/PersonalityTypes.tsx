// components/PersonalityTypes.tsx
import Image from "next/image";

const personalities = [
  { title: "Popular Sanguine", img: "/images/sanguine.webp" },
  { title: "Powerful Choleric", img: "/images/choleric.webp" },
  { title: "Perfect Melancholy", img: "/images/melancholy.webp" },
  { title: "Peaceful Phlegmatic", img: "/images/phlegmatic.webp" },
];

const PersonalityTypes = () => {
  return (
    <section className="p-5">
      <h2  style={{ fontFamily: "var(--font-poppins)" }} className="text-base font-normal mb-4 tracking-wide">Types of Personalities</h2>
      <div className="grid grid-cols-1 gap-4">
        {personalities.map((p, i) => (
          <div key={i} className="rounded-xl overflow-hidden relative w-full h-32">
            <Image
              src={p.img}
              alt={p.title}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalityTypes;
