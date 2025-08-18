"use client";

import { merriweather } from "@/lib/font";
import InfiniteScrollList from "@/components/ui/InfinityScrollLists";

const images = [
  { src: "/Images/room-1.png", alt: "Room 1", width: 240, height: 240 },
  { src: "/Images/room-2.png", alt: "Room 2", width: 240, height: 240 },
  { src: "/Images/room-3.png", alt: "Room 3", width: 240, height: 240 },
  { src: "/Images/room-4.png", alt: "Room 4", width: 240, height: 240 },
  { src: "/Images/room-5.png", alt: "Room 5", width: 240, height: 240 },
  { src: "/Images/room-6.png", alt: "Room 6", width: 240, height: 240 },
];

export default function AccomodationSection() {
  return (
    <div className="relative mt-8 sm:mt-16 w-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-screen overflow-hidden -z-10">
        <div className="absolute top-0 w-full h-2 bg-white z-10"></div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
          className="block w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V-2H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative flex flex-col left-1/2 -translate-x-1/2 w-screen py-8 sm:py-16 px-6 lg:px-[280px] sm:px-6 gap-8 text-amber-500 bg-gradient-to-b from-blue-800 via-blue-400 to-transparent">
        <div className="flex flex-col gap-8">
          <h2 className={`${merriweather.className} text-3xl sm:text-4xl`}>
            Your Private Slice of Paradise
          </h2>
          <p className="flex text-base sm:text-lg text-white">
            Comfort, space, and a view to remember.
          </p>
        </div>

        <div
          className="relative flex flex-col gap-4 w-full"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        >
          <InfiniteScrollList duration={60} items={images} direction="left" />
          <InfiniteScrollList duration={60} items={images} direction="right" />
        </div>
      </div>
    </div>
  );
}
