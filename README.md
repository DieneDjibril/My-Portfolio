# Portfolio · Djibril Diene

Site personnel de **Djibril Diene**, développeur fullstack freelance et technicien support IT basé à Dakar.
Une seule page, à dominante bleue, très animée mais fluide et accessible.

En ligne : https://djibril-diene-portfolio.netlify.app

## Stack

| Outil | Rôle |
|---|---|
| React 19 + Vite 7 | Application et build |
| Tailwind CSS v4 (`@tailwindcss/vite`) | Styles ; thème défini dans `src/index.css` via `@theme` |
| framer-motion 12 | Animations (chargées en différé via `LazyMotion`) |
| Lenis | Smooth scroll |
| lucide-react | Icônes |
| clsx + tailwind-merge | Composition de classes (`cn()`) |
| Netlify + Netlify Forms | Hébergement et formulaire de contact |

## Démarrer

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build de production dans dist/
npm run preview   # sert dist/ en local
npm run lint
```

## Modifier le contenu

**Tout le texte du site est dans [`src/data/portfolioData.js`](src/data/portfolioData.js) (français) et [`src/data/portfolioData.en.js`](src/data/portfolioData.en.js) (anglais).**
Les composants lisent ces données : pas besoin de toucher au JSX pour mettre le site à jour.
**Quand tu modifies un texte, fais-le dans les deux fichiers.** Les liens, coordonnées, icônes et images des projets sont repris automatiquement du fichier français.

### Version anglaise

- Bouton **FR / EN** dans la navbar. La langue s'applique sans recharger la page.
- Langue de départ : `?lang=en` dans l'URL, sinon le dernier choix du visiteur, sinon la langue de son navigateur (français → FR, autre → EN).
- Lien direct vers la version anglaise : `https://djibril-diene-portfolio.netlify.app/?lang=en`.
- `<html lang>`, le titre, la description et l'URL canonique suivent la langue ; `index.html` et `sitemap.xml` déclarent les deux versions (`hreflang`).
- Les textes d'interface (boutons, formulaire, titres de section) sont dans l'export `ui` de chaque fichier.
- Le CV n'existe qu'en français : le bouton anglais l'indique (« Download my CV (French) »).
- Formulaire : les types de projet envoyés à Netlify gardent leur valeur française (`value`), seul le libellé (`label`) est traduit.

