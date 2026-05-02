import { motion } from "framer-motion";
import { Compass, Cpu, Dumbbell, LineChart, Orbit, type LucideIcon } from "lucide-react";

interface InterestItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const INTERESTS: InterestItem[] = [
  {
    title: "Traveling",
    icon: Compass,
    description:
      "Enjoys traveling to discover new places, broaden perspective, and learn through different environments and cultures.",
  },
  {
    title: "Investing",
    icon: LineChart,
    description:
      "Investing in BTC and ETH since 2023, with a serious long-term interest in blockchain and digital assets as emerging infrastructure.",
  },
  {
    title: "Working Out",
    icon: Dumbbell,
    description:
      "Values physical training and discipline as a foundation for consistency, focus, energy, and high-quality performance over time.",
  },
  {
    title: "Product Building / Technology",
    icon: Cpu,
    description:
      "Genuinely interested in building digital products, refining UX, and turning early concepts into polished, dependable product experiences.",
  },
];

export default function InterestsSection() {
  return (
    <section id="interests" className="scroll-mt-20 py-20">
      <div className="section-container">
        <p className="font-heading text-xs font-semibold tracking-[0.24em] uppercase text-primary">
          Interests
        </p>
        <div className="mt-3 max-w-3xl">
          <h2 className="font-heading text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl">
            Areas that shape how I think, build, and grow.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Beyond delivery, these interests influence long-term thinking, decision quality, and product perspective.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {INTERESTS.map((interest, i) => {
            const Icon = interest.icon;

            return (
              <motion.article
                key={interest.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/75 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_16px_42px_-24px_hsl(var(--foreground)/0.52)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,hsl(var(--primary)/0.17),transparent_56%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-primary/15 opacity-45" />
                <Orbit className="pointer-events-none absolute right-5 top-5 h-4 w-4 text-primary/40" strokeWidth={1.5} />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary shadow-[inset_0_1px_0_hsl(var(--primary)/0.24)]">
                    <Icon className="h-6 w-6" strokeWidth={1.9} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {interest.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
