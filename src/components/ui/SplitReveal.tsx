"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export default function SplitReveal({
  words,
  delay = 0,
  stagger = 0.06,
  joiner = " ",
  className,
  /** "mount" fires immediately on render — use for above-the-fold content
   * where IntersectionObserver-based whileInView is unreliable at first
   * paint. "view" (default) triggers on scroll into viewport. */
  trigger = "view",
}: {
  words: ReactNode[];
  delay?: number;
  stagger?: number;
  /** Inserted between segments — use " " for word-level splits, "" for letter-level. */
  joiner?: string;
  className?: string;
  trigger?: "mount" | "view";
}) {
  const revealProps =
    trigger === "mount"
      ? { animate: { y: "0%" } }
      : {
          whileInView: { y: "0%" },
          viewport: { once: true as const, margin: "-100px" },
        };

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            {...revealProps}
            transition={{
              duration: 0.75,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? joiner : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
