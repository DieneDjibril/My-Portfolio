import { useEffect } from 'react';
import { m } from 'framer-motion';
import { LogoMark } from '../ui/LogoMark';
import { INTRO_KEY } from '../../lib/utils';

/**
 * Écran d'intro (~1,1 s) : le monogramme se dessine, le curseur clignote,
 * puis le rideau s'ouvre sur le hero. Joué une seule fois par session.
 */
export function IntroScreen({ onDone }) {
  useEffect(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      /* stockage indisponible : l'intro rejouera, sans gravité */
    }
    const t = setTimeout(onDone, 850);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <m.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
      aria-hidden="true"
    >
      <m.div
        className="flex flex-col items-center gap-5"
        exit={{ scale: 1.08, opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-brand-500/30 blur-3xl" />
          <LogoMark draw duration={0.55} className="h-20 w-20 sm:h-24 sm:w-24" />
        </div>
        <m.p
          className="font-mono text-xs tracking-[0.3em] text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.3 }}
        >
          DJIBRIL DIENE<span className="animate-blink text-brand-300">_</span>
        </m.p>
      </m.div>
    </m.div>
  );
}
