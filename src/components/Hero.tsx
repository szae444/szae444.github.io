"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "@/data/content";
import LocalClock from "@/components/ui/LocalClock";
import SplitReveal from "@/components/ui/SplitReveal";
import Magnetic from "@/components/ui/Magnetic";

const rise = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  const first = profile.name.split(" ")[0].split("");
  const last = profile.name.split(" ").slice(1).join(" ").split("");

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden border-b border-line-soft px-6 pt-28 pb-10 sm:px-10"
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 items-center gap-8 lg:grid-cols-12"
      >
        <div className="lg:col-span-8">
          <motion.p
            variants={rise}
            custom={0}
            initial="hidden"
            animate="show"
            className="mb-6 font-mono text-xs uppercase tracking-widest text-muted"
          >
            {profile.role} — {profile.availability}
          </motion.p>

          <h1 className="text-balance font-display text-[15vw] font-normal leading-[0.9] tracking-tight sm:text-[9vw] lg:text-[6.4vw]">
            <span className="block text-paper">
              <SplitReveal words={first} delay={0.1} stagger={0.03} joiner="" trigger="mount" />
            </span>
            <span className="block italic text-signal">
              <SplitReveal words={last} delay={0.35} stagger={0.03} joiner="" trigger="mount" />
            </span>
          </h1>
        </div>

        <motion.div
          variants={rise}
          custom={3}
          initial="hidden"
          animate="show"
          className="lg:col-span-4 lg:justify-self-end"
        >
          <p className="max-w-sm text-balance text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <Magnetic>
              <a
                href="#work"
                className="link-underline inline-block w-fit font-mono text-sm uppercase tracking-widest text-paper"
              >
                View selected work ↗
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="link-underline inline-block w-fit font-mono text-sm uppercase tracking-widest text-muted"
              >
                Or just say hello
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mx-auto flex w-full max-w-[1400px] items-end justify-between font-mono text-xs uppercase tracking-widest text-muted-2"
      >
        <span>{profile.location}</span>
        <LocalClock timeZone={profile.timeZone} />
      </motion.div>
    </section>
  );
}
