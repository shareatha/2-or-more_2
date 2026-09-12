import Image from "next/image";
import Container from "@/components/shared/Container";
import CascadeReveal from "@/components/shared/CascadeReveal";
import { Button } from "@/components/shared/Button";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export default function PortfolioFilmstrip() {
  return (
    <section id="portfolio" className="bg-beige py-24 sm:py-32">
      <Container className="mb-12 flex flex-col gap-4">
        <CascadeReveal direction="left">
          <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">
            Portfolio
          </span>
        </CascadeReveal>
        <CascadeReveal direction="left" delay={0.1}>
          <h2 className="font-display text-4xl font-bold text-ink sm:text-6xl">
            Events We&apos;ve Brought to Life
          </h2>
        </CascadeReveal>
      </Container>

      <div className="filmstrip flex gap-6 overflow-x-auto px-6 pb-6 sm:px-12 lg:px-20">
        {PORTFOLIO_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group relative h-[26rem] w-[20rem] shrink-0 overflow-hidden sm:w-[24rem]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="384px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent p-6">
              <span className="font-display text-xl font-bold text-white">
                {item.title}
              </span>
              <span className="font-body text-xs uppercase tracking-wide text-gold">
                {item.location}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Container className="mt-12 flex justify-center">
        <Button href="/portfolio" variant="outline-dark">
          View Full Portfolio
        </Button>
      </Container>
    </section>
  );
}
