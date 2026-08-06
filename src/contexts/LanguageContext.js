import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { fr } from '../translations/fr';

const LanguageContext = createContext(null);

const translations = { en, fr };
const STORAGE_KEY = 'portfolio-lang';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved && translations[saved] ? saved : null;
    } catch {
      return null;
    }
  });

  const t = language ? translations[language] : null;

  const selectLanguage = (lang) => {
    if (!translations[lang]) return;
    setLanguage(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore quota / private mode */
    }
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    if (language) document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, selectLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
