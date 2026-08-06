import { useEffect } from 'react';

/**
 * Global micro-interactions: magnetic CTAs (desktop).
 * Rebinds after mount so late DOM (hero CTAs) is covered.
 */
export default function MicroInteractions() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (reduced || coarse) return undefined;

    const strength = 0.22;
    const cleanups = [];

    const bindMagnetic = (el) => {
      if (el.dataset.magnetBound === '1') return;
      el.dataset.magnetBound = '1';

      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.setProperty('--mx', `${x * strength}px`);
        el.style.setProperty('--my', `${y * strength}px`);
      };
      const onLeave = () => {
        el.style.setProperty('--mx', '0px');
        el.style.setProperty('--my', '0px');
      };
      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
      cleanups.push(() => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
        delete el.dataset.magnetBound;
      });
    };

    const bindAll = () => {
      document
        .querySelectorAll('.btn, .header-cta, .header-lang, .magnetic')
        .forEach(bindMagnetic);
    };

    bindAll();
    const t = window.setTimeout(bindAll, 400);

    return () => {
      window.clearTimeout(t);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
