import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Code, Cpu } from 'lucide-react';

const ProgramsSection = () => {
    const programs = [
        {
            title: "B.Tech in AI & ML",
            description: "A 4-year undergraduate program covering foundations of AI, Machine Learning, Data Science, and Neural Networks.",
            icon: <Cpu className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />,
            color: "from-cyan-500 to-blue-500",
            link: "/about"
        },
        {
            title: "Honors in Data Science",
            description: "Specialized track for students who want to master Big Data, Analytics, and Visualization techniques.",
            icon: <BookOpen className="w-10 h-10 text-purple-400" />,
            color: "from-purple-500 to-pink-500",
            link: "/honors"
        },
        {
            title: "Minor in AI",
            description: "Designed for students from other branches to gain competency in Artificial Intelligence applications.",
            icon: <Code className="w-10 h-10 text-emerald-400" />,
            color: "from-emerald-500 to-teal-500",
            link: "/minor"
        }
    ];

    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950 relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Programs <span className="text-cyan-600 dark:text-cyan-400">Offered</span>
                    </motion.h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Comprehensive academic programs designed to build strong foundations and advanced expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-slate-100 dark:bg-slate-900 rounded-2xl p-8 border border-slate-300 dark:border-slate-800 hover:border-slate-300 dark:border-slate-700 transition-all duration-300"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                            <div className="mb-6 p-4 bg-stone-50 dark:bg-slate-950 rounded-xl inline-block border border-slate-300 dark:border-slate-800 group-hover:scale-110 transition-transform duration-300">
                                {program.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">
                                {program.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {program.description}
                            </p>

                            <div className="mt-8">
                                <Link to={program.link} className="text-sm font-semibold text-slate-900 dark:text-white flex items-center group-hover:translate-x-2 transition-transform">
                                    Learn more <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
