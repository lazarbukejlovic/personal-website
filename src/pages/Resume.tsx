import { Link } from "react-router-dom";
import {
  ArrowLeft,
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
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
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
    period: "February 2025 – Present",
    points: [
      "Orchestrated delivery across multiple client-facing product streams, balancing parallel priorities while strengthening implementation quality and maintainability.",
      "Architected and improved backend-connected product flows with emphasis on usability, structured execution, and scalable delivery.",
      "Partnered across product implementation, client communication, and coordinated delivery in a high-ownership environment.",
    ],
  },
  {
    company: "Private Clients",
    title: "Freelance Full-Stack Engineer",
    period: "December 2023 – February 2025",
    points: [
      "Delivered custom product applications for private clients in finance-oriented and digital asset-related environments.",
      "Reengineered operational workflows from manual spreadsheet processes into structured software systems adopted for daily internal use.",
      "Led collaborative product builds across cross-functional contributors, coordinating feature direction, implementation priorities, and delivery as hands-on lead engineer.",
      "Spearheaded delivery across 10+ production-grade product initiatives, strengthening engineering depth across architecture and execution quality.",
    ],
  },
];

const PROJECTS: ProjectItem[] = [
  {
    name: "GeoRisk",
    description:
      "Geopolitical risk intelligence platform for monitoring conflict, market impact, and structured scenario awareness.",
    href: "https://georisk-platform.vercel.app/",
  },
  {
    name: "DevPath Hub",
    description:
      "Developer platform centered on structured growth workflows, roadmap tracking, and execution-focused engineering tooling.",
    href: "https://devpath-hub.vercel.app/",
  },
  {
    name: "ForgeDesk",
    description:
      "Premium full-stack ecommerce product with Stripe checkout, protected account flows, and operational admin tooling.",
    href: "https://forgedesk-eosin.vercel.app/",
  },
  {
    name: "EchoRoom",
    description:
      "Social communication application built around conversation-first feeds, messaging, discovery, and live discussion rooms.",
    href: "https://echo-room-teal.vercel.app/",
  },
  {
    name: "Foundry Studios",
    description:
      "Booking and payments product shaped around scheduling logic, service flows, and polished customer-facing structure.",
    href: "https://foundrystudios.vercel.app/",
  },
  {
    name: "Professional Personal Website",
    description:
      "Premium personal engineering site with branded resume experience, strong positioning, and integrated contact flow.",
    href: "https://personal-website-tau-sandy.vercel.app/",
  },
  {
    name: "ClientFlow",
    description:
      "Business operations platform for client management, project workflows, invoicing, and visibility across execution.",
    href: "https://client-flow-tawny-eight.vercel.app/",
  },
  {
    name: "RoomPulse",
    description:
      "A workflow execution platform focused on task visibility, progress tracking, structured operations, and responsive product UX.",
  },
];

const SKILLS: SkillItem[] = [
  { name: "React", icon: SiReact, iconType: "brand" },
  { name: "TypeScript", icon: SiTypescript, iconType: "brand" },
  { name: "JavaScript", icon: SiJavascript, iconType: "brand" },
  { name: "Node.js", icon: SiNodedotjs, iconType: "brand" },
  { name: "Express", icon: SiExpress, iconType: "brand" },
  { name: "PostgreSQL", icon: SiPostgresql, iconType: "brand" },
  { name: "Prisma", icon: SiPrisma, iconType: "brand" },
  { name: "Supabase", icon: SiSupabase, iconType: "brand" },
  { name: "Stripe API", icon: SiStripe, iconType: "brand" },
  { name: "REST APIs", icon: Network, iconType: "lucide" },
  { name: "Authentication & Authorization", icon: ShieldCheck, iconType: "lucide" },
  { name: "Tailwind CSS", icon: SiTailwindcss, iconType: "brand" },
  { name: "Git / GitHub", icon: SiGithub, iconType: "brand" },
];

