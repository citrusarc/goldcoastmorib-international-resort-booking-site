"use client";

import Image from "next/image";
import { alexBrush } from "@/lib/font";

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="relative left-1/2 -translate-x-1/2 -translate-y-16 w-screen h-[480px] sm:h-[640px] overflow-hidden rounded-b-[180px]">
        <Image
          fill
          priority
          src="/images/hero-banner-1.png"
          alt="Hero"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute flex flex-col inset-0 mt-[240px] gap-8 items-center justify-center text-white">
          <p className={`${alexBrush.className} text-6xl`}>Gold Coast Resort</p>
          <p>Morib</p>
        </div>
      </div>
    </div>
  );
}
