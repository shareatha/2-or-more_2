import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import CascadeReveal from "@/components/shared/CascadeReveal";
import ClosingCTA from "@/components/shared/ClosingCTA";
import { BrandMark } from "@/components/shared/BrandName";

export const metadata: Metadata = {
  title: "About | 2 OR MORE",
  description:
    "Meet the team behind 2 OR MORE and learn the philosophy driving our event coordination and planning services.",
};

const VALUES = [
  {
    title: "Organized, always",
    description:
      "Every detail has a home in our system — nothing gets left to chance or memory.",
  },
  {
    title: "Warm, not stiff",
    description:
      "We're professionals, but we're also the friend who shows up early and stays calm under pressure.",
  },
  {
    title: "Present-moment focused",
    description:
      "Our job is to disappear into the background so you can actually enjoy what you planned.",
  },
];

const BEHIND_THE_SCENES = [
  "/images/photos/founder-bw.jpg",
  "/images/photos/notebook-menu.jpg",
  "/images/photos/tablescape-gold.jpg",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={
          <>
            We Started <BrandMark /> to Make Hosting Feel Good Again.
          </>
        }
        image="/images/photos/founder-bw.jpg"
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <CascadeReveal
            direction="left"
            className="relative order-2 h-[26rem] w-full lg:order-1 lg:h-[34rem]"
          >
            <Image
              src="/images/photos/founder-portrait.jpg"
              alt="2 or More founder setting a place card at a reception table"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top lg:rounded-r-3xl"
            />
          </CascadeReveal>

          <CascadeReveal
            direction="right"
            delay={0.15}
            className="order-1 flex flex-col gap-6 px-6 sm:px-12 lg:order-2 lg:pr-16"
          >
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">
              How It Started
            </span>
            <p className="font-body text-base leading-relaxed text-charcoal sm:text-lg">
              After years spent behind the scenes at other people&apos;s
              events — smoothing over vendor hiccups, chasing timelines, and
              making sure no one but us ever noticed a thing went sideways —
              it became clear that every host needs something a little
              different. Some want a partner from the very first decision.
              Others just need someone to step in, take the reins, and
              execute the plan they&apos;ve already built.
            </p>
            <p className="font-body text-base leading-relaxed text-charcoal sm:text-lg">
              <BrandMark /> was made to meet hosts wherever they are in that
              process — an event coordination and planning company built for
              hosts who want it done right, without losing themselves in it.
            </p>
          </CascadeReveal>
        </div>
      </section>

      <section className="bg-beige py-24 sm:py-32">
        <Container className="flex flex-col gap-14">
          <CascadeReveal direction="left">
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight text-ink text-balance sm:text-5xl">
              Beautiful events shouldn&apos;t come at the cost of your sanity.
            </h2>
          </CascadeReveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {VALUES.map((value, i) => (
              <CascadeReveal
                key={value.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={0.1 * i}
                className="flex flex-col gap-3 border-t-2 border-gold pt-6"
              >
                <h3 className="font-display text-xl font-bold text-ink">
                  {value.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-charcoal">
                  {value.description}
                </p>
              </CascadeReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container className="flex flex-col gap-10">
          <CascadeReveal direction="left">
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">
              Behind the Scenes
            </span>
          </CascadeReveal>
          <CascadeReveal direction="left" delay={0.1}>
            <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
              A Day In the Life
            </h2>
          </CascadeReveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {BEHIND_THE_SCENES.map((src, i) => (
              <CascadeReveal
                key={src}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={0.1 * i}
                className="relative h-72 w-full overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Behind the scenes with 2 or More"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </CascadeReveal>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCTA title="Let's talk about your event." />
    </>
  );
}
