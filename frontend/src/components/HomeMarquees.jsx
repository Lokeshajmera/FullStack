import React from 'react';

const HomeMarquees = () => {
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
        <section className="py-12 bg-stone-50 dark:bg-slate-950 relative overflow-hidden">
            <style>
                {`
                    @keyframes marqueeVertical {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-50%); }
                    }
                    .animate-marquee:has(> *:only-child),
                    .animate-marquee-slow:has(> *:only-child) {
                        animation: none;
                    }
                    /* If list is too short, don't animate */
                    .animate-short {
                        animation: none !important;
                        transform: none !important;
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Important Links */}
                    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.1)] flex flex-col h-[500px]">
                        <div className="bg-cyan-500 py-4 px-6 font-bold text-slate-950 uppercase tracking-widest text-sm flex items-center justify-between z-10">
                            Important Links
                            <div className="w-2 h-2 rounded-full bg-stone-50 dark:bg-slate-950 animate-pulse"></div>
                        </div>
                        <div className="flex-grow overflow-hidden relative marquee-container bg-white/50 dark:bg-slate-950/50">
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
                                <div className="h-24"></div>
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
                    </div>

                    {/* News & Announcements */}
                    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.1)] flex flex-col h-[500px]">
                        <div className="bg-blue-500 py-4 px-6 font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm flex items-center justify-between z-10">
                            News & Announcements
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                        </div>
                        <div className="flex-grow overflow-hidden relative marquee-container bg-white/50 dark:bg-slate-950/50">
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
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeMarquees;
