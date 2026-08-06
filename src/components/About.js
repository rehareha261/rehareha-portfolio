import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Section from './Section';
import Reveal from './Reveal';

export default function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" marker="01" label={t.nav.about} tone="about">
      <Reveal as="h2" className="section__headline" variant="clip" delay={0.05}>
        {t.about.subtitle}
      </Reveal>

      <div className="about__copy">
        {t.about.paragraphs.map((p, i) => (
          <Reveal key={i} as="p" delay={0.12 + i * 0.1}>
            {p}
          </Reveal>
        ))}
      </div>

      <Reveal className="about__meta" delay={0.45}>
        <div className="meta-block">
          <h3>{t.about.interests.title}</h3>
          <ul>
            {t.about.interests.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="meta-block">
          <h3>{t.about.languages.title}</h3>
          <ul>
            {t.about.languages.items.map((l) => (
              <li key={l.lang}>
                <strong>{l.lang}</strong> — {l.level}
              </li>
            ))}
          </ul>
        </div>
        <div className="meta-block meta-block--contact">
          <p>{t.about.location}</p>
          <a href={`mailto:${t.about.email}`}>{t.about.email}</a>
          <a href={`tel:${t.about.phone.replace(/\s/g, '')}`}>{t.about.phone}</a>
          <a href="https://github.com/rehareha261" target="_blank" rel="noopener noreferrer">
            {t.about.github}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
