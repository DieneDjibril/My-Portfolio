/**
 * Composant Experience (Section Expérience professionnelle)
 * 
 * Affiche la chronologie des expériences professionnelles :
 * - Entreprise, poste, dates, localisation
 * - Description du poste
 * - Projets réalisés avec technologies utilisées
 * - Animations staggered au scroll
 */

import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { experiences } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

/**
 * Experience Component
 * Affiche la timeline des expériences professionnelles
 */
export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative">
            <div className="container mx-auto px-6">
                {/* Titre de la section */}
                <SectionTitle
                    title="Parcours"
                    subtitle="Une chronologie de mes engagements professionnels, où chaque étape a forgé mon expertise actuelle."
                />

                {/* Timeline des expériences */}
                <div className="max-w-5xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -30 }} // Commence invisible et décalé à gauche
                            whileInView={{ opacity: 1, x: 0 }} // Devient visible et se décale à droite
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }} // Délai progressif pour effet stagger
                        >
                            {/* Carte d'expérience */}
                            <Card className="p-0 border-none bg-transparent backdrop-blur-none group">
                                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">

                                    {/* Section infos entreprise (gauche) */}
                                    <div className="md:w-1/4 flex flex-col md:text-right">
                                        {/* Numéro d'expérience en arrière-plan */}
                                        <span className="text-3xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors duration-500">
                                            0{experiences.length - index}
                                        </span>
                                        {/* Dates */}
                                        <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-2">{exp.period}</span>
                                        {/* Entreprise */}
                                        <span className="text-white font-bold text-lg">{exp.company}</span>
                                        {/* Localisation */}
                                        <div className="flex items-center gap-1.5 md:justify-end text-neutral-500 text-sm mt-2">
                                            <MapPin size={14} />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    {/* Ligne verticale avec effet au survol (droite) */}
                                    <div className="flex-1 border-l border-white/10 md:pl-10 relative">
                                        
                                        {/* Gradient animé au survol */}
                                        <div className="absolute left-[-1px] top-0 h-0 group-hover:h-full w-px bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-700 ease-in-out" />

                                        {/* Détails de l'expérience */}
                                        <div className="bg-white/5 backdrop-blur-xl border border-white/5 p-10 rounded-3xl group-hover:bg-white/[0.08] transition-all duration-500">
                                            {/* Titre du poste et icône */}
                                            <div className="flex justify-between items-start mb-6">
                                                <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">{exp.role}</h3>
                                                {/* Icône Briefcase */}
                                                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                                    <Briefcase className="w-5 h-5 text-neutral-400 group-hover:text-blue-400" />
                                                </div>
                                            </div>

                                            {/* Description du poste */}
                                            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                                                {exp.description}
                                            </p>

                                            {/* Projets réalisés */}
                                            {exp.projects && (
                                                <div className="space-y-6 pt-6 border-t border-white/5">
                                                    {exp.projects.map((proj) => (
                                                        <div key={proj.name} className="flex flex-col gap-4">
                                                            <div className="flex items-center gap-3">
                                                                <ChevronRight size={18} className="text-blue-500" />
                                                                <span className="text-white font-semibold">Projet: {proj.name}</span>
                                                            </div>
                                                            <div className="flex flex-wrap gap-2">
                                                                {proj.tech.map(t => (
                                                                    <span key={t} className="px-3 py-1 bg-blue-500/5 text-blue-400 border border-blue-500/10 text-[10px] font-bold uppercase rounded-md tracking-wider">
                                                                        {t}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
