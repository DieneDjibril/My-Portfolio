import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useIsTouch, usePrefersReducedMotion } from '../../hooks/useMediaQuery';

const INTERACTIVE = 'a, button, [role="button"], input, select, textarea, label, [data-cursor="hover"]';

/**
 * Anneau discret qui suit le curseur et grossit sur les éléments cliquables.
 * Desktop uniquement ; le curseur natif reste visible.
 */
export function CustomCursor() {
  const isTouch = useIsTouch();
  const reduced = usePrefersReducedMotion();
  const enabled = !isTouch && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      setHover(Boolean(e.target.closest?.(INTERACTIVE)));
    };
    const leave = () => setVisible(false);
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[80] rounded-full border border-brand-300/60 mix-blend-screen"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%', width: 32, height: 32 }}
      animate={{
        scale: hover ? 1.6 : 1,
        opacity: visible ? 1 : 0,
        backgroundColor: hover ? 'rgba(56,189,248,0.08)' : 'rgba(56,189,248,0)',
      }}
      transition={{ duration: 0.2 }}
    />
  );
}
