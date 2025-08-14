import { Button } from "@heroui/button";
import { merriweather } from "@/lib/font";

export default function CTASection() {
  return (
    <div className="flex flex-col p-12 gap-8 mt-8 sm:mt-16 items-center sm:items-start justify-center sm:justify-start text-center sm:text-start rounded-4xl text-amber-900 bg-amber-500">
      <h2
        className={`${merriweather.className} text-3xl sm:text-4xl font-bold`}
      >
        Your Beachfront Escape Awaits
      </h2>
      <p className="flex text-center text-lg">
        Whether it’s a weekend retreat or a long-awaited holiday, the perfect
        stay begins here.
      </p>
      <Button size="lg" className="w-fit bg-amber-900 text-white">
        Check Availability
      </Button>
    </div>
  );
}
