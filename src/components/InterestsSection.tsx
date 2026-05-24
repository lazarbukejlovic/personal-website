import { motion } from "framer-motion";
import { Compass, Cpu, Dumbbell, LineChart, type LucideIcon } from "lucide-react";

interface InterestItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string; // drop matching file into public/images/ and add path here
}

const INTERESTS: InterestItem[] = [
  {
    title: "Traveling",
    icon: Compass,
    image: "/travel.png",
    description:
      "Enjoys traveling to discover new places, broaden perspective, and learn through different environments and cultures.",
  },
  {
    title: "Investing",
    icon: LineChart,
    image: "/investing.png",
    description:
      "Investing in BTC and ETH since 2023, with a serious long-term interest in blockchain and digital assets as emerging infrastructure.",
  },
  {
    title: "Working Out",
    icon: Dumbbell,
    image: "/training.png",
    description:
      "Values physical training and discipline as a foundation for consistency, focus, energy, and high-quality performance over time.",
  },
  {
    title: "Product Building / Technology",
    icon: Cpu,
    image: "/product.building.png",
    description:
      "Genuinely interested in building digital products, refining UX, and turning early concepts into polished, dependable product experiences.",
  },
];

export default function InterestsSection() {
  return (
    <section id="interests" className="scroll-mt-20 py-28">
      <div className="section-container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-heading text-[11px] font-semibold tracking-[0.32em] uppercase text-primary">
            Interests
          </p>
          <h2
            className="mt-4 font-heading font-light text-foreground"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em", lineHeight: 1.15 }}
          >
            Beyond{" "}
            <strong className="font-bold">Code</strong>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Beyond delivery, these interests influence long-term thinking, decision quality, and product perspective.
          </p>
          <div
            className="mt-6 h-px w-24"
            style={{ background: "linear-gradient(to right, rgba(255,255,255,0.35), transparent)" }}
          />
        </motion.div>

        {/* Interest cards grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {INTERESTS.map((interest, i) => {
            const Icon = interest.icon;
            return (
              <motion.article
                key={interest.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-xl transition-colors duration-300"
                style={{
                  background: "rgba(10,10,10,0.78)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  minHeight: interest.image ? 220 : "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                  e.currentTarget.style.boxShadow = "0 14px 40px rgba(0,0,0,0.40)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Background image (if available) */}
                {interest.image && (
                  <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                    <img
                      src={interest.image}
                      alt={interest.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ opacity: 0.28 }}
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    {/* Dark overlay for readability */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.82) 100%)",
                      }}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="relative flex h-full flex-col justify-end p-6">
                  {!interest.image && (
                    /* Icon-only layout when no image */
                    <div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                  )}
                  {interest.image && (
                    <div
                      className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        color: "rgba(255,255,255,0.70)",
                      }}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                  )}
                  <h3 className="font-heading text-base font-semibold tracking-tight text-white sm:text-lg">
                    {interest.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {interest.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
