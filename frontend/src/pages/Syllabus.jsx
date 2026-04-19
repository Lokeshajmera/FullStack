import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { syllabusData } from '../data/syllabusData';
import { Download, GraduationCap } from 'lucide-react';

/* ─── Reusable cell ───────────────────────────────────────────── */
const SyllabusCell = ({ entry }) => {
    if (!entry) {
        return <span className="text-slate-400 dark:text-slate-600 select-none">—</span>;
    }

    return (
        <div className="flex flex-col gap-2">
            <span className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                {entry.label}
            </span>
            {entry.pdf ? (
                <a
                    href={entry.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="syllabus-dl-btn"
                >
                    <Download size={12} />
                    <span>Download PDF</span>
                </a>
            ) : (
                <span className="text-xs text-slate-400 dark:text-slate-500 italic">
                    Coming soon
                </span>
            )}
        </div>
    );
};

/* ─── Column header ───────────────────────────────────────────── */
const ColHeader = ({ label, color }) => (
    <th className={`py-4 px-4 text-left text-xs font-bold uppercase tracking-wider whitespace-nowrap ${color}`}>
        {label}
    </th>
);

/* ─── Page ────────────────────────────────────────────────────── */
const Syllabus = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    title="Course Syllabi"
                    subtitle="Batch-wise syllabus and curriculum for the B.Tech AI &amp; ML programme."
                />

                {/* Legend chips */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 mb-8 flex flex-wrap gap-2"
                >
                    {[
                        { color: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 border border-violet-200 dark:border-violet-800', text: 'FY B.Tech → Semester I & II' },
                        { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800', text: 'SY B.Tech → Semester III & IV' },
                        { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800', text: 'TY B.Tech → Semester V & VI' },
                        { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-800', text: 'Final Year → Semester VII & VIII' },
                    ].map((tag) => (
                        <span key={tag.text} className={`text-xs font-medium px-3 py-1.5 rounded-full ${tag.color}`}>
                            {tag.text}
                        </span>
                    ))}
                </motion.div>

                {/* Table card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[900px]">

                            {/* Head */}
                            <thead>
                                <tr className="bg-slate-100 dark:bg-slate-900 border-b-2 border-slate-200 dark:border-slate-700">
                                    <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                        Batch
                                    </th>
                                    <ColHeader label="FY B.Tech"         color="text-violet-600 dark:text-violet-400" />
                                    <ColHeader label="SY B.Tech"         color="text-blue-600 dark:text-blue-400" />
                                    <ColHeader label="TY B.Tech"         color="text-emerald-600 dark:text-emerald-400" />
                                    <ColHeader label="Final Year B.Tech" color="text-amber-600 dark:text-amber-400" />
                                </tr>
                            </thead>

                            {/* Body */}
                            <tbody className="bg-white dark:bg-slate-900/60 divide-y divide-slate-100 dark:divide-slate-800">
                                {syllabusData.map((row, index) => (
                                    <motion.tr
                                        key={row.batch}
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08 }}
                                        className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-200"
                                    >
                                        {/* Batch badge */}
                                        <td className="py-5 px-5 align-top whitespace-nowrap">
                                            <span className="inline-flex items-center gap-1.5 font-semibold text-sm text-slate-800 dark:text-slate-100 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-700 rounded-lg px-3 py-1">
                                                <GraduationCap size={13} className="text-cyan-500" />
                                                {row.batch}
                                            </span>
                                        </td>

                                        <td className="py-5 px-4 align-top"><SyllabusCell entry={row.fyBtech}   /></td>
                                        <td className="py-5 px-4 align-top"><SyllabusCell entry={row.syBtech}   /></td>
                                        <td className="py-5 px-4 align-top"><SyllabusCell entry={row.tyBtech}   /></td>
                                        <td className="py-5 px-4 align-top"><SyllabusCell entry={row.finalYear} /></td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer note */}
                    <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400 dark:text-slate-500">
                        * Syllabi are as per PCCOE Autonomous regulations. Subject to revision without prior notice.
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Syllabus;
