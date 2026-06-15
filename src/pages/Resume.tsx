import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Code2,
  Cpu,
  Dumbbell,
  ExternalLink,
  Globe,
  Mail,
  Network,
  Printer,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  type IconType,
} from "react-icons/si";
import ThemeToggle from "@/components/ThemeToggle";

const RESUME_PDF_URL = "/Resume.pdf";
const PROFILE_IMAGE_URL =
  "https://obibedjddoyfsbnndrhf.supabase.co/storage/v1/object/public/assets/personal-picture.jpg";

type BrandIcon = IconType;

type ContactItem = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  icon: LucideIcon | BrandIcon;
  iconType: "lucide" | "brand";
};

type SkillItem = {
  name: string;
  icon: LucideIcon | BrandIcon;
  iconType: "lucide" | "brand";
};

type ProjectItem = {
  name: string;
  description: string;
  href?: string;
  githubHref?: string;
};

type InterestItem = {
  label: string;
  icon: LucideIcon;
};

const CONTACTS: ContactItem[] = [
  {
    label: "Email",
    value: "lazarbukejlovic@icloud.com",
    href: "mailto:lazarbukejlovic@icloud.com",
    icon: Mail,
    iconType: "lucide",
  },
  {
    label: "Website",
    value: "personal-website-tau-sandy.vercel.app",
    href: "https://personal-website-tau-sandy.vercel.app/",
    external: true,
    icon: Globe,
    iconType: "lucide",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lazar-bukejlovic",
    href: "https://www.linkedin.com/in/lazar-bukejlovic",
    external: true,
    icon: ExternalLink,
    iconType: "lucide",
  },
  {
    label: "GitHub",
    value: "github.com/lazarbukejlovic",
    href: "https://github.com/lazarbukejlovic",
    external: true,
    icon: SiGithub,
    iconType: "brand",
  },
];

const EXPERIENCE = [
  {
    company: "TokenFlow",
    title: "Full-Stack Engineer",
    period: "January 2025 – Present",
    points: [
      "React/TypeScript product engineering across multiple active workstreams, owning features from requirements through production deployment.",
      "Built client-facing product surfaces including authenticated dashboards, API-driven views, form-heavy screens, responsive layouts, and loading/error/empty states.",
      "Worked with Node.js/Express, Supabase/PostgreSQL, auth/session logic, Stripe billing flows, Docker-based environments, and Jest-tested production features.",
      "Debugged frontend, API, authentication, and data-flow issues from active tickets and client feedback, communicating tradeoffs clearly and shipping scoped fixes without blocking delivery.",
    ],
  },
  {
    company: "ScaleRoad LLC",
    title: "Full-Stack Software Engineer",
    period: "December 2023 – January 2025",
    points: [
      "Built operational dashboards and internal tooling for records, payments, subscriptions, and status tracking using React, TypeScript, Node.js, REST APIs, and PostgreSQL.",
      "Implemented strict frontend-backend API contracts and defensive data-fetching patterns to improve reliability across latency-sensitive product surfaces.",
      "Optimized dashboard state management, lazy-loading, and responsive layouts, improving page load performance and reducing user-facing friction.",
      "Owned full delivery lifecycle across assigned features, including scoping, UI implementation, backend integration, QA, bug fixes, and production launch.",
    ],
  },
  {
    company: "Vertex Digital Studio",
    title: "Full-Stack Engineer",
    period: "June 2022 – December 2023",
    points: [
      "Delivered custom full-stack applications for fintech, SaaS, digital asset, and e-commerce clients.",
      "Built authenticated dashboards, CRUD views, REST API workflows, payment flows, reusable React/TypeScript UI patterns, and responsive product interfaces.",
      "Architected secure auth flows, relational data models, and API-connected workflows across client projects.",
      "Managed client work end to end — from scope planning and implementation to testing, deployment, documentation, and handoff.",
    ],
  },
];

