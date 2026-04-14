import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { consultancyData } from '../data/consultancyData';

const Consultancy = () => {
    return (
        <div className="pt-[160px] bg-stone-50 dark:bg-slate-950 min-h-screen text-slate-700 dark:text-slate-300 font-sans pb-20">
            {/* Header */}
            <div className="py-16 text-center bg-slate-100 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20" />
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 relative z-10 tracking-tight">
                    Consultancy & <span className="text-cyan-600 dark:text-cyan-400">Sponsored Projects</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto relative z-10">
                    Real-world industrial projects and consultancies undertaken by our domain experts.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full relative z-10 mt-6" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-300 dark:border-slate-800 shadow-2xl overflow-hidden"
                >
                    <div className="p-8 border-b border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 flex items-center">
                        <div className="p-3 bg-violet-500/10 rounded-xl mr-4 border border-violet-500/20">
                            <Briefcase className="w-6 h-6 text-violet-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Consultancy Records</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-stone-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-sm uppercase tracking-wider">
                                    <th className="p-4 pl-8 border-b border-slate-300 dark:border-slate-800 font-semibold w-24">Academic Year</th>
                                    <th className="p-4 border-b border-slate-300 dark:border-slate-800 font-semibold w-1/5">Faculty Name</th>
                                    <th className="p-4 border-b border-slate-300 dark:border-slate-800 font-semibold flex-1">Project Title</th>
                                    <th className="p-4 border-b border-slate-300 dark:border-slate-800 font-semibold w-28">Duration</th>
                                    <th className="p-4 border-b border-slate-300 dark:border-slate-800 font-semibold w-1/4">Funding Agency</th>
                                    <th className="p-4 pr-8 border-b border-slate-300 dark:border-slate-800 font-semibold w-24">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/50">
                                {consultancyData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-white/30 dark:bg-slate-800/30 transition-colors group"
                                    >
                                        <td className="p-4 pl-8">
                                            <span className="inline-flex px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold border border-slate-300 dark:border-slate-700">
                                                {item.year}
                                            </span>
                                        </td>
                                        <td className="p-4 text-slate-900 dark:text-white font-medium">{item.facultyName}</td>
                                        <td className="p-4 text-slate-700 dark:text-slate-300">
                                            <p className="group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">{item.title}</p>
                                        </td>
                                        <td className="p-4 text-slate-600 dark:text-slate-400 text-sm">{item.duration}</td>
                                        <td className="p-4 text-slate-700 dark:text-slate-300">{item.agency}</td>
                                        <td className="p-4 pr-8">
                                            {item.amount !== "-" ? (
                                                <span className="text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 rounded inline-block">
                                                    ₹{item.amount}
                                                </span>
                                            ) : (
                                                <span className="text-slate-600">-</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className="bg-slate-200 dark:bg-slate-900 font-bold border-t-2 border-slate-300 dark:border-slate-700">
                                <tr>
                                    <td colSpan="5" className="p-4 pr-8 text-right text-slate-800 dark:text-slate-200 text-lg">Total Amount:</td>
                                    <td className="p-4 pr-8 text-emerald-500 text-lg">
                                        ₹{consultancyData.reduce((acc, curr) => acc + (parseInt(curr.amount) || 0), 0)}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Consultancy;