| Export | Ce qu'il contrôle |
|---|---|
| `personalInfo` | Nom, titre, ville, email, téléphone, WhatsApp, statut, CV |
| `socials` | Liens GitHub, LinkedIn, email, WhatsApp (hero, menu, footer) |
| `navLinks` | Liens de la navbar (l'`id` doit correspondre à l'`id` de la section) |
| `hero` | Badge, titre (mots entre `*astérisques*` = mis en valeur), rôles qui défilent, sous-titre, CTA |
| `stats` | Chiffres clés animés (`value`, `prefix`, `suffix`, `label`, `detail`) |
| `about` | Bio, qualités, formation, langues, centres d'intérêt |
| `services` | Cartes de la section Services |
| `skillGroups`, `marqueeTech` | Groupes de badges et bandeau défilant des technos |
| `journey` | Timeline du parcours |
| `projectFilters`, `projects` | Filtres et cartes projets (`category` doit être l'un des filtres) |
| `beyondCode` | Section « Au-delà du code » (coaching e-sport) |
| `contact` | Titre, intro, types de projet du formulaire, mention de confidentialité |
| `ui` | Textes de l'interface : boutons, titres de section, formulaire, navbar, footer |

Quelques cas courants :

- **Ajouter un projet** : ajoute un objet dans `projects`, importe son image en haut du fichier.
- **Remplacer une capture** : remplace le fichier dans `src/assets/projects/` (même nom, ou mets à jour l'import). Format conseillé : 1600×1000 px (16:10), en `.webp` ou `.jpg`.
- **Changer le CV** : remplace `src/assets/CV-Djibril-Diene.pdf`.
- **Changer une icône** : les icônes viennent de [lucide.dev/icons](https://lucide.dev/icons). Importe-la en haut de `portfolioData.js`.
- **Changer les types de projet du formulaire** : modifie `contact.projectTypes` (dans les deux fichiers) **et** les `<option>` du formulaire caché dans `index.html` (Netlify lit cette version au build).

Les sites Advancing Partnerships Playbook et Haskè Health pointent vers leurs URLs Netlify provisoires : mets à jour `link` quand les domaines définitifs seront en place.
- **Aperçu en direct** : ajoute `preview: true` à un projet qui a un `link` pour afficher le bouton « Aperçu live » (le site s'ouvre dans une fenêtre, vue ordinateur ou mobile). Le site cible doit autoriser l'intégration en iframe : vérifie qu'il n'envoie pas d'en-tête `X-Frame-Options` ni de `frame-ancestors` restrictif (gsceshop.com, par exemple, l'interdisait).

Pour un lien GitHub qui ne mène pas au code du projet, ajoute `githubLabel` (ex. `'Mon GitHub'`) ; sinon le bouton affiche « Code source ».

## Structure

```
src/
├── App.jsx                 # Assemble les sections, intro, smooth scroll
├── index.css               # Thème (@theme), utilitaires (glass, spotlight…), mouvement réduit
├── data/portfolioData.js   # ← tout le contenu (FR)
│   portfolioData.en.js     # ← version anglaise
├── i18n/                   # LanguageProvider (langue active), useContent()
├── assets/
│   ├── brand/              # logo.svg, logo-mark.svg
│   ├── projects/           # captures des projets (placeholders pour l'instant)
│   └── CV-Djibril-Diene.pdf
├── components/
│   ├── layout/             # Navbar, Footer, IntroScreen, ScrollProgress, SmoothScroll, CustomCursor
│   ├── sections/           # Hero, Stats, About, Services, Skills, Journey, Projects, BeyondCode, Contact
│   └── ui/                 # Button, Card, TiltCard, Magnetic, Reveal, SectionTitle, Typewriter,
│                           # Counter, Marquee, Toast, LogoMark
├── hooks/                  # useMediaQuery (tactile, mouvement réduit), useActiveSection, useScrollProgress
└── lib/                    # utils (cn, variantes), scroll (Lenis + ancres), motionFeatures
public/                     # favicons, manifest, og-image.png, robots.txt, sitemap.xml
```

## Animations et accessibilité

- Intro (monogramme dessiné) une fois par session, ~1,1 s.
- Titre révélé mot par mot, rôles en effet de frappe, halo qui suit la souris.
- Révélations au scroll, timeline qui se remplit, compteurs, marquee, tilt 3D et bordure lumineuse sur les cartes, boutons magnétiques, curseur discret.
- **`prefers-reduced-motion`** : pas d'intro, pas de smooth scroll, pas de tilt ni d'effets magnétiques, et les animations framer-motion sont réduites à des fondus.
- Tilt, boutons magnétiques et curseur personnalisé sont désactivés sur écran tactile.
- Un seul `h1`, lien « Aller au contenu », focus visibles, `aria-label` sur les boutons-icônes.

## Déploiement (Netlify)

La configuration est dans [`netlify.toml`](netlify.toml) (build `npm run build`, dossier `dist`).

- **Automatique** : chaque push sur la branche de production connectée déclenche un déploiement.
- **Manuel, avec la CLI** :
  ```bash
  npm install -g netlify-cli
  netlify login
  netlify deploy --build            # aperçu (URL temporaire)
  netlify deploy --build --prod     # production
  ```

**Formulaire de contact** : il passe par Netlify Forms. Après le premier déploiement, vérifie que le formulaire « contact » apparaît dans *Netlify → Site → Forms* et active les notifications email.

