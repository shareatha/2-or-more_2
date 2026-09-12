import Image from "next/image";
import CascadeReveal from "@/components/shared/CascadeReveal";
import { Button } from "@/components/shared/Button";

export default function CategoryCascadeRow({
  id,
  title,
  price,
  description,
  tags,
  image,
  ctaLabel,
  imageFirst = true,
}: {
  id?: string;
  title: string;
  price: string;
  description: string;
  tags: string[];
  image: string;
  ctaLabel: string;
  imageFirst?: boolean;
}) {
  return (
    <section id={id} className="bg-white">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2">
        <CascadeReveal
          direction={imageFirst ? "left" : "right"}
          className={`relative h-80 w-full overflow-hidden lg:h-[30rem] ${
            imageFirst ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image src={image} alt={title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </CascadeReveal>

        <CascadeReveal
          direction={imageFirst ? "right" : "left"}
          delay={0.15}
          className={`flex flex-col gap-5 px-6 py-16 sm:px-12 lg:px-16 ${
            imageFirst ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <h3 className="font-display text-4xl font-bold text-ink sm:text-5xl">{title}</h3>
          <span className="font-body text-sm font-bold text-gold-dark">{price}</span>
          <p className="max-w-md font-body text-base leading-relaxed text-charcoal">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-beige/50 px-3 py-1 font-body text-xs text-charcoal"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button href="/#inquire" variant="outline-dark" className="mt-2 w-fit">
            {ctaLabel}
          </Button>
        </CascadeReveal>
      </div>
    </section>
  );
}
