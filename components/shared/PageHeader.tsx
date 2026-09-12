import Image from "next/image";
import CascadeReveal from "@/components/shared/CascadeReveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden bg-ink">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />

      <div className="relative w-full px-6 pb-16 sm:px-12 lg:px-20">
        <CascadeReveal direction="left">
          <span className="mb-4 block font-body text-xs font-bold uppercase tracking-[0.4em] text-gold">
            {eyebrow}
          </span>
        </CascadeReveal>
        <CascadeReveal direction="left" delay={0.1}>
          <h1 className="max-w-3xl font-display text-5xl font-bold text-white text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </CascadeReveal>
        {description && (
          <CascadeReveal direction="left" delay={0.2}>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-offwhite/80">
              {description}
            </p>
          </CascadeReveal>
        )}
      </div>
    </section>
  );
}
