import Container from "@/components/shared/Container";
import CascadeReveal from "@/components/shared/CascadeReveal";
import { A_LA_CARTE } from "@/lib/constants";

export default function ALaCarteList() {
  return (
    <section className="bg-offwhite py-20">
      <Container className="flex flex-col gap-10">
        <CascadeReveal direction="left">
          <h2 className="font-display text-3xl font-bold text-ink">
            Need a Little More?
          </h2>
        </CascadeReveal>
        <CascadeReveal direction="right" delay={0.1}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {A_LA_CARTE.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between border-b border-charcoal/15 py-2"
              >
                <span className="font-body text-sm text-charcoal">{item.name}</span>
                <span className="font-body text-sm font-semibold text-gold-dark">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </CascadeReveal>
      </Container>
    </section>
  );
}
