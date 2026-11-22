import { m } from 'framer-motion';
import { Trophy, Gamepad2 } from 'lucide-react';
import { beyondCode } from '../../data/portfolioData';
import { ease } from '../../lib/utils';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import { Card } from '../ui/Card';

export function BeyondCode() {
  return (
    <section id="beyond" aria-labelledby="beyond-title" className="relative overflow-hidden bg-ink-900 py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-brand-700/25 blur-3xl" />

      <div className="container-page">
        <SectionTitle id="beyond-title" index="06" kicker={beyondCode.kicker} title={beyondCode.title} />

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <Card className="h-full p-6 sm:p-8">
              <Gamepad2 className="h-7 w-7 text-brand-400" aria-hidden="true" />
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                {beyondCode.text.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <p className="mt-6 border-l-2 border-brand-400 pl-4 font-display text-lg font-semibold text-text">
                {beyondCode.closing}
              </p>
            </Card>
          </Reveal>

          {/* Visuel : progression phase de groupes → top 4 */}
          <Reveal delay={0.1}>
            <Card className="flex h-full flex-col justify-between gap-8 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.18em] text-brand-300 uppercase">Rocket League · Afrique · {beyondCode.highlightYear}</span>
                <Trophy className="h-6 w-6 text-brand-300" aria-hidden="true" />
              </div>
              <p className="font-display text-6xl leading-none font-extrabold tracking-tight text-gradient sm:text-7xl">
                {beyondCode.highlight}
              </p>
              <div>
                <div className="flex justify-between font-mono text-[0.7rem] text-muted">
                  <span>Phase de groupes</span>
                  <span className="text-brand-300">Top 4 · {beyondCode.highlightYear}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-950">
                  <m.div
                    className="bg-signature h-full w-full origin-left rounded-full"
                    initial={{ scaleX: 0.12 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease }}
                  />
                </div>
              </div>
            </Card>
          </Reveal>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {beyondCode.takeaways.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i * 0.06}>
              <Card className="h-full p-5">
                <span className="font-mono text-xs text-brand-300">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-text">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{t.text}</p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
