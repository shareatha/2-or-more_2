import Image from "next/image";
import CascadeReveal from "@/components/shared/CascadeReveal";
import { Button } from "@/components/shared/Button";
import { FOUNDER } from "@/lib/constants";

export default function AboutSplit() {
  return (
    <section className="relative overflow-hidden bg-offwhite py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <CascadeReveal
          direction="left"
          className="relative order-2 col-span-1 h-[28rem] w-full lg:order-1 lg:col-span-7 lg:h-[36rem]"
        >
          <Image
            src={FOUNDER.image}
            alt="2 or More founder at work"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-top lg:rounded-r-3xl"
          />
          <div className="absolute bottom-6 right-6 h-28 w-28 drop-shadow-xl sm:h-36 sm:w-36">
            <Image
              src="/images/logo/submark.png"
              alt="2 or More — Events Done Right"
              fill
              sizes="144px"
              className="object-contain"
            />
          </div>
        </CascadeReveal>

        <CascadeReveal
          direction="right"
          delay={0.15}
          className="order-1 col-span-1 flex flex-col gap-6 px-6 sm:px-12 lg:order-2 lg:col-span-5 lg:pr-16"
        >
          <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">
            About 2 or More
          </span>
          <h2 className="font-display text-4xl font-bold leading-tight text-ink text-balance sm:text-5xl">
            The organized friend who has everything under control.
          </h2>
          <p className="font-display text-xl italic leading-relaxed text-charcoal">
            &ldquo;{FOUNDER.quote}&rdquo;
          </p>
          <Button href="/about" variant="outline-dark" className="w-fit">
            Meet the Team
          </Button>
        </CascadeReveal>
      </div>
    </section>
  );
}
