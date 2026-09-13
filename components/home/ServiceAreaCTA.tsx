"use client";

import { FormEvent, useState } from "react";
import { MapPin } from "lucide-react";
import Container from "@/components/shared/Container";
import CascadeReveal from "@/components/shared/CascadeReveal";
import { SERVICE_AREAS } from "@/lib/constants";

const EVENT_TYPES = [
  "Wedding",
  "Birthday",
  "Baby Shower",
  "Bridal Shower",
  "Graduation",
  "Corporate",
  "Community",
  "Other",
];

const inputClasses =
  "w-full rounded-none border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 font-body text-sm text-ink placeholder:text-charcoal/40 outline-none transition-colors focus:border-gold";

type Status = "idle" | "submitting" | "success" | "error";

export default function ServiceAreaCTA() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const endpoint = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    if (!endpoint) {
      console.warn(
        "NEXT_PUBLIC_APPS_SCRIPT_URL is not set — add it to .env.local to enable live submissions."
      );
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-beige py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <CascadeReveal direction="left">
            <h2 className="font-display text-4xl font-bold text-ink text-balance sm:text-5xl">
              We&apos;ll Meet You Where the Celebration Is.
            </h2>
          </CascadeReveal>
          <div className="flex flex-col gap-6">
            {SERVICE_AREAS.map((area, i) => (
              <CascadeReveal key={area.state} direction="left" delay={0.1 * (i + 1)}>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-dark" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      {area.state}
                    </h3>
                    <p className="font-body text-sm text-charcoal/70">{area.cities}</p>
                  </div>
                </div>
              </CascadeReveal>
            ))}
          </div>
        </div>

        <CascadeReveal direction="right" id="inquire" className="scroll-mt-24">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 border border-gold/40 bg-white p-12 text-center">
              <h3 className="font-display text-2xl font-bold text-ink">
                Thanks for reaching out!
              </h3>
              <p className="font-body text-sm text-charcoal/70">
                We&apos;ll review your event details and schedule a consultation
                call within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">
                Let&apos;s Make It Happen
              </span>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input name="name" required placeholder="Full Name*" className={inputClasses} />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email*"
                  className={inputClasses}
                />
                <input name="phone" placeholder="Phone" className={inputClasses} />
                <select name="event_type" defaultValue="" className={inputClasses}>
                  <option value="" disabled>
                    Event Type
                  </option>
                  {EVENT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                name="message"
                rows={3}
                placeholder="What do you need help with?"
                className={inputClasses}
              />
              {status === "error" && (
                <p className="font-body text-sm text-red-600">
                  Something went wrong sending your inquiry. Please try again or
                  email us directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full border border-gold bg-gold px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-dark hover:bg-gold-dark hover:shadow-xl disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Let's Make It Happen"}
              </button>
            </form>
          )}
        </CascadeReveal>
      </Container>
    </section>
  );
}
