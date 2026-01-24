import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { experiences } from '../../data/portfolioData';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
    const allProjects = experiences.flatMap(exp =>
        exp.projects?.map(proj => ({
            ...proj,
            role: exp.role,
            company: exp.company
        })) || []
    );

    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionTitle
                    title="Réalisations"
                    subtitle="Une immersion dans mes projets les plus emblématiques, alliant innovation technique et excellence visuelle."
                />

                <div className="grid lg:grid-cols-2 gap-10">
                    {allProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col group gap-0 p-0 overflow-hidden">
                                <div className="relative aspect-video overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent z-10" />
                                    <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors duration-500" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-20 transform group-hover:scale-110 transition-transform duration-700">
                                        <div className="w-3/4 h-3/4 border-2 border-dashed border-white/20 rounded-full animate-spin-slow" />
                                        <div className="absolute w-1/2 h-1/2 border-2 border-white/10 rounded-full" />
                                    </div>

                                    <div className="absolute top-8 left-8 z-20">
                                        <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-widest text-white">
                                            {project.company}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
                                                {project.name}
                                            </h3>
                                            <p className="text-blue-500/80 font-medium text-sm">
                                                {project.role}
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                                <Github className="w-5 h-5" />
                                            </a>
                                            {project.url && (
                                                <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-500/20 transition-all duration-300">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-neutral-400 text-lg mb-10 leading-relaxed font-light">
                                        {project.details}
                                    </p>

                                    <div className="flex flex-wrap gap-2.5 mt-auto pt-8 border-t border-white/5">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[10px] sm:text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-neutral-300 font-semibold tracking-wider uppercase group-hover:border-blue-500/20 group-hover:bg-blue-500/5 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
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
