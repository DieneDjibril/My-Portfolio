import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Fusionne des classes Tailwind sans conflit. */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/** Variantes framer-motion partagées. */
export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const stagger = (delay = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

/** Clé sessionStorage de l'écran d'intro. */
export const INTRO_KEY = 'dd-intro-seen';
