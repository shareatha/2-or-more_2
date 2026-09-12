import { Check } from "lucide-react";
import Container from "@/components/shared/Container";
import CascadeReveal from "@/components/shared/CascadeReveal";
import { Button } from "@/components/shared/Button";
import { WEDDING_TIERS } from "@/lib/constants";

export default function WeddingPricingGrid() {
  return (
    <section id="weddings" className="bg-offwhite py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <CascadeReveal direction="left">
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Weddings
          </h2>
        </CascadeReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {WEDDING_TIERS.map((tier, i) => (
            <CascadeReveal
              key={tier.name}
              direction="left"
              delay={0.1 * i}
              className="flex flex-col justify-between gap-6 border border-charcoal/10 bg-white p-8"
            >
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-xl font-bold text-ink">
                  {tier.name}
                </h3>
                <span className="font-body text-sm font-bold text-gold-dark">
                  {tier.price}
                </span>
                <p className="font-body text-xs italic text-charcoal/70">
                  {tier.bestFor}
                </p>
                <ul className="flex flex-col gap-2">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                      <span className="font-body text-xs text-charcoal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button href="/#inquire" variant="outline-dark" className="w-full text-[10px]">
                Inquire
              </Button>
            </CascadeReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
