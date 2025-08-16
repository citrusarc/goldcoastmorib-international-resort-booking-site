import Image from "next/image";
import { motion } from "framer-motion";
import { Bed, BirthdayCake, Cutlery } from "iconoir-react";
import { merriweather } from "@/lib/font";

export default function OverviewSection() {
  return (
    <div className="flex flex-col sm:flex-row mt-0 sm:mt-16 gap-16">
      <div className="relative w-full sm:w-1/2 max-w-sm aspect-square rounded-b-full overflow-hidden">
        <Image
          fill
          src="/Images/hero-banner-1.png"
          alt="Overview Banner"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col w-full sm:w-1/2 gap-8">
        <h2
          className={`${merriweather.className} text-3xl sm:text-4xl text-amber-500`}
        >
          Seaside Gem on Selangor&apos;s Tranquil Coast
        </h2>
        <p className="flex text-base sm:text-lg text-slate-800">
          Wake up to the rhythm of the waves, unwind in your private jacuzzi,
          and make a splash with the kids at the onsite water theme park, all
          just steps from your suite.
        </p>
        <div className="flex flex-row w-full mt-8 sm:mt-0 justify-between sm:justify-start gap-4">
          <div
            className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start 
                w-24 h-24 sm:w-fit sm:h-auto 
                sm:px-4 sm:py-2 
                gap-2
                rounded-full
                border border-blue-500 bg-blue-50 text-blue-500"
          >
            <Bed className="w-6 h-6" />
            <span className="text-base sm:text-lg">Stay</span>
          </div>
          <div
            className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start 
                w-24 h-24 sm:w-fit sm:h-auto 
                sm:px-4 sm:py-2 
                gap-2
                rounded-full
                border border-blue-50 bg-gradient-to-r from-blue-800 to-blue-500 text-amber-500"
          >
            <Cutlery className="w-6 h-6" />
            <span className="text-base sm:text-lg">Dine</span>
          </div>
          <div
            className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start 
            w-24 h-24 sm:w-fit sm:h-auto 
            sm:px-4 sm:py-2 
            gap-2
            rounded-full
            border border-blue-500 bg-blue-50 text-blue-500"
          >
            <BirthdayCake className="w-6 h-6" />
            <span className="text-base sm:text-lg">Party</span>
          </div>
        </div>
      </div>
    </div>
  );
}
