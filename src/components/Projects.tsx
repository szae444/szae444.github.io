import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";
import TechStack from "@/components/ui/TechStack";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function ProjectLinks({ links }: { links: Project["links"] }) {
  if (!links.demo && !links.code) return null;
  return (
    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-2">
      {links.demo && (
        <a
          href={links.demo}
          className="flex items-center gap-1.5 transition-colors hover:text-paper"
        >
          Visit site <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
      {links.code && (
        <a
          href={links.code}
          className="flex items-center gap-1.5 transition-colors hover:text-paper"
        >
          <GithubIcon className="h-3.5 w-3.5" /> Source
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <a
      href={project.links.demo ?? undefined}
      className="group grid grid-cols-1 gap-8 border-b border-line-soft py-10 lg:grid-cols-2 lg:items-center lg:gap-12"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line-soft bg-surface sm:aspect-video">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>

      <div>
        <span className="font-mono text-xs uppercase tracking-widest text-muted-2">
          {project.category} · {project.year}
        </span>
        <h3 className="mt-2 font-display text-4xl text-paper transition-colors group-hover:text-signal sm:text-5xl">
          {project.name}
        </h3>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-col gap-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
              {h}
            </li>
          ))}
        </ul>
        <TechStack items={project.stack} className="mt-5" />
        {project.links.demo && (
          <span className="mt-6 flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-2 transition-colors group-hover:text-paper">
            Visit site <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col border-b border-line-soft py-10 first:pt-0 sm:border-b-0 sm:border-r sm:py-0 sm:pr-8 last:border-r-0 last:pr-0">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-line-soft bg-surface">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>

      <span className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-2">
        {project.category} · {project.year}
      </span>
      <h3 className="mt-2 font-display text-2xl text-paper">{project.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-col gap-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-3 text-sm text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
            {h}
          </li>
        ))}
      </ul>
      <TechStack items={project.stack} className="mt-4" />
      <div className="mt-5">
        <ProjectLinks links={project.links} />
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section id="work" className="border-b border-line-soft py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal className="mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            03 / Selected work
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-normal text-paper sm:text-4xl">
            <SplitReveal words={["Things", "I've", "shipped"]} />
          </h2>
        </Reveal>

        <Reveal>
          <FeaturedProject project={featured} />
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 pt-10 sm:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
