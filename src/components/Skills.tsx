import { skillGroups } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import SplitReveal from "@/components/ui/SplitReveal";
import TechStack from "@/components/ui/TechStack";

const allSkills = skillGroups.flatMap((g) => g.items);

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line-soft py-24 sm:py-32">
      <Marquee items={allSkills} />

      <div className="mx-auto max-w-[1400px] px-6 pt-16 sm:px-10 sm:pt-20">
        <Reveal className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            02 / Toolkit
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-normal text-paper sm:text-4xl">
            <SplitReveal words={["What", "I", "build", "with"]} />
          </h2>
        </Reveal>

        <div className="border-t border-line-soft">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.04}>
              <div className="group flex flex-col gap-4 border-b border-line-soft py-6 sm:flex-row sm:items-center sm:gap-10 sm:py-7">
                <h3 className="w-full shrink-0 font-display text-xl italic text-paper transition-colors group-hover:text-signal sm:w-56">
                  {group.title}
                </h3>
                <TechStack items={group.items} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
