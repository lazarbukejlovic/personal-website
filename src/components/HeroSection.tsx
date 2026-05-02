import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

type StreakConfig = {
  left: string;
  top: string;
  delay: string;
  duration: string;
  length: string;
  opacity: string;
  tone: "warm" | "cool";
  size: "sm" | "md" | "lg";
  desktopOnly?: boolean;
};

type ParticleConfig = {
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: string;
  opacity: string;
  tone: "warm" | "cool";
  desktopOnly?: boolean;
};

const COMET_STREAKS: StreakConfig[] = [
  { left: "8%", top: "-28%", delay: "-8.2s", duration: "12.8s", length: "120px", opacity: "0.3", tone: "cool", size: "sm" },
  { left: "14%", top: "-34%", delay: "-3.7s", duration: "13.4s", length: "140px", opacity: "0.36", tone: "warm", size: "sm" },
  { left: "19%", top: "-22%", delay: "-10.5s", duration: "14.6s", length: "110px", opacity: "0.24", tone: "cool", size: "sm" },
  { left: "27%", top: "-30%", delay: "-5.2s", duration: "12.1s", length: "150px", opacity: "0.34", tone: "warm", size: "sm" },
  { left: "34%", top: "-26%", delay: "-11.9s", duration: "13.7s", length: "130px", opacity: "0.26", tone: "cool", size: "sm" },
  { left: "43%", top: "-32%", delay: "-6.6s", duration: "15.1s", length: "125px", opacity: "0.3", tone: "warm", size: "sm" },
  { left: "61%", top: "-29%", delay: "-9.1s", duration: "12.9s", length: "145px", opacity: "0.28", tone: "cool", size: "sm" },
  { left: "69%", top: "-35%", delay: "-2.6s", duration: "13.5s", length: "115px", opacity: "0.35", tone: "warm", size: "sm" },
  { left: "74%", top: "-24%", delay: "-7.4s", duration: "14.9s", length: "135px", opacity: "0.24", tone: "cool", size: "sm", desktopOnly: true },
  { left: "82%", top: "-31%", delay: "-1.9s", duration: "12.4s", length: "155px", opacity: "0.31", tone: "warm", size: "sm", desktopOnly: true },
  { left: "89%", top: "-28%", delay: "-4.8s", duration: "14.2s", length: "120px", opacity: "0.22", tone: "cool", size: "sm", desktopOnly: true },
  { left: "94%", top: "-34%", delay: "-10.1s", duration: "13.1s", length: "150px", opacity: "0.29", tone: "warm", size: "sm", desktopOnly: true },

  { left: "11%", top: "-36%", delay: "-12.5s", duration: "11.4s", length: "210px", opacity: "0.42", tone: "warm", size: "md" },
  { left: "23%", top: "-30%", delay: "-6.1s", duration: "10.8s", length: "240px", opacity: "0.35", tone: "cool", size: "md" },
  { left: "37%", top: "-37%", delay: "-3.9s", duration: "11.7s", length: "220px", opacity: "0.4", tone: "warm", size: "md" },
  { left: "52%", top: "-27%", delay: "-8.7s", duration: "10.5s", length: "260px", opacity: "0.33", tone: "cool", size: "md" },
  { left: "66%", top: "-38%", delay: "-2.4s", duration: "11.3s", length: "230px", opacity: "0.37", tone: "warm", size: "md" },
  { left: "79%", top: "-32%", delay: "-9.9s", duration: "10.9s", length: "250px", opacity: "0.34", tone: "cool", size: "md", desktopOnly: true },
  { left: "88%", top: "-25%", delay: "-4.4s", duration: "11.1s", length: "235px", opacity: "0.39", tone: "warm", size: "md", desktopOnly: true },

  { left: "16%", top: "-42%", delay: "-10.2s", duration: "9.8s", length: "360px", opacity: "0.44", tone: "warm", size: "lg" },
  { left: "46%", top: "-39%", delay: "-5.8s", duration: "9.2s", length: "400px", opacity: "0.38", tone: "cool", size: "lg" },
  { left: "72%", top: "-44%", delay: "-1.4s", duration: "10.1s", length: "380px", opacity: "0.41", tone: "warm", size: "lg", desktopOnly: true },
  { left: "6%", top: "-40%", delay: "-11.1s", duration: "9.1s", length: "420px", opacity: "0.52", tone: "warm", size: "lg", desktopOnly: true },
  { left: "33%", top: "-43%", delay: "-4.6s", duration: "8.8s", length: "440px", opacity: "0.48", tone: "warm", size: "lg", desktopOnly: true },
  { left: "58%", top: "-41%", delay: "-7.3s", duration: "9.6s", length: "410px", opacity: "0.46", tone: "warm", size: "lg", desktopOnly: true },
  { left: "84%", top: "-45%", delay: "-2.2s", duration: "9.3s", length: "430px", opacity: "0.5", tone: "warm", size: "lg", desktopOnly: true },

  { left: "4%", top: "-27%", delay: "-6.9s", duration: "11.2s", length: "170px", opacity: "0.43", tone: "warm", size: "sm", desktopOnly: true },
  { left: "24%", top: "-23%", delay: "-9.6s", duration: "10.8s", length: "165px", opacity: "0.39", tone: "warm", size: "sm", desktopOnly: true },
  { left: "49%", top: "-26%", delay: "-3.4s", duration: "11.5s", length: "180px", opacity: "0.41", tone: "warm", size: "sm", desktopOnly: true },
  { left: "71%", top: "-24%", delay: "-8.8s", duration: "10.9s", length: "175px", opacity: "0.37", tone: "warm", size: "sm", desktopOnly: true },
  { left: "96%", top: "-29%", delay: "-5.5s", duration: "11.7s", length: "185px", opacity: "0.4", tone: "warm", size: "sm", desktopOnly: true },
];

