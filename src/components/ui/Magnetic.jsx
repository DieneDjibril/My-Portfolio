import { useRef } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';
import { useIsTouch, usePrefersReducedMotion } from '../../hooks/useMediaQuery';
import { cn } from '../../lib/utils';

/** Enveloppe magnétique : l'élément suit légèrement le curseur (desktop uniquement). */
export function Magnetic({ children, strength = 0.3, className }) {
  const ref = useRef(null);
  const isTouch = useIsTouch();
  const reduced = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const disabled = isTouch || reduced;

  const onMove = (e) => {
    if (disabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={disabled ? undefined : { x: sx, y: sy }}
      className={cn('inline-block', className)}
      data-cursor="hover"
    >
      {children}
    </m.div>
  );
}
