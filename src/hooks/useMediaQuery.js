import { useSyncExternalStore } from 'react';

/** Suit une media query CSS et renvoie true / false (false côté serveur). */
export function useMediaQuery(query) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** Vrai sur un écran tactile ou sans survol : tilt et curseur personnalisé désactivés. */
export function useIsTouch() {
  return useMediaQuery('(hover: none), (pointer: coarse)');
}

/** Vrai si l'utilisateur demande moins d'animations. */
export function usePrefersReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
