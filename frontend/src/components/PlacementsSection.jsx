import React from 'react';
import { motion } from 'framer-motion';
import { allRecruiters } from '../data/placementsData';

const PlacementsSection = () => {
    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Training &amp; <span className="text-cyan-600 dark:text-cyan-400">Placements</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
                    Our students are placed in top-tier product and service-based companies with record-breaking packages.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 bg-gradient-to-br from-slate-100 dark:from-slate-900 to-slate-50 dark:to-slate-950 rounded-2xl border border-slate-300 dark:border-slate-800"
                    >
                        <p className="text-slate-600 dark:text-slate-400 mb-2">Highest Package (Batch 2026)</p>
                        <h3 className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">₹ 12.25 LPA</h3>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 bg-gradient-to-br from-slate-100 dark:from-slate-900 to-slate-50 dark:to-slate-950 rounded-2xl border border-slate-300 dark:border-slate-800"
                    >
                        <p className="text-slate-600 dark:text-slate-400 mb-2">Average Package (Batch 2026)</p>
                        <h3 className="text-4xl font-bold text-purple-400">₹ 5.17 L</h3>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 bg-gradient-to-br from-slate-100 dark:from-slate-900 to-slate-50 dark:to-slate-950 rounded-2xl border border-slate-300 dark:border-slate-800"
                    >
                        <p className="text-slate-600 dark:text-slate-400 mb-2">Placement % (Batch 2026)</p>
                        <h3 className="text-4xl font-bold text-emerald-400">50.00%</h3>
                    </motion.div>
                </div>
            </div>

            {/* Marquee Effect for Recruiters */}
            <div className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-900 py-12">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-100 dark:from-slate-900 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-100 dark:from-slate-900 to-transparent z-10" />

                <motion.div
                    className="flex space-x-16 whitespace-nowrap"
                    animate={{ x: [0, -2000] }}
                    transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                >
                    {[...allRecruiters, ...allRecruiters, ...allRecruiters].map((company, index) => (
                        <span key={index} className="text-xl font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer shrink-0">
                            {company}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PlacementsSection;
