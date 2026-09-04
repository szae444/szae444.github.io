import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 font-mono text-xs uppercase tracking-widest text-muted-2 sm:flex-row sm:px-10">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="link-underline transition-colors hover:text-paper">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
