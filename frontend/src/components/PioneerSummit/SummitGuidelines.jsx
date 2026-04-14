import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

const SummitGuidelines = () => {
    const guidelines = [
        "The group should not have more than 3 students.",
        "Choose any one track from the list given below.",
        "Research paper should not be longer than 6 pages (single-sided).",
        "Paper must have a proper format (Intro, Lit review, Methodology, etc.).",
        "Paper should be plagiarism free with proper citations.",
        "Submit papers by 04/10/2024.",
        "Presentation should be no more than 8 slides.",
        "10 min presentation, followed by 5 min Q&A.",
        "Presentation should use the provided templates."
    ];

    const domains = [
        "Advanced Machine Learning Techniques and Applications",
        "AI-Driven Solutions for Sustainable Development",
        "Domain-Specific AI: Healthcare, Finance, Agriculture, etc."
    ];

    return (
        <section className="py-12 bg-slate-100/50 dark:bg-slate-900/50 border-y border-slate-300 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Guidelines List */}
                    <div>
                        <div className="flex items-center mb-6">
                            <BookOpen size={28} className="text-cyan-600 dark:text-cyan-400 mr-3" />
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Guidelines</h3>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-2xl p-6 md:p-8">
                            <ul className="space-y-4">
                                {guidelines.map((rule, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle2 size={20} className="text-cyan-500 mr-3 mt-1 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 font-medium text-lg leading-relaxed">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Domains List */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center mr-3 border border-orange-500/50">
                                <span className="text-orange-500 font-bold">D</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Domains</h3>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-2xl p-6 md:p-8 flex flex-col justify-center h-[calc(100%-4rem)]">
                            <div className="space-y-6">
                                {domains.map((domain, idx) => (
                                    <div key={idx} className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-5 rounded-xl hover:border-orange-500/50 transition-colors shadow-inner">
                                        <div className="flex items-center text-slate-800 dark:text-slate-200 font-bold text-xl">
                                            <span className="text-orange-500 text-2xl mr-4 opacity-70">{(idx + 1).toString().padStart(2, '0')}</span>
                                            {domain}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SummitGuidelines;
