// Single source of truth for site content.
// Everything marked "placeholder" below is invented sample content —
// swap it for your real details before publishing.

export const profile = {
  name: "Sebastian Lazarte",
  role: "AI Software Engineer",
  location: "Remote / Open to relocation",
  timeZone: "America/Los_Angeles",
  tagline:
    "I design and ship intelligent systems — from LLM-powered products to the infrastructure that scales them.",
  summary:
    "I'm a software engineer who specializes in applied AI: retrieval-augmented systems, agentic workflows, and the full-stack products they live in. I care about shipping things that are fast, reliable, and quietly well-engineered — no unnecessary complexity, no demos that fall apart in production.",
  email: "etrazalsebastian@gmail.com",
  resumeUrl: "#",
  social: {
    github: "https://github.com/szae444",
  },
  availability: "Available for select freelance & full-time roles",
};

export const stats = [
  { label: "Years of experience", value: "6+" },
  { label: "Products shipped", value: "40+" },
  { label: "AI systems in production", value: "12" },
  { label: "Engineers mentored", value: "20+" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "Go", "Rust", "SQL"],
  },
  {
    title: "AI / ML",
    items: [
      "PyTorch",
      "LangChain",
      "LLM Fine-tuning",
      "RAG Pipelines",
      "Vector Databases",
      "Agentic Workflows",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Infra",
    items: ["Node.js", "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GCP", "Terraform", "CI/CD"],
  },
  {
    title: "Tooling",
    items: ["Git", "Figma", "Linear", "Notion"],
  },
];

export type Project = {
  slug: string;
  name: string;
  year: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
  links: { demo?: string; code?: string };
};

export const projects: Project[] = [
  {
    slug: "uno-headwear",
    name: "Uno Headwear",
    year: "2026",
    category: "E-commerce — streetwear caps",
    description:
      "A live e-commerce storefront for a streetwear headwear brand, built and maintained with a collaborator — full product catalog, cart, and checkout, backed by a Firebase admin panel for inventory and order tracking.",
    stack: ["React", "Vite", "Firebase", "Tailwind CSS"],
    highlights: [
      "Meta Pixel conversion tracking (ViewContent, AddToCart, Purchase)",
      "Native pinch-to-zoom product image viewer",
      "Admin panel with live inventory search and Firestore stats",
      "WebP image pipeline and bundle-size pass for faster loads",
    ],
    image: "/projects/uno-headwear-hero.jpg",
    imageAlt: "Uno Headwear storefront homepage",
    featured: true,
    links: { demo: "https://unoheadwear.com" },
  },
  {
    slug: "brym-and-co",
    name: "BRYM & CO.",
    year: "2026",
    category: "E-commerce — cap brand",
    description:
      "A from-scratch storefront for a cap brand — shop, cart, checkout, wishlist, and lookbook, built solo with an editorial, premium-first design system.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Full shop, cart, checkout & wishlist flow",
      "Custom editorial design system with a bespoke cursor",
      "Lookbook, FAQ, size guide, and shipping/returns pages",
    ],
    image: "/projects/brym-co-hero.jpg",
    imageAlt: "BRYM & CO. storefront homepage",
    links: {},
  },
  {
    slug: "studypal",
    name: "StudyPal",
    year: "2026",
    category: "AI study assistant",
    description:
      "An AI-powered study assistant — upload notes in almost any format and generate explanations, flashcards, and quizzes, backed by a planner and a personal library.",
    stack: ["React", "Vite", "Firebase", "Gemini API"],
    highlights: [
      "Upload text, PDF, Word, CSV, or image notes",
      "AI-generated reviewers, quizzes & flashcards",
      "Study planner and personal library dashboard",
    ],
    image: "/projects/studypal-dashboard.jpg",
    imageAlt: "StudyPal dashboard",
    links: { demo: "https://studypal-6ad75.web.app", code: "https://github.com/szae444/StudyPal" },
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Freelance AI / Software Engineer",
    org: "Self-employed",
    period: "2021 — Present",
    description:
      "Independent engineer partnering with brands and early-stage teams to design, build, and ship production web and AI products end to end — from first commit to live deployment.",
    highlights: [
      "Built and help maintain Uno Headwear, a live e-commerce store with a Firebase backend and Meta Pixel conversion tracking",
      "Designed and shipped the BRYM & CO. storefront solo, including its custom editorial design system",
      "Built StudyPal, an AI study assistant using the Gemini API for generated flashcards, quizzes, and reviewers",
      "Delivered custom web apps and internal tools for small businesses and early-stage startups",
      "Advised clients on AI integration — from prompt design to production-ready RAG pipelines",
    ],
  },
];

export const education = {
  degree: "B.S. in Artificial Intelligence Engineering",
  school: "National University, Philippines",
  period: "2025 — Present",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
