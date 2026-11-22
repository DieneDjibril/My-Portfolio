import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';

const TYPE_MS = 32;
const DELETE_MS = 18;
const HOLD_MS = 1800;

/**
 * Fait défiler une liste de textes en effet de frappe, avec curseur clignotant.
 * En mouvement réduit : simple fondu entre les textes.
 */
export function Typewriter({ words, start = true, className }) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Mode normal : frappe / pause / effacement
  useEffect(() => {
    if (reduced || !start) return undefined;
    const word = words[index % words.length];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && text === word) delay = HOLD_MS;
    if (deleting && text === '') delay = 250;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, reduced, start]);

  // Mouvement réduit : rotation lente
  useEffect(() => {
    if (!reduced) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 3200);
    return () => clearInterval(t);
  }, [reduced, words.length]);

  return (
    <span className={className}>
      {/* Lecteurs d'écran : la liste complète, une seule fois */}
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true" className="inline-flex items-baseline">
        {reduced ? (
          <AnimatePresence mode="wait">
            <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {words[index]}
            </motion.span>
          </AnimatePresence>
        ) : (
          <span>{text}</span>
        )}
        <span className="animate-blink ml-0.5 inline-block w-[0.6ch] text-brand-300">_</span>
      </span>
    </span>
  );
}
