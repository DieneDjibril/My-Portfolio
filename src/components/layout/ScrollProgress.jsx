import { motion, useScroll, useSpring } from 'framer-motion';

/** Barre de progression de lecture en haut de page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      className="bg-signature fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      style={{ scaleX }}
    />
  );
}
