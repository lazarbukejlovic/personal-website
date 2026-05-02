import { motion } from "framer-motion";
import { Network, ShieldCheck } from "lucide-react";
import {
  SiExpress,
  SiGithub,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  type IconType,
} from "react-icons/si";

interface SkillItem {
  name: string;
  icon: IconType;
  support?: string;
}

const SKILLS: SkillItem[] = [
  { name: "JavaScript", icon: SiJavascript, support: "Core language" },
  { name: "TypeScript", icon: SiTypescript, support: "Type-safe systems" },
  { name: "React", icon: SiReact, support: "UI architecture" },
  { name: "Node.js", icon: SiNodedotjs, support: "Runtime and APIs" },
  { name: "Express", icon: SiExpress, support: "Service routing" },
  { name: "PostgreSQL", icon: SiPostgresql, support: "Relational data" },
  { name: "Prisma", icon: SiPrisma, support: "ORM workflows" },
  { name: "REST APIs", icon: Network, support: "Interface design" },
  { name: "Tailwind CSS", icon: SiTailwindcss, support: "Design execution" },
  { name: "Git / GitHub", icon: SiGithub, support: "Version control" },
  { name: "Authentication", icon: ShieldCheck, support: "Secure user flows" },
  { name: "Stripe", icon: SiStripe, support: "Payments and checkout" },
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