const COMET_PARTICLES: ParticleConfig[] = [
  { left: "7%", top: "-16%", delay: "-5.1s", duration: "12.4s", size: "3px", opacity: "0.34", tone: "warm" },
  { left: "15%", top: "-24%", delay: "-2.8s", duration: "10.7s", size: "2px", opacity: "0.3", tone: "cool" },
  { left: "22%", top: "-18%", delay: "-8.9s", duration: "11.9s", size: "4px", opacity: "0.28", tone: "warm" },
  { left: "31%", top: "-26%", delay: "-4.3s", duration: "9.9s", size: "3px", opacity: "0.33", tone: "cool" },
  { left: "44%", top: "-20%", delay: "-6.7s", duration: "12.1s", size: "2px", opacity: "0.3", tone: "warm" },
  { left: "53%", top: "-23%", delay: "-1.1s", duration: "10.2s", size: "4px", opacity: "0.25", tone: "cool" },
  { left: "62%", top: "-14%", delay: "-7.8s", duration: "11.3s", size: "3px", opacity: "0.31", tone: "warm" },
  { left: "74%", top: "-22%", delay: "-3.5s", duration: "9.7s", size: "2px", opacity: "0.29", tone: "cool", desktopOnly: true },
  { left: "83%", top: "-19%", delay: "-9.4s", duration: "12.8s", size: "4px", opacity: "0.28", tone: "warm", desktopOnly: true },
  { left: "91%", top: "-25%", delay: "-5.9s", duration: "10.9s", size: "3px", opacity: "0.26", tone: "cool", desktopOnly: true },
  { left: "11%", top: "-19%", delay: "-7.2s", duration: "9.8s", size: "2px", opacity: "0.45", tone: "warm", desktopOnly: true },
  { left: "29%", top: "-21%", delay: "-4.9s", duration: "10.1s", size: "3px", opacity: "0.43", tone: "warm", desktopOnly: true },
  { left: "47%", top: "-17%", delay: "-10.6s", duration: "9.5s", size: "2px", opacity: "0.4", tone: "warm", desktopOnly: true },
  { left: "68%", top: "-20%", delay: "-6.4s", duration: "10.4s", size: "3px", opacity: "0.38", tone: "warm", desktopOnly: true },
  { left: "87%", top: "-16%", delay: "-2.7s", duration: "9.9s", size: "2px", opacity: "0.41", tone: "warm", desktopOnly: true },
  { left: "97%", top: "-22%", delay: "-8.3s", duration: "10.7s", size: "3px", opacity: "0.39", tone: "warm", desktopOnly: true },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0b0b0e] pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="hero-premium-bg pointer-events-none absolute inset-0" />
      <div className="hero-tech-grid pointer-events-none absolute inset-0 opacity-70" />
      {!reduceMotion && (
        <div className="hero-comet-field pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {COMET_STREAKS.map((streak, index) => (
            <span
              key={index}
              className={`hero-comet hero-comet-${streak.size} hero-comet-${streak.tone} ${streak.desktopOnly ? "hidden md:block" : ""}`}
              style={{
                left: streak.left,
                top: streak.top,
                animationDelay: streak.delay,
                animationDuration: streak.duration,
                ["--comet-length" as string]: streak.length,
                ["--comet-opacity" as string]: streak.opacity,
              } as CSSProperties}
            />
          ))}

          {COMET_PARTICLES.map((particle, index) => (
            <span
              key={`p-${index}`}
              className={`hero-comet-particle hero-comet-particle-${particle.tone} ${particle.desktopOnly ? "hidden md:block" : ""}`}
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
                ["--particle-size" as string]: particle.size,
                ["--particle-opacity" as string]: particle.opacity,
              } as CSSProperties}
            />
          ))}

          <div className="hero-comet-center-fade absolute inset-0" />
        </div>
      )}

      <div className="section-container relative z-10">
        <div className="flex flex-col items-start gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-5 inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.24em] text-primary uppercase">
              Full-Stack Engineer
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Lazar Bukejlovic
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              Building modern product applications with strong frontend execution and strong backend architecture.
            </p>

            <div className="mt-8 h-px w-40 bg-gradient-to-r from-primary/90 to-transparent" />
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex-shrink-0"
          >
            <div className="hero-photo-glow absolute inset-2 rounded-[1.75rem]" aria-hidden="true" />
            <div className="relative h-44 w-44 overflow-hidden rounded-[1.75rem] border border-white/15 bg-black/20 p-1 shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:h-56 md:w-56">
              <div className="h-full w-full overflow-hidden rounded-[1.4rem] border border-white/10">
                <img
                  src="https://obibedjddoyfsbnndrhf.supabase.co/storage/v1/object/public/assets/personal-picture.jpg"
                  alt="Lazar Bukejlovic"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
