import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import RobotVisual from "./RobotVisual";

type StreakConfig = {
  left: string; top: string; delay: string; duration: string;
  length: string; opacity: string; tone: "warm" | "cool"; size: "sm" | "md" | "lg"; desktopOnly?: boolean;
};
type ParticleConfig = {
  left: string; top: string; delay: string; duration: string;
  size: string; opacity: string; tone: "warm" | "cool"; desktopOnly?: boolean;
};

const COMET_STREAKS: StreakConfig[] = [
  { left: "8%",  top: "-28%", delay: "-8.2s",  duration: "12.8s", length: "120px", opacity: "0.22", tone: "cool", size: "sm" },
  { left: "14%", top: "-34%", delay: "-3.7s",  duration: "13.4s", length: "140px", opacity: "0.26", tone: "warm", size: "sm" },
  { left: "19%", top: "-22%", delay: "-10.5s", duration: "14.6s", length: "110px", opacity: "0.18", tone: "cool", size: "sm" },
  { left: "27%", top: "-30%", delay: "-5.2s",  duration: "12.1s", length: "150px", opacity: "0.24", tone: "warm", size: "sm" },
  { left: "34%", top: "-26%", delay: "-11.9s", duration: "13.7s", length: "130px", opacity: "0.18", tone: "cool", size: "sm" },
  { left: "43%", top: "-32%", delay: "-6.6s",  duration: "15.1s", length: "125px", opacity: "0.22", tone: "warm", size: "sm" },
  { left: "61%", top: "-29%", delay: "-9.1s",  duration: "12.9s", length: "145px", opacity: "0.20", tone: "cool", size: "sm" },
  { left: "69%", top: "-35%", delay: "-2.6s",  duration: "13.5s", length: "115px", opacity: "0.26", tone: "warm", size: "sm" },
  { left: "74%", top: "-24%", delay: "-7.4s",  duration: "14.9s", length: "135px", opacity: "0.18", tone: "cool", size: "sm", desktopOnly: true },
  { left: "82%", top: "-31%", delay: "-1.9s",  duration: "12.4s", length: "155px", opacity: "0.22", tone: "warm", size: "sm", desktopOnly: true },
  { left: "89%", top: "-28%", delay: "-4.8s",  duration: "14.2s", length: "120px", opacity: "0.16", tone: "cool", size: "sm", desktopOnly: true },
  { left: "94%", top: "-34%", delay: "-10.1s", duration: "13.1s", length: "150px", opacity: "0.20", tone: "warm", size: "sm", desktopOnly: true },
  { left: "11%", top: "-36%", delay: "-12.5s", duration: "11.4s", length: "210px", opacity: "0.32", tone: "warm", size: "md" },
  { left: "23%", top: "-30%", delay: "-6.1s",  duration: "10.8s", length: "240px", opacity: "0.26", tone: "cool", size: "md" },
  { left: "37%", top: "-37%", delay: "-3.9s",  duration: "11.7s", length: "220px", opacity: "0.30", tone: "warm", size: "md" },
  { left: "52%", top: "-27%", delay: "-8.7s",  duration: "10.5s", length: "260px", opacity: "0.24", tone: "cool", size: "md" },
  { left: "66%", top: "-38%", delay: "-2.4s",  duration: "11.3s", length: "230px", opacity: "0.28", tone: "warm", size: "md" },
  { left: "79%", top: "-32%", delay: "-9.9s",  duration: "10.9s", length: "250px", opacity: "0.24", tone: "cool", size: "md", desktopOnly: true },
  { left: "88%", top: "-25%", delay: "-4.4s",  duration: "11.1s", length: "235px", opacity: "0.30", tone: "warm", size: "md", desktopOnly: true },
  { left: "16%", top: "-42%", delay: "-10.2s", duration: "9.8s",  length: "360px", opacity: "0.34", tone: "warm", size: "lg" },
  { left: "46%", top: "-39%", delay: "-5.8s",  duration: "9.2s",  length: "400px", opacity: "0.28", tone: "cool", size: "lg" },
  { left: "72%", top: "-44%", delay: "-1.4s",  duration: "10.1s", length: "380px", opacity: "0.32", tone: "warm", size: "lg", desktopOnly: true },
];

