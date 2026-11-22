import { m, useMotionValue, useSpring } from 'framer-motion';
import { useIsTouch, usePrefersReducedMotion } from '../../hooks/useMediaQuery';
import { cn, trackPointer } from '../../lib/utils';

const MAX_TILT = 6; // degrés

/** Carte avec tilt 3D léger et bordure lumineuse (désactivé sur tactile / mouvement réduit). */
export function TiltCard({ className, children, ...props }) {
  const isTouch = useIsTouch();
  const reduced = usePrefersReducedMotion();
  const enabled = !isTouch && !reduced;

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    trackPointer(e);
    if (!enabled) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * MAX_TILT * 2);
    rx.set(-py * MAX_TILT * 2);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <m.article
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={enabled ? { rotateX: srx, rotateY: sry, transformPerspective: 900 } : undefined}
      className={cn('glass spotlight group rounded-2xl', className)}
      {...props}
    >
      {children}
    </m.article>
  );
}
