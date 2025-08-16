"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type TiltCardProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function TiltCardGallery({ images }: TiltCardProps) {
  return (
    <div className="relative flex flex-row left-1/2 -translate-x-1/2 w-screen overflow-x-auto py-4 justify-center snap-x snap-mandatory scrollbar-hide">
      {images.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeIn", delay: index * 0.1 }}
        >
          <div
            className={`relative w-36 sm:w-64 aspect-square shrink-0 rounded-2xl sm:rounded-4xl overflow-hidden snap-center border-6 sm:border-8 border-white ${index > 0 ? "-ml-2" : ""}`}
            style={{
              transform: `rotate(${index % 2 === 0 ? "-4deg" : "4deg"})`,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
