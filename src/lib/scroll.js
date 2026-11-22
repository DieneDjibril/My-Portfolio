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
    lenis.scrollTo(target, { offset: id === 'top' ? 0 : -72, duration: 1.1 });
  } else if (target === 0) {
    window.scrollTo({ top: 0 });
  } else {
    target.scrollIntoView({ block: 'start' });
  }
  if (id !== 'top') history.replaceState(null, '', `#${id}`);
}

