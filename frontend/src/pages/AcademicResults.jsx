import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import academicResultsImg from '../assets/images/academic-results-last-4-years.png';

const AcademicResults = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <SectionHeader
                    title="Academic Results"
                    subtitle="Consistent excellence in academics over the continuous years."
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full flex justify-center items-center rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-amber-50/60 dark:bg-slate-900 p-4 md:p-8"
                >
                    <img 
                        src={academicResultsImg} 
                        alt="Academic Results for the last 4 years" 
                        className="w-full max-w-5xl h-auto object-contain rounded-xl shadow-sm border border-slate-100 dark:border-slate-800"
                    />
                </motion.div>

            </div>
        </div>
    );
};

export default AcademicResults;
