import React from 'react';
import { Mail, Phone, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import jsKulkarniImage from '../assets/faculty/jskulkarni.jpg';

const RiCoordinator = () => {
    return (
        <div className="pt-[160px] bg-stone-50 dark:bg-slate-950 min-h-screen text-slate-700 dark:text-slate-300 font-sans pb-20">
            {/* Header */}
            <div className="py-16 text-center bg-slate-100 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20" />
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 relative z-10 tracking-tight">
                    Research and Innovation <span className="text-cyan-600 dark:text-cyan-400">Coordinator</span>
                </h1>
                <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full relative z-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Sidebar / Profile Card */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-300 dark:border-slate-800 overflow-hidden shadow-2xl sticky top-28"
                        >
                            <div className="h-32 bg-gradient-to-r from-blue-600 to-cyan-600 relative">
                                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-800">
                                        <img
                                            src={jsKulkarniImage}
                                            alt="Dr. J. S. Kulkarni"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-20 pb-8 px-6 text-center">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Dr. J. S. Kulkarni</h3>
                                <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-6">R&I Coordinator</p>

                                <div className="space-y-4 text-left">
                                    <div className="flex items-center text-slate-700 dark:text-slate-300 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-300 dark:border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                                        <Phone className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mr-3 shrink-0" />
                                        <span>9637313174</span>
                                    </div>
                                    <div className="flex items-center text-slate-700 dark:text-slate-300 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-300 dark:border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                                        <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mr-3 shrink-0" />
                                        <a href="mailto:jyoti.kulkarni@pccoepune.org" className="hover:text-cyan-600 dark:text-cyan-400 transition-colors break-all">
                                            jyoti.kulkarni@pccoepune.org
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-slate-100/50 dark:bg-slate-900/50 rounded-3xl border border-slate-300 dark:border-slate-800 p-8 md:p-10 shadow-xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Award className="w-32 h-32 text-cyan-600 dark:text-cyan-400" />
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                                <div className="w-2 h-8 bg-cyan-500 rounded-full mr-4"></div>
                                Our Vision for Research
                            </h2>

                            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                                In an increasingly technologically driven world, Research is the foundation of any nation's economic growth. The Department of CSE (AI & ML) is also committed to long-term basic research in frontier areas. Research and innovation are essential components of all professions. Artificial intelligence, machine learning, blockchain, computer vision, and other software technologies have permeated all sectors of society.
                            </p>

                            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                                The Department of CSE (AI & ML) has worked hard to align its research and development efforts with the goal of achieving technological self-sufficiency. Students and faculty collaborate on research projects in science and engineering. We believe that our students have enormous innovative potential, and we as teachers accept the responsibility of shaping that potential through various avenues.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-slate-100 dark:from-slate-900 to-slate-800 rounded-3xl border border-slate-300 dark:border-slate-700 p-8 md:p-10 shadow-xl"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                                <div className="w-2 h-8 bg-blue-500 rounded-full mr-4"></div>
                                Aligning with Global Needs
                            </h2>

                            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                                The R&D cell is always focused on instilling research aptitude and innovative thinking in students through various activities.
                            </p>

                            <div className="p-6 bg-white/50 dark:bg-slate-950/50 rounded-2xl border border-slate-200 dark:border-slate-800/50 border-l-4 border-l-cyan-500">
                                <p className="text-slate-800 dark:text-slate-200 italic font-medium leading-relaxed">
                                    "In order to keep up with expanding knowledge frontiers and global developments, the Department of CSE (AI & ML) maintains ongoing academic and research collaborations with many national and international universities, governments, and industries; it is also in constant contact with national needs."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RiCoordinator;
