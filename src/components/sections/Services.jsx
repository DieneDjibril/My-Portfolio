import { services } from '../../data/portfolioData';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import { Card } from '../ui/Card';

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-ink-900 py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />
      <div className="container-page">
        <SectionTitle
          id="services-title"
          index="02"
          kicker="Services"
          title="De la maquette à la mise en ligne, et après."
          intro="Je vous accompagne sur tout le cycle : conception, développement, maintenance et support."
        />

        <ul className="grid gap-5 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description, tags }, i) => (
            <Reveal as="li" key={title} delay={(i % 2) * 0.08}>
              <Card className="group flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-400/25 bg-gradient-to-br from-brand-400/20 to-brand-700/20 text-brand-300 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-text sm:text-2xl">{title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <li key={t} className="font-mono text-[0.7rem] text-brand-300/90">
                      #{t.toLowerCase().replace(/\s+/g, '-')}
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
