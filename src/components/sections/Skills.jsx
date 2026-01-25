/**
 * Composant Skills (Section des Compétences)
 * 
 * Affiche les compétences techniques groupées par catégories :
 * - Frontend, Backend, Langages, Bases de données, Outils, Design, Marketing & CMS, Sécurité, IT Support
 * - Pour chaque compétence : icône, nom, niveau (barre de progression)
 * - Animations d'apparition au scroll
 */

import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { skills } from '../../data/portfolioData';

/**
 * Skills Component
 * Affiche les compétences techniques groupées par catégorie
 */
export const Skills = () => {
    // Catégories de compétences disponibles
    const categories = ["Frontend", "Backend", "Languages", "Database", "Tools", "Design", "Marketing & CMS", "Security", "IT Support"];

    /**
     * Filtre les compétences par catégorie
     * @param {string} category - La catégorie à filtrer
     * @returns {Array} Les compétences de cette catégorie
     */
    const getSkillsByCategory = (category) => {
        // Si c'est la catégorie combinée "Marketing & CMS"
        if (category === "Marketing & CMS") {
            return skills.filter(skill => skill.category === "CMS" || skill.category === "Marketing");
        }
        return skills.filter(skill => skill.category === category);
    };

    return (
        <section id="skills" className="py-32 relative bg-white/[0.02]">
            <div className="container mx-auto px-6">
                {/* Titre de la section */}
                <SectionTitle
                    title="Stack"
                    subtitle="Mon arsenal technologique, méticuleusement sélectionné pour bâtir des solutions performantes et évolutives."
                />

                {/* Grille des catégories de compétences */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => {
                        // Récupère les compétences de cette catégorie
                        const categorySkills = getSkillsByCategory(category);
                        // Si aucune compétence, saute cette catégorie
                        if (categorySkills.length === 0) return null;

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }} // Délai progressif par index
                            >
                                {/* Card pour la catégorie */}
                                <Card className="h-full border-none bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-500">
                                    {/* En-tête avec nom et nombre de compétences */}
                                    <div className="flex items-center justify-between mb-10">
                                        <h3 className="text-xl font-bold tracking-tight">{category}</h3>
                                        {/* Badge avec le nombre de compétences */}
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 text-xs font-bold">
                                            {categorySkills.length}
                                        </div>
                                    </div>

                                    {/* Grille des compétences individuelles */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {categorySkills.map((skill) => (
                                            <div 
                                                key={skill.name} 
                                                className="flex flex-col gap-3 group/item p-4 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/5 transition-all duration-300"
                                            >
                                                {/* Icône de la compétence */}
                                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-blue-600/10 transition-all duration-500">
                                                    <skill.icon size={20} className="text-neutral-500 group-hover/item:text-blue-500" />
                                                </div>
                                                
                                                {/* Nom et barre de progression */}
                                                <div>
                                                    <p className="text-xs font-bold text-white mb-1 tracking-wide">{skill.name}</p>
                                                    {/* Barre de progression du niveau */}
                                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                                        {/* Barre animée qui remplit à la vue */}
                                                        <motion.div
                                                            initial={{ width: 0 }} // Commence vide
                                                            whileInView={{ width: `${skill.level}%` }} // Se remplit avec le niveau
                                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                                            className="h-full bg-blue-500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
