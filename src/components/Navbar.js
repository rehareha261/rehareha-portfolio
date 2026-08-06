import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const SECTIONS = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];

export default function Navbar({ onDownloadCV }) {
  const { t, selectLanguage, language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [onHero, setOnHero] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('intro');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const nodes = ['intro', ...SECTIONS]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActive(entry.target.id);
          setOnHero(entry.target.id === 'intro');
        });
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.01 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`site-header ${scrolled ? 'is-scrolled' : ''} ${onHero ? 'is-on-hero' : ''}`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <button type="button" className="brand" onClick={() => scrollTo('intro')}>
          Nala Rehareha
        </button>

        <nav className="site-nav" aria-label="Primary">
          {SECTIONS.map((s) => (
            <button
              key={s}
              type="button"
              className={active === s ? 'is-active' : ''}
              onClick={() => scrollTo(s)}
            >
              {t.nav[s]}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="header-lang"
            onClick={() => selectLanguage(language === 'en' ? 'fr' : 'en')}
            aria-label="Toggle language"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <button type="button" className="header-cta" onClick={onDownloadCV}>
            {t.nav.downloadCV}
          </button>
          <button
            type="button"
            className={`header-burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {SECTIONS.map((s) => (
              <button key={s} type="button" onClick={() => scrollTo(s)}>
                {t.nav[s]}
              </button>
            ))}
            <button type="button" onClick={() => { onDownloadCV(); setMenuOpen(false); }}>
              {t.nav.downloadCV}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
