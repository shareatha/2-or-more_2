"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/shared/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="2 or More home" className="relative block h-16 w-20 shrink-0 sm:h-20 sm:w-24">
          <Image
            src="/images/logo/full-light.png"
            alt="2 or More — Event Coordination + Planning"
            fill
            sizes="100px"
            priority
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/#inquire" variant="primary" className="px-6 py-3 text-[11px]">
            Let&apos;s Plan It
          </Button>
        </div>

        <button
          className="text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-ink px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="/#inquire"
              variant="primary"
              className="mt-2 w-full py-3 text-[11px]"
            >
              Let&apos;s Plan It
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
