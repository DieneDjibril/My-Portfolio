/**
 * Composant About (Section À propos)
 * 
 * Affiche les informations personnelles du développeur :
 * - Carte avec photo/emoji et coordonnées
 * - Biographie détaillée
 * - Formation académique
 * - Langues parlées
 */

import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { personalInfo, education, languages } from '../../data/portfolioData';
import { GraduationCap, Languages, User, MapPin, Mail, Phone } from 'lucide-react';


/**
 * About Component
 * Affiche la section À propos avec informations personnelles et formation
 */
export const About = () => {
    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-6">
                {/* Titre de la section */}
                <SectionTitle
                    title="Le Profil"
                    subtitle="Développeur Fullstack Senior basé à Dakar, passionné par l'architecture logicielle et l'expérience utilisateur."
                />

                {/* Grille : Carte profil + Infos */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Colonne 1 : Carte avec infos de contact */}
                    <Card className="lg:col-span-1">
                        <div className="flex flex-col items-center text-center">
                            {/* Avatar emoji */}
                            <div className="w-32 h-32 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl mb-6 flex items-center justify-center text-5xl shadow-2xl shadow-blue-500/20">
                                👨‍💻
                            </div>
                            
                            {/* Nom et titre */}
                            <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
                            <p className="text-blue-400 font-medium mb-8">Développeur FullStack</p>

                            {/* Infos de contact */}
                            <div className="w-full space-y-4 text-left border-t border-white/5 pt-8">
                                {/* Email */}
                                <div className="flex items-center gap-4 text-neutral-400">
                                    <div className="p-2.5 bg-white/5 rounded-lg"><Mail size={18} /></div>
                                    <span className="text-sm truncate">{personalInfo.email}</span>
                                </div>
                                {/* Téléphone */}
                                <div className="flex items-center gap-4 text-neutral-400">
                                    <div className="p-2.5 bg-white/5 rounded-lg"><Phone size={18} /></div>
                                    <span className="text-sm">{personalInfo.phone}</span>
                                </div>
                                {/* Adresse */}
                                <div className="flex items-center gap-4 text-neutral-400">
                                    <div className="p-2.5 bg-white/5 rounded-lg"><MapPin size={18} /></div>
                                    <span className="text-sm">{personalInfo.address}</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Colonne 2 & 3 : Biographie, formation et langues */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        {/* Carte biographie */}
                        <Card className="flex-1">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">
                                    <User size={24} />
                                </div>
                                <h3 className="text-xl font-bold">À propos de moi</h3>
                            </div>
                            <p className="text-neutral-400 text-lg leading-relaxed italic">
                                "{personalInfo.bio}"
                            </p>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                        <GraduationCap size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold">Formation</h3>
                                </div>
                                <div className="space-y-6">
                                    {education.map((edu, index) => (
                                        <motion.div 
                                            key={edu.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative pl-6 border-l border-white/10"
                                        >
                                            <div className="absolute left-[-5px] top-1.5 w-2 h-2 bg-purple-500 rounded-full" />
                                            <p className="text-xs text-neutral-500 mb-1">{edu.year}</p>
                                            <h4 className="text-sm font-bold text-white leading-tight mb-1">{edu.degree}</h4>
                                            <p className="text-xs text-neutral-400">{edu.school}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>

                            <Card>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                        <Languages size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold">Expertise linguistique</h3>
                                </div>
                                <div className="space-y-4">
                                    {languages.map((lang, index) => (
                                        <motion.div 
                                            key={lang.language}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex justify-between items-center group"
                                        >
                                            <span className="text-white font-medium">{lang.language}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-neutral-500">{lang.level}</span>
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
