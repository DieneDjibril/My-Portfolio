import { useId } from 'react';
import { m } from 'framer-motion';

/**
 * Monogramme « D + >_ » (mêmes tracés que src/assets/brand/logo-mark.svg),
 * en SVG inline pour pouvoir animer le tracé et le curseur.
 */
export function LogoMark({ className, draw = false, blink = true, duration = 0.6 }) {
  const id = useId().replace(/:/g, '');
  const stroke = `url(#dd-${id})`;
  const drawProps = (delay) =>
    draw
      ? {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration, delay, ease: [0.65, 0, 0.35, 1] },
        }
      : {};

  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`dd-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38BDF8" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <m.path
        d="M14 11h15c12 0 21 9 21 21s-9 21-21 21H14z"
        stroke={stroke}
        strokeWidth="6"
        strokeLinejoin="round"
        {...drawProps(0)}
      />
      <m.path
        d="M23 24l8 8-8 8"
        stroke={stroke}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...drawProps(duration * 0.55)}
      />
      <rect x="34" y="37" width="8" height="4.5" rx="1.5" fill="#7DD3FC" className={blink ? 'animate-blink' : undefined} />
    </svg>
  );
}

/** Logo complet : monogramme + nom + baseline. */
export function Logo({ className, onClick }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className={`group inline-flex items-center gap-2.5 ${className ?? ''}`}
    >
      <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-bold tracking-tight whitespace-nowrap text-text">
          Djibril <span className="text-brand-400">Diene</span>
        </span>
        <span className="mt-1 font-mono text-[0.6rem] tracking-[0.2em] whitespace-nowrap text-muted">FULLSTACK · IT · CYBER</span>
      </span>
      <span className="sr-only">, retour en haut de page</span>
    </a>
  );
}
