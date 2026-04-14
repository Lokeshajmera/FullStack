import React from 'react';

const SummitHero = () => {
    return (
        <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center pt-16">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://via.placeholder.com/1920x1080/0f172a/0f172a?text=College+Campus+Background')",
                }}
            >
                <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm"></div>
            </div>

            {/* Content Container spanning most of the width, similar to the screenshot */}
            <div className="relative z-10 w-11/12 max-w-5xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-300 dark:border-slate-700/50 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                    AI ML Pioneers Summit
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    for SY Students CSE (AIML) 2024
                </h2>

                <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-8"></div>

                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
                    Share your ideas, review articles, and discuss future research directions
                    in Artificial Intelligence & Machine Learning.
                </p>
            </div>
        </section>
    );
};

export default SummitHero;
