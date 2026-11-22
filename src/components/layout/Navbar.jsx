import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks, socials } from '../../data/portfolioData';
import { useActiveSection } from '../../hooks/useActiveSection';
import { getLenis, scrollToId } from '../../lib/scroll';
import { cn, ease } from '../../lib/utils';
import { Logo } from '../ui/LogoMark';
import { Button } from '../ui/Button';
import { Magnetic } from '../ui/Magnetic';

// « hero » est observé pour qu'aucun lien ne reste actif en haut de page
const ids = ['hero', ...navLinks.map((l) => l.id)];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  // Verre flouté dès qu'on quitte le haut de page
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloque le scroll et écoute Échap quand le menu mobile est ouvert
  useEffect(() => {
    if (!open) return undefined;
    const lenis = getLenis();
    lenis?.stop();
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    // Laisse le menu se refermer (et Lenis redémarrer) avant de scroller
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300',
        scrolled || open ? 'border-line bg-ink-950/70 backdrop-blur-xl' : 'border-transparent bg-transparent',
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-[4.5rem]" aria-label="Navigation principale">
        <Logo onClick={go('top')} />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={go(link.id)}
                aria-current={active === link.id ? 'true' : undefined}
                className={cn(
                  'relative isolate rounded-full px-3.5 py-2 text-sm transition-colors duration-200',
                  active === link.id ? 'text-text' : 'text-muted hover:text-text',
                )}
              >
                {active === link.id && (
                  <m.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full border border-brand-400/25 bg-brand-500/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Magnetic className="hidden sm:inline-block">
            <Button href="#contact" onClick={go('contact')} className="min-h-10 px-5 py-2.5">
              Me contacter
            </Button>
          </Magnetic>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-text lg:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto bg-ink-950 px-4 pt-6 pb-10 md:top-[4.5rem] md:h-[calc(100dvh-4.5rem)] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <m.ul
              className="flex flex-col"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
            >
              {navLinks.map((link, i) => (
                <m.li
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={go(link.id)}
                    className={cn(
                      'flex items-baseline gap-4 border-b border-line py-4 font-display text-3xl font-bold tracking-tight',
                      active === link.id ? 'text-brand-300' : 'text-text',
                    )}
                  >
                    <span className="font-mono text-xs font-normal text-muted">0{i + 1}</span>
                    {link.label}
                  </a>
                </m.li>
              ))}
            </m.ul>

            <m.div
              className="mt-auto flex flex-col gap-6 pt-10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.4 } }}
            >
              <Button href="#contact" onClick={go('contact')} className="w-full">
                Me contacter <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <div className="flex justify-center gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-muted hover:text-brand-300"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
