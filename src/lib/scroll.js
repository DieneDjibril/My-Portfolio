/**
 * Accès partagé à l'instance Lenis pour les liens d'ancre.
 * Si Lenis n'est pas actif (mouvement réduit), on retombe sur le scroll natif.
 */
let lenis = null;

export function setLenis(instance) {
  lenis = instance;
}

export function getLenis() {
  return lenis;
}

export function scrollToId(id) {
  const target = id === 'top' ? 0 : document.getElementById(id);
  if (target === null) return;
  if (lenis) {
    // Le décalage sous la navbar vient de scroll-padding-top (index.css), pris en compte par Lenis
    lenis.scrollTo(target, { duration: 1.1, force: true });
  } else if (target === 0) {
    window.scrollTo({ top: 0 });
  } else {
    target.scrollIntoView({ block: 'start' });
  }
  if (id !== 'top') history.replaceState(null, '', `#${id}`);
}

