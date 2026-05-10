import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="font-heading text-sm font-medium tracking-widest uppercase text-primary">About</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I build full-stack product systems where frontend execution, backend architecture, and delivery
              reliability matter.
            </p>
            <p>
              My work spans React, TypeScript, Node.js, REST APIs, authentication, dashboards, database-backed
              features, payments, subscriptions, and responsive product interfaces. I have delivered 15+ client and
              portfolio projects across fintech, digital assets, travel intelligence, operational tooling, booking
              flows, and SaaS-style product experiences.
            </p>
            <p>
              I focus on turning product requirements into usable, production-ready software: structuring workflows,
              building clean interfaces, connecting frontend behavior to backend logic, testing real user flows, and
              preparing features for deployment.
            </p>
            <p>
              Known for ownership-driven execution, product thinking, clean implementation, and building practical web
              applications that feel polished, reliable, and ready for real users.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
