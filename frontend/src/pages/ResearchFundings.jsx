import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, ArrowRight } from 'lucide-react';
import { researchFundingsData } from '../data/researchFundingsData';

const ResearchFundings = () => {
    return (
        <div className="bg-stone-50 dark:bg-slate-950 min-h-screen text-slate-700 dark:text-slate-300 font-sans pb-20">
            {/* Header */}
            <div className="py-16 text-center bg-slate-100 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20" />
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 relative z-10 tracking-tight">
                    Research <span className="text-cyan-600 dark:text-cyan-400">Fundings</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto relative z-10">
                    Grants and fundings received by our department from various reputed organizations.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full relative z-10 mt-6" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-300 dark:border-slate-800 shadow-2xl p-8 md:p-12">
                    <div className="flex items-center mb-10 pb-6 border-b border-slate-300 dark:border-slate-800">
                        <div className="p-4 bg-emerald-500/10 rounded-2xl mr-6 border border-emerald-500/20">
                            <Landmark className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Grants Received</h2>
                            <p className="text-slate-600 dark:text-slate-400 mt-1">Driving innovation through sponsored research.</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {researchFundingsData.map((grant, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex group"
                            >
                                <div className="mt-1 mr-4 flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-500 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="p-6 bg-white/50 dark:bg-slate-950/50 rounded-2xl border border-slate-200 dark:border-slate-800/80 group-hover:border-cyan-500/30 transition-colors flex-1">
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                                        {/* Basic highlighting of names and amounts if they exist in the raw string */}
                                        {grant.split(/(Dr\.\s\w+\s\w+|Prof\.\s\w+\s\w+|Rs\.\s[0-9,]+\/-)/g).map((part, i) => {
                                            if (part.startsWith('Dr.') || part.startsWith('Prof.')) {
                                                return <span key={i} className="text-slate-900 dark:text-white font-semibold">{part}</span>;
                                            }
                                            if (part.startsWith('Rs.')) {
                                                return <span key={i} className="text-emerald-400 font-bold">{part}</span>;
                                            }
                                            return part;
                                        })}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ResearchFundings;
