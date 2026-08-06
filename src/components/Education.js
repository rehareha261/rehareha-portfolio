import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Section from './Section';
import Reveal from './Reveal';

export default function Education() {
  const { t } = useLanguage();

  return (
    <Section id="education" marker="05" label={t.nav.education} tone="edu">
      <Reveal as="h2" className="section__headline" variant="clip" delay={0.05}>
        {t.education.subtitle}
      </Reveal>

      <div className="edu-list">
        {t.education.items.map((item, i) => (
          <Reveal key={item.degree} className="edu-item" delay={0.12 + i * 0.1}>
            <div className="edu-item__period">{item.period}</div>
            <div>
              <h3 className="edu-item__degree">{item.degree}</h3>
              <p className="edu-item__school">{item.school}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
