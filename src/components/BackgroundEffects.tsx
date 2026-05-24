import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Inline SVG noise for film-grain texture
const NOISE_DATA_URI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='320' height='320' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

export default function BackgroundEffects() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouse = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.background = `radial-gradient(1000px circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.022), transparent 44%)`;
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [reduceMotion]);

  return (
    <>
      {/* Cursor spotlight — large, soft white */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30"
        aria-hidden="true"
        style={{ transition: "background 0.12s ease-out" }}
      />

      {/* Full-page subtle grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: [
            "linear-gradient(to right, rgba(255,255,255,0.022) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(255,255,255,0.016) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "72px 72px",
        }}
      />

      {/* Film-grain noise — very subtle depth texture */}
      <div
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.028]"
        aria-hidden="true"
        style={{
          backgroundImage: NOISE_DATA_URI,
          backgroundRepeat: "repeat",
          backgroundSize: "280px 280px",
        }}
      />
    </>
  );
}
