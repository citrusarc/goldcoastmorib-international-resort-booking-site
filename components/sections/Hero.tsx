"use client";

import { Button } from "@heroui/button";

import { alexBrush, zain } from "@/lib/font";

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="relative left-1/2 -translate-x-1/2 -translate-y-16 w-screen h-[560px] sm:h-[800px] overflow-hidden rounded-b-[64px] sm:rounded-b-[180px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/Videos/promo-video.mp4"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute flex flex-col inset-0 mt-[280px] sm:mt-[240px] items-center justify-center text-white">
          <p className={`${alexBrush.className} text-5xl sm:text-8xl`}>
            Gold Coast Resort
          </p>
          <p className={`${zain.className} text-3xl sm:text-5xl`}>Morib</p>
          <Button
            size="lg"
            className="mt-4 sm:mt-12 sm:p-12 sm:py-8 sm:text-lg bg-amber-500 text-white"
          >
            Reserve Your Escaped
          </Button>
        </div>
      </div>
    </div>
  );
}
