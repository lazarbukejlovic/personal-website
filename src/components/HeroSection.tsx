import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="section-container relative">
        <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="mb-3 text-sm font-medium tracking-widest uppercase text-primary">Full-Stack Engineer</p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Lazar Bukejlovic
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Building modern product applications with strong frontend execution and strong backend architecture.
            </p>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-shrink-0"
          >
            <div className="h-40 w-40 overflow-hidden rounded-2xl border-2 border-border shadow-sm md:h-52 md:w-52">
              <img
                src="https://obibedjddoyfsbnndrhf.supabase.co/storage/v1/object/public/assets/personal-picture.jpg"
                alt="Lazar Bukejlovic"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
