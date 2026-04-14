import React, { useEffect } from 'react';
import SectionHeader from '../components/common/SectionHeader';

const HonorsDataScience = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Honors in Data Science"
                    subtitle="Specialized track for students who want to master Big Data, Analytics, and Visualization techniques."
                />

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { sem: "Semester V", title: "Statistical Computing", credits: 4, desc: "Advanced probability, statistical inference, hypothesis testing, and computational methods for evaluating complex data models." },
                        { sem: "Semester VI", title: "Big Data Analytics", credits: 4, desc: "Processing massive datasets using Hadoop, Spark, and distributed computing frameworks for large-scale analytical insights." },
                        { sem: "Semester VII", title: "Data Mining & Warehousing", credits: 4, desc: "Pattern discovery, ETL processes, data integration, and multi-dimensional analysis within enterprise data repositories." },
                        { sem: "Semester VIII", title: "Data Science for Social Content", credits: 4, desc: "Ethical considerations, social impact analysis, and application of data science to solve meaningful societal challenges." }
                    ].map((course, idx) => (
                        <div key={idx} className="bg-amber-50/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-4">
                                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-semibold rounded-full">
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

export default HonorsDataScience;
