import { motionValue } from "framer-motion";

/**
 * Single global pointer state — shared between GlobalGlassCursor and RobotVisual.
 * Only ONE listener is installed via installPointerListener().
 */
export const pointer = {
  nx: 0,      // normalized -1..1 horizontal
  ny: 0,      // normalized -1..1 vertical
  active: false,
};

/** Framer Motion values for pixel-accurate cursor position (GlobalGlassCursor uses these) */
export const cursorMX = motionValue(-200);
export const cursorMY = motionValue(-200);

let installed = false;

export function installPointerListener(): void {
  if (installed || typeof window === "undefined") return;
  installed = true;

  window.addEventListener(
    "pointermove",
    (e: PointerEvent) => {
      pointer.nx     = (e.clientX / window.innerWidth)  * 2 - 1;
      pointer.ny     = (e.clientY / window.innerHeight) * 2 - 1;
      pointer.active = true;
      cursorMX.set(e.clientX);
      cursorMY.set(e.clientY);
    },
    { passive: true },
  );
}
