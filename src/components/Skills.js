import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Section from './Section';
import Reveal from './Reveal';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" marker="03" label={t.nav.skills} tone="skills">
      <Reveal as="h2" className="section__headline" variant="clip" delay={0.05}>
        {t.skills.subtitle}
      </Reveal>

      <div className="skills-grid">
        {t.skills.categories.map((cat, i) => (
          <Reveal key={cat.key} className="skill-cat" delay={0.12 + i * 0.08}>
            <h3>{cat.label}</h3>
            <ul>
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
