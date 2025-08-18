"use client";

import Image from "next/image";
import { Card, CardFooter } from "@heroui/react";
import { motion } from "framer-motion";

import { facilities } from "@/data/facilities";
import { merriweather } from "@/lib/font";

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col gap-8 sm:gap-16 mt-8 sm:mt-16 mb-16">
      {facilities.map((item, index) => {
        const isRight = index % 2 === 1;
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: isRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <Card
              className={`flex flex-col sm:flex-row ${
                isRight ? "sm:flex-row-reverse" : ""
              } p-4 sm:p-6 gap-4 sm:gap-8 w-full h-fit rounded-4xl overflow-hidden ${!isRight ? "bg-gradient-to-r from-blue-800 to-blue-600" : "border border-blue-800 bg-white"}`}
            >
              <div className="relative w-full aspect-[16/12] rounded-2xl overflow-hidden">
                <Image
                  fill
                  priority
                  fetchPriority="high"
                  src={item.image}
                  alt={item.alt}
                  className="object-cover object-center"
                />
              </div>
              <CardFooter className="flex flex-col gap-4 sm:gap-8 items-start">
                <h2
                  className={`py-2 sm:py-4 px-4 sm:px-8 ${merriweather.className} text-2xl sm:text-4xl font-medium rounded-full ${index % 2 === 0 ? "text-white bg-gradient-to-r from-amber-600 to-amber-400" : "text-amber-500 bg-gradient-to-r from-blue-800 to-blue-500"}`}
                >
                  {item.name}
                </h2>
                <p
                  className={`text-base sm:text-lg font-normal antialiased ${index % 2 === 0 ? "text-white" : "text-slate-800"}`}
                >
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
                          className={`inline-flex gap-2 items-center text-base sm:text-lg font-normal antialiased ${index % 2 === 0 ? "text-white/60" : "text-slate-500"}`}
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
              </CardFooter>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
