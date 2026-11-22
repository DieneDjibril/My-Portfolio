import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { projectFilters, projects } from '../../data/portfolioData';
import { cn, ease } from '../../lib/utils';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import { TiltCard } from '../ui/TiltCard';

function ProjectCard({ project }) {
  const { title, client, description, tags, image, link, github } = project;
  return (
    <TiltCard className="flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        <img
          src={image}
          alt={`Aperçu du projet ${title}`}
          loading="lazy"
          decoding="async"
          width="800"
          height="500"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[0.7rem] tracking-wide text-brand-300">{client}</p>
        <h3 className="mt-2 text-xl font-bold text-text">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {tags.map((t) => (
            <li key={t} className="rounded-md border border-line bg-ink-950/50 px-2 py-0.5 font-mono text-[0.68rem] text-muted">
              {t}
            </li>
          ))}
        </ul>

        {(link || github) && (
          <div className="mt-6 flex flex-wrap gap-4 border-t border-line pt-5 text-sm font-medium">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-300 transition-colors hover:text-text"
              >
                Voir le site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">{title} (nouvel onglet)</span>
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-text"
              >
                <Github className="h-4 w-4" aria-hidden="true" /> Code source
                <span className="sr-only">de {title} (nouvel onglet)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </TiltCard>
  );
}

export function Projects() {
  const [filter, setFilter] = useState(projectFilters[0]);
  const visible = filter === projectFilters[0] ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionTitle
          id="projects-title"
          index="05"
          kicker="Projets"
          title="Réalisations récentes."
          intro="Plateformes de contenu, e-commerce, applications métier et outils de reporting."
        />

        <Reveal className="mb-10">
          <div role="group" aria-label="Filtrer les projets" className="glass inline-flex max-w-full gap-1 overflow-x-auto rounded-full p-1">
            {projectFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  'relative isolate min-h-10 rounded-full px-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 sm:px-5',
                  filter === f ? 'text-white' : 'text-muted hover:text-text',
                )}
              >
                {filter === f && (
                  <motion.span
                    layoutId="project-filter"
                    className="bg-signature absolute inset-0 -z-10 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) => (
              <motion.li
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease }}
              >
                <Reveal className="h-full">
                  <ProjectCard project={p} />
                </Reveal>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
