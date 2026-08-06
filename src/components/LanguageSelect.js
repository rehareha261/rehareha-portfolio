import React from 'react';
import { motion } from 'framer-motion';
import HeroScene from './HeroScene';
import './LanguageSelect.css';

const ease = [0.22, 1, 0.36, 1];

const langs = [
  { code: 'en', label: 'English', tone: 'sky' },
  { code: 'fr', label: 'Français', tone: 'accent' },
];

export default function LanguageSelect({ onSelect }) {
  return (
    <motion.div
      className="lang-select"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65 }}
    >
      <div className="lang-select__field" aria-hidden="true">
        <span className="lang-select__orb lang-select__orb--1" />
        <span className="lang-select__orb lang-select__orb--2" />
        <span className="lang-select__orb lang-select__orb--3" />
      </div>

      <HeroScene className="lang-select__scene" />

      <div className="lang-select__content">
        <motion.p
          className="lang-select__eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55, ease }}
        >
          Portfolio 2026 · Madagascar
        </motion.p>

        <motion.h1
          className="lang-select__name"
          aria-label="Nala Rehareha"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.85, ease }}
        >
          <span className="lang-select__name-line">Nala</span>
          <span className="lang-select__name-line lang-select__name-line--last">
            Rehareha
          </span>
        </motion.h1>

        <motion.p
          className="lang-select__tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.65 }}
        >
          Fullstack · IA &amp; Big Data
        </motion.p>

        <motion.div
          className="lang-select__chooser"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7, ease }}
        >
          <p className="lang-select__prompt">Choose your language</p>
          <div className="lang-select__buttons">
            {langs.map((lang) => (
              <button
                key={lang.code}
                type="button"
                className={`lang-block lang-block--${lang.tone}`}
                onClick={() => onSelect(lang.code)}
              >
                <span className="lang-block__face" aria-hidden="true" />
                <span className="lang-block__code">{lang.code}</span>
                <span className="lang-block__label">{lang.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
