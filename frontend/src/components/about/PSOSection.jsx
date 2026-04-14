import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Network } from 'lucide-react';

const PSOSection = () => {
    const psos = [
        {
            id: "PSO-1",
            icon: <Bot className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />,
            description: "Design intelligent scalable computing solutions using AI-ML."
        },
        {
            id: "PSO-2",
            icon: <Network className="w-10 h-10 text-purple-400" />,
            description: "Integrate AI & ML with Robotics, Cloud, Cybersecurity, IoT, Agentic AI and modern technologies."
        }
    ];

    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/50">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Program Specific <span className="text-cyan-600 dark:text-cyan-400">Outcomes</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        At the end of the program, graduates will be able to:
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {psos.map((pso, index) => (
                        <motion.div
                            key={pso.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-slate-100/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 p-8 lg:p-10 rounded-3xl hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Decorative Corner Gradient */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-b from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                        {pso.icon}
                                    </div>
                                    <span className="text-2xl font-black text-slate-800 group-hover:text-cyan-900/40 transition-colors">
                                        {pso.id}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 leading-relaxed group-hover:text-slate-900 dark:text-white transition-colors">
                                    {pso.description}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PSOSection;
