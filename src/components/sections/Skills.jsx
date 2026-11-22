import { marqueeTech, skillGroups } from '../../data/portfolioData';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import { Card } from '../ui/Card';
import { Marquee } from '../ui/Marquee';

const half = Math.ceil(marqueeTech.length / 2);

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionTitle
          id="skills-title"
          index="03"
          kicker="Compétences"
          title="Une boîte à outils large, du front au réseau."
          intro="Ce que j'utilise au quotidien pour concevoir, développer, déployer et maintenir."
        />
      </div>

      <Reveal className="mb-14 space-y-3">
        <Marquee items={marqueeTech.slice(0, half)} />
        <Marquee items={marqueeTech.slice(half)} reverse />
      </Reveal>

      <div className="container-page">
        <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {skillGroups.map(({ title, icon: Icon, items }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 0.06} className="mb-5 break-inside-avoid">
              <Card className="p-6">
                <h3 className="flex items-center gap-3 text-lg font-bold text-text">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                    <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                  </span>
                  {title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-ink-950/50 px-2.5 py-1 font-mono text-xs text-text/90 transition-colors duration-200 hover:border-brand-400/40 hover:text-brand-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
