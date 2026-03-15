// components/ThreeModes.tsx
import Image from "next/image";

const modes = [
  { title: "Sattva", img: "/images/sattva.webp" },
  { title: "Rajo", img: "/images/rajo.webp" },
  { title: "Tamo", img: "/images/tamo.webp" },
];

const ThreeModes = () => {
  return (
    <section  style={{ fontFamily: "var(--font-poppins)" }} className="p-5">
      <h2 className="text-base font-normal mb-3">Three mode</h2>
      <div className="grid grid-cols-3">
        {modes.map((m, i) => (
          <div key={i} className="flex flex-col items-center">
            <Image
              src={m.img}
              alt={m.title}
              width={100}
              height={80}
              className="rounded-xl object-cover h-32 w-full"
            />
            <p className="text-sm font-normal mt-1">{m.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeModes;
