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
      "Built and improved client-facing web applications using React, TypeScript, Node.js, REST APIs, and backend-connected product flows across multiple active project streams.",
      "Developed dashboard interfaces, authenticated user flows, form-heavy product screens, responsive layouts, and API-driven data views with a focus on usability, reliability, and maintainable component structure.",
      "Implemented and refined frontend-to-backend workflows, including data fetching, validation states, loading/error/empty states, route handling, and production-focused UI behavior across desktop and mobile.",
      "Collaborated directly on product requirements, client feedback, implementation priorities, and delivery planning, translating business needs into clear technical tasks and shipped features.",
    ],
  },
  {
    company: "Private Clients",
    title: "Freelance Full-Stack Engineer",
    period: "December 2023 – February 2025",
    image: "/images/private-clients-badge.svg",
    imageAlt: "Private Clients – Freelance Full-Stack Engineer",
    points: [
      "Delivered custom full-stack web applications for private clients in finance-oriented and digital asset-related environments, turning operational requirements into usable internal software tools.",
      "Built dashboard-driven products for tracking records, client activity, payments, subscriptions, project status, and operational workflows using React, TypeScript, Node.js, APIs, and structured data models.",
      "Replaced manual spreadsheet-based processes with structured web applications, improving visibility, consistency, and day-to-day usability for client teams.",
      "Implemented core product features including authentication flows, protected pages, CRUD-style data management, responsive UI, payment-related flows, and deployment-ready frontend architecture.",
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
                          rel="noreferrer noopener"
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
