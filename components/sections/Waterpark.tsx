import Image from "next/image";
import { merriweather } from "@/lib/font";
import { Lifebelt, Stroller, SunLight } from "iconoir-react";

export default function WaterparkSection() {
  return (
    <div className="flex flex-col sm:flex-row w-full gap-8 mt-8 sm:mt-16">
      <div className="flex flex-col gap-8 flex-1">
        <h2
          className={`${merriweather.className} text-3xl sm:text-4xl text-blue-800`}
        >
          Splash into Endless Fun
        </h2>
        <p className="flex text-lg text-slate-800">
          Twisting water slides and splash buckets to the lazy river and kids'
          play zones, there’s something for everyone, young or young-at-heart.
        </p>
        <div className="flex flex-row w-full mt-8 justify-between gap-4">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <Lifebelt className="w-8 h-8 text-amber-500" />
            <p className="w-24 text-lg text-slate-600">Safe & Supervised</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <Stroller className="w-8 h-8 text-amber-500" />
            <p className="w-28 text-lg text-slate-600">Kid-Friendly Zones</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <SunLight className="w-8 h-8 text-amber-500" />
            <p className="w-24 text-lg text-slate-600">Outdoor Vibe</p>
          </div>
        </div>
      </div>
      <div className="relative flex-1 aspect-[4/3] mt-8 sm:mt-0 overflow-visible">
        <Image
          fill
          src="/Images/waterpark.png"
          alt="Waterpark"
          className="object-contain"
        />
      </div>
    </div>
  );
}
``;
