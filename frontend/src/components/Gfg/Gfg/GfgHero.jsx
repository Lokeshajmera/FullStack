import React from 'react';
import { motion } from 'framer-motion';

const GfgHero = () => {
    return (
        <header className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-slate-300 dark:border-slate-800">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-slate-900/50 z-0"></div>
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] z-0"></div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-lg">
                        GeeksforGeeks <span className="text-cyan-600 dark:text-cyan-400">Student Chapter</span>
                    </h1>
                    <p className="text-lg md:text-xl text-cyan-200 font-medium tracking-wide">
                        Official GeeksforGeeks Campus Chapter – PCCOE
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-10"
                >
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                </motion.div>
            </div>
        </header>
    );
};

export default GfgHero;
