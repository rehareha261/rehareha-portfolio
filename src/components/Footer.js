import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const rights = t.footer.rights.replace('{year}', String(year));

  return (
    <footer className="site-footer">
      <p>{t.footer.madeWith}</p>
      <p>{rights}</p>
    </footer>
  );
}
