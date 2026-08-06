import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

const CHAPTERS = [
  { id: 'intro', labelKey: 'hero' },
  { id: 'about', labelKey: 'about' },
  { id: 'experience', labelKey: 'experience' },
  { id: 'skills', labelKey: 'skills' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'education', labelKey: 'education' },
  { id: 'contact', labelKey: 'contact' },
];

export function ChapterNav({ t }) {
  const [active, setActive] = useState('intro');
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const nodes = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean);
    if (!nodes.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActive(entry.target.id);
          setOnDark(
            entry.target.id === 'intro' ||
              entry.target.id === 'contact' ||
              entry.target.classList.contains('quote-band')
          );
        });
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: 0.01 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const labelFor = (key) => {
    if (key === 'hero') return t.ui?.intro || 'Intro';
    return t.nav[key] || key;
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`chapter-nav ${onDark ? 'is-on-dark' : ''}`}
      aria-label={t.ui?.chapters || 'Chapters'}
    >
      {CHAPTERS.map((c, i) => (
        <button
          key={c.id}
          type="button"
          className={`chapter-nav__btn ${active === c.id ? 'is-active' : ''}`}
          onClick={() => scrollTo(c.id)}
          aria-current={active === c.id ? 'true' : undefined}
        >
          <span className="chapter-nav__label">
            {String(i).padStart(2, '0')} {labelFor(c.labelKey)}
          </span>
          <span className="chapter-nav__dot" />
        </button>
      ))}
    </nav>
  );
}
