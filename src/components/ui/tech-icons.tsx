import type { ComponentType } from "react";
import {
  SiReact,
  SiVite,
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiGooglegemini,
  SiPython,
  SiGo,
  SiRust,
  SiPytorch,
  SiLangchain,
  SiFramer,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiTerraform,
  SiGit,
  SiFigma,
  SiLinear,
  SiNotion,
} from "@icons-pack/react-simple-icons";

export type IconComponent = ComponentType<{
  title?: string;
  size?: string | number;
  color?: string;
  className?: string;
}>;

// Only concrete, branded tools/languages get a logo here — conceptual
// items (e.g. "RAG Pipelines", "CI/CD") have no real logo and fall back
// to text wherever this map is used.
export const TECH_ICONS: Record<string, IconComponent> = {
  React: SiReact,
  Vite: SiVite,
  Firebase: SiFirebase,
  "Tailwind CSS": SiTailwindcss,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Gemini API": SiGooglegemini,
  Python: SiPython,
  Go: SiGo,
  Rust: SiRust,
  PyTorch: SiPytorch,
  LangChain: SiLangchain,
  "Framer Motion": SiFramer,
  "Node.js": SiNodedotjs,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  GCP: SiGooglecloud,
  Terraform: SiTerraform,
  Git: SiGit,
  Figma: SiFigma,
  Linear: SiLinear,
  Notion: SiNotion,
};
