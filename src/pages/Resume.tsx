import { Link } from "react-router-dom";
import { ArrowLeft, Download, Mail, Link2, Code2 } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const RESUME_PDF_URL = "/Resume.pdf";

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

const PROJECTS = [
  {
    name: "DevPath Hub",
    desc: "Developer platform focused on structured growth workflows, engineering roadmap tracking, backend-connected progress management, and execution-focused developer tooling.",
  },
  {
    name: "ForgeDesk",
    desc: "A premium full-stack ecommerce product for workspace goods with Stripe checkout, account flows, saved setups, order management, and a role-protected admin dashboard.",
  },
  {
    name: "EchoRoom",
    desc: "A social communication app where posts become conversations through feed interaction, profiles, direct messaging, discovery, and live discussion rooms.",
  },
  {
    name: "Foundry Studios",
    desc: "A booking and payments product centered on service flows, scheduling logic, and polished user-facing structure.",
  },
  {
    name: "Professional Personal Website",
    desc: "A premium engineering profile site with integrated resume view and structured contact / scheduling flow.",
  },
  {
    name: "ClientFlow",
    desc: "A business operations platform for client management, project workflows, invoicing, and dashboard visibility.",
  },
  {
    name: "RoomPulse",
    desc: "A workflow execution platform focused on task visibility, progress tracking, structured operations, and responsive product UX.",
  },
];

const SKILLS =
  "React • Next.js • TypeScript • Node.js • Express • PostgreSQL • Prisma • Stripe • Tailwind CSS • Supabase • Real-time Interaction • Product Systems • UI / UX Thinking • Full-Stack Product Delivery";

export default function Resume() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar (no-print) */}
      <div className="no-print fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} /> Back
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download size={14} /> Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* Resume content */}
      <article className="print-page mx-auto max-w-3xl px-6 pt-24 pb-20">
        {/* Header */}
        <header className="border-b border-border pb-6">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground">Lazar Bukejlovic</h1>
          <p className="mt-1 text-lg font-medium text-primary">Full-Stack Engineer</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
            <a
              href="mailto:lazarbukejlovic@icloud.com"
              className="inline-flex items-center gap-1 hover:text-foreground"
            >
              <Mail size={13} /> lazarbukejlovic@icloud.com
            </a>
            <a
              href="https://www.linkedin.com/in/lazar-bukejlovic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground"
            >
              <Link2 size={13} /> linkedin.com/in/lazar-bukejlovic
            </a>
            <a
              href="https://github.com/lazarbukejlovic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground"
            >
              <Code2 size={13} /> github.com/lazarbukejlovic
            </a>
          </div>
        </header>

        {/* About */}
        <section className="mt-8">
          <h2 className="font-heading text-xs font-semibold tracking-widest uppercase text-primary">About</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Full-Stack Engineer focused on architecting and delivering modern product applications with strong frontend
            execution and strong backend architecture. Experience spans ownership-driven delivery across client products,
            structured systems thinking, and reliable execution in finance-oriented and digital asset-related
            environments.
          </p>
        </section>

        {/* Experience */}
        <section className="mt-8">
          <h2 className="font-heading text-xs font-semibold tracking-widest uppercase text-primary">Experience</h2>
          <div className="mt-4 space-y-6">
            {EXPERIENCE.map((entry) => (
              <div key={entry.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-heading text-base font-semibold text-foreground">{entry.company}</h3>
                  <span className="text-xs text-muted-foreground">{entry.period}</span>
                </div>
                <p className="text-sm font-medium text-primary">{entry.title}</p>
                <ul className="mt-2 space-y-1">
                  {entry.points.map((point, j) => (
                    <li key={j} className="text-sm leading-relaxed text-muted-foreground">
                      — {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Work */}
        <section className="mt-8">
          <h2 className="font-heading text-xs font-semibold tracking-widest uppercase text-primary">Selected Work</h2>
          <ul className="mt-3 space-y-2">
            {PROJECTS.map((p) => (
              <li key={p.name} className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{p.name}</span> — {p.desc}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="mt-8">
          <h2 className="font-heading text-xs font-semibold tracking-widest uppercase text-primary">
            Technical Skills
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{SKILLS}</p>
        </section>
      </article>
    </div>
  );
}
