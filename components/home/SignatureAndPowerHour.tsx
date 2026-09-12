import Image from "next/image";
import Container from "@/components/shared/Container";
import CascadeReveal from "@/components/shared/CascadeReveal";
import { Button } from "@/components/shared/Button";
import { SIGNATURE_OFFER, POWER_HOUR } from "@/lib/constants";

export default function SignatureAndPowerHour() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/photos/tablescape-black-gold.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink" />

      <Container className="relative grid grid-cols-1 gap-16 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <CascadeReveal direction="left">
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Signature Offer &middot; {SIGNATURE_OFFER.price}
            </span>
          </CascadeReveal>
          <CascadeReveal direction="left" delay={0.1}>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white text-balance sm:text-5xl">
              {SIGNATURE_OFFER.headline}
            </h2>
          </CascadeReveal>
          <CascadeReveal direction="left" delay={0.2}>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-offwhite/80">
              {SIGNATURE_OFFER.description}
            </p>
          </CascadeReveal>
          <CascadeReveal direction="left" delay={0.3}>
            <Button href="/#inquire" variant="primary" className="mt-8">
              Let&apos;s Plan It
            </Button>
          </CascadeReveal>
        </div>

        <CascadeReveal
          direction="right"
          className="flex flex-col justify-center gap-4 border-t border-gold/30 pt-10 lg:col-span-2 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
        >
          <span className="font-display text-2xl font-bold text-gold">
            {POWER_HOUR.name}
          </span>
          <span className="font-display text-3xl font-bold text-white">
            {POWER_HOUR.price}
          </span>
          <p className="font-body text-sm leading-relaxed text-offwhite/70">
            {POWER_HOUR.description}
          </p>
          <Button href="/#inquire" variant="outline-light" className="w-fit">
            Book a Power Hour
          </Button>
        </CascadeReveal>
      </Container>
    </section>
  );
}
