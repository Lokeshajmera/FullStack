import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Carousel Images
import lab1 from '../assets/images/labs/lab1.jpg';
import lab2 from '../assets/images/labs/lab2.jpg';
import lab3 from '../assets/images/labs/lab3.jpg';
import lab4 from '../assets/images/labs/lab4.jpg';
import lab5 from '../assets/images/labs/lab5.jpg';
import lab6 from '../assets/images/labs/lab6.jpg';

// Import Lab Card Images
import imgAI from '../assets/images/labs/AI.jpg';
import imgProg from '../assets/images/labs/programming.webp';
import imgEmbed from '../assets/images/labs/Embedded-AI-LinkedIn.png';
import imgData from '../assets/images/labs/data-science.jpg';
import imgAlgo from '../assets/images/labs/Algorithm.webp';

const carouselImages = [lab1, lab2, lab3, lab4, lab5, lab6];

const labsData = [
    { id: 1, title: "Artificial Intelligence Laboratory", image: imgAI },
    { id: 2, title: "Programming Laboratory", image: imgProg },
    { id: 3, title: "Embedded AI Laboratory", image: imgEmbed },
    { id: 4, title: "Data Science Laboratory", image: imgData },
    { id: 5, title: "Algorithm Laboratory", image: imgAlgo }
];

const SpecializedLabs = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-advance Carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 3000); // changes every 3 seconds
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-stone-50 dark:bg-slate-950 min-h-screen font-sans pb-20">

            {/* Header Area */}
            <div className="py-16 text-center bg-slate-100 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20" />
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 relative z-10 tracking-tight">
                    Specialized <span className="text-cyan-600 dark:text-cyan-400">Labs</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto relative z-10">
                    State-of-the-art infrastructure facilitating cutting edge research and development.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full relative z-10 mt-6" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                {/* Carousel */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full flex justify-center mb-24"
                >
                    <div className="relative w-full max-w-4xl h-[250px] md:h-[450px] overflow-hidden rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 bg-amber-50/60 dark:bg-slate-900 p-2 md:p-3">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    src={carouselImages[currentImageIndex]}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 w-full h-full object-contain"
                                    alt={`Specialized Lab Snapshot ${currentImageIndex + 1}`}
                                />
                            </AnimatePresence>

                            {/* Carousel Indicators */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-10">
                                {carouselImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`w-10 h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-cyan-400 w-12' : 'bg-white/40 hover:bg-white/70'}`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Labs Cards Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Laboratories</h2>
                </div>

                {/* Labs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 max-w-5xl mx-auto">
                    {labsData.map((lab, index) => (
                        <motion.div
                            key={lab.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-stone-100 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 p-6 flex flex-col sm:flex-row items-center gap-6 group"
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-stone-50 dark:bg-slate-950 rounded-lg overflow-hidden shadow-inner flex items-center justify-center p-1 border border-slate-200 dark:border-slate-700">
                                <img
                                    src={lab.image}
                                    alt={lab.title}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">
                                    {lab.title}
                                </h3>
                                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto sm:mx-0 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SpecializedLabs;
