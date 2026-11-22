import { m } from 'framer-motion';
import { useContent } from '../../i18n/context';
import { cn } from '../../lib/utils';

/** Bascule FR / EN (pastille qui glisse vers la langue active). */
export function LanguageSwitch({ className, layoutId = 'lang-pill' }) {
  const { lang, setLang, ui } = useContent();
  return (
    <div role="group" aria-label={ui.lang.label} className={cn('glass inline-flex rounded-full p-1', className)}>
      {['fr', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          aria-label={ui.lang[code]}
          className={cn(
            'relative isolate min-h-8 min-w-9 rounded-full px-2.5 font-mono text-xs font-medium uppercase transition-colors duration-200',
            lang === code ? 'text-white' : 'text-muted hover:text-text',
          )}
        >
          {lang === code && (
            <m.span
              layoutId={layoutId}
              className="bg-signature absolute inset-0 -z-10 rounded-full"
              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
            />
          )}
          {code}
        </button>
      ))}
    </div>
  );
}
