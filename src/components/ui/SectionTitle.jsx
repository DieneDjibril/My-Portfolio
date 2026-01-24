/**
 * Composant SectionTitle
 * 
 * Titre réutilisable pour chaque section du portfolio.
 * Fournit un titre avec badge bleu et sous-titre optionnel
 * avec animations d'apparition au scroll.
 */

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

/**
 * SectionTitle Component
 * 
 * @param {string} title - Titre principal de la section
 * @param {string} subtitle - Sous-titre optionnel (description)
 * @param {string} className - Classes CSS additionnelles
 * @param {boolean} center - Centre ou non le contenu
 */
export const SectionTitle = ({ title, subtitle, className, center = true }) => {
    return (
        <div className={twMerge("mb-20", center && "text-center", className)}>
            {/* Badge de titre avec animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }} // Début petit et transparent
                whileInView={{ opacity: 1, scale: 1 }} // Devient visible et normal
                transition={{ duration: 0.5 }}
                className={twMerge(
                    "inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6", 
                    center && "mx-auto"
                )}
            >
                {title}
            </motion.div>
            
            {/* Sous-titre optionnel */}
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }} // Commence invisible et décalé vers le bas
                    whileInView={{ opacity: 1, y: 0 }} // Devient visible et monte
                    viewport={{ once: true }} // L'animation ne se joue qu'une fois
                    transition={{ duration: 0.7 }}
                    className="text-neutral-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed tracking-tight"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};
