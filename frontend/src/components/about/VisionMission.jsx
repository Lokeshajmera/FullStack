import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

const VisionMission = () => {
    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 relative">

                    {/* Vision Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 lg:pr-16"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-cyan-500/10 rounded-xl">
                                <Target className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
                        </div>
                        <div className="bg-slate-100/40 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800/60 shadow-lg h-[calc(100%-5rem)]">
                            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light italic">
                                "To be a leading hub for AI & ML education and research, producing technically competent CSE professionals with ethical and social responsibility."
                            </p>
                        </div>
                    </motion.div>

                    {/* Divider for Desktop */}
                    <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent absolute left-1/2 top-0 bottom-0 -translate-x-1/2" />

                    {/* Mission Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 lg:pl-16"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-500/10 rounded-xl">
                                <Compass className="w-8 h-8 text-purple-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
                        </div>
                        <div className="bg-slate-100/40 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800/60 shadow-lg space-y-6 h-[calc(100%-5rem)]">
                            <div className="flex gap-4 items-start group">
                                <CheckCircle2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400 shrink-0 mt-1 transition-transform group-hover:scale-110" />
                                <p className="text-lg text-slate-700 dark:text-slate-300">
                                    To develop technically competent and innovative computer science engineers with in-depth knowledge of <span className="text-slate-900 dark:text-white font-medium">Artificial Intelligence and Machine Learning</span>.
                                </p>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <CheckCircle2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400 shrink-0 mt-1 transition-transform group-hover:scale-110" />
                                <p className="text-lg text-slate-700 dark:text-slate-300">
                                    To build ethically responsible, knowledgeable and skilled engineers to serve the needs of industry and society at large.
                                </p>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <CheckCircle2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400 shrink-0 mt-1 transition-transform group-hover:scale-110" />
                                <p className="text-lg text-slate-700 dark:text-slate-300">
                                    To provide conducive environment and opportunities for holistic development of students.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default VisionMission;
