import { motion } from "framer-motion";
import { Code2, LayoutPanelLeft, Network, ShieldCheck, TestTubeDiagonal } from "lucide-react";
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
  SiSupabase,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  type IconType,
} from "react-icons/si";

interface SkillItem {
  name: string;
  icon: IconType;
  support?: string;
}

const SKILLS: SkillItem[] = [
  { name: "React", icon: SiReact, support: "Frontend architecture" },
  { name: "Next.js", icon: SiNextdotjs, support: "App routing and SSR" },
  { name: "TypeScript", icon: SiTypescript, support: "Type-safe systems" },
  { name: "JavaScript", icon: SiJavascript, support: "Core language" },
  { name: "HTML", icon: SiHtml5, support: "Semantic UI structure" },
  { name: "CSS", icon: Code2, support: "Styling systems" },
  { name: "Tailwind CSS", icon: SiTailwindcss, support: "Design execution" },
  { name: "Node.js", icon: SiNodedotjs, support: "Runtime and APIs" },
  { name: "Express", icon: SiExpress, support: "Service routing" },
  { name: "REST APIs", icon: Network, support: "Interface contracts" },
  { name: "API Integration", icon: Network, support: "Connected workflows" },
  { name: "Authentication & Authorization", icon: ShieldCheck, support: "Secure user flows" },
  { name: "PostgreSQL", icon: SiPostgresql, support: "Relational data" },
  { name: "Prisma", icon: SiPrisma, support: "ORM workflows" },
  { name: "Supabase", icon: SiSupabase, support: "Backend services" },
  { name: "Stripe API", icon: SiStripe, support: "Payments and billing" },
  { name: "Git", icon: SiGithub, support: "Version control" },
  { name: "GitHub", icon: SiGithub, support: "Collaboration and delivery" },
  { name: "Vercel", icon: SiVercel, support: "Deployment" },
  { name: "Responsive UI", icon: LayoutPanelLeft, support: "Multi-device UX" },
  { name: "Loading/Error/Empty States", icon: LayoutPanelLeft, support: "Production readiness" },
  { name: "QA/Debugging", icon: TestTubeDiagonal, support: "Release confidence" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-20">
      <div className="section-container">
        <p className="font-heading text-xs font-semibold tracking-[0.24em] uppercase text-primary">
          Skills
        </p>
        <div className="mt-3 max-w-3xl">
          <h2 className="font-heading text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl">
            Product-focused engineering across frontend, backend, APIs, and production-ready user flows.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            A selected toolkit used to design, ship, and scale real user-facing products with clean architecture.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;

            return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_14px_40px_-24px_hsl(var(--foreground)/0.52)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,hsl(var(--primary)/0.16),transparent_54%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary shadow-[inset_0_1px_0_hsl(var(--primary)/0.25)]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {skill.name}
                  </h3>
                  {skill.support ? (
                    <p className="mt-1 text-sm text-muted-foreground">{skill.support}</p>
                  ) : null}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
