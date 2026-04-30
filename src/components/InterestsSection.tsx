import { motion } from "framer-motion";

const INTERESTS = [
  "Product Systems",
  "Real-time Interaction",
  "Interface Clarity",
  "Design Systems",
  "Performance",
  "Product-focused Engineering",
  "Clean User Flows",
  "Full-stack Delivery",
];

export default function InterestsSection() {
  return (
    <section id="interests" className="scroll-mt-20 py-20">
      <div className="section-container">
        <h2 className="font-heading text-sm font-medium tracking-widest uppercase text-primary">
          Focus Areas
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {INTERESTS.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
            >
              {interest}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
