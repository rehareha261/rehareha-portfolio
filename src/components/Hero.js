import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import useSectionReveal from '../hooks/useSectionReveal';
import HeroScene from './HeroScene';

export default function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const { ref, inView } = useSectionReveal({ once: true, enterAt: 0.98 });

  const active = reduce || inView;
  const first = t.hero.name.split(' ')[0];
  const last = t.hero.name.split(' ').slice(1).join(' ');

  return (
    <section
      id="intro"
      className={`hero${active ? ' is-in' : ''}`}
      ref={ref}
      data-chapter="intro"
      data-revealed={active ? 'true' : 'false'}
    >
      <div className="hero__field" aria-hidden="true">
        <span className="hero__orb hero__orb--1" />
        <span className="hero__orb hero__orb--2" />
        <span className="hero__orb hero__orb--3" />
      </div>

      <HeroScene className="hero__scene" />

      <div className="hero__stage">
        <p
          className="hero__greeting reveal reveal--up"
          style={{ '--reveal-delay': '80ms' }}
        >
          {t.hero.greeting}
        </p>

        <h1 className="hero__name" aria-label={t.hero.name}>
          <span
            className="hero__name-line hero__name-line--first reveal reveal--up"
            style={{ '--reveal-delay': '180ms' }}
          >
            {first}
          </span>
          <span
            className="hero__name-line hero__name-line--last reveal reveal--up"
            style={{ '--reveal-delay': '320ms' }}
          >
            {last}
          </span>
        </h1>

        <div
          className="hero__meta reveal reveal--up"
          style={{ '--reveal-delay': '520ms' }}
        >
          <p className="hero__title">
            {t.hero.title}
            <span className="hero__dot" aria-hidden="true" />
            {t.hero.subtitle}
          </p>
          <p className="hero__lead">{t.hero.description}</p>
        </div>

        <div
          className="hero__actions reveal reveal--up"
          style={{ '--reveal-delay': '700ms' }}
        >
          <a className="btn btn--solid magnetic" href="#projects">
            <span>{t.hero.cta}</span>
          </a>
          <a className="btn btn--ghost magnetic" href="#contact">
            <span>{t.hero.ctaContact}</span>
          </a>
        </div>
      </div>

      <div
        className="hero__scroll reveal reveal--fade"
        aria-hidden="true"
        style={{ '--reveal-delay': '980ms' }}
      >
        <div className="hero__scroll-line">
          <span />
        </div>
        <span className="hero__scroll-label">{t.ui.scrollExplore}</span>
      </div>
    </section>
  );
}
