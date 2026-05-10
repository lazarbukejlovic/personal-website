import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Personal Website / Portfolio",
    description:
      "Professional portfolio platform with visual resume, responsive project presentation, live project links, contact flow, and resume integration. Built to clearly present my engineering profile, selected work, experience, and production-ready projects.",
    liveUrl: "https://personal-website-tau-sandy.vercel.app/",
  },
  {
    title: "AtlasBrief",
    description:
      "Flagship destination intelligence platform for travelers, remote workers, and long-stay planning. Built with React, TypeScript, Supabase, Stripe, and Vercel. Includes authentication, saved briefs, destination watchlists, traveler profiles, stay planning, billing, alerts, reports, trust/freshness signals, and production QA.",
    liveUrl: "https://atlasbrief.vercel.app",
    githubUrl: "https://github.com/lazarbukejlovic/atlasbrief",
  },
  {
    title: "GeoRisk Platform",
    description:
      "Geopolitical risk intelligence dashboard for conflict monitoring, market impact analysis, historical context, and simulated humanitarian relief tracking. Built as a polished React/TypeScript dashboard that turns complex global risk signals into a clear product experience.",
    liveUrl: "https://georisk-platform.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/georisk-platform",
  },
  {
    title: "DevPath Hub",
    description:
      "Developer growth and portfolio support platform for structured career workflows, project planning, portfolio positioning, and resource-driven learning. Built to help developers organize their path from learning to presenting stronger work.",
    liveUrl: "https://devpath-hub.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/devpath-hub",
  },
  {
    title: "EchoRoom",
    description:
      "Social/developer conversation platform concept with feed interactions, messaging and discovery flows, live activity sections, and responsive product UI. Built to feel like a polished communication product rather than a static demo.",
    liveUrl: "https://echo-room-teal.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/echo-room",
  },
  {
    title: "ForgeDesk",
    description:
      "SaaS/workspace product with protected admin-style flows, product management UX, workspace structure, and Stripe checkout positioning. Focused on dashboard usability, operational workflows, and payment-oriented product behavior.",
    liveUrl: "https://forgedesk-eosin.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/forgedesk",
  },
  {
    title: "Foundry Studios",
    description:
      "Booking and reservation platform centered on service scheduling, payment-oriented flows, and polished customer-facing booking UX. Built around clear service discovery, booking flow structure, and product-ready presentation.",
    liveUrl: "https://foundrystudios.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/foundrystudios",
  },
  {
    title: "ClientFlow",
    description:
      "ClientFlow is a business operations dashboard for managing clients, projects, invoices, deadlines, and workflow visibility. Built as a clean React/TypeScript product interface focused on structured client management and practical dashboard UX.",
    liveUrl: "https://client-flow-tawny-eight.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/client-flow",
  },
  {
    title: "RoomPulse",
    description:
      "RoomPulse is a workflow and task management product built around boards, rooms, activity tracking, and operational visibility. Built to practice SaaS-style product structure, responsive UI, and organized team/workflow presentation.",
    liveUrl: "https://room-pulse-seven.vercel.app/",
    githubUrl: "https://github.com/lazarbukejlovic/room-pulse",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 py-20">
      <div className="section-container">
        <h2 className="font-heading text-sm font-medium tracking-widest uppercase text-primary">Selected Work</h2>

        <div className="mt-10 space-y-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="max-w-lg">
                <h3 className="font-heading text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              </div>

              <div className="flex shrink-0 gap-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
                  >
                    <Code2 size={14} />
                    GitHub
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
