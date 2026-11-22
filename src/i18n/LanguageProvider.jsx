import { useEffect, useMemo, useState } from 'react';
import * as fr from '../data/portfolioData';
import * as en from '../data/portfolioData.en';
import { LANGS, LANG_KEY, LanguageContext } from './context';

const content = { fr, en };
const SITE_URL = fr.personalInfo.siteUrl;

/**
 * Langue de départ : ?lang= dans l'URL, sinon le dernier choix du visiteur,
 * sinon la langue principale du navigateur (français → fr, autre → en).
 */
function detectLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;
    const saved = localStorage.getItem(LANG_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    /* stockage indisponible : on se rabat sur le navigateur */
  }
  const primary = (navigator.languages?.[0] || navigator.language || 'fr').toLowerCase();
  return primary.startsWith('fr') ? 'fr' : 'en';
}

function setMeta(selector, attr, value) {
  document.querySelector(selector)?.setAttribute(attr, value);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLang);

  // Synchronise <html lang>, titre, description, URL canonique et adresse partageable
  useEffect(() => {
    const { ui } = content[lang];
    document.documentElement.lang = lang;
    document.title = ui.meta.title;
    setMeta('meta[name="description"]', 'content', ui.meta.description);
    setMeta('link[rel="canonical"]', 'href', lang === 'en' ? `${SITE_URL}/?lang=en` : `${SITE_URL}/`);

    try {
      localStorage.setItem(LANG_KEY, lang);
      const url = new URL(window.location.href);
      if (lang === 'en') url.searchParams.set('lang', 'en');
      else url.searchParams.delete('lang');
      history.replaceState(history.state, '', url);
    } catch {
      /* sans gravité */
    }
  }, [lang]);

  const value = useMemo(() => ({ ...content[lang], lang, setLang }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
