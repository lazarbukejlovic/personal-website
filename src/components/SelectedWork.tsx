import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: "MindPad AI",
    description:
      "AI-powered writing and knowledge management platform with intelligent note organization, contextual search, and a focused writing experience. Built to explore AI product integration with clean, user-first interface design.",
    liveUrl: "https://mindpad-ai-five.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/mindpad-ai",
    image: "/mindpad-ai.png",
    featured: true,
    tags: ["React", "TypeScript", "AI", "Node.js"],
  },
  {
    title: "AtlasBrief",
    description:
      "Flagship destination intelligence platform for travelers, remote workers, and long-stay planning. Built with React, TypeScript, Supabase, Stripe, and Vercel. Includes authentication, saved briefs, destination watchlists, traveler profiles, stay planning, billing, alerts, reports, trust/freshness signals, and production QA.",
    liveUrl: "https://atlasbrief.vercel.app",
    githubUrl: "https://github.com/lazarbukejlovic/atlasbrief",
    image: "/atlasbrief.png",
    featured: true,
    tags: ["React", "TypeScript", "Supabase", "Stripe"],
  },
  {
    title: "GeoRisk Platform",
    description:
      "Geopolitical risk intelligence dashboard for conflict monitoring, market impact analysis, historical context, and simulated humanitarian relief tracking. Built as a polished React/TypeScript dashboard that turns complex global risk signals into a clear product experience.",
    liveUrl: "https://georisk-platform.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/georisk-platform",
    image: "/georisk.png",
    tags: ["React", "TypeScript", "REST APIs", "Dashboard"],
  },
  {
    title: "DevPath Hub",
    description:
      "Developer growth and portfolio support platform for structured career workflows, project planning, portfolio positioning, and resource-driven learning. Built to help developers organize their path from learning to presenting stronger work.",
    liveUrl: "https://devpath-hub.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/devpath-hub",
    image: "/devpath-hub.png",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "EchoRoom",
    description:
      "Social/developer conversation platform concept with feed interactions, messaging and discovery flows, live activity sections, and responsive product UI. Built to feel like a polished communication product rather than a static demo.",
    liveUrl: "https://echo-room-teal.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/echo-room",
    image: "/echoroom.png",
    tags: ["React", "TypeScript", "REST APIs", "UI/UX"],
  },
  {
    title: "ForgeDesk",
    description:
      "SaaS/workspace product with protected admin-style flows, product management UX, workspace structure, and Stripe checkout positioning. Focused on dashboard usability, operational workflows, and payment-oriented product behavior.",
    liveUrl: "https://forgedesk-eosin.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/forgedesk",
    image: "/forgedesk.png",
    tags: ["React", "TypeScript", "Stripe", "Dashboard"],
  },
  {
    title: "Foundry Studios",
    description:
      "Booking and reservation platform centered on service scheduling, payment-oriented flows, and polished customer-facing booking UX. Built around clear service discovery, booking flow structure, and product-ready presentation.",
    liveUrl: "https://foundrystudios.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/foundrystudios",
    image: "/images/fondry.png",
    tags: ["React", "TypeScript", "Stripe", "Booking"],
  },
  {
    title: "ClientFlow",
    description:
      "Business operations dashboard for managing clients, projects, invoices, deadlines, and workflow visibility. Built as a clean React/TypeScript product interface focused on structured client management and practical dashboard UX.",
    liveUrl: "https://client-flow-tawny-eight.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/client-flow",
    image: "/images/ClientFlow.png",
    tags: ["React", "TypeScript", "Dashboard", "PostgreSQL"],
  },
  {
    title: "RoomPulse",
    description:
      "Workflow and task management product built around boards, rooms, activity tracking, and operational visibility. Built to practice SaaS-style product structure, responsive UI, and organized team/workflow presentation.",
    liveUrl: "https://room-pulse-seven.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/room-pulse",
    image: "/images/Roompulse.png",
    tags: ["React", "TypeScript", "SaaS", "UI/UX"],
  },
];

