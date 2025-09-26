"use client";

import Image from "next/image";
import { Card, CardFooter } from "@heroui/react";
import { CrownCircle } from "iconoir-react";
import { motion } from "framer-motion";

import { rooms } from "@/data/rooms";
import { merriweather } from "@/lib/font";
import Link from "next/link";

export default function RoomsAndSuitesPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 sm:mt-16 mb-16">
      {rooms.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeIn", delay: index * 0.1 }}
        >
          <Link href={`/rooms-suites/${item.slug ?? "#"}`}>
            <Card className="flex flex-col w-full h-fit rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  fill
                  priority
                  fetchPriority="high"
                  src={item.image}
                  alt={item.alt}
                  className="object-cover object-center"
                />
              </div>
              <CardFooter className="flex flex-col gap-4 p-4 items-start">
                <h2
                  className={`inline-flex gap-2 text-lg ${merriweather.className} font-medium`}
                >
                  {item.name}
                  {item.isRecommended && (
                    <CrownCircle className="text-amber-500" />
                  )}
                </h2>
                <div>
                  <p className="font-normal antialiased text-slate-500">
                    Starting from
                  </p>
                  <span className="text-lg font-semibold">
                    {item.price.currency}
                    {item.price.current}
                    <span className="font-normal antialiased text-slate-500">
                      /night
                    </span>
                  </span>
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    {item.facilities?.map((item) => {
                      if (!item.icon) return null;
                      const Icon = item.icon;
                      return (
                        <span
                          key={item.label}
                          className="inline-flex gap-2 items-center text-sm font-normal antialiased text-slate-500"
                        >
                          <Icon className="w-4 h-4" />
                          {item.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
