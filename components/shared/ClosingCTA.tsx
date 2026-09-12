import CascadeReveal from "@/components/shared/CascadeReveal";
import { Button } from "@/components/shared/Button";

export default function ClosingCTA({ title }: { title: string }) {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <CascadeReveal direction="left">
          <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
            {title}
          </h2>
        </CascadeReveal>
        <CascadeReveal direction="right" delay={0.1}>
          <Button href="/#inquire" variant="primary">
            Let&apos;s Plan It
          </Button>
        </CascadeReveal>
      </div>
    </section>
  );
}
