import Image from "next/image";
import { merriweather } from "@/lib/font";

export default function AccomodationSection() {
  return (
    <div className="relative mt-8 sm:mt-16">
      <div className="relative left-1/2 -translate-x-1/2 w-screen">
        <div className="custom-shape-divider-top-1754616394 bg-amber-500">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative flex flex-col left-1/2 -translate-x-1/2 w-screen py-8 sm:py-16 px-6 lg:px-[280px] sm:px-6 gap-8 text-amber-900 bg-gradient-to-b from-amber-500 to-transparent">
        <div className="flex- flex-col gap-4">
          <h2
            className={`${merriweather.className} text-3xl sm:text-4xl font-bold`}
          >
            Your Private Slice of Paradise
          </h2>
          <p className="flex text-lg">
            Comfort, space, and a view to remember.
          </p>
          <p>Testing on the gorun</p>
        </div>
        <div className="relative w-full sm:w-1/2 max-w-sm aspect-square overflow-hidden">
          <Image
            fill
            src="/Images/hero-banner-1.png"
            alt="Overview"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
