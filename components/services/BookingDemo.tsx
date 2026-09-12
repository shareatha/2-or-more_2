import Script from "next/script";
import Container from "@/components/shared/Container";
import CascadeReveal from "@/components/shared/CascadeReveal";
import { Button } from "@/components/shared/Button";
import { BrandMark } from "@/components/shared/BrandName";
import { BOOKING_DEMO } from "@/lib/constants";

export default function BookingDemo() {
  return (
    <section id="book" className="bg-white py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <CascadeReveal direction="left">
          <div className="flex flex-col gap-4">
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">
              Example Booking Experience
            </span>
            <h2 className="max-w-2xl font-display text-4xl font-bold text-ink text-balance sm:text-5xl">
              Pick a Time. Reserve Your Date.
            </h2>
            <p className="max-w-2xl font-body text-base leading-relaxed text-charcoal/80">
              A preview of how scheduling and deposits could work right on
              the site — book a consultation below, then reserve your date
              with a secure deposit.
            </p>
          </div>
        </CascadeReveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <CascadeReveal
            direction="left"
            delay={0.1}
            className="overflow-hidden rounded-lg border border-charcoal/10 lg:col-span-3"
          >
            <div
              className="calendly-inline-widget"
              data-url={BOOKING_DEMO.calendlyUrl}
              style={{ minWidth: "280px", height: "650px" }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
          </CascadeReveal>

          <CascadeReveal
            direction="right"
            delay={0.2}
            className="flex flex-col justify-between gap-6 border border-charcoal/10 bg-beige/40 p-8 lg:col-span-2"
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-xl font-bold text-ink">
                {BOOKING_DEMO.packageName}
              </h3>
              <p className="font-body text-sm leading-relaxed text-charcoal/70">
                Reserve your date now with a refundable deposit. The
                remaining balance is due 30 days before your event.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-ink">
                  {BOOKING_DEMO.depositAmount}
                </span>
                <span className="font-body text-xs uppercase tracking-wide text-charcoal/50">
                  deposit
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                href={BOOKING_DEMO.depositPaymentLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full"
              >
                Reserve With a Deposit
              </Button>
              <p className="font-body text-[11px] leading-relaxed text-charcoal/50">
                You&apos;ll be securely redirected to Stripe to complete
                payment — <BrandMark /> never sees or stores your card
                details.
              </p>
            </div>
          </CascadeReveal>
        </div>
      </Container>
    </section>
  );
}
