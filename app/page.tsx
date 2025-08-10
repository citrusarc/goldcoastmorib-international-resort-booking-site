"use client";

import HeroSection from "@/components/sections/Hero";
import OverviewSection from "@/components/sections/Overview";
import AccomodationSection from "@/components/sections/Accomodation";
import WaterparkSection from "@/components/sections/Waterpark";
import CTASection from "@/components/sections/CTA";
import ReviewSection from "@/components/sections/Review";

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <HeroSection />
      <OverviewSection />
      <AccomodationSection />
      <WaterparkSection />
      <ReviewSection />
      <CTASection />
    </section>
  );
}
