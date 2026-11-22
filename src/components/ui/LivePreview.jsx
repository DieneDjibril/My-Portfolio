import { useEffect, useRef, useState } from 'react';
import { m } from 'framer-motion';
import { ExternalLink, Loader2, Monitor, Smartphone, X } from 'lucide-react';
import { getLenis } from '../../lib/scroll';
import { cn, ease } from '../../lib/utils';

const FOCUSABLE = 'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

/**
 * Aperçu en direct d'un site dans une fenêtre façon navigateur.
 * Le site doit autoriser l'intégration en iframe (pas de X-Frame-Options / frame-ancestors bloquant).
 */
export function LivePreview({ project, onClose }) {
  const { title, link } = project;
  const [loaded, setLoaded] = useState(false);
  const [device, setDevice] = useState('desktop');
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const host = new URL(link).host;

  // Bloque le scroll de la page, focus sur « Fermer », Échap pour fermer, focus gardé dans la fenêtre
  useEffect(() => {
    const previous = document.activeElement;
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = [...panelRef.current.querySelectorAll(FOCUSABLE)];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
      lenis?.start();
      previous?.focus?.();
    };
  }, [onClose]);

  return (
    <m.div
      className="fixed inset-0 z-[90] flex items-center justify-center p-0 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      data-lenis-prevent
    >
      <div aria-hidden="true" className="absolute inset-0 bg-ink-950/85 backdrop-blur-sm" onClick={onClose} />

      <m.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Aperçu en direct : ${title}`}
        className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden border-line bg-ink-900 shadow-2xl shadow-brand-500/10 sm:h-[88vh] sm:rounded-2xl sm:border"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.35, ease }}
      >
        {/* Barre façon navigateur */}
        <div className="flex items-center gap-3 border-b border-line px-3 py-2.5 sm:px-4">
          <div aria-hidden="true" className="hidden gap-1.5 sm:flex">
            <span className="h-3 w-3 rounded-full bg-brand-700" />
            <span className="h-3 w-3 rounded-full bg-brand-500" />
            <span className="h-3 w-3 rounded-full bg-brand-300" />
          </div>

          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-line bg-ink-950/60 px-3 py-1.5">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
            <span className="truncate font-mono text-xs text-muted">{host}</span>
          </div>

          <div role="group" aria-label="Taille d'écran" className="hidden gap-1 rounded-full border border-line p-0.5 md:flex">
            {[
              { id: 'desktop', label: 'Ordinateur', Icon: Monitor },
              { id: 'mobile', label: 'Mobile', Icon: Smartphone },
            ].map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setDevice(id)}
                aria-pressed={device === id}
                aria-label={label}
                className={cn(
                  'grid h-8 w-8 place-items-center rounded-full transition-colors',
                  device === id ? 'bg-brand-500 text-white' : 'text-muted hover:text-text',
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </button>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-text"
            aria-label={`Ouvrir ${title} dans un nouvel onglet`}
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-text"
            aria-label="Fermer l'aperçu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Site intégré */}
        <div className="relative flex flex-1 justify-center overflow-hidden bg-ink-950">
          {!loaded && (
            <div className="absolute inset-0 grid place-items-center text-sm text-muted">
              <span className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin text-brand-300" aria-hidden="true" />
                Chargement de {host}…
              </span>
            </div>
          )}
          <iframe
            src={link}
            title={`Site ${title}`}
            onLoad={() => setLoaded(true)}
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
            className={cn(
              'h-full bg-white transition-[opacity,width] duration-300',
              loaded ? 'opacity-100' : 'opacity-0',
              device === 'mobile' ? 'w-[390px] max-w-full border-x border-line' : 'w-full',
            )}
          />
        </div>
      </m.div>
    </m.div>
  );
}
