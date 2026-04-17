import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Calendar, Award, Lightbulb, ArrowRight } from 'lucide-react';
import jyotiKulkarni from '../assets/faculty/jskulkarni.jpg';
import piyushPatil from '../assets/simsaa/piyush_patil.webp';
import dikshaBhosale from '../assets/simsaa/diksha_bhosale.webp';
import harshalRaut from '../assets/simsaa/harshal_raut.webp';

// Event Images
import artimas1 from '../assets/aaai/artimas-prompt-relay-01.jpg';
import artimas2 from '../assets/aaai/artimas-prompt-relay-02.jpg';
import artimas3 from '../assets/aaai/artimas-prompt-relay-03.jpg';
import artimas4 from '../assets/aaai/artimas-prompt-relay-04.jpg';

import yrc1 from '../assets/aaai/young-researchers-conference-01.jpg';
import yrc2 from '../assets/aaai/young-researchers-conference-02.jpg';
import yrc3 from '../assets/aaai/young-researchers-conference-03.jpg';
import yrc4 from '../assets/aaai/young-researchers-conference-04.jpg';

import ind1 from '../assets/aaai/aaai-student-chapter-induction.jpg';
import ind2 from '../assets/aaai/aaai-student-chapter-induction-01.jpg';

import tech1 from '../assets/aaai/aaai-tech-talk-series-01.png';

const AutoCarousel = ({ images }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <div className="h-64 overflow-hidden relative group-hover:scale-102 transition-transform duration-500 bg-slate-100/50 dark:bg-slate-900 flex items-center justify-center p-2 rounded-t-2xl">
            <AnimatePresence mode="wait">
                <motion.img
                    key={active}
                    src={images[active]}
                    alt={`Slide ${active + 1}`}
                    className="w-full h-full object-contain drop-shadow-sm rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>
            
            {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {images.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-4 bg-cyan-400' : 'w-1.5 bg-white/50'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const AaaiChapter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const leaders = [
        {
            name: "Dr. Jyoti Kulkarni",
            role: "AAAI Student Chapter Faculty Advisor",
            image: jyotiKulkarni
        },
        {
            name: "Mr. Piyush Patil",
            role: "President AAAI Student Chapter",
            image: piyushPatil
        },
        {
            name: "Ms. Diksha Bhosale",
            role: "Vice President AAAI Student Chapter",
            image: dikshaBhosale
        },
        {
            name: "Mr. Harshal Raut",
            role: "Secretary, AAAI Student Chapter",
            image: harshalRaut
        }
    ];

    const events = [
        {
            title: "AAAI Artimas Prompt Relay",
            date: "23rd & 24th January 2026",
            description: "AAAI Student Chapter PCCOE conducted Artimas Prompt Relay, a fast-paced and challenging competition utilizing AI prompting skills.",
            images: [artimas1, artimas2, artimas3, artimas4]
        },
        {
            title: "AAAI Student Chapter Young Researchers Conference",
            date: "29th & 30th September 2025",
            description: "The AAAI Student Chapter successfully organized the Young Researchers Conference. It allowed emerging researchers to showcase their innovative AI projects.",
            images: [yrc1, yrc2, yrc3, yrc4]
        },
        {
            title: "AAAI Student Chapter Induction",
            date: "29th July 2025",
            description: "The induction of the AAAI Student Chapter was successfully conducted at PCCoE, officially welcoming the new batch of members and outlining the chapter's vision.",
            images: [ind1, ind2]
        },
        {
            title: "AAAI Tech Talk Series 1",
            date: "28th February 2025",
            description: "The AAAI Student Chapter successfully organized the first AI Tech Talk Series bringing industry insights to students.",
            images: [tech1]
        }
    ];

    return (
        <div className="bg-stone-50 dark:bg-slate-950 min-h-screen pb-16">
            
            {/* Header section */}
            <div className="bg-cyan-600 dark:bg-cyan-900/40 py-16 mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                            AAAI Student Chapter
                        </h1>
                        <p className="text-xl text-cyan-50 dark:text-cyan-100/80 mb-2 font-medium">
                            Association for the Advancement of Artificial Intelligence
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Description section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-stone-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl"
                >
                    <div className="flex items-center mb-6">
                        <Lightbulb className="w-8 h-8 text-cyan-500 mr-4" />
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About the Chapter</h2>
                    </div>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        The Association for the Advancement of Artificial Intelligence (AAAI) Student Chapter at PCCoE is established to promote learning, research, and innovation in the field of Artificial Intelligence. The chapter focuses on key areas such as Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Intelligent Systems. 
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        As a part of the global professional organization AAAI, the chapter provides students with opportunities to engage in technical workshops, seminars, research discussions, hackathons, and collaborations with industry professionals and researchers. The primary objective is to strengthen students' understanding of AI beyond the academic curriculum, encourage research-oriented thinking, and foster innovation.
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                        It also aims to develop leadership, teamwork, and problem-solving skills by organizing competitions and knowledge-sharing sessions. Through the AAAI Student Chapter, students gain exposure to global AI research trends, access valuable learning resources, and build connections with experts in the AI community.
                    </p>
                </motion.div>
            </div>

            {/* Leadership Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Chapter Leadership</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index % 4 * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col items-center h-full w-full max-w-[280px]"
                        >
                            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 mb-4 border-4 border-slate-200 dark:border-slate-700 group-hover:border-cyan-500 transition-colors duration-300 shadow-xl">
                                <img 
                                    src={leader.image} 
                                    alt={leader.name} 
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="text-center flex-grow flex flex-col justify-center items-center w-full">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">{leader.name}</h3>
                                <p className="text-xs font-medium text-cyan-600 dark:text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/50 py-1.5 px-4 rounded-full border border-cyan-200 dark:border-cyan-800/30 inline-block">
                                    {leader.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Activities Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-12">
                    <Calendar className="w-8 h-8 text-cyan-500 mr-4" />
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Recent Activities</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-amber-50/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg group flex flex-col"
                        >
                            <div className="relative">
                                <AutoCarousel images={event.images} />
                            </div>
                            <div className="p-6 flex-grow flex flex-col z-20 bg-amber-50/60 dark:bg-slate-900">
                                <div className="mb-3">
                                    <span className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-700 dark:text-cyan-300 text-xs font-bold px-3 py-1.5 rounded-full inline-flex items-center border border-cyan-200 dark:border-cyan-800/40">
                                        <Calendar size={12} className="mr-1.5" />
                                        {event.date}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed flex-grow">
                                    {event.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AaaiChapter;
