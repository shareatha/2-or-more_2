import { Fragment, ReactNode } from "react";

const BRAND_NAME_PATTERN = /2\s*or\s*more/gi;

/**
 * Renders the company name as "2 OR MORE" with the numeral bumped up in
 * size so it reads at the same height as the surrounding capital letters.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      <span className="text-[1.2em]">2</span> OR MORE
    </span>
  );
}

/**
 * Splits a plain string on any "2 or More" (case-insensitive) mention and
 * swaps it for <BrandMark />, leaving the rest of the string untouched.
 */
export function withBrandName(text: string): ReactNode {
  const segments = text.split(BRAND_NAME_PATTERN);
  if (segments.length === 1) return text;

  const nodes: ReactNode[] = [];
  segments.forEach((segment, i) => {
    if (segment) nodes.push(<Fragment key={`seg-${i}`}>{segment}</Fragment>);
    if (i < segments.length - 1) nodes.push(<BrandMark key={`mark-${i}`} />);
  });
  return nodes;
}
