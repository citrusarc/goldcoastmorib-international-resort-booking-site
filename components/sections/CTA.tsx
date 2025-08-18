import { Button } from "@heroui/button";
import { motion } from "framer-motion";

import { merriweather } from "@/lib/font";

export default function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex flex-col p-12 gap-8 mt-8 sm:mt-16 mb-16 items-center sm:items-start justify-center sm:justify-start text-center sm:text-start rounded-4xl text-amber-500  bg-gradient-to-r from-blue-800 to-blue-600"
    >
      <h2 className={`${merriweather.className} text-3xl sm:text-4xl`}>
        Your Beachfront Escape Awaits
      </h2>
      <p className="flex text-center text-base sm:text-lg text-white">
        Whether it’s a weekend retreat or a long-awaited holiday, the perfect
        stay begins here.
      </p>
      <Button
        as="a"
        href="https://www.agoda.com/en-gb/gold-coast-morib-international-resort/hotel/banting-my.html?cid=1450498&ds=qSflqjSDAunJhkhz"
        target="_blank"
        rel="noopener noreferrer"
        size="lg"
        className="w-fit bg-amber-500 text-white"
      >
        Check Availability test
      </Button>
    </motion.div>
  );
}
