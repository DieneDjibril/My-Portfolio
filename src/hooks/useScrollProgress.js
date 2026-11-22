import { useEffect } from 'react';
import { useMotionValue } from 'framer-motion';

/**
 * Progression de scroll (0 → 1) dans une MotionValue, sans re-render React.
 * Remplace `useScroll` de framer-motion, dont les mesures forçaient des layouts
 * synchrones en continu pendant le chargement.
 *
 * - Sans `ref` : progression de la page entière.
 * - Avec `ref` : progression de l'élément entre `start` et `end`, exprimés en
 *   fraction de la hauteur d'écran (ex. start 0.75 = le haut de l'élément
 *   atteint 75 % de l'écran ; end 0.55 = son bas atteint 55 %).
 */
export function useScrollProgress(ref, { start = 0.75, end = 0.55 } = {}) {
  const progress = useMotionValue(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      let p;
      if (ref) {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const from = r.top - vh * start; // 0 quand le haut atteint `start`
        const distance = r.height + vh * (start - end);
        p = distance > 0 ? -from / distance : 1;
      } else {
        const max = document.documentElement.scrollHeight - vh;
        p = max > 0 ? window.scrollY / max : 0;
      }
      progress.set(Math.min(1, Math.max(0, p)));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ref, start, end, progress]);

  return progress;
}
