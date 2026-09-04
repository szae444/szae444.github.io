"use client";

import { useState } from "react";
import { profile } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";
import Magnetic from "@/components/ui/Magnetic";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — the visible email text is enough of a fallback
    }
  };

  return (
    <section id="contact" className="border-b border-line-soft py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            05 / Contact
          </span>
        </Reveal>

        <h2 className="mt-6 text-balance font-display text-5xl font-normal leading-[1.05] text-paper sm:text-7xl lg:text-8xl">
          <SplitReveal words={["Let's", "build"]} />
          <br />
          <SplitReveal
            words={[
              "something",
              <span key="worth" className="italic text-signal">
                worth
              </span>,
              <span key="shipping" className="italic text-signal">
                shipping.
              </span>,
            ]}
            delay={0.2}
          />
        </h2>

        <Reveal delay={0.5} className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <Magnetic strength={0.25}>
            <button
              onClick={copyEmail}
              className="link-underline font-display text-2xl text-paper sm:text-3xl"
            >
              {profile.email}
            </button>
          </Magnetic>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-2">
            {copied ? "copied ✓" : "click to copy"}
          </span>
        </Reveal>

        <Reveal delay={0.22} className="mt-16 flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-paper"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
