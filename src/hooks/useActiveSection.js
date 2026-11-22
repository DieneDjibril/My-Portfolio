import { useEffect, useState } from 'react';

/** Renvoie l'id de la section actuellement visible au milieu de l'écran. */
export function useActiveSection(ids) {
  const [active, setActive] = useState('');
  const key = ids.join(',');

  useEffect(() => {
    const sections = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Une bande fine au centre de l'écran : une seule section à la fois
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
