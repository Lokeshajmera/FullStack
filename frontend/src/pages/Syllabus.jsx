import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { syllabusData } from '../data/syllabusData';
import { BookMarked, Download } from 'lucide-react';

const Syllabus = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pt-24 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    title="Course Syllabus"
                    subtitle="Detailed syllabus and curriculum framework for all active batches."
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-slate-100/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/80 dark:bg-slate-800/80 border-b border-slate-300 dark:border-slate-700">
                                    <th className="py-5 px-6 font-semibold text-cyan-600 dark:text-cyan-400 text-sm uppercase tracking-wider whitespace-nowrap">Academic Year</th>
                                    <th className="py-5 px-6 font-semibold text-cyan-600 dark:text-cyan-400 text-sm uppercase tracking-wider">Curriculum Details</th>
                                    <th className="py-5 px-6 font-semibold text-cyan-600 dark:text-cyan-400 text-sm uppercase tracking-wider text-right">Download</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/50">
                                {syllabusData.map((item, index) => (
                                    <motion.tr
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="hover:bg-white/40 dark:bg-slate-800/40 transition-colors"
                                    >
                                        <td className="py-4 px-6 text-slate-900 dark:text-white font-medium whitespace-nowrap">
                                            {item.batch}
                                        </td>
                                        <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                                            <div className="flex items-center gap-2">
                                                <BookMarked size={16} className="text-purple-400 shrink-0" />
                                                {item.curriculum}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <a
                                                href={item.link}
                                                className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:text-slate-900 dark:text-white hover:bg-slate-700 transition-colors shadow-sm"
                                            >
                                                <Download size={16} className="mr-2 hidden sm:block" />
                                                <span>PDF</span>
                                            </a>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Syllabus;
