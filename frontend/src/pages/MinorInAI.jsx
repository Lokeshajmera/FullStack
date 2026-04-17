import React, { useEffect } from 'react';
import SectionHeader from '../components/common/SectionHeader';

const MinorInAI = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Minor in Artificial Intelligence"
                    subtitle="Designed for students from other branches to gain competency in Artificial Intelligence applications."
                />

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { sem: "Semester V", title: "Artificial Intelligence", credits: 4, desc: "Introduction to intelligent systems, state-space search, heuristic search techniques, and knowledge representation for solving real-world problems." },
                        { sem: "Semester VI", title: "Machine Learning", credits: 4, desc: "Foundational algorithms for supervised and unsupervised learning, including regression, classification, clustering, and ensemble methods." },
                        { sem: "Semester VII", title: "Neural Networks & Deep Learning", credits: 4, desc: "Architectures of artificial neural networks, backpropagation, CNNs for computer vision, and hands-on implementation with deep learning frameworks." },
                        { sem: "Semester VIII", title: "Natural Language Processing", credits: 4, desc: "Techniques for computer-human language interaction, including tokenization, sentiment analysis, and building intelligent conversational agents." }
                    ].map((course, idx) => (
                        <div key={idx} className="bg-amber-50/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-4">
                                <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold rounded-full">
                                    {course.sem}
                                </span>
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-stone-100 dark:bg-slate-800 px-3 py-1 rounded-md">
                                    Credits: {course.credits}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{course.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {course.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MinorInAI;
