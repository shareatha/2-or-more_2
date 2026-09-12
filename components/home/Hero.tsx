"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/shared/Button";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex h-screen items-end overflow-hidden bg-ink">
      <motion.div style={{ y }} className="absolute inset-0 h-[130%] w-full">
        <Image
          src="/images/photos/ceremony-arch.jpg"
          alt="Floral ceremony arch and gold chiavari chairs at a 2 or More coordinated wedding"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />

      <motion.div
        style={{ opacity }}
        className="relative w-full px-6 pb-24 sm:px-12 lg:px-20 lg:pb-32"
      >
        <div className="max-w-5xl">
          <span className="mb-6 block font-body text-xs font-bold uppercase tracking-[0.4em] text-gold">
            Delaware &middot; Maryland &middot; Pennsylvania
          </span>
          <h1 className="font-display text-[13vw] font-bold uppercase leading-[0.92] text-white sm:text-[9vw] lg:text-[7vw]">
            More than
            <br />
            <span className="ml-[8vw] text-gold sm:ml-[10vw]">a plan.</span>
          </h1>
          <p className="mt-8 max-w-md font-body text-base leading-relaxed text-offwhite/85 sm:text-lg">
            A perfectly executed experience — event coordination and planning
            for weddings, celebrations, and everything worth gathering for.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/#inquire" variant="primary">
              Let&apos;s Plan It
            </Button>
            <Button href="#portfolio" variant="outline-light">
              See Our Work
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 right-8 hidden flex-col items-center gap-2 sm:flex">
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
