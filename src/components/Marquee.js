import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import useSectionReveal from '../hooks/useSectionReveal';

export default function Marquee() {
  const { t } = useLanguage();
  const { ref, inView } = useSectionReveal({ once: true, enterAt: 0.95 });

  const items = [
    t.hero.name,
    t.hero.title,
    'IA & Big Data',
    t.about.location,
    'Frontend',
    'Backend',
    t.skills.categories.find((c) => c.key === 'ai')?.label || 'AI',
    t.contact.subtitle.split('—')[0].trim(),
  ];
  const loop = [...items, ...items];

  return (
    <div
      className={`marquee${inView ? ' is-in' : ''}`}
      ref={ref}
      aria-hidden="true"
      data-revealed={inView ? 'true' : 'false'}
    >
      <div className="marquee__track reveal reveal--fade" style={{ '--reveal-delay': '80ms' }}>
        {loop.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
