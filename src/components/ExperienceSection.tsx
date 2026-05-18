import { motion } from "framer-motion";

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

function LogoBox({
  image,
  imageAlt,
  href,
}: {
  image: string;
  imageAlt: string;
  href?: string;
}) {
  const inner = (
    <div className="flex h-28 w-full items-center justify-center rounded-xl border border-border/60 bg-background/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_6px_22px_rgba(0,0,0,0.28)] ring-1 ring-inset ring-white/[0.04]">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className="max-h-[80px] max-w-full h-auto w-auto object-contain"
      />
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${imageAlt} – visit company reference`}
        className="block transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        {inner}
      </a>
    );
  }

  return <>{inner}</>;
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-20">
      <div className="section-container">
        <p className="font-heading text-sm font-medium tracking-widest uppercase text-primary">
          Experience
        </p>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Building and shipping product systems with structured, ownership-first execution.
        </h2>

        <div className="mt-10 space-y-7">
          {EXPERIENCE.map((entry, i) => (
            <motion.article
              key={entry.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-5 shadow-[0_16px_45px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-7"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,162,79,0.12),transparent_48%)]" />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
                {/* Logo / image area */}
                <div className="w-full flex-shrink-0 md:w-44">
                  <LogoBox image={entry.image} imageAlt={entry.imageAlt} href={entry.logoHref} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      {entry.logoHref ? (
                        <a
                          href={entry.logoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/name inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                        >
                          <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground transition-opacity group-hover/name:opacity-75">
                            {entry.company}
                          </h3>
                        </a>
                      ) : (
                        <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                          {entry.company}
                        </h3>
                      )}
                      <p className="mt-1 text-sm font-medium text-primary">{entry.title}</p>
                    </div>
                    <p className="whitespace-nowrap text-xs font-medium uppercase tracking-wide text-muted-foreground sm:pt-1">
                      {entry.period}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {entry.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/80" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
