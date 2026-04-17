import React from 'react';

const InnsHero = () => {
    return (
        <section className="relative w-full h-[60vh] min-h-[400px] flex flex-col items-center justify-center">
            {/* Dark Neural Network Themed Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-slate-100 dark:bg-slate-900"
                style={{
                    backgroundImage: "url('https://via.placeholder.com/1920x1080/0f172a/06b6d4?text=Neural+Network+Background')",
                }}
            >
                {/* Heavy overlay to ensure text readability */}
                <div className="absolute inset-0 bg-white/85 dark:bg-slate-950/85 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div className="inline-block mb-6 p-4 rounded-full bg-cyan-900/30 border border-cyan-500/30">
                    {/* Placeholder for an INNS Logo if they have one */}
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border-2 border-cyan-400 font-bold text-cyan-600 dark:text-cyan-400 text-2xl">
                        INNS
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 mb-6 drop-shadow-lg leading-tight">
                    International Neural Network Society
                </h1>

                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium tracking-wide">
                    PCCOE Student Chapter
                </p>

                <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-8 rounded-full"></div>
            </div>
        </section>
    );
};

export default InnsHero;
