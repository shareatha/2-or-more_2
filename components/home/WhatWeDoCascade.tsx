import Image from "next/image";
import CascadeReveal from "@/components/shared/CascadeReveal";
import { WHAT_WE_DO } from "@/lib/constants";

export default function WhatWeDoCascade() {
  return (
    <section className="bg-offwhite py-24 sm:py-32">
      <div className="flex flex-col">
        {WHAT_WE_DO.map((item, i) => {
          const imageFirst = i % 2 === 0;
          return (
            <div
              key={item.title}
              className="grid grid-cols-1 items-center lg:grid-cols-2"
            >
              <CascadeReveal
                direction={imageFirst ? "left" : "right"}
                className={`relative h-80 w-full overflow-hidden lg:h-[32rem] ${
                  imageFirst ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </CascadeReveal>

              <CascadeReveal
                direction={imageFirst ? "right" : "left"}
                delay={0.15}
                className={`flex flex-col gap-4 px-6 py-16 sm:px-12 lg:px-20 ${
                  imageFirst ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <span className="font-display text-6xl font-bold text-gold/25 sm:text-7xl">
                  0{i + 1}
                </span>
                <h3 className="font-display text-4xl font-bold text-ink sm:text-5xl">
                  {item.title}
                </h3>
                <p className="max-w-md font-body text-base leading-relaxed text-charcoal">
                  {item.description}
                </p>
              </CascadeReveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
