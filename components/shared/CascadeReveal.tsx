"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Slides content in laterally (from the given direction) and fades it in
 * as it scrolls into view. This is the core "cascading lateral" motion
 * signature used throughout this design concept.
 */
export default function CascadeReveal({
  children,
  direction = "left",
  delay = 0,
  className = "",
  id,
}: {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
  id?: string;
}) {
  const offset = direction === "left" ? -80 : 80;

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
