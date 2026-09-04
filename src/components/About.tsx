import { profile, stats } from "@/data/content";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-line-soft py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-widest text-signal">
              01 / About
            </span>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-balance font-display text-3xl font-normal leading-[1.15] text-paper sm:text-4xl lg:text-[2.75rem]">
                <span className="float-left mr-2 font-display text-6xl leading-[0.75] text-signal sm:text-7xl">
                  {profile.summary.charAt(0)}
                </span>
                {profile.summary.slice(1)}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
                Based in {profile.location}. I work closely with product and
                design to turn ambiguous problems into systems that are
                simple to reason about — and I sweat the details that make
                software feel fast.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={0.15}>
              <dl className="flex flex-col divide-y divide-line-soft border-t border-line-soft lg:border-t-0">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1 py-4">
                    <dt className="order-2 text-xs text-muted">
                      {stat.label}
                    </dt>
                    <dd className="order-1 font-display text-3xl text-paper">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
