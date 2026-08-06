import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-enter reveal — works with tall sections + Lenis.
 * Previous IntersectionObserver + threshold failed when max visible
 * ratio of a tall section stayed below the threshold forever.
 */
export default function useSectionReveal({
  once = true,
  /** Fraction of viewport: section top must cross this line to unlock */
  enterAt = 0.88,
  /** Keep active while bottom stays below this line (only if !once) */
  leaveAt = 0.12,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setInView(true);
      return undefined;
    }

    let locked = false;
    let raf = 0;

    const measure = () => {
      if (locked && once) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const entered = rect.top < vh * enterAt && rect.bottom > vh * leaveAt;

      if (entered) {
        setInView(true);
        if (once) locked = true;
        return;
      }
      if (!once) setInView(false);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [once, enterAt, leaveAt]);

  return { ref, inView };
}
