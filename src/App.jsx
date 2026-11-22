import { useCallback, useState } from 'react';
import { AnimatePresence, LazyMotion, MotionConfig } from 'framer-motion';
import { INTRO_KEY } from './lib/utils';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { CustomCursor } from './components/layout/CustomCursor';
import { IntroScreen } from './components/layout/IntroScreen';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Skills } from './components/sections/Skills';
import { Journey } from './components/sections/Journey';
import { Projects } from './components/sections/Projects';
import { BeyondCode } from './components/sections/BeyondCode';
import { Contact } from './components/sections/Contact';

/** L'intro ne joue qu'une fois par session, et jamais en mouvement réduit. */
function shouldPlayIntro() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return sessionStorage.getItem(INTRO_KEY) !== '1';
  } catch {
    return false;
  }
}

// Les fonctions d'animation de framer-motion sont chargées à part pour alléger le premier rendu
const loadFeatures = () => import('./lib/motionFeatures').then((mod) => mod.default);

function App() {
  const [intro, setIntro] = useState(shouldPlayIntro);
  const endIntro = useCallback(() => setIntro(false), []);

  return (
    <LazyMotion features={loadFeatures} strict>
      {/* reducedMotion="user" : framer-motion coupe les transformations et garde les fondus */}
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[110] -translate-y-24 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white focus:translate-y-0"
        >
          Aller au contenu
        </a>

        <SmoothScroll />
        <ScrollProgress />
        <CustomCursor />
        <AnimatePresence>{intro && <IntroScreen onDone={endIntro} />}</AnimatePresence>

        <div id="top" className="relative min-h-screen">
          <Navbar />
          <main id="main" tabIndex={-1} className="outline-none">
            <Hero ready={!intro} />
            <Stats />
            <About />
            <Services />
            <Skills />
            <Journey />
            <Projects />
            <BeyondCode />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
