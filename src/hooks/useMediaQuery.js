import { useSyncExternalStore } from 'react';

// Une seule MediaQueryList par requête, partagée par tous les composants
const lists = new Map();
function getList(query) {
  if (!lists.has(query)) lists.set(query, window.matchMedia(query));
  return lists.get(query);
}

/** Suit une media query CSS et renvoie true / false (false côté serveur). */
export function useMediaQuery(query) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = getList(query);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    () => getList(query).matches,
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
