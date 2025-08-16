"use client";

import Image from "next/image";

type TiltCardProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function TiltCardGallery({ images }: TiltCardProps) {
  return (
    <div className="relative flex flex-row left-1/2 -translate-x-1/2 w-screen overflow-x-auto py-4 justify-center snap-x snap-mandatory scrollbar-hide">
      {images.map((img, i) => (
        <div
          key={i}
          className={`relative w-36 sm:w-64 aspect-square shrink-0 rounded-2xl sm:rounded-4xl overflow-hidden snap-center border-6 sm:border-8 border-white ${i > 0 ? "-ml-2" : ""}`}
          style={{
            transform: `rotate(${i % 2 === 0 ? "-4deg" : "4deg"})`,
          }}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
