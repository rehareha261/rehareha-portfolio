import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Section from './Section';
import Reveal from './Reveal';

function jobMarker(period, index, nowLabel) {
  if (index === 0) return nowLabel;
  const years = period.match(/\d{4}/g) || [];
  if (years.length >= 2) {
    const a = years[0].slice(2);
    const b = years[1].slice(2);
    return a === b ? years[0] : `${a}→${b}`;
  }
  return years[0] || String(2024 + index);
}

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience" marker="02" label={t.nav.experience} tone="exp">
      <Reveal as="h2" className="section__headline" variant="clip" delay={0.05}>
        {t.experience.subtitle}
      </Reveal>

      <div className="timeline">
        {t.experience.jobs.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}`} className="job" delay={0.15 + i * 0.12}>
            <div className="job__time">
              {jobMarker(job.period, i, t.ui.now)}
              <small>{job.period}</small>
            </div>
            <div className="job__content">
              <h3 className="job__role">{job.role}</h3>
              <p className="job__company">{job.company}</p>
              <ul className="job__bullets">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 48)}>{b}</li>
                ))}
              </ul>
              <div className="job__tech">
                {job.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
