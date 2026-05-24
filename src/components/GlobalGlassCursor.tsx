import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { cursorMX, cursorMY } from "@/lib/pointer";

const SIZE = 52;
const HALF = SIZE / 2;

/**
 * Frosted-glass cursor overlay — mounted once at the app root.
 * Reads from the shared cursorMX/cursorMY motion values (no extra listener).
 * Hidden on coarse pointer devices (touch).
 */
export default function GlobalGlassCursor() {
  const [coarse, setCoarse] = useState(true); // start hidden, reveal after check

  useEffect(() => {
    setCoarse(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const springX = useSpring(cursorMX, { stiffness: 250, damping: 40, mass: 0.9, restDelta: 0.1 });
  const springY = useSpring(cursorMY, { stiffness: 250, damping: 40, mass: 0.9, restDelta: 0.1 });

  // Center the orb on the cursor hotspot
  const x = useTransform(springX, (v) => v - HALF);
  const y = useTransform(springY, (v) => v - HALF);

  if (coarse) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="glass-cursor"
      style={{ x, y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="glass-cursor__dot" />
    </motion.div>
  );
}
