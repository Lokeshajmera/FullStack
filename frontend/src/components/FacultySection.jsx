import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import hodImage from '../assets/faculty/Anuradha_mam.jpeg';  // For HOD Image

const FacultySection = () => {
    const importantLinks = [
        { label: "AICTE Funding Scheme", url: "https://www.aicte.gov.in/schemes" },
        { label: "Savitribai Phule Pune University", url: "https://www.unipune.ac.in/" },
        { label: "Pimpri Chinchwad College Of Engineering", url: "https://www.pccoepune.com/" },
        { label: "All India Council for Technical Education", url: "https://www.aicte.gov.in/" },
        { label: "Pimpri Chinchwad University", url: "https://pcu.edu.in/" },
        { label: "Department of Science and Technology", url: "https://dst.gov.in/" }
    ];

    const newsItems = [
        { title: "AICTE Funding Scheme", date: "Recent update", link: "https://www.aicte.gov.in/schemes" },
        // { title: "Samvaad", subtitle: "Volume 2, Issue 9", date: "15th January 2023", link: "#" },
        // { title: "Upcoming AIML Hackathon", date: "24th March 2024", link: "#" },
        // { title: "New Research Lab Inauguration", date: "10th Feb 2024", link: "#" }
    ];

    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950 relative overflow-hidden">
            <style>
                {`
                    @keyframes marqueeVertical {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-50%); }
                    }
                    .animate-marquee {
                        animation: marqueeVertical 20s linear infinite;
                    }
                    .animate-marquee-slow {
                        animation: marqueeVertical 25s linear infinite;
                    }
                    .marquee-container:hover .animate-marquee,
                    .marquee-container:hover .animate-marquee-slow {
                        animation-play-state: paused;
                    }
                `}
            </style>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        HOD Desk <span className="text-cyan-600 dark:text-cyan-400">& Announcements</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Stay updated with the latest news, important links, and insights from our Head of Department.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Important Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.1)] flex flex-col h-[500px]"
                    >
                        <div className="bg-cyan-600 dark:bg-cyan-500 py-4 px-6 font-bold text-white dark:text-slate-950 uppercase tracking-widest text-sm flex items-center justify-between z-10">
                            Important Links
                            <div className="w-2 h-2 rounded-full bg-white dark:bg-slate-950 animate-pulse"></div>
                        </div>
                        <div className="flex-grow overflow-hidden relative marquee-container bg-white dark:bg-slate-950">
                            <div className="animate-marquee flex flex-col pt-4">
                                {/* Original List */}
                                {importantLinks.map((link, idx) => (
                                    <div key={idx} className="px-6 py-4 border-b border-slate-200 dark:border-slate-800/50 hover:bg-white/80 dark:bg-slate-800/80 transition-colors group">
                                        <a href={link.url} className="text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:text-cyan-300 font-medium text-[15px] transition-colors block">
                                            {link.label}
                                        </a>
                                    </div>
                                ))}
                                {/* Spacer for loop gap */}
                                <div className="h-50"></div>
                                {/* Duplicated List for seamless looping */}
                                {importantLinks.map((link, idx) => (
                                    <div key={`dup-${idx}`} className="px-6 py-4 border-b border-slate-200 dark:border-slate-800/50 hover:bg-white/80 dark:bg-slate-800/80 transition-colors group">
                                        <a href={link.url} className="text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:text-cyan-300 font-medium text-[15px] transition-colors block">
                                            {link.label}
                                        </a>
                                    </div>
                                ))}
                            </div>
                            {/* Gradient overlays */}
                            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white dark:from-slate-950 to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none"></div>
                        </div>
                    </motion.div>

                    {/* News & Announcements */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.1)] flex flex-col h-[500px]"
                    >
                        <div className="bg-blue-600 dark:bg-blue-500 py-4 px-6 font-bold text-white uppercase tracking-widest text-sm flex items-center justify-between z-10">
                            News & Announcements
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                        </div>
                        <div className="flex-grow overflow-hidden relative marquee-container bg-white dark:bg-slate-950">
                            <div className="animate-marquee-slow flex flex-col pt-4">
                                {/* Original List */}
                                {newsItems.map((news, idx) => (
                                    <div key={idx} className="px-6 py-5 border-b border-slate-200 dark:border-slate-800/50 hover:bg-white/80 dark:bg-slate-800/80 transition-colors group relative flex flex-col">
                                        <h4 className="text-slate-900 dark:text-white font-medium text-base group-hover:text-cyan-600 dark:text-cyan-400 mb-1 leading-snug pr-32">{news.title}</h4>
                                        {news.subtitle && <span className="text-slate-600 dark:text-slate-400 text-sm mb-1">{news.subtitle}</span>}
                                        <span className="text-sm text-slate-500 font-mono mb-2">{news.date}</span>
                                        <a 
                                            href={news.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] md:text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white bg-pink-500 hover:bg-pink-400 px-3 md:px-4 py-1.5 md:py-2 rounded transition-colors shadow-[0_0_8px_rgba(236,72,153,0.3)] hover:shadow-[0_0_12px_rgba(236,72,153,0.5)] whitespace-nowrap"
                                        >
                                            {idx === 0 ? "Click Here" : "View Document"}
                                        </a>
                                    </div>
                                ))}
                                {/* Spacer for loop gap */}
                                <div className="h-24"></div>
                                {/* Duplicated List */}
                                {newsItems.map((news, idx) => (
                                    <div key={`dup-${idx}`} className="px-6 py-5 border-b border-slate-200 dark:border-slate-800/50 hover:bg-white/80 dark:bg-slate-800/80 transition-colors group relative flex flex-col">
                                        <h4 className="text-slate-900 dark:text-white font-medium text-base group-hover:text-cyan-600 dark:text-cyan-400 mb-1 leading-snug pr-32">{news.title}</h4>
                                        {news.subtitle && <span className="text-slate-600 dark:text-slate-400 text-sm mb-1">{news.subtitle}</span>}
                                        <span className="text-sm text-slate-500 font-mono mb-2">{news.date}</span>
                                        <a 
                                            href={news.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] md:text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white bg-pink-500 hover:bg-pink-400 px-3 md:px-4 py-1.5 md:py-2 rounded transition-colors shadow-[0_0_8px_rgba(236,72,153,0.3)] hover:shadow-[0_0_12px_rgba(236,72,153,0.5)] whitespace-nowrap"
                                        >
                                            {idx === 0 ? "Click Here" : "View Document"}
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white dark:from-slate-950 to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none"></div>
                        </div>
                    </motion.div>

                    {/* HOD Desk Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.1)] flex flex-col h-[500px]"
                    >
                        <div className="bg-blue-600 dark:bg-purple-600 py-4 px-6 font-bold text-white uppercase tracking-widest text-sm flex items-center justify-between z-10">
                            From HOD Desk
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                        </div>
                        <div className="flex flex-col flex-grow p-6 items-center text-center relative bg-white/30 dark:bg-slate-950/30">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-300 dark:border-slate-800 shadow-[0_0_15px_rgba(168,85,247,0.3)] mb-4 bg-white">
                                <img
                                    src={hodImage}
                                    alt="Dr. Anuradha Thakare"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Dr. Anuradha Thakare</h3>
                            <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">Head of Department</p>

                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed italic">
                                "Welcome to the Department of Artificial Intelligence and Machine Learning.
                                Our goal is to foster an environment of continuous learning and innovation,
                                equipping students with the skills required to excel in the ever-evolving tech industry."
                            </p>

                            <Link
                                to="/hod-desk"
                                className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-gradient-to-r dark:from-purple-600 dark:to-cyan-600 dark:hover:from-purple-500 dark:hover:to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 w-full text-center"
                            >
                                Read More
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FacultySection;
