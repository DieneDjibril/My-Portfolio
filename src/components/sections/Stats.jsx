import { useContent } from '../../i18n/context';
import { Counter } from '../ui/Counter';
import { Reveal } from '../ui/Reveal';

/** Bandeau des chiffres clés avec compteurs animés. */
export function Stats() {
  const { stats, ui } = useContent();
  return (
    <section aria-label={ui.stats.aria} className="relative py-10 md:py-14">
      <div className="container-page">
        <Reveal className="glass grid grid-cols-2 overflow-hidden rounded-2xl md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative px-5 py-7 sm:px-7 md:py-9 ${i % 2 === 0 ? 'border-r border-line' : ''} ${i < 2 ? 'border-b border-line md:border-b-0' : ''} ${i === 1 ? 'md:border-r' : ''}`}
            >
              <p className="font-display text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-text">{s.label}</p>
              {s.detail && <p className="mt-1 font-mono text-[0.68rem] tracking-wide text-muted">{s.detail}</p>}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