const PROJECTS: ProjectItem[] = [
  {
    name: "Sightline",
    description:
      "Market-ready competitive-intelligence SaaS that monitors competitor pricing pages, changelogs, news, and hiring pages, detects meaningful changes, summarizes impact with AI, tracks confidence and evidence, and supports cited Ask/RAG answers, scheduled digests, review queues, Stripe billing, AI usage analytics, audit logs, and real-time collaborative battlecards.",
    href: "https://sightline-eosin.vercel.app/",
    githubHref: "https://github.com/lazarbukejlovic/sightline",
  },
  {
    name: "MindPad AI",
    description:
      "AI-powered writing and knowledge management platform with intelligent note organization, contextual search, and a focused writing experience. Built to explore AI product integration with clean, user-first interface design.",
    href: "https://mindpad-ai-five.vercel.app/",
    githubHref: "https://github.com/lazarbukejlovic/mindpad-ai",
  },
  {
    name: "AtlasBrief",
    description:
      "Production-ready travel intelligence SaaS built with React, TypeScript, Supabase Auth, RLS-backed data persistence, Stripe billing, plan-based limits, watchlists, stay planner, reports, alerts, comparison tools, protected dashboard surfaces, and Vercel deployment.",
    href: "https://atlasbrief.vercel.app",
  },
  {
    name: "GeoRisk Platform",
    description:
      "Geopolitical risk intelligence dashboard with conflict monitoring, market-impact sections, historical context views, modular risk content, and decision-focused reporting flows across responsive layouts.",
    href: "https://georisk-platform.vercel.app/",
  },
  {
    name: "EchoRoom",
    description:
      "Real-time social/developer conversation platform with feed interactions, messaging, discovery flows, live activity panels, defensive empty states, and responsive navigation.",
    href: "https://echo-room-teal.vercel.app/",
  },
  {
    name: "ForgeDesk",
    description:
      "SaaS/workspace product with protected admin-style flows, product management UX, workspace structure, and Stripe checkout positioning.",
    href: "https://forgedesk-eosin.vercel.app/",
  },
  {
    name: "Foundry Studios",
    description:
      "Booking and reservation platform centered on service scheduling, payment-oriented flows, and polished customer-facing booking UX.",
    href: "https://foundrystudios.vercel.app/",
  },
  {
    name: "ClientFlow",
    description:
      "ClientFlow is a business operations dashboard for managing clients, projects, invoices, deadlines, and workflow visibility.",
    href: "https://client-flow-tawny-eight.vercel.app/",
  },
  {
    name: "RoomPulse",
    description:
      "RoomPulse is a workflow and task management product built around boards, rooms, activity tracking, and operational visibility.",
    href: "https://room-pulse-seven.vercel.app/",
  },
];

const SKILLS: SkillItem[] = [
  { name: "React",           icon: SiReact,      iconType: "brand" },
  { name: "TypeScript",      icon: SiTypescript, iconType: "brand" },
  { name: "Next.js",         icon: SiNextdotjs,  iconType: "brand" },
  { name: "Tailwind CSS",    icon: SiTailwindcss,iconType: "brand" },
  { name: "Node.js",         icon: SiNodedotjs,  iconType: "brand" },
  { name: "Express",         icon: SiExpress,    iconType: "brand" },
  { name: "REST APIs",       icon: Network,      iconType: "lucide" },
  { name: "PostgreSQL",      icon: SiPostgresql, iconType: "brand" },
  { name: "Prisma",          icon: SiPrisma,     iconType: "brand" },
  { name: "Supabase",        icon: SiSupabase,   iconType: "brand" },
  { name: "Stripe API",      icon: SiStripe,     iconType: "brand" },
  { name: "Authentication",  icon: ShieldCheck,  iconType: "lucide" },
  { name: "Git / GitHub",    icon: SiGithub,     iconType: "brand" },
  { name: "Vercel",          icon: SiVercel,     iconType: "brand" },
  { name: "Docker",          icon: Code2,        iconType: "lucide" },
  { name: "Jest",            icon: Sparkles,     iconType: "lucide" },
  { name: "QA / Debugging",  icon: Sparkles,     iconType: "lucide" },
];

