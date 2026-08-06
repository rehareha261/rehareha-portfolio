import React, { createContext, useContext } from 'react';
import useSectionReveal from '../hooks/useSectionReveal';

const SectionRevealContext = createContext(false);

export function useSectionInView() {
  return useContext(SectionRevealContext);
}

export default function Section({
  id,
  marker,
  label,
  tone = 'about',
  children,
  bodyClassName = '',
}) {
  const { ref, inView } = useSectionReveal({ once: true, enterAt: 0.86 });

  return (
    <section
      id={id}
      ref={ref}
      className={`section section--${tone}${inView ? ' is-in' : ''}`}
      data-chapter={id}
      data-revealed={inView ? 'true' : 'false'}
    >
      <div className="section__rail" aria-hidden="true">
        <span className="section__marker reveal reveal--up" style={{ '--reveal-delay': '40ms' }}>
          {marker}
        </span>
        <span className="section__label">
          <span className="reveal reveal--fade" style={{ '--reveal-delay': '140ms' }}>
            {label}
          </span>
        </span>
      </div>
      <SectionRevealContext.Provider value={inView}>
        <div className={`section__body ${bodyClassName}`.trim()}>{children}</div>
      </SectionRevealContext.Provider>
    </section>
  );
}
