"use client";

import { useState } from "react";
import Image from "next/image";
import CascadeReveal from "@/components/shared/CascadeReveal";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  PortfolioCategory,
} from "@/lib/constants";

export default function PortfolioGrid() {
  const [active, setActive] = useState<PortfolioCategory | "All">("All");

  const items = PORTFOLIO_ITEMS.filter(
    (item) => active === "All" || item.category === active
  );

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap justify-center gap-3">
        {(["All", ...PORTFOLIO_CATEGORIES] as const).map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full border px-5 py-2 font-body text-xs font-semibold uppercase tracking-wide transition-colors ${
              active === category
                ? "border-gold bg-gold text-ink"
                : "border-charcoal/20 bg-transparent text-charcoal hover:border-gold hover:text-gold-dark"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((item, i) => (
          <CascadeReveal
            key={item.id}
            direction={i % 2 === 0 ? "left" : "right"}
            delay={0.05 * (i % 3)}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-body text-[11px] font-bold uppercase tracking-wide text-gold">
                {item.category}
              </span>
              <span className="font-display text-lg font-bold text-white">
                {item.title}
              </span>
              <span className="font-body text-xs text-offwhite/80">
                {item.location} &middot; {item.services}
              </span>
            </div>
          </CascadeReveal>
        ))}
      </div>
    </div>
  );
}
