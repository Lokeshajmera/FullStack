import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Rocket, Target, Lightbulb, BookOpen, Users, Megaphone, Target as NetworkIcon, IndianRupee, TrendingUp } from 'lucide-react';

const chapters = [
    {
        id: 1,
        title: "Chapter 1: Changing Perspectives",
        icon: Rocket,
        description: "Gain a new perspective on life and business as entrepreneurship challenges you to see opportunities where others see obstacles, fostering a mindset of growth and innovation.",
        color: "from-blue-500 to-indigo-600"
    },
    {
        id: 2,
        title: "Chapter 2: Confidence: You Can Achieve Anything",
        icon: Target,
        description: "Unleash your potential and boost your confidence as you realize that with entrepreneurship, you have the power to achieve anything you set your mind to.",
        color: "from-cyan-500 to-blue-600"
    },
    {
        id: 3,
        title: "Chapter 3: From average Mindset to Visionary Thinking",
        icon: Lightbulb,
        description: "Shift your mindset from average to extraordinary as entrepreneurship empowers you to dream big, think innovatively, and pursue ambitious goals.",
        color: "from-amber-400 to-orange-500"
    },
    {
        id: 4,
        title: "Chapter 4: The Power of Knowledge",
        icon: BookOpen,
        description: "Dive deep into the wealth of knowledge and experiences gained through entrepreneurship, shaping you into a lifelong learner and innovator.",
        color: "from-emerald-400 to-teal-500"
    },
    {
        id: 5,
        title: "Chapter 5: Transitioning from Introvert to Extrovert",
        icon: Users,
        description: "Master the art of communication and interpersonal skills as entrepreneurship transforms you from an introvert to an extrovert, ready to seize every opportunity.",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 6,
        title: "Chapter 6: The Art of Sales and Persuasion",
        icon: Megaphone,
        description: "Learn the essential skills of sales and persuasion as you navigate the entrepreneurial landscape, convincing customers, investors, and stakeholders of your vision.",
        color: "from-rose-400 to-red-600"
    },
    {
        id: 7,
        title: "Chapter 7: Building Networks for Success",
        icon: NetworkIcon,
        description: "Unlock the power of networking and discover how cultivating meaningful connections can open doors to opportunities and support your entrepreneurial journey.",
        color: "from-indigo-400 to-blue-600"
    },
    {
        id: 8,
        title: "Chapter 8: Developing a Passive Source of Income",
        icon: IndianRupee,
        description: "Discover how starting a startup can provide you with an additional stream of revenue, offering financial stability and flexibility.",
        color: "from-green-400 to-emerald-600"
    },
    {
        id: 9,
        title: "Chapter 9: Embracing the Roller Coaster Journey",
        icon: TrendingUp,
        description: "Prepare yourself for the highs and lows of entrepreneurship as you navigate through challenges and setbacks, emerging stronger and more resilient than ever.",
        color: "from-orange-400 to-red-500"
    }
];

const JourneyCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === chapters.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? chapters.length - 1 : prev - 1));
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section className="py-12 w-full max-w-4xl mx-auto px-4">
            <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">

                {/* Header block reminiscent of the screenshot */}
                <div className="bg-cyan-500 py-3 px-6 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-8 w-[calc(100%+3rem)] md:w-[calc(100%+4rem)]">
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-wide">Begin Your Journey</h2>
                </div>

                {/* Carousel Container */}
                <div className="relative h-[400px] md:h-[260px] w-full flex items-center justify-center overflow-hidden">

                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-16"
                        >
                            <div className="mb-2">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-1 leading-tight font-serif tracking-wide border-b border-slate-300 dark:border-slate-700 pb-2 inline-block">
                                    {chapters[currentIndex].title}
                                </h3>
                            </div>

                            <div className="my-4 relative">
                                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-gradient-to-br ${chapters[currentIndex].color} shadow-lg mx-auto relative z-10`}>
                                    <div className="bg-slate-100 dark:bg-slate-900 w-[95%] h-[95%] rounded-full flex items-center justify-center">
                                        {React.createElement(chapters[currentIndex].icon, { size: 36, className: "text-slate-900 dark:text-white" })}
                                    </div>
                                </div>
                                {/* Decorative blur behind icon */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br ${chapters[currentIndex].color} blur-xl opacity-40 -z-10 rounded-full`}></div>
                            </div>

                            <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto px-2">
                                {chapters[currentIndex].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 dark:bg-slate-800/80 hover:bg-cyan-500 text-slate-900 dark:text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-slate-300 dark:border-slate-700 hover:border-cyan-400 z-20"
                        onClick={prevSlide}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 dark:bg-slate-800/80 hover:bg-cyan-500 text-slate-900 dark:text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-slate-300 dark:border-slate-700 hover:border-cyan-400 z-20"
                        onClick={nextSlide}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center space-x-2 mt-8 z-20 relative">
                    {chapters.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-cyan-500" : "w-2 bg-slate-600 hover:bg-slate-400"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default JourneyCarousel;
