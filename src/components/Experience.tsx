import { experience, education } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line-soft py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            04 / Experience
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-normal text-paper sm:text-4xl">
            <SplitReveal words={["Where", "I've", "worked"]} />
          </h2>
        </Reveal>

        <div className="border-t border-line-soft">
          {experience.map((role, i) => (
            <Reveal key={role.org} delay={i * 0.05}>
              <div className="flex flex-col gap-4 border-b border-line-soft py-8 sm:flex-row sm:gap-10 lg:py-10">
                <span className="shrink-0 font-mono text-xs text-muted-2 sm:w-32">
                  {role.period}
                </span>

                <div className="flex-1">
                  <h3 className="font-display text-2xl text-paper">
                    {role.role}
                    <span className="text-muted"> — {role.org}</span>
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {role.description}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {role.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={experience.length * 0.05}>
            <div className="flex flex-col gap-4 border-b border-line-soft py-8 sm:flex-row sm:gap-10">
              <span className="shrink-0 font-mono text-xs text-muted-2 sm:w-32">
                {education.period}
              </span>
              <h3 className="font-display text-2xl text-paper">
                {education.degree}
                <span className="text-muted"> — {education.school}</span>
              </h3>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
