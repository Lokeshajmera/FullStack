import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { coTeachingPrograms } from '../data/coTeachingData';
import { Network, Cloud, Award, BrainCircuit } from 'lucide-react';
import image1 from '../assets/images/coteaching1.jpg';
import image2 from '../assets/images/coteaching2.jpg';

const CoTeaching = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getIconAndColor = (type) => {
        switch (type) {
            case 'cloud': return { icon: <Cloud className="w-8 h-8 text-purple-400" />, color: "text-purple-400", bg: "bg-purple-500" };
            case 'brain': return { icon: <BrainCircuit className="w-8 h-8 text-emerald-400" />, color: "text-emerald-400", bg: "bg-emerald-500" };
            case 'network':
            default: return { icon: <Network className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />, color: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-500" };
        }
    };

    const renderProgramCard = (data) => {
        const { icon, color, bg } = getIconAndColor(data.iconType);

        return (
            <motion.div
                key={data.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.05)] transition-all"
            >
                {/* Background glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 ${bg}/5 rounded-bl-full blur-[80px] pointer-events-none`} />

                {/* Header Section */}
                <div className="flex items-start gap-5 mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 shrink-0">
                        {icon}
                    </div>
                    <div className="flex-1 pt-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 max-w-full">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                                {data.title}
                            </h3>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 w-max shrink-0">
                                {data.academicYear}
                            </span>
                        </div>
                        <p className={`font-semibold mt-2 ${color} flex items-center md:text-lg`}>
                            by {data.company}
                        </p>
                    </div>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
                    {/* Left Column Stats */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="bg-white/60 dark:bg-slate-800/60 rounded-xl p-5 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                            <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Expert SME</p>
                            <p className="text-slate-900 dark:text-white font-medium text-[15px] leading-snug">{data.expert}</p>
                        </div>
                        <div className="bg-white/60 dark:bg-slate-800/60 rounded-xl p-5 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                            <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Duration & Sessions</p>
                            <p className="text-slate-900 dark:text-white font-medium text-[15px] leading-snug">{data.duration}</p>
                            <p className="text-slate-600 dark:text-slate-400 text-[14px] mt-1">{data.sessions}</p>
                        </div>
                        <div className="bg-white/60 dark:bg-slate-800/60 rounded-xl p-5 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors relative overflow-hidden">
                            <div className={`absolute -right-4 -bottom-4 w-16 h-16 ${bg}/10 rounded-full blur-[20px]`} />
                            <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Students Benefited</p>
                            <p className={`font-bold text-2xl ${color}`}>{data.studentsBenefited}</p>
                            <p className="text-slate-600 dark:text-slate-400 text-[13px] font-medium leading-snug mt-1">Coverage: {data.coverage}</p>
                        </div>
                    </div>

                    {/* Right Column Details */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h4 className={`text-lg font-bold mb-2 ${color}`}>Program Overview Activity</h4>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px] font-medium opacity-90 text-justify">
                                {data.description}
                            </p>
                        </div>

                        {data.outcome && (
                            <div>
                                <h4 className={`text-lg font-bold mb-2 ${color}`}>Outcome & Certification</h4>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px] font-medium opacity-90">
                                    {data.outcome}
                                </p>
                            </div>
                        )}
                        
                        {data.topPerformer !== "N/A" && (
                            <div className="mt-6 border border-yellow-500/30 rounded-xl p-5 bg-gradient-to-r from-yellow-500/5 to-transparent flex items-center gap-5">
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-full border border-yellow-500/20 shadow-sm shrink-0">
                                    <Award className="text-yellow-500" size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-yellow-600 dark:text-yellow-500 tracking-wider uppercase mb-1 drop-shadow-sm">Top Performer Recognition</h4>
                                    <p className="text-slate-900 dark:text-white font-bold leading-snug md:text-lg">
                                        {data.topPerformer}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };

    const eventImages = [image1, image2];

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    title="Co-Teaching Programs with Industry"
                    subtitle="Bridging the gap between academia and industry through collaborative teaching frameworks."
                />

                {/* Render the unified array of Co-Teaching records */}
                {coTeachingPrograms.map(program => renderProgramCard(program))}

                {/* Section: Glimpses of Event */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 mb-16"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            Glimpses of Industry Events
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {eventImages.map((src, idx) => (
                            <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-lg group cursor-pointer">
                                <img 
                                    src={src} 
                                    alt={`Industry Event ${idx + 1}`} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100" 
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Section: Cognizant Credit Program */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 lg:p-12 text-center"
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cognizant Credit Program - Final Year B.Tech</h3>
                    <div className="max-w-4xl mx-auto italic text-slate-700 dark:text-slate-300 leading-relaxed text-lg border-l-4 border-cyan-500 pl-6 bg-white/20 dark:bg-slate-800/20 py-4 rounded-r-lg shadow-sm text-left">
                        <ul className="list-disc ml-4 space-y-2 font-medium">
                            <li>The Cognizant Credit Program is mandatory for all the students.</li>
                            <li>Holds 50% weightage of Termwork for Project Development IV.</li>
                        </ul>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default CoTeaching;
