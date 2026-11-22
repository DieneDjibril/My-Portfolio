import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Copy, Linkedin, Mail, MapPin, MessageCircle, Send, ArrowUpRight, Loader2, ChevronDown } from 'lucide-react';
import { contact, personalInfo, socials } from '../../data/portfolioData';
import { ease } from '../../lib/utils';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Magnetic } from '../ui/Magnetic';
import { Toast } from '../ui/Toast';

const FORM_NAME = 'contact';
const linkedin = socials.find((s) => s.label === 'LinkedIn')?.href;

const field =
  'w-full rounded-xl border border-line bg-ink-950/60 px-4 py-3 text-base text-text placeholder:text-muted/70 transition-colors duration-200 focus:border-brand-400/60 focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-brand-400/30 sm:text-sm';

function encode(data) {
  return new URLSearchParams(data).toString();
}

function SuccessState({ onReset }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease }}
      className="flex min-h-[26rem] flex-col items-center justify-center text-center"
      role="status"
    >
      <svg viewBox="0 0 52 52" className="h-16 w-16" aria-hidden="true">
        <circle cx="26" cy="26" r="24" fill="none" stroke="rgba(56,189,248,0.25)" strokeWidth="2" />
        <motion.path
          d="M15 27l7 7 15-16"
          fill="none"
          stroke="#7DD3FC"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
        />
      </svg>
      <h3 className="mt-6 text-2xl font-bold text-text">Message envoyé !</h3>
      <p className="mt-2 max-w-sm text-muted">Merci, je vous réponds dans les meilleurs délais.</p>
      <button type="button" onClick={onReset} className="mt-6 font-mono text-sm text-brand-300 hover:text-text">
        Envoyer un autre message
      </button>
    </motion.div>
  );
}

export function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const showToast = (msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2200);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      showToast('Adresse email copiée');
    } catch {
      showToast(personalInfo.email);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(new FormData(form)),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-20%] left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl" />

      <div className="container-page">
        <SectionTitle id="contact-title" index="07" kicker="Contact" title={contact.title} intro={contact.intro} />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Formulaire Netlify */}
          <Reveal>
            <Card className="p-6 sm:p-8">
              <AnimatePresence mode="wait" initial={false}>
                {status === 'success' ? (
                  <SuccessState onReset={() => setStatus('idle')} />
                ) : (
                  <motion.form
                    key="form"
                    name={FORM_NAME}
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={onSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid gap-5"
                  >
                    <input type="hidden" name="form-name" value={FORM_NAME} />
                    <p className="hidden">
                      <label>
                        Ne pas remplir : <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                    </p>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="c-name" className="mb-2 block text-sm font-medium text-text">
                          Nom
                        </label>
                        <input id="c-name" name="name" type="text" required autoComplete="name" placeholder="Votre nom" className={field} />
                      </div>
                      <div>
                        <label htmlFor="c-email" className="mb-2 block text-sm font-medium text-text">
                          Email
                        </label>
                        <input
                          id="c-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="vous@exemple.com"
                          className={field}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-type" className="mb-2 block text-sm font-medium text-text">
                        Type de projet
                      </label>
                      <div className="relative">
                        <select id="c-type" name="type" required defaultValue="" className={`${field} appearance-none pr-10`}>
                        <option value="" disabled>
                          Choisir…
                        </option>
                        {contact.projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-message" className="mb-2 block text-sm font-medium text-text">
                        Message
                      </label>
                      <textarea
                        id="c-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Parlez-moi de votre projet, de vos délais…"
                        className={`${field} resize-y`}
                      />
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-muted">{contact.privacy}</p>
                      <Magnetic className="w-full sm:w-auto">
                        <Button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto">
                          {status === 'sending' ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Envoi…
                            </>
                          ) : (
                            <>
                              Envoyer <Send className="h-4 w-4" aria-hidden="true" />
                            </>
                          )}
                        </Button>
                      </Magnetic>
                    </div>

                    {status === 'error' && (
                      <p role="alert" className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                        L&apos;envoi a échoué. Réessayez, ou écrivez-moi directement à {personalInfo.email}.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </Reveal>

          {/* Coordonnées */}
          <div className="grid content-start gap-4">
            <Reveal delay={0.08}>
              <Card className="p-5">
                <p className="flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-brand-300 uppercase">
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" /> Email
                </p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <a href={`mailto:${personalInfo.email}`} className="truncate font-medium text-text hover:text-brand-300">
                    {personalInfo.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copier l'adresse email"
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brand-400/50 hover:text-brand-300"
                  >
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.12}>
              <Card
                as="a"
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 p-5 transition-colors hover:border-brand-400/40"
              >
                <span>
                  <span className="flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-brand-300 uppercase">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" /> WhatsApp
                  </span>
                  <span className="mt-2 block font-medium text-text">{personalInfo.phone}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted" aria-hidden="true" />
              </Card>
            </Reveal>

            {linkedin && (
              <Reveal delay={0.16}>
                <Card
                  as="a"
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-3 p-5 transition-colors hover:border-brand-400/40"
                >
                  <span>
                    <span className="flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-brand-300 uppercase">
                      <Linkedin className="h-3.5 w-3.5" aria-hidden="true" /> LinkedIn
                    </span>
                    <span className="mt-2 block font-medium text-text">Djibril Diene</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted" aria-hidden="true" />
                </Card>
              </Reveal>
            )}

            <Reveal delay={0.2}>
              <p className="flex items-center gap-2 px-1 pt-2 font-mono text-sm text-muted">
                <MapPin className="h-4 w-4 text-brand-400" aria-hidden="true" />
                {personalInfo.location} · {personalInfo.timezone}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <Toast message={toast} />
    </section>
  );
}
