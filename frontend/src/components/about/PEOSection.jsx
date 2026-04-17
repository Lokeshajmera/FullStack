import React from 'react';
import { motion } from 'framer-motion';

const PEOSection = () => {
    const peos = [
        {
            id: "PEO-1",
            description: "Graduates of the program will demonstrate world-class expertise in AI and ML and emerging technologies which help them to stands in crowd and grow careers in the technological era."
        },
        {
            id: "PEO-2",
            description: "Graduates of the program will exhibit technical competency with learning attitude."
        },
        {
            id: "PEO-3",
            description: "Graduates of the program will practice their professional career with ethical and social responsibilities."
        },
        {
            id: "PEO-4",
            description: "Graduates of the program will demonstrate research aptitude and innovation throughout their career."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/50">
            <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Program Educational <span className="text-cyan-600 dark:text-cyan-400">Objectives</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {peos.map((peo, index) => (
                        <motion.div
                            key={peo.id}
                            variants={cardVariants}
                            className="bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 p-8 rounded-2xl hover:border-cyan-500/50 hover:bg-white/50 dark:bg-slate-800/50 transition-all duration-300 relative group overflow-hidden flex flex-col h-full"
                        >
                            {/* Decorative background number */}
                            <div className="absolute -right-4 -bottom-6 text-8xl font-black text-slate-800/30 group-hover:text-cyan-900/20 transition-colors duration-300 pointer-events-none select-none z-0">
                                {index + 1}
                            </div>

                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold rounded-full mb-4 w-max border border-cyan-500/20">
                                    {peo.id}
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                                    {peo.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PEOSection;