const COMET_PARTICLES: ParticleConfig[] = [
  { left: "7%",  top: "-16%", delay: "-5.1s",  duration: "12.4s", size: "3px", opacity: "0.24", tone: "warm" },
  { left: "15%", top: "-24%", delay: "-2.8s",  duration: "10.7s", size: "2px", opacity: "0.20", tone: "cool" },
  { left: "22%", top: "-18%", delay: "-8.9s",  duration: "11.9s", size: "4px", opacity: "0.18", tone: "warm" },
  { left: "31%", top: "-26%", delay: "-4.3s",  duration: "9.9s",  size: "3px", opacity: "0.22", tone: "cool" },
  { left: "44%", top: "-20%", delay: "-6.7s",  duration: "12.1s", size: "2px", opacity: "0.20", tone: "warm" },
  { left: "53%", top: "-23%", delay: "-1.1s",  duration: "10.2s", size: "4px", opacity: "0.18", tone: "cool" },
  { left: "62%", top: "-14%", delay: "-7.8s",  duration: "11.3s", size: "3px", opacity: "0.20", tone: "warm" },
  { left: "74%", top: "-22%", delay: "-3.5s",  duration: "9.7s",  size: "2px", opacity: "0.18", tone: "cool",  desktopOnly: true },
  { left: "83%", top: "-19%", delay: "-9.4s",  duration: "12.8s", size: "4px", opacity: "0.18", tone: "warm",  desktopOnly: true },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0, duration = 0.8) => ({
  initial:    { opacity: 0, y: 24, filter: "blur(6px)" },
  animate:    { opacity: 1, y: 0,  filter: "blur(0px)" },
  transition: { duration, delay, ease },
});

