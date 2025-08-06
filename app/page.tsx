"use client";

import HeroSection from "@/components/sections/Hero";
import Test from "@/components/sections/Test";

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <HeroSection />
      <Test />
    </section>
  );
}