const INTERESTS: InterestItem[] = [
  { label: "Traveling", icon: Globe },
  { label: "Investing / BTC & ETH", icon: Sparkles },
  { label: "Working Out", icon: Dumbbell },
  { label: "Product Building / Technology", icon: Cpu },
];

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-heading text-[11px] font-semibold tracking-[0.28em] uppercase text-primary">
        {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-primary/70 via-primary/20 to-transparent" />
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
    <div className="resume-stage min-h-screen bg-[#0b0b0e] px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="no-print fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/82 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-white/72 transition-colors hover:text-white">
            <ArrowLeft size={16} /> Back
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md border border-white/14 px-3 py-1.5 text-sm font-medium text-white/82 transition-colors hover:border-primary/40 hover:text-white sm:inline-flex"
            >
              Open PDF
            </a>
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Printer size={14} /> Download PDF
            </a>
          </div>
        </div>
      </div>

      <article className="resume-document resume-sheet mx-auto mt-16 max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-[#f7f3ec] shadow-[0_28px_90px_rgba(0,0,0,0.38)]">
        <div className="grid lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="resume-sidebar relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(217,138,46,0.24),transparent_36%),linear-gradient(180deg,#101013_0%,#17171b_100%)] px-6 py-8 text-white sm:px-8 lg:min-h-[1120px]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,transparent,rgba(255,255,255,0.02))]" />
            <div className="relative">
              <div className="resume-block">
                <div className="inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                  Resume Profile
                </div>
                <div className="mt-5 overflow-hidden rounded-[24px] border border-white/12 bg-white/5 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
                  <img
                    src={PROFILE_IMAGE_URL}
                    alt="Lazar Bukejlovic"
                    className="aspect-[4/5] w-full rounded-[20px] object-cover"
                  />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/70">
                  Full-stack engineer focused on ownership-driven delivery, product systems thinking, and reliable execution across client-facing applications.
                </p>
              </div>

              <section className="resume-block mt-8">
                <SectionLabel label="Contact" />
                <div className="mt-4 space-y-3">
                  {CONTACTS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer noopener" : undefined}
                      className="resume-link flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 transition-colors hover:border-primary/35 hover:bg-white/[0.05]"
                    >
                      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                        <ResumeIcon icon={item.icon} iconType={item.iconType} className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                          {item.label}
                        </p>
                        <p className="mt-1 break-all text-sm text-white/80">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              <section className="resume-block mt-8">
                <SectionLabel label="Technical Skills" />
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {SKILLS.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                        <ResumeIcon icon={skill.icon} iconType={skill.iconType} className="h-[18px] w-[18px]" />
                      </div>
                      <p className="mt-2 text-xs font-medium leading-snug text-white/82">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="resume-block mt-8">
                <SectionLabel label="Interests" />
                <div className="mt-4 space-y-2.5">
                  {INTERESTS.map((interest) => {
                    const Icon = interest.icon;

                    return (
                      <div
                        key={interest.label}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3"
                      >
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" strokeWidth={1.85} />
                        </div>
                        <p className="text-sm text-white/78">{interest.label}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </aside>

          <main className="resume-main px-6 py-8 text-slate-900 sm:px-8 lg:px-10">
            <header className="resume-block border-b border-black/10 pb-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                    Full-Stack Engineer
                  </p>
                  <h1 className="mt-3 font-heading text-4xl font-bold tracking-[0.03em] text-[#151515] sm:text-5xl">
                    LAZAR BUKEJLOVIC
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    Full-Stack Engineer focused on architecting and delivering modern product applications with strong frontend execution and strong backend architecture.
                  </p>
                </div>

                <div className="grid gap-2 text-sm text-slate-600 sm:min-w-[260px]">
                  {CONTACTS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer noopener" : undefined}
                      className="resume-link inline-flex items-center gap-2 transition-colors hover:text-slate-950"
                    >
                      <ResumeIcon icon={item.icon} iconType={item.iconType} className="h-4 w-4 text-primary" />
                      <span className="truncate">{item.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </header>

            <section className="resume-block mt-8">
              <SectionLabel label="About" />
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-700">
                Full-Stack Engineer focused on architecting and delivering modern product applications with strong frontend execution and strong backend architecture. Experience spans ownership-driven delivery across client products, structured systems thinking, and reliable execution in finance-oriented and digital asset-related environments.
              </p>
            </section>

            <section className="resume-block mt-8">
              <SectionLabel label="Experience" />
              <div className="mt-5 space-y-5">
                {EXPERIENCE.map((entry) => (
                  <article
                    key={entry.company}
                    className="resume-block rounded-[24px] border border-black/8 bg-white/60 px-5 py-5 shadow-[0_10px_30px_rgba(20,20,20,0.05)]"
                  >
                    <div className="flex flex-col gap-2 border-b border-black/8 pb-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#151515]">
                          {entry.company}
                        </h2>
                        <p className="mt-1 text-sm font-medium text-primary">{entry.title}</p>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {entry.period}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {entry.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 text-[15px] leading-7 text-slate-700">
                          <span className="mt-[11px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-block mt-8">
              <SectionLabel label="Selected Work" />
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {PROJECTS.map((project) => {
                  const cardClassName = `resume-block rounded-[24px] border border-black/8 bg-white/55 px-5 py-5 transition-all ${
                    project.href
                      ? "resume-link group hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/75"
                      : ""
                  }`;

                  const content = (
                    <>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className={`font-heading text-lg font-semibold tracking-tight text-[#151515] ${project.href ? "transition-colors group-hover:text-primary" : ""}`}>
                          {project.name}
                        </h3>
                        {project.href ? (
                          <ExternalLink className="h-4 w-4 flex-shrink-0 text-primary/75" strokeWidth={1.9} />
                        ) : null}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                    </>
                  );

                  return project.href ? (
                    <a
                      key={project.name}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={cardClassName}
                    >
                      {content}
                    </a>
                  ) : (
                    <article key={project.name} className={cardClassName}>
                      {content}
                    </article>
                  );
                })}
              </div>
            </section>
          </main>
        </div>
      </article>
    </div>
  );
}