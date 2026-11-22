import { ArrowUp } from 'lucide-react';
import { useContent } from '../../i18n/context';
import { scrollToId } from '../../lib/scroll';
import { Logo } from '../ui/LogoMark';

export function Footer() {
  const { navLinks, personalInfo, socials, ui } = useContent();
  const year = new Date().getFullYear();
  const go = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <footer className="relative border-t border-line bg-ink-950">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo onClick={go('top')} label={ui.nav.logoHome} />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            {personalInfo.title}. {personalInfo.location}.
          </p>
          <p className="mt-3 font-mono text-[0.7rem] tracking-wide text-muted">{personalInfo.trust}</p>
        </div>

        <nav aria-label={ui.footer.quickLinks}>
          <h2 className="mb-4 font-mono text-xs tracking-[0.18em] text-brand-300 uppercase">{ui.footer.navigation}</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={go(l.id)} className="text-muted transition-colors hover:text-text">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-mono text-xs tracking-[0.18em] text-brand-300 uppercase">{ui.footer.socials}</h2>
          <ul className="flex flex-wrap gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:border-brand-400/40 hover:text-brand-300"
                >
                  <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {personalInfo.name}. {ui.footer.made}
          </p>
          <a
            href="#top"
            onClick={go('top')}
            className="inline-flex items-center gap-2 font-mono tracking-wide transition-colors hover:text-brand-300"
          >
            {ui.footer.backToTop} <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
