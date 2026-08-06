import React from 'react';
import './App.css';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import LanguageSelect from './components/LanguageSelect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteBand from './components/QuoteBand';
import ScrollProgress, { ChapterNav } from './components/ChapterNav';
import MicroInteractions from './components/MicroInteractions';
import useLenis from './hooks/useLenis';
import './components/sections.css';

function Portfolio() {
  const { language, selectLanguage, t } = useLanguage();
  useLenis(Boolean(language));

  if (!language) {
    return <LanguageSelect onSelect={selectLanguage} />;
  }

  const handleDownloadCV = () => {
    const filename = language === 'fr' ? 'CV_Nala_Rehareha_FR.pdf' : 'CV_Nala_Rehareha_EN.pdf';
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <div className="portfolio">
      <div className="noise" aria-hidden="true" />
      <ScrollProgress />
      <MicroInteractions />
      <Navbar onDownloadCV={handleDownloadCV} />
      <ChapterNav t={t} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <QuoteBand />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}

export default App;
