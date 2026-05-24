import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Network, CreditCard, Cloud } from "lucide-react";
import { SiReact, type IconType } from "react-icons/si";
import type { LucideIcon } from "lucide-react";

type CategoryIcon = LucideIcon | IconType;

interface SkillCategory {
  label: string;
  description: string;
  icon: CategoryIcon;
  iconType: "lucide" | "brand";
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    label: "Frontend & UI",
    description: "Interfaces, design systems, and user experience",
    icon: SiReact,
    iconType: "brand",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "UI/UX Design", "Zustand", "TanStack Query", "Framer Motion"],
  },
  {
    label: "Backend & Data",
    description: "APIs, services, databases, and server logic",
    icon: Network,
    iconType: "lucide",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Supabase", "Prisma", "MongoDB", "Database Schema Design"],
  },
  {
    label: "Payments & Auth",
    description: "Billing flows, identity, and access control",
    icon: CreditCard,
    iconType: "lucide",
    skills: ["Stripe API", "OAuth 2.0", "Auth0", "JWT", "Session Flows", "Protected Routes", "Subscription Flows"],
  },
  {
    label: "Cloud & Quality",
    description: "Deployment, testing, and production readiness",
    icon: Cloud,
    iconType: "lucide",
    skills: ["Vercel", "GitHub Actions", "Docker", "Jest", "Cypress", "Vitest", "QA / Debugging", "AI-assisted Development"],
  },
];

function CategoryCard({ cat, index }: { cat: SkillCategory; index: number }) {
  const cardRef      = useRef<HTMLDivElement>(null);
  const spotRef      = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const Icon         = cat.icon as React.ComponentType<{ className?: string }>;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    if (spotRef.current) {
      spotRef.current.style.background = `radial-gradient(280px circle at ${x}px ${y}px, rgba(255,255,255,0.055), transparent 65%)`;
    }
    cardRef.current.style.borderColor = "rgba(255,255,255,0.18)";
  };
  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.borderColor = "";
    if (spotRef.current) spotRef.current.style.background = "";
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative overflow-hidden rounded-2xl p-6 transition-colors duration-300"
      style={{
        background: "rgba(10,10,10,0.75)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(14px)",
      }}
    >
      {/* Inner spotlight */}
      <div ref={spotRef} className="pointer-events-none absolute inset-0 rounded-2xl" />

      <div className="relative">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">
                {cat.label}
              </h3>
              <p className="mt-0.5 text-xs text-muted-foreground">{cat.description}</p>
            </div>
          </div>
          <span
            className="font-mono text-sm font-semibold tabular-nums"
            style={{ color: "rgba(255,255,255,0.22)" }}
          >
            {String(cat.skills.length).padStart(2, "0")}
          </span>
        </div>

        {/* Skill pill tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {cat.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
                color: "rgba(255,255,255,0.60)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-28">
      <div className="section-container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.60)",
            }}
          >
            <span
              className="rounded-full"
              style={{ width: 5, height: 5, background: "rgba(255,255,255,0.65)", flexShrink: 0 }}
            />
            Tech Stack
          </div>

          <h2
            className="font-heading font-light text-foreground"
            style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Skills &{" "}
            <strong className="font-bold">Expertise</strong>
          </h2>

          <p className="mt-5 text-base text-muted-foreground">
            The tools and technologies I use to build production-ready products.
          </p>

          <div
            className="mx-auto mt-8 h-px w-24"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent)" }}
          />
        </motion.div>

        {/* Category grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
