import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { ExternalLink, Mail, GraduationCap, Briefcase, Award } from 'lucide-react';
import { facultyData } from '../data/facultyData';
// You can optionally use hodImage or fallback to facultyData[0].image
import hodImage from '../assets/faculty/Anuradha_mam.jpeg';

const HODDesk = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hod = facultyData[0]; // Dr. Anuradha Thakare

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    title="Message From HOD"
                    subtitle="Leading the Department of Artificial Intelligence & Machine Learning"
                />

                <div className="mt-12 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
                        {/* Left Side: Profile */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/3 shrink-0 flex flex-col items-center lg:items-start"
                        >
                            <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-slate-300 dark:border-slate-800 shadow-xl mb-6 bg-white">
                                <img
                                    src={hod.image || hodImage}
                                    alt={hod.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center lg:text-left">
                                {hod.name}
                            </h3>
                            <p className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wide mt-2 text-center lg:text-left">
                                {hod.designation}
                            </p>

                            <div className="mt-4 space-y-3 w-full">
                                <div className="flex items-start text-slate-700 dark:text-slate-300">
                                    <GraduationCap className="w-5 h-5 text-cyan-500 mr-3 mt-1 shrink-0" />
                                    <span className="text-sm">{hod.qualification}</span>
                                </div>
                                <div className="flex items-start text-slate-700 dark:text-slate-300">
                                    <Briefcase className="w-5 h-5 text-cyan-500 mr-3 mt-1 shrink-0" />
                                    <span className="text-sm">{hod.experience}</span>
                                </div>
                                <div className="flex items-start text-slate-700 dark:text-slate-300">
                                    <Award className="w-5 h-5 text-cyan-500 mr-3 mt-1 shrink-0" />
                                    <span className="text-sm line-clamp-2" title={hod.areaOfInterest}>{hod.areaOfInterest}</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mt-6 w-full max-w-xs mx-auto lg:mx-0">
                                {hod.website && hod.website !== "#" && (
                                    <a
                                        href={hod.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex justify-center items-center px-6 py-2.5 bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 rounded-xl hover:bg-cyan-900/60 transition-colors border border-cyan-800/50 font-medium w-full"
                                    >
                                        Personal Website <ExternalLink size={16} className="ml-2" />
                                    </a>
                                )}
                                {hod.email && hod.email !== "#" && (
                                    <a
                                        href={`mailto:${hod.email}`}
                                        className="inline-flex justify-center items-center px-6 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-700 w-full"
                                    >
                                        <Mail size={16} className="mr-2" /> E-Mail
                                    </a>
                                )}
                                {/* Optional: Add Scopus / Scholar buttons if they exist */}
                                <div className="flex gap-2 w-full">
                                    {hod.scopus && hod.scopus !== "#" && (
                                        <a href={hod.scopus} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-white/80 dark:bg-slate-800/80 rounded-lg text-xs hover:text-cyan-600 dark:text-cyan-400 transition-colors border border-slate-300 dark:border-slate-700">Scopus</a>
                                    )}
                                    {hod.googleScholar && hod.googleScholar !== "#" && (
                                        <a href={hod.googleScholar} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-white/80 dark:bg-slate-800/80 rounded-lg text-xs hover:text-cyan-600 dark:text-cyan-400 transition-colors border border-slate-300 dark:border-slate-700">Google Scholar</a>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Message */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full lg:w-2/3"
                        >
                            {/* Label */}
                            <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 mb-5">
                                Message from the HOD
                            </p>

                            {/* Paragraph 1 */}
                            <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                                The CSE (AI&amp;ML) program at PCCOE follows:{' '}
                                <span className="font-semibold text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 italic">
                                    &ldquo; Less Teaching, More Learning! &rdquo;
                                </span>{' '}
                                Department aims to produce the graduates who will demonstrate world-class
                                expertise in AI and ML and emerging technologies which help them to stand
                                out in the crowd and grow careers in the technological era.
                            </p>

                            {/* Divider */}
                            <div className="w-14 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6" />

                            {/* Paragraph 2 */}
                            <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                                A four-year under-graduate B.Tech course in CSE (AI&amp;ML) aims to develop
                                a strong foundation by using the principles and technologies that consist of
                                many facets of Artificial Intelligence. The curriculum provides opportunities
                                to learn modern AI tools and technologies. Students tackle real-world problems
                                in robotics, computer vision, and natural language processing etc., gaining
                                expertise in machine learning pipeline, data handling, knowledge
                                representation, probabilistic models, and maximum practical implementations.
                                The state-of-the-art curriculum is delivered in collaboration with industry
                                experts through Co-teaching program. We believe that the collaboration with
                                stakeholders from education, industry, and other sectors, produces skilled
                                and ethically responsible engineers to benefit the society.
                            </p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HODDesk;
