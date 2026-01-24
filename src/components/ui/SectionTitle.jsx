import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const SectionTitle = ({ title, subtitle, className, center = true }) => {
    return (
        <div className={twMerge("mb-20", center && "text-center", className)}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={twMerge("inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6", center && "mx-auto")}
            >
                {title}
            </motion.div>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-neutral-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed tracking-tight"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};
