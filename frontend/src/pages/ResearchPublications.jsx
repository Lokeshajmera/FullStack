import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { researchPublicationsData } from '../data/researchPublicationsData';
import researchImg from '../assets/images/research-publications.jpg';

const ResearchPublications = () => {
    return (
        <div className="pt-[160px] bg-stone-50 dark:bg-slate-950 min-h-screen text-slate-700 dark:text-slate-300 font-sans pb-20">
            {/* Header */}
            <div className="py-16 text-center bg-slate-100 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20" />
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 relative z-10 tracking-tight">
                    Research <span className="text-cyan-600 dark:text-cyan-400">Publications</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto relative z-10">
                    Showcasing our department's ongoing commitment to pushing the boundaries of knowledge.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full relative z-10 mt-6" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full max-w-4xl mx-auto flex justify-center mb-16 p-2 md:p-6 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-amber-50/60 dark:bg-slate-900"
                >
                    <img 
                        src={researchImg} 
                        alt="Research Publications Overview" 
                        className="w-full h-auto object-contain rounded-xl md:rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
                    />
                </motion.div>

                {/* Table Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-300 dark:border-slate-800 shadow-2xl overflow-hidden"
                >
                    <div className="p-8 border-b border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Faculty Publication Profiles</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-stone-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-sm uppercase tracking-wider">
                                    <th className="p-4 pl-8 border-b border-slate-300 dark:border-slate-800 font-semibold w-24">Sr. No.</th>
                                    <th className="p-4 border-b border-slate-300 dark:border-slate-800 font-semibold">Name of the Faculty</th>
                                    <th className="p-4 border-b border-slate-300 dark:border-slate-800 font-semibold text-center">Scopus Profile</th>
                                    <th className="p-4 pr-8 border-b border-slate-300 dark:border-slate-800 font-semibold text-center">Google Scholar Profile</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/50">
                                {researchPublicationsData.map((faculty, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-white/30 dark:bg-slate-800/30 transition-colors group"
                                    >
                                        <td className="p-4 pl-8 text-slate-500 font-medium">#{faculty.sr}</td>
                                        <td className="p-4 text-slate-900 dark:text-white font-medium">{faculty.name}</td>
                                        <td className="p-4 text-center">
                                            {faculty.scopus && faculty.scopus !== "-" ? (
                                                <a
                                                    href={faculty.scopus}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center px-4 py-2 bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 hover:text-orange-300 rounded-xl transition-colors text-sm font-semibold group-hover:shadow-md border border-orange-500/20"
                                                >
                                                    View Profile <ExternalLink className="w-4 h-4 ml-2" />
                                                </a>
                                            ) : (
                                                <span className="text-slate-600 text-sm italic">-</span>
                                            )}
                                        </td>
                                        <td className="p-4 pr-8 text-center">
                                            {faculty.googleScholar && faculty.googleScholar !== "-" ? (
                                                <a
                                                    href={faculty.googleScholar}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 rounded-xl transition-colors text-sm font-semibold group-hover:shadow-md border border-blue-500/20"
                                                >
                                                    View Profile <ExternalLink className="w-4 h-4 ml-2" />
                                                </a>
                                            ) : (
                                                <span className="text-slate-600 text-sm italic">-</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ResearchPublications;
