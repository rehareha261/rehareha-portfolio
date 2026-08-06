import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Section from './Section';
import Reveal from './Reveal';

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || !email || !message) return;

    setStatus('sending');
    const subject = encodeURIComponent(`Portfolio — message de ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:rehareharanaivo@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 400);
  };

  return (
    <Section
      id="contact"
      marker="06"
      label={t.contact.title}
      tone="contact"
      bodyClassName="contact-layout"
    >
      <div className="contact__intro">
        <Reveal as="h2" className="section__headline" variant="clip" delay={0.05}>
          {t.contact.subtitle}
        </Reveal>
        <Reveal as="p" className="contact__direct" delay={0.18}>
          <span>{t.contact.orEmail}</span>
          <a href="mailto:rehareharanaivo@gmail.com">rehareharanaivo@gmail.com</a>
        </Reveal>
        <Reveal as="p" className="contact__find" delay={0.26}>
          {t.contact.findMe}
        </Reveal>
        <Reveal className="contact__links" delay={0.32}>
          <a href="https://github.com/rehareha261" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="tel:+261389312030">+261 38 93 120 30</a>
        </Reveal>
      </div>

      <Reveal as="form" className="contact-form" delay={0.2} onSubmit={handleSubmit}>
        <label>
          <span>{t.contact.nameLabel}</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </label>
        <label>
          <span>{t.contact.emailLabel}</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </label>
        <label>
          <span>{t.contact.messageLabel}</span>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        <button className="btn btn--solid" type="submit" disabled={status === 'sending'}>
          {status === 'idle' && t.contact.sendButton}
          {status === 'sending' && t.contact.sending}
          {status === 'sent' && t.contact.sent}
        </button>
        {status === 'sent' && <p className="form-status">{t.contact.sent}</p>}
      </Reveal>
    </Section>
  );
}
