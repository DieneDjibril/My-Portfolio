import { GraduationCap, Languages, Sparkles, Heart } from 'lucide-react';
import { about } from '../../data/portfolioData';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import { Card } from '../ui/Card';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionTitle id="about-title" index="01" kicker="À propos" title="Du code propre, des systèmes qui tiennent." />

        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          {/* Bio + qualités */}
          <Reveal>
            <Card className="h-full p-6 sm:p-8">
              <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                {about.bio.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <h3 className="mt-8 mb-3 flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-brand-300 uppercase">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Qualités
              </h3>
              <ul className="flex flex-wrap gap-2">
                {about.qualities.map((q) => (
                  <li key={q} className="rounded-full border border-brand-400/20 bg-brand-500/10 px-3.5 py-1.5 text-sm text-text">
                    {q}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Langues + centres d'intérêt */}
          <div className="grid gap-6">
            <Reveal delay={0.08}>
              <Card className="p-6 sm:p-8">
                <h3 className="mb-5 flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-brand-300 uppercase">
                  <Languages className="h-3.5 w-3.5" aria-hidden="true" /> Langues
                </h3>
                <ul className="space-y-3">
                  {about.languages.map((l) => (
                    <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                      <span className="font-display text-lg font-semibold text-text">{l.name}</span>
                      <span className="font-mono text-xs text-muted">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={0.16}>
              <Card className="p-6 sm:p-8">
                <h3 className="mb-4 flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-brand-300 uppercase">
                  <Heart className="h-3.5 w-3.5" aria-hidden="true" /> Centres d&apos;intérêt
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {about.interests.map((i) => (
                    <li key={i} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted">
                      {i}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>

        {/* Formation */}
        <Reveal className="mt-16">
          <h3 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-text">
            <GraduationCap className="h-6 w-6 text-brand-400" aria-hidden="true" /> Formation
          </h3>
        </Reveal>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.education.map((e, i) => (
            <Reveal as="li" key={e.title} delay={(i % 3) * 0.06}>
              <Card className={`h-full p-5 sm:p-6 ${e.upcoming ? 'border-dashed !border-brand-400/30' : ''}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm font-medium text-brand-300">{e.year}</span>
                  {e.upcoming && (
                    <span className="rounded-full bg-brand-500/15 px-2.5 py-0.5 font-mono text-[0.65rem] tracking-wide text-brand-300 uppercase">
                      À venir
                    </span>
                  )}
                </div>
                <p className="mt-3 font-display text-lg leading-snug font-semibold text-text">{e.title}</p>
                <p className="mt-2 text-sm text-muted">{e.school}</p>
                {e.note && <p className="mt-2 text-sm text-brand-300/90">{e.note}</p>}
              </Card>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
