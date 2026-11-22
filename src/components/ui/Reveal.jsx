import { m } from 'framer-motion';
import { ease } from '../../lib/utils';

/** Fondu + léger décalage à l'entrée dans l'écran (une seule fois). */
export function Reveal({ children, delay = 0, y = 24, className, as = 'div' }) {
  const Comp = m[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </Comp>
  );
}
