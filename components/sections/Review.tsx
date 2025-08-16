import { merriweather } from "@/lib/font";
import { StarSolid } from "iconoir-react";
import { motion } from "framer-motion";

import { quotes } from "@/data/review";

export default function ReviewSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-8 mt-8 sm:mt-16"
    >
      <div className="flex flex-col gap-8 flex-1 items-center justify-center text-center">
        <h2
          className={`${merriweather.className} text-3xl sm:text-4xl text-blue-800`}
        >
          Moments Made, Memories Shared
        </h2>
        <div className="flex flex-row w-full items-center justify-center gap-4 text-slate-800">
          <StarSolid className="w-8 h-8 text-amber-500" />
          <StarSolid className="w-8 h-8 text-amber-500" />
          <StarSolid className="w-8 h-8 text-amber-500" />
          <StarSolid className="w-8 h-8 text-amber-500" />
        </div>
        <p className="flex text-center text-base sm:text-lg text-slate-500">
          4-star review on Google
        </p>
        <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-4 text-slate-800">
          {quotes.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeIn", delay: index * 0.1 }}
            >
              <div className="flex flex-col p-4 gap-4 text-start  rounded-2xl border border-slate-200">
                {item.message}
                <p className="font-semibold text-slate-800">{item.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
