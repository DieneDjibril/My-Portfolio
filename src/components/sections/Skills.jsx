import { useContent } from '../../i18n/context';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import { Card } from '../ui/Card';
import { Marquee } from '../ui/Marquee';

/**
 * Répartit les groupes en colonnes (effet « masonry »), chaque groupe allant dans la colonne
 * la moins remplie. Remplace `columns` CSS, qui casse l'affichage des cartes en verre animées
 * dans Chrome (cartes invisibles ou coupées en haut de colonne).
 */
function toColumns(groups, count) {
  const cols = Array.from({ length: count }, () => ({ weight: 0, items: [] }));
  groups.forEach((group, index) => {
    const target = cols.reduce((min, col) => (col.weight < min.weight ? col : min), cols[0]);
    target.items.push({ ...group, index });
    // Poids approximatif : en-tête + une ligne de badges pour ~3 éléments
    target.weight += 3 + Math.ceil(group.items.length / 3);
  });
  return cols.map((col) => col.items);
}

function SkillCard({ title, icon: Icon, items, index }) {
  return (
    <Reveal as="li" delay={(index % 3) * 0.06}>
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
  );
}

export function Skills() {
  const { marqueeTech, skillGroups, ui } = useContent();
  const s = ui.sections.skills;
  const half = Math.ceil(marqueeTech.length / 2);
  const isLg = useMediaQuery('(min-width: 1024px)');
  const isSm = useMediaQuery('(min-width: 640px)');
  const columns = toColumns(skillGroups, isLg ? 3 : isSm ? 2 : 1);

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionTitle
          id="skills-title"
          index="03"
          kicker={s.kicker}
          title={s.title}
          intro={s.intro}
        />
      </div>

      <Reveal className="mb-14 space-y-3">
        <Marquee items={marqueeTech.slice(0, half)} />
        <Marquee items={marqueeTech.slice(half)} reverse />
      </Reveal>

      <div className="container-page">
        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((col, c) => (
            <ul key={c} className="flex flex-col gap-5">
              {col.map((group) => (
                <SkillCard key={group.title} {...group} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
