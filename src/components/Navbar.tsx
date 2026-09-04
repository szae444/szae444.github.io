"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/content";
import Magnetic from "@/components/ui/Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-line-soft bg-ink/90 backdrop-blur-sm" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10">
        <a href="#top" className="font-mono text-xs uppercase tracking-widest text-paper">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-paper"
              >
                <span className="text-muted-2">0{i + 1}</span> {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Magnetic strength={0.5}>
            <a
              href="#contact"
              className="link-underline inline-block font-mono text-xs uppercase tracking-widest text-paper"
            >
              Say hello
            </a>
          </Magnetic>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-paper transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-paper transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line-soft bg-ink px-6 py-8 md:hidden">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-paper"
                >
                  <span className="mr-3 font-mono text-sm text-muted-2">
                    0{i + 1}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-display text-2xl italic text-signal"
              >
                Say hello
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
