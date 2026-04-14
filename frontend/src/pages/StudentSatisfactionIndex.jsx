import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target } from 'lucide-react';
import { satisfactionData } from '../data/satisfactionIndexData';

const ProgressBar = ({ label, value, color, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [currentValue, setCurrentValue] = useState(0);

    const isOverall = label.toLowerCase().includes("overall students satisfaction");
    
    // Clean up label by removing 'Overall Percentage (' and ')'
    let displayLabel = label;
    if (label.includes('Overall Percentage (')) {
        displayLabel = label.replace('Overall Percentage (', '').replace(')', '');
    }

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseFloat(value);
            const duration = 1500;
            const incrementTime = duration / (end * 10); // Smoother decimal increment
            
            let timer = setInterval(() => {
                start += 0.5;
                if(start > end) start = end;
                setCurrentValue(start.toFixed(2));
                if (start >= end) clearInterval(timer);
            }, incrementTime);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <motion.div 
            ref={ref} 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`w-full group ${isOverall ? 'mb-2 mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-2 border-blue-500/30' : 'mb-6'}`}
        >
            <div className="flex justify-between items-end mb-3">
                <span className={`text-base tracking-wide ${isOverall ? 'font-black text-xl text-blue-600 dark:text-blue-400 uppercase' : 'font-bold text-slate-700 dark:text-slate-300 group-hover:text-cyan-500 transition-colors duration-300'}`}>
                    {displayLabel}
                </span>
                <span className={`text-lg font-black ${isOverall ? 'text-blue-600 dark:text-blue-400 text-2xl' : 'text-slate-600 dark:text-slate-400'}`}>
                    {currentValue}%
                </span>
            </div>
            
            <div className={`w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner ${isOverall ? 'h-6' : 'h-4'}`}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${value}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
                >
                    <div className="absolute inset-0 bg-white/20 h-1/2 rounded-full pointer-events-none"></div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const StudentSatisfactionIndex = () => {
    return (
        <div className="w-full min-h-[calc(100vh-80px)] bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans pt-16 pb-20 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                {/* Header Section */}
                <div className="text-center mb-20 relative">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
                    <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight relative z-10">
                            STUDENT S<span className="text-cyan-600 dark:text-cyan-400">A</span>TI<span className="text-blue-500">S</span>FACTION
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                            A comprehensive metric reflecting our commitment to academic excellence, 
                            infrastructural superiority, and holistic student development.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-16 relative z-10">
                    {satisfactionData.map((section, idx) => {
                        // "Students Satisfaction Index 2025-26 SEM - I"
                        const words = section.title.split(' ');
                        const mainTitle = words.slice(0, 3).join(' '); // "Students Satisfaction Index"
                        const termBadge = words.slice(3).join(' ');    // "2025-26 SEM - I"

                        return (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="bg-gradient-to-b from-slate-50 dark:from-slate-900 to-white dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-6 md:p-14 shadow-2xl hover:shadow-cyan-500/10 transition-shadow duration-500"
                            >
                                <div className="flex flex-col md:flex-row justify-between flex-wrap gap-4 items-center border-b border-slate-200 dark:border-slate-800 pb-8 mb-10">
                                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4 text-center md:text-left">
                                        <Target className="text-cyan-600 dark:text-cyan-400 hidden md:block shrink-0" size={32} />
                                        {mainTitle}
                                    </h2>
                                    <div className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 px-6 py-2 rounded-full font-bold tracking-widest text-sm border border-cyan-500/20 shadow-inner">
                                        {termBadge}
                                    </div>
                                </div>

                                <div className="flex flex-col relative">
                                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 dark:from-slate-800 to-transparent hidden md:block"></div>
                                    <div className="md:pl-10">
                                        {section.data.map((item, itemIdx) => (
                                            <ProgressBar 
                                                key={itemIdx} 
                                                label={item.label} 
                                                value={item.value} 
                                                color={item.color} 
                                                index={itemIdx}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StudentSatisfactionIndex;