// ─── Project Card ─────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef   = useRef<HTMLDivElement>(null);
  const spotRef   = useRef<HTMLDivElement>(null);
  const imgRef    = useRef<HTMLDivElement>(null);
  const [imgFailed, setImgFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;

    cardRef.current.style.transition = "transform 0.08s ease-out, border-color 0.15s, box-shadow 0.15s";
    cardRef.current.style.transform  = `perspective(1200px) rotateY(${dx * 3}deg) rotateX(${-dy * 3}deg) translateY(-4px)`;
    cardRef.current.style.borderColor = "rgba(255,255,255,0.20)";
    cardRef.current.style.boxShadow   = "0 20px 56px rgba(0,0,0,0.55)";

    if (spotRef.current) {
      spotRef.current.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(255,255,255,0.05), transparent 65%)`;
    }
    if (imgRef.current) {
      imgRef.current.style.transform = `scale(1.05) translateX(${dx * 4}px) translateY(${dy * 4}px)`;
    }
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition  = "transform 0.55s cubic-bezier(0.23,1,0.32,1), border-color 0.3s, box-shadow 0.3s";
    cardRef.current.style.transform   = "";
    cardRef.current.style.borderColor = "";
    cardRef.current.style.boxShadow   = "";
    if (spotRef.current) spotRef.current.style.background = "";
    if (imgRef.current)  imgRef.current.style.transform   = "";
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative flex flex-col overflow-hidden rounded-2xl"
      style={{
        background: "rgba(10,10,10,0.80)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(14px)",
        willChange: "transform",
        cursor: "default",
      }}
    >
      {/* Inner cursor spotlight */}
      <div ref={spotRef} className="pointer-events-none absolute inset-0 z-10 rounded-2xl" />

      {/* ── Preview / image area ── */}
      <div className="relative overflow-hidden" style={{ height: 190 }}>

        {/* Dark base — shows when image fails or as underlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #0d0d0d 50%, #080808 100%)" }}
        />

        {/* Project image — always rendered; hidden via state if it 404s */}
        {!imgFailed && (
          <div
            ref={imgRef}
            className="absolute inset-0 transition-transform duration-300 ease-out"
            style={{ transformOrigin: "center" }}
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top"
              style={{ opacity: 1 }}
              onError={() => setImgFailed(true)}
            />
            {/* Thin bottom gradient for text legibility only */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.55) 100%)",
              }}
            />
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute left-3 top-3 z-20 flex items-center gap-1.5 rounded-full font-semibold uppercase"
            style={{
              padding: "4px 10px",
              fontSize: 9,
              letterSpacing: "0.22em",
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.28)",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            <span
              className="rounded-full"
              style={{ width: 4, height: 4, background: "rgba(255,255,255,0.85)", flexShrink: 0 }}
            />
            Featured
          </div>
        )}

        {/* Project index — top right */}
        <span
          className="absolute right-3 top-3 z-20 font-mono text-xs tabular-nums"
          style={{ color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* ── Card content ── */}
      <div className="relative flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-heading text-sm font-semibold tracking-tight text-foreground sm:text-base">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md px-2 py-0.5 font-mono text-[10px] font-medium"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-auto flex items-center gap-2 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-105"
              style={{
                padding: "6px 14px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.82)",
              }}
            >
              <ArrowUpRight size={10} />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
              style={{
                padding: "6px 12px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                color: "rgba(255,255,255,0.40)",
              }}
            >
              <Code2 size={10} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────

export default function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 py-28">
      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="text-center"
        >
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase",
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            <span
              className="rounded-full"
              style={{ width: 5, height: 5, background: "rgba(255,255,255,0.65)", flexShrink: 0 }}
            />
            Selected Work
          </div>

          <h2
            className="font-heading font-light text-foreground"
            style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            What I{" "}
            <strong className="font-bold">Built</strong>
          </h2>

          <p className="mt-5 text-base text-muted-foreground">
            Production-ready applications across SaaS, fintech, travel intelligence, and developer tooling.
          </p>

          <div
            className="mx-auto mt-8 h-px w-24"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent)" }}
          />
        </motion.div>

        {/* Project grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
