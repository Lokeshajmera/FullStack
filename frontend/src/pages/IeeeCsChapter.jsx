import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Calendar, Award, Lightbulb, User } from 'lucide-react';
import santwanaGudadhe from '../assets/faculty/santwana-gudadhe.jpg';
import prithvirajMore from '../assets/simsaa/prithviraj_more.webp';
import ananyaRajankar from '../assets/simsaa/ananya_rajankar.webp';
import omPangaonkar from '../assets/simsaa/om_pangaonkar.webp';
import abhirajHiwale from '../assets/students/abhiraj-hiwale.png';

// IEEE Events Images
import techx1 from '../assets/ieee/techxpune-25-01.jpg';
import techx2 from '../assets/ieee/techxpune-25-02.jpg';
import techx3 from '../assets/ieee/techxpune-25-03.jpg';
import techx4 from '../assets/ieee/techxpune-25-04.jpg';
import techx5 from '../assets/ieee/techxpune-25-05.jpg';
import techx7 from '../assets/ieee/techxpune-25-07.jpg';

import ind1 from '../assets/ieee/ieee-induction-01.jpg';
import ind2 from '../assets/ieee/ieee-induction-02.jpg';
import ind3 from '../assets/ieee/ieee-induction-03.jpg';
import ind4 from '../assets/ieee/ieee-induction-04.jpg';

import ctf1 from '../assets/ieee/capture-the-flag-01.jpg';
import ctf3 from '../assets/ieee/capture-the-flag-03.jpg';
import ctf4 from '../assets/ieee/capture-the-flag-04.jpg';
import ctf6 from '../assets/ieee/capture-the-flag-06.jpg';

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
        <div className="h-64 lg:h-[400px] w-full overflow-hidden relative group-hover:scale-102 transition-transform duration-500 bg-slate-100/50 dark:bg-slate-800/50 flex items-center justify-center p-4 rounded-2xl shadow-inner">
            <AnimatePresence mode="wait">
                <motion.img
                    key={active}
                    src={images[active]}
                    alt={`Slide ${active + 1}`}
                    className="w-full h-full object-contain drop-shadow-md rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>
            
            {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
                    {images.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${i === active ? 'w-4 bg-cyan-500' : 'w-1.5 bg-slate-400/50 dark:bg-slate-500/50'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const IeeeCsChapter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const leaders = [
        {
            name: "Dr. Santwana Gudade",
            role: "IEEE CS Branch Chapter Head",
            image: santwanaGudadhe
        },
        {
            name: "Mr. Abhiraj Hiwale",
            role: "Chair IEEE CS",
            image: abhirajHiwale
        },
        {
            name: "Prithviraj More",
            role: "Vice chair IEEE CS",
            image: prithvirajMore
        },
        {
            name: "Ananya Rajankar",
            role: "Secretary, IEEE CS",
            image: ananyaRajankar
        },
        {
            name: "Om Pangaokar",
            role: "Treasurer, IEEE CS",
            image: omPangaonkar
        }
    ];

    const events = [
        {
            title: "Capture the Flag 2026",
            date: "24th and 25th Feb 2026",
            description: "IEEE CS student chapter PCCOE conducted Capture the flag on 24th and 25th Feb 2026, challenging students with complex cybersecurity tasks and computational problem-solving.",
            images: [ctf1, ctf3, ctf4, ctf6]
        },
        {
            title: "IEEE Computer Society SYP TECHXPUNE’25",
            date: "7th October 2025 (IEEE Day)",
            description: "The IEEE Computer Society Student Chapter PCCOE, with IEEE Computer Society Pune and the IEEE Pune Section, successfully organized IEEE Computer Society SYP TECHXPUNE’25.",
            images: [techx1, techx2, techx3, techx4, techx5, techx7]
        },
        {
            title: "IEEE Induction Program",
            date: "2025-26",
            description: "IEEE Computational Intelligence (CIS) & IEEE Computer Society (CS) Chapter Induction for year 2025-26.",
            images: [ind1, ind2, ind3, ind4]
        }
    ];

    return (
        <div className="bg-stone-50 dark:bg-slate-950 min-h-screen pt-24 pb-16">
            
            {/* Header section */}
            <div className="bg-cyan-600 dark:bg-cyan-900/40 py-16 mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                            IEEE Computer Society
                        </h1>
                        <p className="text-xl text-cyan-50 dark:text-cyan-100/80 mb-2 font-medium">
                            Student Branch Chapter (IEEE CS)
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
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About IEEE CS</h2>
                    </div>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        IEEE CS is the IEEE Computer Society, the world's leading membership organization for professionals in computer science and technology, dedicated to advancing the field through information sharing, networking, and career development resources.
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                        Our PCCOE Student Chapter serves as a bridge between academic learning and industry applications, providing students with opportunities to explore cutting-edge technologies and research in computational intelligence.
                    </p>
                </motion.div>
            </div>

            {/* Leadership Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Chapter Leadership</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index % 4 * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col items-center h-full w-full max-w-[280px]"
                        >
                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 mb-4 border-4 border-slate-200 dark:border-slate-700 group-hover:border-cyan-500 transition-colors duration-300 shadow-xl">
                                <img 
                                    src={leader.image} 
                                    alt={leader.name} 
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="text-center flex-grow flex flex-col justify-center items-center w-full">
                                <h3 className="text-[16px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors leading-tight">{leader.name}</h3>
                                <p className="text-[11px] font-medium text-cyan-600 dark:text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/50 py-1 px-3 rounded-full border border-cyan-200 dark:border-cyan-800/30 inline-block leading-tight">
                                    {leader.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Activities Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="flex items-center mb-12">
                    <Calendar className="w-8 h-8 text-cyan-500 mr-4" />
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Recent Activities</h2>
                </div>

                <div className="space-y-16">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-amber-50/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg p-6 lg:p-8"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                {/* Event Info */}
                                <div>
                                    <div className="inline-block bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-700 dark:text-cyan-300 rounded-full px-4 py-1.5 text-sm font-bold mb-4 flex items-center w-fit">
                                        <Calendar size={14} className="mr-2" />
                                        {event.date}
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                                        {event.title}
                                    </h3>
                                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                        {event.description}
                                    </p>
                                </div>

                                {/* Event Images Carousel */}
                                <div className="w-full">
                                    <AutoCarousel images={event.images} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default IeeeCsChapter;
