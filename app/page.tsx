"use client";

import HeroSection from "@/components/sections/Hero";
import IntroductionSection from "@/components/sections/Introduction";

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <HeroSection />
      <IntroductionSection />
    </section>
  );
}
