import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/** Shared Lenis instance for scroll listeners (reveals / chapters). */
let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export default function useLenis(enabled = true) {
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;

  useEffect(() => {
    if (!enabled) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.1,
    });
    lenisInstance = lenis;

    // Bridge Lenis scroll → native scroll listeners (reveals, etc.)
    lenis.on('scroll', () => {
      window.dispatchEvent(new Event('scroll'));
    });

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      if (lenisInstance === lenis) lenisInstance = null;
    };
  }, [enabled]);
}
