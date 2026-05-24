import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  image: string;
  imageAlt: string;
  logoHref?: string;
  points: string[];
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "TokenFlow",
    title: "Full-Stack Engineer",
    period: "January 2025 – Present",
    image: "/images/tokenflow-logo.png",
    imageAlt: "TokenFlow logo",
    logoHref: "https://www.atom.com/name/TokenFlow.ai",
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
    image: "/images/scaleroad.png",
    imageAlt: "ScaleRoad LLC",
    logoHref: "https://www.atom.com/name/ScaleRoad",
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
    period: "January 2023 – December 2023",
    image: "/images/vertex-digital-studio.png",
    imageAlt: "Vertex Digital Studio logo",
    points: [
      "Delivered custom full-stack applications for fintech, SaaS, digital asset, and e-commerce clients.",
      "Built authenticated dashboards, CRUD views, REST API workflows, payment flows, reusable React/TypeScript UI patterns, and responsive product interfaces.",
      "Architected secure auth flows, relational data models, and API-connected workflows across client projects.",
      "Managed client work end to end — from scope planning and implementation to testing, deployment, documentation, and handoff.",
    ],
  },
];

function TimelineDot() {
  return (
    <div
      className="h-3.5 w-3.5 rounded-full"
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "2.5px solid #080c16",
        boxShadow: "0 0 0 2.5px rgba(255,255,255,0.22), 0 0 14px rgba(100,195,240,0.55)",
      }}
    />
  );
}

function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    if (spotRef.current) {
      spotRef.current.style.background = `radial-gradient(280px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(100,195,240,0.065), transparent 65%)`;
    }
    cardRef.current.style.borderColor = "rgba(255,255,255,0.16)";
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.borderColor = "rgba(255,255,255,0.07)";
    if (spotRef.current) spotRef.current.style.background = "";
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 18, x: index % 2 === 0 ? -16 : 16 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative overflow-hidden rounded-2xl p-5 sm:p-6 transition-colors duration-300"
      style={{
        background: "rgba(10,10,10,0.78)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Inner cursor spotlight */}
      <div ref={spotRef} className="pointer-events-none absolute inset-0 rounded-2xl" />

      <div className="relative">
        {/* Header row: logo + company + title + period */}
        <div className="flex items-start gap-3">
          {/* Compact logo */}
          <div
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl p-1.5"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(120,180,230,0.12)",
            }}
          >
            {entry.logoHref ? (
              <a href={entry.logoHref} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                <img
                  src={entry.image}
                  alt={entry.imageAlt}
                  loading="lazy"
                  className="max-h-9 max-w-[36px] object-contain"
                />
              </a>
            ) : (
              <img
                src={entry.image}
                alt={entry.imageAlt}
                loading="lazy"
                className="max-h-9 max-w-[36px] object-contain"
              />
            )}
          </div>

          {/* Company name + role + period */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
              <div>
                {entry.logoHref ? (
                  <a
                    href={entry.logoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-75"
                  >
                    <h3
                      className="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {entry.company}
                    </h3>
                  </a>
                ) : (
                  <h3
                    className="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {entry.company}
                  </h3>
                )}
                <p className="mt-0.5 text-xs font-semibold" style={{ color: "rgba(255,255,255,0.72)" }}>
                  {entry.title}
                </p>
              </div>
              <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-widest text-muted-foreground/55">
                {entry.period}
              </span>
            </div>
          </div>
        </div>

        {/* Bullet points */}
        <ul className="mt-4 space-y-2.5">
          {entry.points.map((point, j) => (
            <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <span
                className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ background: "rgba(255,255,255,0.50)" }}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-28">
      <div className="section-container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-heading text-[11px] font-semibold tracking-[0.32em] uppercase text-primary">
            Experience
          </p>
          <h2
            className="mt-4 font-heading font-light text-foreground"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em", lineHeight: 1.15 }}
          >
            My{" "}
            <strong className="font-bold">Experience</strong>
          </h2>
          <div
            className="mt-5 h-px w-24"
            style={{ background: "linear-gradient(to right, hsl(var(--primary)/0.7), transparent)" }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Vertical center line — desktop only */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(100,195,240,0.18) 8%, rgba(100,195,240,0.18) 92%, transparent 100%)",
            }}
          />

          <div className="space-y-6">
            {EXPERIENCE.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={entry.company}>
                  {/* Desktop: alternating left / right with center dot */}
                  <div className="hidden md:grid md:grid-cols-[1fr_56px_1fr] md:items-start">
                    <div className="pr-6">
                      {isLeft && <ExperienceCard entry={entry} index={i} />}
                    </div>
                    <div className="relative z-10 flex justify-center pt-[26px]">
                      <TimelineDot />
                    </div>
                    <div className="pl-6">
                      {!isLeft && <ExperienceCard entry={entry} index={i} />}
                    </div>
                  </div>

                  {/* Mobile: full-width stack */}
                  <div className="md:hidden">
                    <ExperienceCard entry={entry} index={i} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
