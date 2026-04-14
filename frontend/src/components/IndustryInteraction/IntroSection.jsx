import React from 'react';
import { Network, Building2, UserCircle2 } from 'lucide-react';
import { industryInteractionsIntro } from '../../data/industryInteractionData';
import sonalGore from '../../assets/faculty/sonal-gore_mam.jpg';

const IntroSection = () => {
    return (
        <section className="py-16 bg-stone-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Industry Institute</span> Interaction
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Objectives & Highlights */}
                    <div className="lg:col-span-2 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl">
                        <p className="text-xl text-slate-700 dark:text-slate-300 font-semibold mb-8 leading-relaxed">
                            {industryInteractionsIntro.description}
                        </p>

                        <ul className="space-y-4 mb-8">
                            {industryInteractionsIntro.points.map((point, idx) => (
                                <li key={idx} className="flex items-start text-slate-700 dark:text-slate-300">
                                    <div className="mt-1 mr-4 shrink-0 bg-cyan-900/50 p-1.5 rounded-full border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                                        <Building2 size={16} />
                                    </div>
                                    <span className="text-lg font-medium leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-6 rounded-2xl border border-cyan-800/30">
                            <p className="text-cyan-100 font-medium italic text-lg leading-relaxed">
                                "{industryInteractionsIntro.summary}"
                            </p>
                        </div>
                    </div>

                    {/* Coordinator Profile */}
                    <div className="lg:col-span-1">
                        <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="h-64 overflow-hidden relative bg-white dark:bg-slate-800">
                                {/* Placeholder for Coordinator Image */}
                                <img
                                    src={sonalGore}
                                    alt="Dr. Sonal A. Gore"
                                    className="w-full h-full object-cover object-top filter transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-100 dark:from-slate-900 to-transparent"></div>
                            </div>

                            <div className="p-8 relative -mt-10">
                                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-300 dark:border-slate-700 flex items-center justify-center mb-6 shadow-lg shadow-black/50 mx-auto">
                                    <UserCircle2 size={32} className="text-cyan-600 dark:text-cyan-400" />
                                </div>

                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">
                                        Dr. Sonal A. Gore
                                    </h3>
                                    <p className="text-cyan-600 dark:text-cyan-400 font-bold text-sm tracking-uppercase tracking-widest uppercase mb-1">
                                        Coordinator
                                    </p>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                                        Industry Institute Interaction Coordinator
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default IntroSection;
