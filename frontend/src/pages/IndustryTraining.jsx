import React from 'react';
import { Calendar, User, CheckCircle2 } from 'lucide-react';
import { industryTrainingData } from '../data/industryVisitsData';

const IndustryTraining = () => {
    return (
        <div className="w-full min-h-[calc(100vh-80px)] bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans pt-16 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-6 uppercase tracking-tight">
                        Industry Training
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Specialized intensive training programs conducted by industry subject matter experts.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-8 rounded-full"></div>
                </div>

                <div className="space-y-16">
                    {industryTrainingData.map((training) => (
                        <div key={training.id} className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Course Header Bar */}
                            <div className="bg-white/50 dark:bg-slate-800/50 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center border-b border-slate-300 dark:border-slate-800 gap-6">
                                <div className="flex-1">
                                    {training.term && (
                                        <div className="text-orange-400 font-bold tracking-widest text-sm uppercase mb-2">
                                            {training.term}
                                        </div>
                                    )}
                                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
                                        {training.title}
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg">{training.subtitle}</p>
                                </div>
                                {(training.logo || training.headerImage) && (
                                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0 shadow-md w-40 h-40 bg-white">
                                    <img src={training.logo || training.headerImage} alt="Header Emblem" className="w-full h-full object-cover" />
                                </div>
                                )}
                            </div>

                            <div className="p-6 md:p-10 space-y-8">

                                {/* Info Section */}
                                <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
                                    <div className="flex items-center text-cyan-600 dark:text-cyan-400 bg-cyan-950/20 w-fit px-4 py-2 rounded-lg border border-cyan-800/30">
                                        <Calendar className="mr-2" size={20} />
                                        <span className="font-semibold">{training.duration}</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Highlights</h3>
                                    <ul className="space-y-3">
                                        {training.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle2 className="text-orange-500 mr-3 mt-1 shrink-0" size={20} />
                                                <span className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                        <User className="text-blue-400 mr-2" size={24} /> Subject Matter Experts
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {training.smes.map((sme, idx) => (
                                            <div key={idx} className="bg-white/50 dark:bg-slate-950/50 p-4 rounded-xl border border-slate-300 dark:border-slate-800 flex items-center gap-3">
                                                {sme.image && (
                                                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-300 dark:border-slate-600">
                                                        <img src={sme.image} alt={sme.name} className="w-full h-full object-cover object-top" />
                                                    </div>
                                                )}
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-cyan-700 dark:text-cyan-300">{sme.name}</span>
                                                    <span className="text-sm text-slate-500">{sme.role}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Images Section — below all info */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Training Glimpses</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {training.images.map((img, idx) => (
                                            <div key={idx} className="rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-md bg-white">
                                                <img src={img} alt={`Training ${idx + 1}`} className="w-full h-auto object-contain" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustryTraining;
