import { motion } from "framer-motion";

interface SkillGroup {
  label: string;
  items: string[];
}

const SKILLS: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase"],
  },
  {
    label: "Integrations",
    items: ["Stripe", "Real-time Interaction"],
  },
  {
    label: "Thinking",
    items: ["Product Systems", "UI / UX Thinking", "Full-Stack Product Delivery"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-20">
      <div className="section-container">
        <h2 className="font-heading text-sm font-medium tracking-widest uppercase text-primary">
          Tools & Expertise
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
