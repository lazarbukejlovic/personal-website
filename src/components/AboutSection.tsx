import { motion } from "framer-motion";

const blurReveal = {
  initial:    { opacity: 0, y: 22, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0,  filter: "blur(0px)" },
  viewport:   { once: true, margin: "-40px" },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as number[] },
};

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-28">
      <div className="section-container">
        <motion.div {...blurReveal}>
          <p className="font-heading text-[11px] font-semibold tracking-[0.32em] uppercase text-primary">
            About
          </p>
          <h2
            className="mt-4 max-w-xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Who I Am
          </h2>
          <div
            className="mt-5 h-px w-24"
            style={{ background: "linear-gradient(to right, rgba(255,255,255,0.35), transparent)" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground"
        >
          <p>
            I build full-stack product systems that connect polished React/TypeScript interfaces with reliable
            backend behavior.
          </p>
          <p>
            My work spans Node.js, REST APIs, authentication, database-backed workflows, payments, dashboards, and
            responsive product experiences across fintech, travel intelligence, operational tooling, booking flows,
            and SaaS-style applications.
          </p>
          <p>
            I focus on turning unclear product requirements into usable, production-ready software: structuring
            workflows, building clean interfaces, connecting frontend behavior to backend logic, testing real user
            flows, and preparing features for deployment.
          </p>
          <p>
            Known for ownership-driven execution, product thinking, clean implementation, and building practical web
            applications that feel polished, reliable, and ready for real users.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
