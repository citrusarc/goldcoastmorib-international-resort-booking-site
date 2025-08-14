import Image from "next/image";
import { cormorantGaramond, merriweather } from "@/lib/font";

export default function TheResortPage() {
  return (
    <div className="relative flex flex-col gap-8 mt-8 sm:mt-16">
      <div className="relative w-full h-[240px] sm:h-[360px] overflow-hidden rounded-4xl">
        <Image
          fill
          src="/Images/hero-banner-1.png"
          alt="Banner"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute flex flex-col inset-0 gap-4 items-center justify-center text-center text-white">
          <h2 className={`${cormorantGaramond.className} text-3xl sm:text-5xl`}>
            Where Coastline Calm Meets Carefree Comfort
          </h2>
          <p className="flex text-lg">
            A beachfront escape just an hour from Kuala Lumpur
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-8 sm:mt-16 items-center justify-center text-center">
        <h2
          className={`${merriweather.className} text-3xl sm:text-4xl text-amber-500`}
        >
          Seaside Serenity Awaits
        </h2>
        <p className="flex text-lg text-slate-800">
          Nestled along Selangor’s golden coastline, Gold Coast Morib Resort
          invites you to unwind in a space where nature and modern comfort blend
          effortlessly. Whether you’re planning a romantic retreat or a
          fun-filled family holiday, our resort offers the perfect backdrop to
          make your stay unforgettable.
        </p>
      </div>
      <div className="relative flex flex-col">
        <div
          className="relative flex flex-col left-1/2 -translate-x-1/2 w-screen mt-8 sm:mt-16 py-8 sm:py-16 px-6 lg:px-[280px] sm:px-6 gap-8 sm:gap-16 items-end rounded-tl-[64px] sm:rounded-tl-[180px] text-amber-500"
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
          <h2
            className={`${merriweather.className} text-3xl sm:text-4xl text-amber-500`}
          >
            What&apos;s going on?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <div className="relative w-full h-[240px] sm:h-[360px] overflow-hidden rounded-4xl">
              <Image
                fill
                src="/Images/hero-banner-1.png"
                alt="Banner"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute flex flex-col inset-0 gap-4 items-center justify-center text-center text-white">
                <h2
                  className={`${cormorantGaramond.className} text-3xl sm:text-5xl`}
                >
                  Beachfront Access
                </h2>
              </div>
            </div>
            <div className="relative w-full h-[240px] sm:h-[360px] overflow-hidden rounded-4xl">
              <Image
                fill
                src="/Images/hero-banner-1.png"
                alt="Banner"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute flex flex-col inset-0 gap-4 items-center justify-center text-center text-white">
                <h2
                  className={`${cormorantGaramond.className} text-3xl sm:text-5xl`}
                >
                  Water Theme Park
                </h2>
              </div>
            </div>
            <div className="relative w-full h-[240px] sm:h-[360px] overflow-hidden rounded-4xl">
              <Image
                fill
                src="/Images/hero-banner-1.png"
                alt="Banner"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute flex flex-col inset-0 gap-4 items-center justify-center text-center text-white">
                <h2
                  className={`${cormorantGaramond.className} text-3xl sm:text-5xl`}
                >
                  Private Jacuzzis
                </h2>
              </div>
            </div>
            <div className="relative w-full h-[240px] sm:h-[360px] overflow-hidden rounded-4xl">
              <Image
                fill
                src="/Images/hero-banner-1.png"
                alt="Banner"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute flex flex-col inset-0 gap-4 items-center justify-center text-center text-white">
                <h2
                  className={`${cormorantGaramond.className} text-3xl sm:text-5xl`}
                >
                  Dining by the Coast
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-[480px] sm:h-[640px] overflow-hidden">
          <Image
            fill
            src="/Images/hero-banner-1.png"
            alt="Banner"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute flex flex-col inset-0 px-6 lg:px-[280px] sm:px-6 items-center sm:items-end justify-center text-white">
            <div className="flex flex-col p-12 gap-8 w-full sm:w-2xl items-start justify-start text-start rounded-4xl text-amber-500  bg-gradient-to-r from-blue-800 to-blue-600">
              <h2 className={`${merriweather.className} text-3xl sm:text-4xl`}>
                Address
              </h2>
              <p className="flex text-lg text-white">
                Lot 1234, Jalan Pantai Morib
                <br /> Batu 24, 42700 Banting
                <br />
                Selangor, Malaysia
              </p>
              <p className="flex text-lg text-white">
                Check In: 3:00 pm
                <br />
                Check Out: 12:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
