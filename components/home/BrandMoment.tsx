import Image from "next/image";
import CascadeReveal from "@/components/shared/CascadeReveal";

/**
 * A quiet full-brand pause between the hero and the body of the page —
 * gives the real "2OR MORE" lockup its own moment rather than only
 * appearing small in the header.
 */
export default function BrandMoment() {
  return (
    <section className="flex flex-col items-center gap-6 bg-offwhite px-6 py-20 text-center sm:py-28">
      <CascadeReveal direction="left">
        <div className="relative h-40 w-64 sm:h-48 sm:w-80">
          <Image
            src="/images/logo/full-light.png"
            alt="2 or More — Event Coordination + Planning"
            fill
            sizes="320px"
            className="object-contain"
          />
        </div>
      </CascadeReveal>
      <CascadeReveal direction="right" delay={0.1}>
        <p className="max-w-lg font-display text-xl italic leading-relaxed text-charcoal">
          Delaware &middot; Maryland &middot; Pennsylvania
        </p>
      </CascadeReveal>
    </section>
  );
}
