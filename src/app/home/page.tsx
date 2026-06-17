import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TestCards from "@/components/TestCards";
import BottomNav from "@/components/BottomNav";
import PersonalityTypes from "@/components/PersonalityTypes";
import ThreeModes from "@/components/ThreeModes";
import { ArticlesStrip } from "@/components/ArticlesStrip";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen pb-16">
      <Navbar />
      <Hero />
      <TestCards />
      <ArticlesStrip />
      <PersonalityTypes />
      <ThreeModes />
      <BottomNav />
    </main>
  );
}
