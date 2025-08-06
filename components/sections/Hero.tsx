"use client";

import Image from "next/image";
import { alexBrush, zain } from "@/lib/font";

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="relative left-1/2 -translate-x-1/2 -translate-y-16 w-screen h-[480px] sm:h-[720px] overflow-hidden rounded-b-[96px] sm:rounded-b-[180px]">
        <Image
          fill
          priority
          src="/Images/hero-banner-1.png"
          alt="Hero"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute flex flex-col inset-0 mt-[280px] sm:mt-[240px] items-center justify-center text-white">
          <p className={`${alexBrush.className} text-5xl sm:text-8xl`}>
            Gold Coast Resort
          </p>
          <p className={`${zain.className} text-3xl sm:text-5xl`}>Morib</p>
        </div>
      </div>
    </div>
  );
}
