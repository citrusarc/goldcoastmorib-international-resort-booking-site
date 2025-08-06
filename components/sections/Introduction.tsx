import Image from "next/image";
import { Card, CardBody } from "@heroui/react";

export default function IntroductionSection() {
  return (
    <div className="flex flex-col sm:flex-row mt-0 sm:mt-16 gap-8 sm:gap-16">
      <div className="rounded-4xl w-full sm:w-1/2 overflow-hidden">
        <Image
          src="/Images/hero-banner-1.png"
          alt="Introduction"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-full sm:w-1/2 gap-8">
        <h2 className="text-3xl font-semibold">
          Seaside Gem on Selangor&apos;s Tranquil Coast
        </h2>
        <p className="flex text-lg">
          Wake up to the rhythm of the waves, unwind in your private jacuzzi,
          and make a splash with the kids at the onsite water theme park, all
          just steps from your suite. Whether you are craving a romantic weekend
          retreat or a lively family getaway, our spacious rooms and sweeping
          coastal views set the stage for meaningful moments.
        </p>
      </div>
    </div>
  );
}
