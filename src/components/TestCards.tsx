// components/TestCards.tsx
import Image from "next/image";
import Link from "next/link";

const TestCards = () => {
  return (
    <section className="p-5 flex flex-col gap-4">
      <Link href="/test-preference">
        <div className="relative rounded-4xl overflow-hidden block">
          <Image
            src="/images/spiritual.webp"
            alt="Spiritual Test"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p
              style={{ fontFamily: "var(--font-poppins)" }}
              className="text-white text-2xl font-bold tracking-wide"
            >
              Spiritual trait test
            </p>
          </div>
        </div>
      </Link>

      <Link href="/test-preference">
        <div className="relative rounded-4xl overflow-hidden block">
          <Image
            src="/images/personality.webp"
            alt="Personality Test"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p
              style={{ fontFamily: "var(--font-poppins)" }}
              className="text-white text-2xl font-bold tracking-wide"
            >
              Personality type test
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default TestCards;
