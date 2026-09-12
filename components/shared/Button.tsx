import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline-light" | "outline-dark";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-dark border border-gold hover:border-gold-dark",
  "outline-light":
    "bg-transparent text-white border border-white/50 hover:bg-gold hover:text-ink hover:border-gold",
  "outline-dark":
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-white",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  target,
  rel,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
