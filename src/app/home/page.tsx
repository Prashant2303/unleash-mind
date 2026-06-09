// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TestCards from "@/components/TestCards";
import BottomNav from "@/components/BottomNav";
import PersonalityTypes from "@/components/PersonalityTypes";
import ThreeModes from "@/components/ThreeModes";
import { Articles } from "@/components/Articles";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Top Navbar */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <TestCards />
      <Articles />
      <PersonalityTypes />
      <ThreeModes />
      <BottomNav />
    </main>
  );
}