const INTERESTS: InterestItem[] = [
  { label: "Traveling",                    icon: Globe },
  { label: "Investing / BTC & ETH",        icon: Sparkles },
  { label: "Working Out",                  icon: Dumbbell },
  { label: "Product Building / Technology", icon: Cpu },
];

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-heading text-[11px] font-semibold tracking-[0.28em] uppercase text-primary">
        {label}
      </span>
      <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.25), transparent)" }} />
    </div>
  );
}

function ResumeIcon({
  icon: Icon,
  iconType,
  className,
}: {
  icon: LucideIcon | BrandIcon;
  iconType: "lucide" | "brand";
  className: string;
}) {
  if (iconType === "lucide") {
    const Lucide = Icon as LucideIcon;
    return <Lucide className={className} strokeWidth={1.85} />;
  }
  const Brand = Icon as BrandIcon;
  return <Brand className={className} />;
}

export default function Resume() {
  return (
    <div className="resume-stage min-h-screen bg-[#060810] px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      {/* Top bar */}
      <div
        className="no-print fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
        style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(5,5,7,0.90)" }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            <ArrowLeft size={16} /> Back
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors hover:text-white sm:inline-flex"
              style={{ borderColor: "rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.60)" }}
            >
              Open PDF
            </a>
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.92)", color: "#060810" }}
            >
              <Printer size={14} /> Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* Resume document */}
      <article
        className="resume-document resume-sheet mx-auto mt-16 max-w-6xl overflow-hidden rounded-[28px] shadow-[0_28px_90px_rgba(0,0,0,0.7)]"
        style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(8,8,10,0.97)" }}
      >
        <div className="grid lg:grid-cols-[300px_minmax(0,1fr)]">

          {/* ── Sidebar ──────────────────────────────────────────── */}
          <aside
            className="resume-sidebar relative overflow-hidden px-6 py-8 text-white sm:px-7 lg:min-h-[1120px]"
            style={{ background: "linear-gradient(180deg, #0c0c0e 0%, #080808 100%)", borderRight: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* Sidebar ambient glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(circle at top left, rgba(255,255,255,0.04), transparent 42%)" }}
            />

            <div className="relative">
              {/* Profile block */}
              <div className="resume-block">
                <div
                  className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary"
                  style={{ border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.06)" }}
                >
                  Resume Profile
                </div>
                <div
                  className="mt-5 overflow-hidden rounded-[22px] p-1.5"
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.04)",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.48)",
                  }}
                >
                  <img
                    src={PROFILE_IMAGE_URL}
                    alt="Lazar Bukejlovic"
                    className="aspect-[4/5] w-full rounded-[18px] object-cover"
                  />
                </div>
                <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  I build full-stack product systems where frontend execution, backend architecture, and delivery reliability matter.
                </p>
              </div>

              {/* Contact */}
              <section className="resume-block mt-8">
                <SectionLabel label="Contact" />
                <div className="mt-4 space-y-3">
                  {CONTACTS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer noopener" : undefined}
                      className="resume-link flex items-start gap-3 rounded-xl px-3 py-3 transition-colors"
                      style={{
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.03)",
                      }}
                    >
                      <div
                        className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-primary"
                        style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}
                      >
                        <ResumeIcon icon={item.icon} iconType={item.iconType} className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: "rgba(255,255,255,0.38)" }}>
                          {item.label}
                        </p>
                        <p className="mt-1 break-all text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section className="resume-block mt-8">
                <SectionLabel label="Technical Skills" />
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {SKILLS.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-xl px-3 py-3"
                      style={{ border: "1px solid rgba(120,180,230,0.1)", background: "rgba(255,255,255,0.03)" }}
                    >
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-primary"
                        style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}
                      >
                        <ResumeIcon icon={skill.icon} iconType={skill.iconType} className="h-[17px] w-[17px]" />
                      </div>
                      <p className="mt-2 text-xs font-medium leading-snug" style={{ color: "rgba(255,255,255,0.80)" }}>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Interests */}
              <section className="resume-block mt-8">
                <SectionLabel label="Interests" />
                <div className="mt-4 space-y-2.5">
                  {INTERESTS.map((interest) => {
                    const Icon = interest.icon;
                    return (
                      <div
                        key={interest.label}
                        className="flex items-center gap-3 rounded-xl px-3 py-3"
                        style={{ border: "1px solid rgba(120,180,230,0.1)", background: "rgba(255,255,255,0.03)" }}
                      >
                        <div
                          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-primary"
                          style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}
                        >
                          <Icon className="h-4 w-4" strokeWidth={1.85} />
                        </div>
                        <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{interest.label}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </aside>

          {/* ── Main Content ─────────────────────────────────────── */}
          <main className="resume-main px-6 py-8 sm:px-8 lg:px-10" style={{ background: "transparent" }}>

            {/* Header */}
            <header className="resume-block pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                    Lead Full-Stack Engineer
                  </p>
                  <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl" style={{ letterSpacing: "-0.02em" }}>
                    LAZAR BUKEJLOVIC
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed sm:text-[15px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                    I build full-stack product systems where frontend execution, backend architecture, and delivery reliability matter.
                  </p>
                </div>

                <div className="grid gap-2 text-sm sm:min-w-[260px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {CONTACTS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer noopener" : undefined}
                      className="resume-link inline-flex items-center gap-2 transition-colors hover:text-white"
                    >
                      <ResumeIcon icon={item.icon} iconType={item.iconType} className="h-4 w-4 text-primary" />
                      <span className="truncate">{item.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </header>

            {/* About */}
            <section className="resume-block mt-8">
              <SectionLabel label="About" />
              <p className="mt-4 max-w-3xl text-[15px] leading-7" style={{ color: "rgba(255,255,255,0.60)" }}>
                My work spans React, TypeScript, Node.js, REST APIs, authentication, dashboards, database-backed features, payments, subscriptions, and responsive product interfaces. I focus on turning product requirements into usable, production-ready software by structuring workflows, connecting frontend behavior to backend logic, validating real user flows, and preparing features for deployment.
              </p>
            </section>

            {/* Experience */}
            <section className="resume-block mt-8">
              <SectionLabel label="Experience" />
              <div className="mt-5 space-y-5">
                {EXPERIENCE.map((entry) => (
                  <article
                    key={entry.company}
                    className="resume-block rounded-[20px] px-5 py-5"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.03)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.20)",
                    }}
                  >
                    <div className="flex flex-col gap-2 pb-4 sm:flex-row sm:items-start sm:justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                      <div>
                        <h2 className="font-heading text-xl font-bold tracking-tight text-white">
                          {entry.company}
                        </h2>
                        <p className="mt-1 text-sm font-semibold text-primary">{entry.title}</p>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)" }}>
                        {entry.period}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {entry.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 text-[14px] leading-7" style={{ color: "rgba(255,255,255,0.62)" }}>
                          <span className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "rgba(255,255,255,0.50)" }} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            {/* Selected Work */}
            <section className="resume-block mt-8">
              <SectionLabel label="Selected Work" />
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {PROJECTS.map((project) => (
                  <article
                    key={project.name}
                    className="resume-block rounded-[20px] px-5 py-4"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading text-base font-semibold tracking-tight text-white">
                        {project.name}
                      </h3>
                      <div className="flex shrink-0 items-center gap-2">
                        {project.githubHref && (
                          <a
                            href={project.githubHref}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-1 text-xs font-medium transition-colors hover:text-white"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <SiGithub className="h-3 w-3" />
                            Repo
                          </a>
                        )}
                        {project.href && (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:opacity-80"
                          >
                            <ExternalLink className="h-3 w-3" strokeWidth={1.9} />
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="mt-1.5 text-sm leading-6" style={{ color: "rgba(255,255,255,0.52)" }}>{project.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </article>
    </div>
  );
}
