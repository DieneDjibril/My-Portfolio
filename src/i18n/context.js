import { createContext, useContext } from 'react';

export const LANGS = ['fr', 'en'];
export const LANG_KEY = 'dd-lang';

export const LanguageContext = createContext(null);

/**
 * Contenu du site dans la langue active (exports de portfolioData.js ou portfolioData.en.js),
 * plus `lang` et `setLang`.
 */
export function useContent() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useContent doit être utilisé dans <LanguageProvider>');
  return ctx;
}
