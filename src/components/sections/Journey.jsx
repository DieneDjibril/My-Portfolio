import { useRef } from 'react';
import { m, useSpring } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { Briefcase } from 'lucide-react';
import { useContent } from '../../i18n/context';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import { Card } from '../ui/Card';

export function Journey() {
  const { journey, ui } = useContent();
  const listRef = useRef(null);
  // La ligne se remplit pendant que la timeline traverse l'écran
  const scrollYProgress = useScrollProgress(listRef, { start: 0.75, end: 0.55 });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <section id="journey" aria-labelledby="journey-title" className="relative bg-ink-900 py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />
      <div className="container-page">
        <SectionTitle id="journey-title" index="04" kicker={ui.sections.journey.kicker} title={ui.sections.journey.title} />

        <div ref={listRef} className="relative">
          {/* Rail + remplissage */}
          <div aria-hidden="true" className="absolute top-2 bottom-2 left-[15px] w-px bg-line md:left-[calc(9rem+15px)]" />
          <m.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute top-2 bottom-2 left-[15px] w-px origin-top bg-gradient-to-b from-brand-300 via-brand-500 to-brand-700 md:left-[calc(9rem+15px)]"
          />

          <ol className="space-y-10 md:space-y-12">
            {journey.map((item) => (
              <li key={item.period} className="relative grid gap-4 pl-12 md:grid-cols-[9rem_1fr] md:gap-0 md:pl-0">
                {/* Période (desktop : colonne de gauche) */}
                <Reveal className="hidden pt-5 pr-8 text-right md:block">
                  <span className="font-mono text-xs leading-relaxed text-brand-300">{item.period}</span>
                </Reveal>

                {/* Point */}
                <span
                  aria-hidden="true"
                  className="absolute top-5 left-0 flex h-[31px] w-[31px] items-center justify-center rounded-full border border-brand-400/40 bg-ink-900 md:left-[9rem]"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${item.current ? 'bg-brand-300 shadow-[0_0_12px_rgba(125,211,252,0.9)]' : 'bg-brand-500'}`} />
                </span>

                <Reveal className="md:pl-14">
                  <Card className="p-6 sm:p-7">
                    <p className="mb-2 font-mono text-xs text-brand-300 md:hidden">{item.period}</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="text-xl font-bold text-text sm:text-2xl">{item.role}</h3>
                      {item.current && (
                        <span className="rounded-full border border-brand-400/30 bg-brand-500/10 px-2.5 py-0.5 font-mono text-[0.65rem] tracking-wide text-brand-300 uppercase">
                          {ui.journey.current}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                      <Briefcase className="h-3.5 w-3.5 text-brand-400" aria-hidden="true" />
                      {item.place}
                    </p>
                    {item.note && <p className="mt-1 font-mono text-[0.7rem] text-muted">{item.note}</p>}
                    <p className="mt-4 leading-relaxed text-muted">{item.description}</p>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
