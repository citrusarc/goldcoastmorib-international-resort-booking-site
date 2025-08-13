"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { InfiniteScrollListProps } from "@/types";

export default function InfiniteScrollList({
  items,
  duration = 30,
  direction = "left",
}: InfiniteScrollListProps & {
  direction?: "left" | "right";
}) {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-4"
      >
        {[...items, ...items].map((item, i) => {
          const key = `item-${i}`;

          if ("text" in item) {
            return (
              <div
                key={key}
                className="flex items-center justify-center mx-12 sm:mx-16 w-[240px] sm:w-[360px] h-fit font-normal italic text-start text-orange-100 shrink-0"
              >
                <p>{item.text}</p>
              </div>
            );
          }

          if ("src" in item) {
            return (
              <div
                key={key}
                className="flex items-center justify-center w-[120px] sm:w-[240px] h-[120px] sm:h-[240px] rounded-2xl overflow-hidden"
              >
                <Image
                  alt={item.alt}
                  className="object-cover w-full h-full"
                  height={item.height}
                  src={item.src}
                  width={item.width}
                />
              </div>
            );
          }

          return null;
        })}
      </motion.div>
    </div>
  );
}
