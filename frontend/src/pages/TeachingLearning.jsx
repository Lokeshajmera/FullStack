import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { Briefcase, PlayCircle, BookOpen } from 'lucide-react';

const carouselImages = [
    {
        url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
        title: "Career Prospects in AI & ML",
        roles: "Machine Learning Engineer • Data Scientist • AI Architect"
    },
    {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
        title: "Future of Robotics & Automation",
        roles: "Robotics Scientist • Big Data Engineer • Research Scientist"
    },
    {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
        title: "Pioneering the Tech Landscape",
        roles: "AI Engineer • Database Developer • AI Data Analyst"
    },
    {
        url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80",
        title: "Global Industry Placements",
        roles: "Business Intelligence Developer • Cloud Architect"
    },
    {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
        title: "Research & Higher Studies",
        roles: "Collaborate with Top Global Technical Universities"
    }
];

const TeachingLearning = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Auto-change carousel every 4 seconds
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 4000);
        
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <SectionHeader
                    title="Teaching & Learning"
                    subtitle="Fostering an environment of interactive, student-centric education."
                />

                {/* --- 1. Career Prospects Carousel --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 mb-4 font-serif">
                            Career Prospects
                        </h2>
                        <div className="flex justify-center gap-8 text-slate-700 dark:text-slate-300 font-medium md:text-lg">
                            <span>• Placements</span>
                            <span>• Research</span>
                            <span>• Higher Studies</span>
                        </div>
                    </div>

                    <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-stone-100 dark:bg-slate-900 group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={carouselImages[currentSlide].url}
                                    alt="Career Prospects"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                                
                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center transform transition-transform duration-500">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                                        {carouselImages[currentSlide].title}
                                    </h3>
                                    <p className="text-cyan-700 dark:text-cyan-300 font-medium text-lg md:text-xl tracking-wide max-w-3xl mx-auto bg-black/30 backdrop-blur-sm py-2 px-6 rounded-full border border-cyan-500/30">
                                        {carouselImages[currentSlide].roles}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                            {carouselImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        currentSlide === i 
                                        ? "w-8 bg-cyan-400" 
                                        : "w-2.5 bg-white/50 hover:bg-white/80"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mb-20" />

                {/* --- 2. Courses Offered --- */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-12">
                        Courses Offered
                    </h2>

                    {/* MDM Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-16 border-b border-slate-200 dark:border-slate-800">
                        <div className="lg:col-span-8">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                                MDM - Multi Disciplinary Minor
                            </h3>
                            <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-4">
                                Generative AI
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-[15px]">
                                The Department of Computer Science and Engineering (AI and ML) is offering Multi Disciplinary Minor in Generative AI for 5 Semesters and a total of 14 Credits.
                            </p>
                            
                            <h5 className="text-slate-700 dark:text-slate-300 font-medium mb-3">Semester Wise Contents</h5>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-[15px] ml-4 list-disc marker:text-cyan-500">
                                <li>SEM 3 : Introduction to Generative AI</li>
                                <li>SEM 4 : Generative AI Models</li>
                                <li>SEM 5 : Generative AI Tools and Techniques</li>
                                <li>SEM 6 : Generative AI Applications</li>
                                <li>SEM 7 : Capstone Projects</li>
                            </ul>
                        </div>
                        <div className="lg:col-span-4 flex items-center justify-center">
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer shadow-lg border border-slate-200 dark:border-slate-800">
                                <img 
                                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80" 
                                    alt="Generative AI Video" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <PlayCircle className="w-16 h-16 text-white/90 group-hover:text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-all drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Open Elective Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                                Open Elective
                            </h3>
                            <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-4">
                                AI for Financial Modeling
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-[15px]">
                                AI for Financial Modeling is designed to equip you with a strong foundation in Financial Basics, Financial Modeling Techniques and Transformative AI Tools shaping the finance industry Today. Course is offered in 3rd Semester for 2 Credits
                            </p>
                            
                            <h5 className="text-slate-700 dark:text-slate-300 font-medium mb-3">Course Contents</h5>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-[15px] ml-4 list-disc marker:text-cyan-500">
                                <li>Financial Basics</li>
                                <li>Financial Modeling and Analysis</li>
                                <li>AI for Finance</li>
                                <li>AI enabled tools for Finance</li>
                            </ul>
                        </div>
                        <div className="lg:col-span-4 flex items-center justify-center">
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer shadow-lg border border-slate-200 dark:border-slate-800">
                                <img 
                                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80" 
                                    alt="Financial Modeling Video" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center">
                                    <PlayCircle className="w-16 h-16 text-white/90 group-hover:text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-all drop-shadow-lg mb-2" />
                                    <span className="text-white font-medium drop-shadow-md">Hello, everyone!</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeachingLearning;
