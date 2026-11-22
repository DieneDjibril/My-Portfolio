import { Reveal } from './Reveal';

/** En-tête de section : numéro façon terminal, titre et intro. */
export function SectionTitle({ index, kicker, title, intro, align = 'left', id }) {
  const centered = align === 'center';
  return (
    <Reveal className={`mb-12 max-w-2xl md:mb-16 ${centered ? 'mx-auto text-center' : ''}`}>
      <p className={`mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-brand-300 uppercase ${centered ? 'justify-center' : ''}`}>
        <span className="text-muted">{index}</span>
        <span className="h-px w-8 bg-brand-400/50" aria-hidden="true" />
        {kicker}
      </p>
      <h2 id={id} className="text-3xl leading-[1.08] font-bold text-text sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{intro}</p>}
    </Reveal>
  );
}
