import Script from "next/script";
import Container from "@/components/shared/Container";
import CascadeReveal from "@/components/shared/CascadeReveal";

const CAL_LINK = "reigninlife/discovery30";
const CAL_INLINE_TARGET_ID = "cal-inline-discovery-demo";

export default function CalComBookingDemo() {
  return (
    <section className="bg-beige/40 py-24 sm:py-32">
      <Container className="flex flex-col gap-10">
        <CascadeReveal direction="left">
          <div className="flex flex-col gap-4">
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">
              Another Scheduling Option
            </span>
            <h2 className="max-w-2xl font-display text-4xl font-bold text-ink text-balance sm:text-5xl">
              Book a Free Quick Consultation
            </h2>
            <p className="max-w-2xl font-body text-base leading-relaxed text-charcoal/80">
              A preview of the same scheduling step using Cal.com instead of Calendly, so it&apos;s
              easy to compare the two visitor experiences side by side.
            </p>
          </div>
        </CascadeReveal>

        <CascadeReveal
          direction="left"
          delay={0.1}
          className="overflow-hidden rounded-lg border border-charcoal/10 bg-white"
        >
          <div
            id={CAL_INLINE_TARGET_ID}
            style={{ width: "100%", height: "650px", overflow: "scroll" }}
          />
        </CascadeReveal>

        <Script id="cal-com-embed-init" strategy="afterInteractive">
          {`
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");

            Cal("init", { origin: "https://cal.com" });

            Cal("inline", {
              elementOrSelector: "#${CAL_INLINE_TARGET_ID}",
              calLink: "${CAL_LINK}",
              layout: "month_view",
            });

            Cal("ui", {
              hideEventTypeDetails: false,
              layout: "month_view",
            });
          `}
        </Script>
      </Container>
    </section>
  );
}
