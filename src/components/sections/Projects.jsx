import { useCallback, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { ArrowUpRight, Eye, Github } from 'lucide-react';
import { useContent } from '../../i18n/context';
import { cn, ease } from '../../lib/utils';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import { TiltCard } from '../ui/TiltCard';
import { LivePreview } from '../ui/LivePreview';

function ProjectCard({ project, onPreview }) {
  const { ui } = useContent();
  const t = ui.projects;
  const { title, client, description, tags, image, link, preview, github, githubLabel } = project;
  const canPreview = Boolean(preview && link);

  const visual = (
    <>
      <img
        src={image}
        alt={t.imageAlt(title)}
        loading="lazy"
        decoding="async"
        width="800"
        height="500"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
      {canPreview && (
        <span
          aria-hidden="true"
          className="glass absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-text"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-300" />
          </span>
          {t.preview}
        </span>
      )}
    </>
  );

  return (
    <TiltCard className="flex h-full flex-col overflow-hidden">
      {canPreview ? (
        <button
          type="button"
          onClick={() => onPreview(project)}
          className="relative block aspect-[16/10] w-full overflow-hidden border-b border-line text-left"
          aria-label={t.previewOf(title)}
        >
          {visual}
        </button>
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line">{visual}</div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[0.7rem] tracking-wide text-brand-300">{client}</p>
        <h3 className="mt-2 text-xl font-bold text-text">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={t.technologies}>
          {tags.map((t) => (
            <li key={t} className="rounded-md border border-line bg-ink-950/50 px-2 py-0.5 font-mono text-[0.68rem] text-muted">
              {t}
            </li>
          ))}
        </ul>

        {(link || github) && (
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-5 text-sm font-medium">
            {canPreview && (
              <button
                type="button"
                onClick={() => onPreview(project)}
                className="inline-flex items-center gap-1.5 text-brand-300 transition-colors hover:text-text"
              >
                <Eye className="h-4 w-4" aria-hidden="true" /> {t.preview}
                <span className="sr-only">{t.of} {title}</span>
              </button>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-300 transition-colors hover:text-text"
              >
                {t.visit} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">{title} ({t.newTab})</span>
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-text"
              >
                <Github className="h-4 w-4" aria-hidden="true" /> {githubLabel ?? t.source}
                <span className="sr-only">
                  {githubLabel ? '' : `${t.of} ${title} `}({t.newTab})
                </span>
              </a>
            )}
          </div>
        )}
      </div>
    </TiltCard>
  );
}

export function Projects() {
  const { projects, projectFilters, ui } = useContent();
  const s = ui.sections.projects;
  const [filter, setFilter] = useState('all');
  const [previewed, setPreviewed] = useState(null);
  const closePreview = useCallback(() => setPreviewed(null), []);
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionTitle
          id="projects-title"
          index="05"
          kicker={s.kicker}
          title={s.title}
          intro={s.intro}
        />

        <Reveal className="mb-10">
          <div role="group" aria-label={ui.projects.filtersAria} className="glass inline-flex max-w-full gap-1 overflow-x-auto rounded-full p-1">
            {projectFilters.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                aria-pressed={filter === id}
                className={cn(
                  'relative isolate min-h-10 rounded-full px-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 sm:px-5',
                  filter === id ? 'text-white' : 'text-muted hover:text-text',
                )}
              >
                {filter === id && (
                  <m.span
                    layoutId="project-filter"
                    className="bg-signature absolute inset-0 -z-10 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <m.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) => (
              <m.li
                key={p.image}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease }}
              >
                <Reveal className="h-full">
                  <ProjectCard project={p} onPreview={setPreviewed} />
                </Reveal>
              </m.li>
            ))}
          </AnimatePresence>
        </m.ul>
      </div>

      <AnimatePresence>
        {previewed && <LivePreview key={previewed.title} project={previewed} onClose={closePreview} />}
      </AnimatePresence>
    </section>
  );
}
