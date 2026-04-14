import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import AchievementAccordion from '../components/StudentAchievements/AchievementAccordion';
import AchievementTables from '../components/StudentAchievements/AchievementTables';
import { featuredAchievements } from '../data/studentAchievementsData';

const StudentAchievements = () => {
    return (
        <div className="bg-stone-50 dark:bg-slate-950 min-h-screen pt-24 pb-16 w-full text-slate-700 dark:text-slate-300">
            {/* Page Header */}
            <div className="text-center mb-12 pt-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                    Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Achievements</span>
                </h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mt-4"></div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Featured Achievement Header Section */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 py-3 px-6 rounded-t-2xl shadow-lg border-b border-orange-400 font-bold text-xl tracking-wide text-slate-900 dark:text-white flex items-center">
                        <Trophy size={24} className="mr-3" />
                        FEATURED ACHIEVEMENTS
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-b-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
                        {/* Background Decoration */}
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-600/10 blur-3xl rounded-full"></div>

                        <div className="flex flex-col gap-6">
                            {featuredAchievements.map((achievement, idx) => (
                                <div key={idx} className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-white/60 dark:bg-slate-800/60 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex-1">
                                        <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                                            {achievement.title}
                                        </h2>
                                        <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                            {achievement.description}
                                        </p>
                                    </div>

                                    <div className="md:w-1/3 w-full">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="aspect-video bg-white/50 dark:bg-slate-800/50 rounded-xl overflow-hidden border-2 border-slate-300 dark:border-slate-700 shadow-md flex items-center justify-center p-1"
                                        >
                                            <img src={achievement.image} alt={achievement.title} className="w-full h-full object-contain rounded-lg" />
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Accordion Lists */}
                <AchievementAccordion />

                {/* Tabular Data */}
                <AchievementTables />
            </main>
        </div>
    );
};

export default StudentAchievements;
