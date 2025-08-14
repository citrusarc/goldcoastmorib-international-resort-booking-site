import { merriweather } from "@/lib/font";
import { StarSolid } from "iconoir-react";
import { quotes } from "@/data/review";

export default function ReviewSection() {
  return (
    <div className="flex flex-col gap-8 mt-8 sm:mt-16">
      <div className="flex flex-col gap-8 flex-1 items-center justify-center text-center">
        <h2
          className={`${merriweather.className} text-3xl sm:text-4xl font-bold`}
        >
          Moments Made, Memories Shared
        </h2>
        <div className="flex flex-row w-full items-center justify-center gap-4 text-slate-800">
          <StarSolid className="w-8 h-8" />
          <StarSolid className="w-8 h-8" />
          <StarSolid className="w-8 h-8" />
          <StarSolid className="w-8 h-8" />
        </div>
        <p className="flex text-center text-lg text-slate-500">
          4-star review on Google
        </p>
        <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-4 text-slate-800">
          {quotes.map((item) => (
            <div
              key={item.author}
              className="flex flex-col p-4 gap-4 text-start rounded-2xl border border-slate-200"
            >
              {item.message}
              <p className="font-semibold">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
