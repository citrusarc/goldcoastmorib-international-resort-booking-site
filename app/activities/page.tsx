"use client";

import Image from "next/image";
import { cormorantGaramond, merriweather } from "@/lib/font";
import { motion } from "framer-motion";

import { activities } from "@/data/activities";
import TiltCardGallery from "@/components/ui/TiltCardGallery";

export default function ActivitiesPage() {
  return (
    <div className="relative flex flex-col gap-8 mt-8 sm:mt-16 mb-16">
      <div>
        <TiltCardGallery
          images={[
            {
              src: "/Images/activities-banner-100.png",
              alt: "Activity Banner 100",
            },
            {
              src: "/Images/activities-banner-200.png",
              alt: "Activity Banner 200",
            },
            {
              src: "/Images/activities-banner-300.png",
              alt: "Activity Banner 300",
            },
            {
              src: "/Images/activities-banner-400.png",
              alt: "Activity Banner 400",
            },
            {
              src: "/Images/activities-banner-500.png",
              alt: "Activity Banner 500",
            },
            {
              src: "/Images/activities-banner-600.png",
              alt: "Activity Banner 600",
            },
            {
              src: "/Images/activities-banner-700.png",
              alt: "Activity Banner 700",
            },
            {
              src: "/Images/activities-banner-800.png",
              alt: "Activity Banner 800",
            },
          ]}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative mt-8 sm:mt-16 w-full h-[240px] sm:h-[360px] overflow-hidden rounded-4xl"
      >
        <Image
          fill
          priority
          fetchPriority="high"
          src="/Images/activities-banner-1.png"
          alt="Activity Banner 1"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute flex flex-col inset-0 gap-4 items-center justify-center text-center text-white">
          <h2 className={`${cormorantGaramond.className} text-3xl sm:text-5xl`}>
            Firefly Watching at Kampung Kuantan
          </h2>
          <p className="flex text-base sm:text-lg">
            A magical glow along the river
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-8 mt-8 sm:mt-16 items-center justify-center text-center"
      >
        <h2
          className={`${merriweather.className} text-3xl sm:text-4xl text-amber-500`}
        >
          Experience more than just the beach
        </h2>
        <p className="flex text-base sm:text-lg text-slate-800">
          Gold Coast Morib Resort is your gateway to unique adventures — from
          magical firefly rivers to scenic hills and lively local markets.
          Discover nature, culture, and thrills just minutes away from your
          stay.
        </p>
      </motion.div>
      <div className="relative flex flex-col">
        <div
          className="relative flex flex-col left-1/2 -translate-x-1/2 w-screen mt-8 sm:mt-16 py-8 sm:py-24 px-8 lg:px-[280px] sm:px-6 gap-8 sm:gap-16 rounded-tl-[64px] sm:rounded-tl-[180px] rounded-br-[64px] sm:rounded-br-[180px] text-amber-500"
          style={{
            backgroundImage: `linear-gradient(
         to bottom,
         #1e40af 0%,
         #1e40af 33%,
         #2563eb 33%,
         #2563eb 66%,
         #60a5fa 66%,
         #60a5fa 100%
       )`,
          }}
        >
          <div className="flex flex-col gap-8 sm:gap-16">
            {activities.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div
                  className={`flex flex-col sm:flex-row ${
                    index % 2 === 1 ? "sm:flex-row-reverse" : ""
                  } gap-8 sm:gap-16 w-full h-fit`}
                >
                  <div className="relative w-full sm:w-1/2 h-[240px] sm:h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      fill
                      priority
                      fetchPriority="high"
                      src={item.image}
                      alt={item.alt}
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-4 sm:gap-8 w-full sm:w-1/2 items-start">
                    <h2
                      className={`${merriweather.className} text-2xl sm:text-4xl font-medium`}
                    >
                      {item.name}
                    </h2>
                    <p className="text-base sm:text-lg font-normal antialiased text-white">
                      {item.description}
                    </p>
                    <div>
                      <div className="flex flex-col gap-2">
                        {item.facilities?.map((item) => {
                          if (!item.icon) return null;
                          const Icon = item.icon;
                          return (
                            <span
                              key={item.label}
                              className="inline-flex gap-2 items-center text-base sm:text-lg font-normal antialiased text-white/80"
                            >
                              <Icon
                                className="w-4 sm:w-5 h-4 sm:h-5"
                                strokeWidth={1.8}
                              />
                              {item.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
