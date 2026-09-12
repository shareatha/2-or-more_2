import Image from "next/image";
import { Star } from "lucide-react";
import Container from "@/components/shared/Container";
import CascadeReveal from "@/components/shared/CascadeReveal";
import { TESTIMONIAL_SPOTLIGHT } from "@/lib/constants";

export default function TestimonialSpotlight() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-offwhite py-24">
      <Image
        src={TESTIMONIAL_SPOTLIGHT.image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-offwhite via-offwhite/85 to-offwhite/85" />

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <CascadeReveal direction="left">
          <div className="flex gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold" />
            ))}
          </div>
        </CascadeReveal>
        <CascadeReveal direction="right" delay={0.1}>
          <p className="max-w-3xl font-display text-3xl font-medium leading-snug text-ink text-balance sm:text-4xl lg:text-5xl">
            &ldquo;{TESTIMONIAL_SPOTLIGHT.quote}&rdquo;
          </p>
        </CascadeReveal>
        <CascadeReveal direction="left" delay={0.2}>
          <div className="flex flex-col gap-1">
            <span className="font-body text-sm font-bold uppercase tracking-wide text-gold-dark">
              {TESTIMONIAL_SPOTLIGHT.name}
            </span>
            <span className="font-body text-xs text-charcoal/60">
              {TESTIMONIAL_SPOTLIGHT.service}
            </span>
          </div>
        </CascadeReveal>
      </Container>
    </section>
  );
}
