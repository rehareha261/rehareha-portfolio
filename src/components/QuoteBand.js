import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import useSectionReveal from '../hooks/useSectionReveal';
import Reveal from './Reveal';

export default function QuoteBand() {
  const { t } = useLanguage();
  const { ref, inView } = useSectionReveal({ once: true, enterAt: 0.82 });

  return (
    <section
      className={`quote-band${inView ? ' is-in' : ''}`}
      ref={ref}
      aria-label={t.ui.quoteMark}
      data-revealed={inView ? 'true' : 'false'}
    >
      <div className="quote-band__glow" aria-hidden="true" />
      <Reveal as="blockquote" className="quote-band__text" variant="clip" delay={0.08}>
        <span className="quote-band__mark">{t.ui.quoteMark}</span>
        {t.ui.quote}
      </Reveal>
    </section>
  );
}
