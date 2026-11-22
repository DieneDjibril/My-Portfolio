import { cn } from '../../lib/utils';

/**
 * Bandeau infini (CSS pur). Le contenu est dupliqué pour boucler sans saut ;
 * pause au survol, et figé en mouvement réduit (voir index.css).
 */
export function Marquee({ items, reverse = false, className }) {
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2.5 rounded-full border border-line bg-ink-800/60 px-4 py-2 font-mono text-sm whitespace-nowrap text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn('fade-x group flex overflow-hidden', className)}>
      <div
        className={cn(
          'animate-marquee flex w-max group-hover:[animation-play-state:paused]',
          reverse && '[animation-direction:reverse]',
        )}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
