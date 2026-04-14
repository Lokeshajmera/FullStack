import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import ProfileCard from '../components/common/ProfileCard';
import SDWAccordion from '../components/SDWAccordion';
import { sdwData } from '../data/sdwData';
import { Target, Lightbulb, Users, Phone, Star } from 'lucide-react';

const StudentDevelopmentWelfare = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pt-24 pb-20">
            {/* Header */}
            <SectionHeader
                title="Student Development and Welfare (SDW)"
                subtitle="Ensuring the academic and personal growth of students to prepare them for meaningful contributions to society."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Top Section: Coordinator Card and Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Coordinator Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-300 dark:border-slate-800 pb-2">
                            <Users className="text-cyan-600 dark:text-cyan-400" /> SDW Co-ordinator
                        </h3>
                        <ProfileCard profile={sdwData.coordinator} type="faculty" />
                        {/* Phone number pill */}
                        {sdwData.coordinator.phone && (
                            <div className="mt-4 flex items-center gap-2">
                                <a
                                    href={`tel:${sdwData.coordinator.phone}`}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-50 dark:bg-slate-800 border border-cyan-200 dark:border-cyan-800/50 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-semibold hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-900 transition-all duration-300 shadow-sm hover:shadow-cyan-500/20"
                                >
                                    <Phone size={14} />
                                    Contact No: {sdwData.coordinator.phone}
                                </a>
                            </div>
                        )}
                    </motion.div>

                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="bg-slate-100/50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-[40px]" />

                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 flex items-center gap-3">
                                <Lightbulb size={24} className="text-cyan-600 dark:text-cyan-400" />
                                About SDW Cell
                            </h3>

                            <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                                {sdwData.about.description.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}

                                <div className="bg-white/50 dark:bg-slate-950/50 p-6 rounded-xl border border-slate-300 dark:border-slate-800 pt-6 mt-6">
                                    <span className="block mb-4 font-semibold text-cyan-200">The Five Areas of Development:</span>
                                    <div className="flex flex-wrap gap-3">
                                        {sdwData.about.developmentAreas.map((area, i) => (
                                            <span key={i} className="px-4 py-2 bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-700">
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* SDW Advisors Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white flex items-center justify-center gap-3">
                        <Star className="text-cyan-600 dark:text-cyan-400" size={28} />
                        Student Development and Welfare{' '}<span className="text-cyan-600 dark:text-cyan-400">(SDW) Advisors</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sdwData.advisors.map((advisor, i) => (
                            <motion.div
                                key={advisor.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.12 }}
                                viewport={{ once: true }}
                                className="bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300 group flex flex-col items-center p-6"
                            >
                                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-700 group-hover:border-cyan-500 transition-all duration-300 shadow-xl mb-5">
                                    <img
                                        src={advisor.image}
                                        alt={advisor.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(advisor.name)}&background=0f172a&color=22d3ee&size=200` }}
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">{advisor.name}</h3>
                                    <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-3 py-1 rounded-full inline-block mb-2">{advisor.role}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{advisor.designation}</p>
                                    {advisor.phone && (
                                        <a href={`tel:${advisor.phone}`} className="mt-3 inline-flex items-center gap-1.5 text-xs text-cyan-500 hover:text-cyan-700 dark:text-cyan-300 transition-colors">
                                            <Phone size={12} />
                                            {advisor.phone}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Objectives Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-100 dark:from-slate-900 via-slate-900/80 to-slate-950 p-8 lg:p-10 rounded-3xl border border-slate-300 dark:border-slate-800 relative z-10"
                >
                    <div className="absolute inset-0 bg-grid-pattern opacity-5 mix-blend-overlay" />
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 pb-4 border-b border-slate-300 dark:border-slate-800">
                        <Target className="text-cyan-600 dark:text-cyan-400" size={32} />
                        Objectives of SDW Cell
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {sdwData.objectives.map((obj, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-cyan-950/50 border border-cyan-800/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold shrink-0 mt-1">
                                    {i + 1}
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base lg:text-lg">{obj}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Accordions for Cells */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                        Cells under <span className="text-cyan-600 dark:text-cyan-400">Student Development and Welfare</span>
                    </h2>

                    <div className="max-w-4xl mx-auto flex flex-col gap-2">
                        {sdwData.cells.map((cell) => (
                            <SDWAccordion key={cell.id} cell={cell} />
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default StudentDevelopmentWelfare;
