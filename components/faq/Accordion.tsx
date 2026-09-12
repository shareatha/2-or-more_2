"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { withBrandName } from "@/components/shared/BrandName";
import { FAQ_ITEMS } from "@/lib/constants";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col divide-y divide-charcoal/10">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="py-2">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-bold text-ink sm:text-xl">
                {withBrandName(item.question)}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-gold-dark transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 font-body text-sm leading-relaxed text-charcoal">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
