import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';

/** Nombre qui s'anime de 0 à `value` quand il entre dans l'écran. */
export function Counter({ value, prefix = '', suffix = '', duration = 0.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduced = usePrefersReducedMotion();

  // Avant l'apparition : on part de 0 (le HTML garde la valeur finale si JS est absent)
  useEffect(() => {
    if (!reduced && ref.current && !inView) ref.current.textContent = `${prefix}0${suffix}`;
  }, [reduced, inView, prefix, suffix]);

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || reduced) return undefined;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduced, value, prefix, suffix, duration]);

  // Valeur finale dans le HTML : correcte sans JS, pour les robots et en mouvement réduit
  return (
    <span ref={ref} className="tabular-nums">
      {`${prefix}${value}${suffix}`}
    </span>
  );
}
