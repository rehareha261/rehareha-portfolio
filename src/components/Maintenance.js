import React, { useEffect, useState } from 'react';
import './Maintenance.css';

const STORAGE_KEY = 'portfolio-lang';

const copy = {
  fr: {
    eyebrow: 'Maintenance en cours',
    title: 'Site temporairement indisponible',
    text: 'Je prépare quelques améliorations. Le portfolio sera de retour très bientôt, merci de votre patience.',
    contact: 'Une question ? Contactez-moi',
    email: 'Email',
    phone: 'Téléphone',
    switchLabel: 'Choisir la langue',
  },
  en: {
    eyebrow: 'Under maintenance',
    title: 'Site temporarily unavailable',
    text: "I'm working on a few improvements. The portfolio will be back very soon, thank you for your patience.",
    contact: 'Got a question? Get in touch',
    email: 'Email',
    phone: 'Phone',
    switchLabel: 'Choose language',
  },
};

const EMAIL = 'rehareharanaivo@gmail.com';
const PHONE = '+261 38 93 120 30';
const PHONE_HREF = 'tel:+261389312030';

function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && copy[saved]) return saved;
  } catch {
    /* ignore private mode */
  }
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export default function Maintenance() {
  const [lang, setLang] = useState(initialLanguage);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `${t.title} · Nala Rehareha`;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, t.title]);

  return (
    <main className="maintenance">
      <div className="maintenance__lang" role="group" aria-label={t.switchLabel}>
        {Object.keys(copy).map((code) => (
          <button
            key={code}
            type="button"
            className={`maintenance__lang-btn${code === lang ? ' is-active' : ''}`}
            aria-pressed={code === lang}
            onClick={() => setLang(code)}
          >
            {code}
          </button>
        ))}
      </div>

      <section className="maintenance__card" aria-live="polite">
        <p className="maintenance__eyebrow">
          <span className="maintenance__dot" aria-hidden="true" />
          {t.eyebrow}
        </p>
        <h1 className="maintenance__title">{t.title}</h1>
        <p className="maintenance__text">{t.text}</p>

        <div className="maintenance__contact">
          <p className="maintenance__contact-title">{t.contact}</p>
          <ul>
            <li>
              <span>{t.email}</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <span>{t.phone}</span>
              <a href={PHONE_HREF}>{PHONE}</a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="maintenance__footer">Nala Rehareha · Portfolio</footer>
    </main>
  );
}
