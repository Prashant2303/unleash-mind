// components/PersonalityTypes.tsx
import { personalities } from "@/contants";
import Image from "next/image";
import Link from "next/link";

const PersonalityTypes = () => {
  return (
    <section className="p-5">
      <h2  style={{ fontFamily: "var(--font-poppins)" }} className="text-base font-normal mb-4 tracking-wide">Types of Personalities</h2>
      <div className="grid grid-cols-1 gap-4">
        {personalities.map(({id, img, title}) => (
          <Link key={id} href={`/personality/${id}`} className="rounded-xl overflow-hidden relative w-full h-32">
            <Image
              src={img}
              alt={title}
              fill
              className="object-contain"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PersonalityTypes;
