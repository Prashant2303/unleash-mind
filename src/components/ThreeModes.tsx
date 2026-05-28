import { modes } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const ThreeModes = () => {
  return (
    <section  style={{ fontFamily: "var(--font-poppins)" }} className="p-5">
      <h2 className="text-base font-normal mb-3">Three mode</h2>
      <div className="grid grid-cols-3">
        {modes.map(({ id, title, img }) => (
          <Link key={id} href={`/mode/${id}`} className="flex flex-col items-center">
            <Image
              src={img}
              alt={title}
              width={100}
              height={80}
              className="rounded-xl object-cover h-32 w-full"
            />
            <p className="text-sm font-normal mt-1">{title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ThreeModes;