// ─── Section ─────────────────────────────────────────────────────────

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const handleScrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "#030303",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Background layers ── */}
      <div className="hero-premium-bg pointer-events-none absolute inset-0" />
      <div className="hero-tech-grid pointer-events-none absolute inset-0 opacity-80" />

      {/* ── Ambient orbs (white/silver) ── */}
      {!reduceMotion && (
        <>
          <div
            className="pointer-events-none absolute"
            style={{
              top: "10%", left: "-8%",
              width: "55vw", height: "55vw",
              maxWidth: 640, maxHeight: 640,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(220,225,230,0.015) 45%, transparent 68%)",
              filter: "blur(55px)",
              animation: "hero-orb-drift 14s ease-in-out infinite",
            }}
          />
          <div
            className="pointer-events-none absolute"
            style={{
              top: "-15%", right: "-12%",
              width: "62vw", height: "62vw",
              maxWidth: 760, maxHeight: 760,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(220,225,230,0.025) 38%, transparent 65%)",
              filter: "blur(48px)",
              animation: "hero-orb-drift 18s ease-in-out infinite reverse",
              animationDelay: "-6s",
            }}
          />
          <div
            className="pointer-events-none absolute"
            style={{
              bottom: "-5%", left: "30%",
              width: "40vw", height: "30vw",
              maxWidth: 480, maxHeight: 360,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
        </>
      )}

      {/* ── Comet field ── */}
      {!reduceMotion && (
        <div className="hero-comet-field pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {COMET_STREAKS.map((streak, i) => (
            <span
              key={i}
              className={`hero-comet hero-comet-${streak.size} hero-comet-${streak.tone} ${streak.desktopOnly ? "hidden md:block" : ""}`}
              style={{
                left: streak.left, top: streak.top,
                animationDelay: streak.delay, animationDuration: streak.duration,
                ["--comet-length" as string]: streak.length,
                ["--comet-opacity" as string]: streak.opacity,
              } as CSSProperties}
            />
          ))}
          {COMET_PARTICLES.map((p, i) => (
            <span
              key={`p-${i}`}
              className={`hero-comet-particle hero-comet-particle-${p.tone} ${p.desktopOnly ? "hidden md:block" : ""}`}
              style={{
                left: p.left, top: p.top,
                animationDelay: p.delay, animationDuration: p.duration,
                ["--particle-size" as string]: p.size,
                ["--particle-opacity" as string]: p.opacity,
              } as CSSProperties}
            />
          ))}
          <div className="hero-comet-center-fade absolute inset-0" />
        </div>
      )}

      {/* ── Main content ── */}
      <div className="hero-container relative z-10 flex flex-1 items-center py-32 md:py-0">
        <div className="flex w-full flex-col items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-16">

          {/* ── Left: Text ── */}
          <div className="flex-1 min-w-0">

            {/* Status pill */}
            <motion.div {...fadeUp(0, 0.7)}>
              <div
                className="mb-7 inline-flex items-center gap-2.5 rounded-full"
                style={{
                  padding: "7px 18px",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                <span
                  className="rounded-full"
                  style={{
                    width: 6, height: 6, flexShrink: 0,
                    background: "rgba(255,255,255,0.80)",
                    animation: "robot-pulse-glow 2s ease-in-out infinite",
                  }}
                />
                Full-Stack Engineer
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.12, 0.9)}
              className="font-heading font-bold text-white"
              style={{
                fontSize: "clamp(50px, 7.8vw, 108px)",
                lineHeight: 0.94,
                letterSpacing: "-0.035em",
              }}
            >
              Lazar
              <br />
              <span style={{ color: "rgba(255,255,255,0.88)", display: "block" }}>
                Bukejlovic
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              {...fadeUp(0.24, 0.8)}
              className="mt-7 max-w-md text-base leading-relaxed md:text-lg"
              style={{ color: "rgba(255,255,255,0.42)" }}
            >
              Building full-stack product systems where frontend execution, backend architecture, and delivery reliability matter.
            </motion.p>

            {/* Gradient rule */}
            <motion.div
              {...fadeUp(0.32, 0.6)}
              className="mt-8 h-px w-28"
              style={{ background: "linear-gradient(to right, rgba(255,255,255,0.45), transparent)" }}
            />

            {/* CTA row */}
            <motion.div {...fadeUp(0.38, 0.7)} className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={handleScrollToWork}
                className="group inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
                style={{
                  padding: "12px 24px",
                  fontSize: 14,
                  background: "rgba(255,255,255,0.92)",
                  color: "#050505",
                  boxShadow: "0 0 30px rgba(255,255,255,0.15), 0 4px 20px rgba(255,255,255,0.08)",
                }}
              >
                View My Work
                <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
                style={{
                  padding: "12px 22px",
                  fontSize: 14,
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                Resume
                <ArrowUpRight size={13} />
              </a>

              <a
                href="https://calendly.com/lazarbukejlovic/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
                style={{
                  padding: "12px 22px",
                  fontSize: 14,
                  fontWeight: 500,
                  border: "1px solid rgba(255,255,255,0.09)",
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                Let's Talk
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.50, 0.7)}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              {[
                { label: "Years Experience", value: "4" },
                { label: "Projects Shipped",  value: "15+" },
                { label: "Stack",             value: "React · Node · Supabase" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span
                    className="font-heading font-bold text-white"
                    style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
                  >
                    {value}
                  </span>
                  <span
                    style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(255,255,255,0.26)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Robot ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.18, ease }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <RobotVisual />
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        onClick={handleScrollAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 focus-visible:outline-none"
        aria-label="Scroll down"
        style={{ color: "rgba(255,255,255,0.18)" }}
      >
        <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.32em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          className="h-9 w-px"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)",
            animation: "robot-pulse-glow 2.4s ease-in-out infinite",
          }}
        />
      </motion.button>

      {/* ── Section bottom fade ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(3,3,3,0.95))" }}
      />
    </section>
  );
}
