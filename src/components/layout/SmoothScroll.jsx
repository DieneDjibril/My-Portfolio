import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenis } from '../../lib/scroll';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';

/** Active Lenis (smooth scroll), sauf si l'utilisateur préfère moins d'animations. */
export function SmoothScroll() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    setLenis(lenis);
    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, [reduced]);

  return null;
}
