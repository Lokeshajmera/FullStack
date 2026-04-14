import React from 'react';
import { Target, Lightbulb, Globe2, BookOpen, Presentation, GraduationCap, ArrowRightCircle } from 'lucide-react';

const InnsAbout = () => {
    const opportunities = [
        "Complimentary access to the Neural Networks journal and a combined 50% discount on open-access article processing fees (25% from the journal and 25% from INNS).",
        "Access to a wide range of books and papers via ScienceDirect.",
        "Waivers on conference traveling and registration fees.",
        "Stay updated on the latest AI research by joining specialized sections."
    ];

    const features = [
        {
            title: "Global Collaboration",
            description: "INNS promotes international networking, partnerships, and knowledge sharing among researchers, practitioners, and enthusiasts in the neural network community.",
            icon: <Globe2 className="text-cyan-600 dark:text-cyan-400" size={32} />
        },
        {
            title: "Global Conferences and Publications",
            description: "INNS organizes high-impact conferences and supports leading journals to disseminate the latest research findings.",
            icon: <Presentation className="text-blue-400" size={32} />
        }
    ];

    return (
        <section className="py-20 bg-stone-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Mission & Objective Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-slate-100/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 rounded-2xl p-8 shadow-xl hover:border-cyan-500/50 transition-colors group">
                        <div className="w-14 h-14 bg-cyan-950 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Target size={28} className="text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Mission</h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                            To foster the advancement and application of neural network science and engineering for the benefit of humanity.
                        </p>
                    </div>

                    <div className="bg-slate-100/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 rounded-2xl p-8 shadow-xl hover:border-blue-500/50 transition-colors group">
                        <div className="w-14 h-14 bg-blue-950 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Lightbulb size={28} className="text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Objective</h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                            To promote interdisciplinary collaboration and innovation in neural network research, with a strong focus on artificial intelligence, machine learning, and computational neuroscience.
                        </p>
                    </div>
                </div>

                {/* Features & Opportunities Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Key Features */}
                    <div>
                        <div className="flex items-center mb-8">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Key Features</h2>
                            <div className="ml-4 flex-grow h-px bg-white dark:bg-slate-800"></div>
                        </div>
                        <div className="space-y-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex bg-slate-100/50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80">
                                    <div className="mr-6 shrink-0 mt-1">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{feature.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Opportunities */}
                    <div>
                        <div className="flex items-center mb-8">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Opportunities for Members</h2>
                            <div className="ml-4 flex-grow h-px bg-white dark:bg-slate-800"></div>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-800/30 rounded-3xl p-8 shadow-2xl">
                            <ul className="space-y-6">
                                {opportunities.map((opp, idx) => (
                                    <li key={idx} className="flex">
                                        <ArrowRightCircle className="text-cyan-500 mr-4 shrink-0 mt-1" size={24} />
                                        <span className="text-slate-800 dark:text-slate-200 font-medium text-lg leading-relaxed">{opp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default InnsAbout;
