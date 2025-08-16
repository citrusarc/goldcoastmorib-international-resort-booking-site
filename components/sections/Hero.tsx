"use client";

import { Button } from "@heroui/button";

import { cormorantGaramond } from "@/lib/font";

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
          src="https://res.cloudinary.com/dn6hwyxpz/video/upload/v1754894823/promo-video_hvwdsa.mp4"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute flex flex-col inset-0 mt-[280px] sm:mt-[240px] items-center justify-center text-white">
          <h2
            className={`${cormorantGaramond.className} text-5xl sm:text-8xl font-light`}
          >
            Gold Coast Morib
          </h2>
          <h2
            className={`${cormorantGaramond.className} text-3xl sm:text-5xl font-light`}
          >
            International Resort
          </h2>
          <Button
            size="lg"
            className="mt-4 sm:mt-12 sm:p-12 sm:py-8 sm:text-lg bg-gradient-to-r from-blue-900 to-blue-500 text-amber-500"
          >
            Reserve Your Escaped
          </Button>
        </div>
      </div>
    </div>
  );
}
