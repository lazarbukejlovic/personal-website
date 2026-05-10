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
    period: "February 2025 – Present",
    image: "/images/tokenflow-logo.png",
    imageAlt: "TokenFlow logo",
    logoHref: "https://www.atom.com/name/TokenFlow.ai",
    points: [
      "At TokenFlow, I build and improve client-facing product applications with a focus on reliable, maintainable, backend-connected web experiences using React, TypeScript, Node.js, REST APIs, dashboard interfaces, authenticated user flows, responsive layouts, and production-focused UI behavior.",
      "I contribute across the full implementation cycle: translating product and client requirements into scoped technical tasks, building frontend flows, connecting UI behavior to backend logic, validating user journeys, debugging issues, refactoring components, and preparing features for delivery.",
      "The work is fast-moving and ownership-driven, with an emphasis on clean execution, maintainability, and practical product value.",
    ],
  },
  {
    company: "ScaleRoad LLC",
    title: "Full-Stack Software Engineer",
    period: "December 2023 – February 2025",
    image: "/images/scaleroad.png",
    imageAlt: "ScaleRoad LLC",
    logoHref: "https://www.atom.com/name/ScaleRoad",
    points: [
      "At ScaleRoad, I worked as a Full-Stack Software Engineer on product and operational web applications, focusing on frontend quality, backend-connected workflows, and reliable user-facing interfaces.",
      "I built dashboard-driven features for records, payments, subscriptions, operational status, and internal business workflows using React, TypeScript, Node.js, REST APIs, and PostgreSQL.",
      "My work included improving product UX, connecting frontend features with backend logic, handling validation and edge cases, building responsive layouts, and supporting release-ready implementation through QA, debugging, and polish.",
      "This role strengthened my ability to work across the full product cycle while keeping the final experience clear, usable, and production-ready.",
    ],
  },
  {
    company: "Private Clients",
    title: "Freelance Full-Stack Engineer",
    period: "June 2023 – December 2023",
    image: "/images/private-clients-badge.svg",
    imageAlt: "Private Clients – Freelance Full-Stack Engineer",
    points: [
      "Before ScaleRoad, I delivered custom full-stack applications for private clients in finance-oriented and digital asset-related environments.",
      "These projects often involved turning manual spreadsheet workflows and scattered operational processes into structured internal tools with dashboards, data views, authentication flows, protected pages, CRUD-style management, payment-related flows, and responsive interfaces.",
      "I handled projects from requirements to launch: clarifying scope, planning features, designing the user experience, building the UI, implementing backend and API logic, testing real user flows, improving usability, and preparing the final product for client handoff.",
      "This period helped me build strong ownership, independence, and practical delivery habits across 15+ client and portfolio projects.",
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
