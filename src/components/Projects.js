import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Section from './Section';
import Reveal from './Reveal';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects" marker="04" label={t.nav.projects} tone="projects">
      <Reveal as="h2" className="section__headline" variant="clip" delay={0.05}>
        {t.projects.subtitle}
      </Reveal>

      <div className="projects-list">
        {t.projects.items.map((project, i) => (
          <Reveal
            key={project.name}
            className={`project ${project.highlight ? 'is-highlight' : ''}`}
            delay={0.12 + i * 0.09}
          >
            <span className="project__index">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="project__name">
                {project.name}
                {project.highlight && (
                  <span className="project__badge">{t.ui.highlight}</span>
                )}
              </h3>
              <p className="project__desc">{project.description}</p>
              <div className="project__tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
            {project.github ? (
              <a
                className="project__link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.ui.viewCode}
              </a>
            ) : (
              <span className="project__link is-muted">{t.ui.private}</span>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
