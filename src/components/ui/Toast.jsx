import { AnimatePresence, m } from 'framer-motion';
import { Check } from 'lucide-react';

/** Petite notification en bas de l'écran. */
export function Toast({ message }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4" role="status" aria-live="polite">
      <AnimatePresence>
        {message && (
          <m.div
            key={message}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="glass flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-text shadow-xl"
          >
            <Check className="h-4 w-4 text-brand-300" aria-hidden="true" />
            {message}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
