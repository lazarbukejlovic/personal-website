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
              Full-Stack Engineer focused on architecting and delivering modern product applications grounded in
              strong frontend execution and strong backend architecture.
            </p>
            <p>
              I bring structured systems thinking to every layer of a product — from interface and interaction down to
              data flow, integration, and delivery — shaped through work at TokenFlow and direct engagements with
              private clients in finance-oriented and digital asset-related environments.
            </p>
            <p>
              I operate best in ownership-driven environments where clean implementation, scalable architecture, and
              end-to-end product flow are treated as one continuous craft.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
