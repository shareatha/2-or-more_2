import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { NAV_LINKS, SERVICE_AREAS, SITE } from "@/lib/constants";
import Container from "@/components/shared/Container";
import { BrandMark } from "@/components/shared/BrandName";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-offwhite">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="relative h-20 w-40">
            <Image
              src="/images/logo/full-dark.png"
              alt="2 or More — Event Coordination + Planning"
              fill
              sizes="160px"
              className="object-contain object-left"
            />
          </div>
          <p className="max-w-xs font-body text-sm leading-relaxed text-offwhite/60">
            {SITE.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Explore
          </h4>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-offwhite/70 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Where We Go
          </h4>
          {SERVICE_AREAS.map((area) => (
            <span key={area.state} className="font-body text-sm text-offwhite/70">
              {area.state}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Get In Touch
          </h4>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 font-body text-sm text-offwhite/70 transition-colors hover:text-gold"
          >
            <Mail className="h-4 w-4" /> {SITE.email}
          </a>
          <a
            href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
            className="flex items-center gap-2 font-body text-sm text-offwhite/70 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="font-body text-xs text-offwhite/40">
            &copy; {new Date().getFullYear()} <BrandMark /> Events. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
