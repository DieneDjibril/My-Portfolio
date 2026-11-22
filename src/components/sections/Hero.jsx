import { useRef } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { hero, personalInfo, socials } from '../../data/portfolioData';
import { useIsTouch, usePrefersReducedMotion } from '../../hooks/useMediaQuery';
import { scrollToId } from '../../lib/scroll';
import { ease } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Magnetic } from '../ui/Magnetic';
import { Typewriter } from '../ui/Typewriter';
import { LogoMark } from '../ui/LogoMark';

/**
 * Découpe « texte *mis en valeur*, texte » en mots { word, highlight, tail }.
 * La ponctuation collée à un mot mis en valeur (« , » « . ») reste sur le même mot.
 */
function splitTitle(title) {
  const words = [];
  title
    .split(/(\*[^*]+\*)/)
    .filter(Boolean)
    .forEach((part) => {
      const highlight = part.startsWith('*');
      const text = part.replace(/\*/g, '');
      // Ponctuation juste après un mot mis en valeur : on l'accroche à ce mot
      const prev = words[words.length - 1];
      const lead = !highlight && prev?.highlight && !text.startsWith(' ') ? text.match(/^\S+/)?.[0] : null;
      if (lead) prev.tail = lead;
      (lead ? text.slice(lead.length) : text)
        .split(' ')
        .filter(Boolean)
        .forEach((word) => words.push({ word, highlight, tail: '' }));
    });
  return words;
}

const words = splitTitle(hero.title);

export function Hero({ ready = true }) {
  const sectionRef = useRef(null);
  const isTouch = useIsTouch();
  const reduced = usePrefersReducedMotion();
  const followMouse = !isTouch && !reduced;

  // Halo bleu qui suit doucement la souris
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const hx = useSpring(mx, { stiffness: 50, damping: 20, mass: 0.8 });
  const hy = useSpring(my, { stiffness: 50, damping: 20, mass: 0.8 });

  const onMove = (e) => {
    if (!followMouse || !sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };

  const anim = ready ? 'show' : 'hidden';
  const baseDelay = 0.1;
  const afterTitle = baseDelay + words.length * 0.05 + 0.1;

  return (
    <section
      ref={sectionRef}
      id="hero"
      onPointerMove={onMove}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 md:pt-28"
    >
      {/* Fond : halo + grille en perspective */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.28),transparent_70%)]" />
        <m.div
          className="absolute top-1/2 left-1/2 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22),rgba(37,99,235,0.12)_40%,transparent_70%)] blur-2xl"
          style={{ x: hx, y: hy, translateX: '-50%', translateY: '-50%' }}
        />
        <div className="absolute inset-x-[-50%] bottom-[-10%] h-[70%]">
          <div className="perspective-grid h-full w-full" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
        <div>
          {/* Badge disponibilité */}
          <m.p
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, ease }}
            className="glass mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full py-1.5 pr-4 pl-3 text-xs text-muted sm:text-sm"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" />
            </span>
            <span className="font-mono font-medium text-brand-300">{hero.badge}</span>
            <span className="hidden h-3 w-px bg-line sm:block" aria-hidden="true" />
            <span className="hidden truncate sm:inline">{personalInfo.status}</span>
          </m.p>

          {/* Titre mot par mot */}
          <m.h1
            id="hero-title"
            className="font-display text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.025em] text-text sm:text-6xl lg:text-7xl"
            initial="hidden"
            animate={anim}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: baseDelay } } }}
          >
            {words.map(({ word, highlight, tail }, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <m.span
                  className="inline-block"
                  variants={{
                    hidden: { y: '105%', opacity: 0 },
                    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } },
                  }}
                >
                  <span className={highlight ? 'text-gradient' : undefined}>{word}</span>
                  {tail}
                </m.span>
                {i < words.length - 1 && ' '}
              </span>
            ))}
          </m.h1>

          {/* Rôles en effet de frappe */}
          <m.p
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={{ delay: afterTitle, duration: 0.4 }}
            className="mt-6 min-h-[1.5em] font-mono text-sm text-brand-300 [contain:content] sm:text-base"
          >
            <span className="text-muted">~/dakar $ </span>
            <Typewriter words={hero.roles} start={ready} className="text-text" />
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: afterTitle + 0.1, duration: 0.6, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.subtitle}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: afterTitle + 0.2, duration: 0.6, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Magnetic className="w-full sm:w-auto">
              <Button
                href={`#${hero.primaryCta.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(hero.primaryCta.target);
                }}
                className="w-full sm:w-auto"
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <Button href={personalInfo.cv} download="CV-Djibril-Diene.pdf" variant="ghost" className="w-full sm:w-auto">
                <Download className="h-4 w-4" aria-hidden="true" />
                {hero.secondaryCta.label}
              </Button>
            </Magnetic>
          </m.div>

          <m.ul
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={{ delay: afterTitle + 0.3, duration: 0.5 }}
            className="mt-9 flex items-center gap-3"
          >
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-brand-400/50 hover:text-brand-300"
                >
                  <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                </a>
              </li>
            ))}
            <li className="ml-2 hidden items-center gap-1.5 font-mono text-xs text-muted sm:flex">
              <MapPin className="h-3.5 w-3.5 text-brand-400" aria-hidden="true" />
              {personalInfo.location}
            </li>
          </m.ul>
        </div>

        {/* Carte terminal (desktop) */}
        <m.div
          aria-hidden="true"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : undefined}
          transition={{ delay: 0.35, duration: 0.7, ease }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-brand-500/15 blur-3xl" />
          <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-brand-700/30">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
              <span className="ml-3 font-mono text-[0.7rem] text-muted">djibril@dakar: ~</span>
            </div>
            <div className="space-y-3 p-6 font-mono text-[0.8rem] leading-relaxed">
              <p>
                <span className="text-brand-400">❯</span> <span className="text-text">whoami</span>
              </p>
              <p className="text-muted">
                {personalInfo.name} · <span className="text-brand-300">{personalInfo.title}</span>
              </p>
              <p>
                <span className="text-brand-400">❯</span> <span className="text-text">cat stack.txt</span>
              </p>
              <p className="text-muted">React · Angular · Spring Boot · Laravel · WordPress</p>
              <p>
                <span className="text-brand-400">❯</span> <span className="text-text">uptime</span>
              </p>
              <p className="text-muted">
                support IT <span className="text-brand-300">● en ligne</span> · {personalInfo.location}
              </p>
              <p className="flex items-center gap-1">
                <span className="text-brand-400">❯</span>
                <span className="animate-blink inline-block h-4 w-2 bg-brand-300" />
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-line px-6 py-4">
              <LogoMark className="h-8 w-8" />
              <span className="font-mono text-[0.65rem] tracking-[0.2em] text-muted">FULLSTACK · IT · CYBER</span>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
