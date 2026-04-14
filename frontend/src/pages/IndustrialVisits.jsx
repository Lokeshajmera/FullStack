import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import { industrialVisitsData } from '../data/industryVisitsData';

const IndustrialVisits = () => {
    return (
        <div className="w-full min-h-[calc(100vh-80px)] bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans pt-16 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 uppercase tracking-tight">
                        Industrial Visits
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Bridging the gap between theory and practical industry applications through extensive on-site learning experiences.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-8 rounded-full"></div>
                </div>

                {/* List of Visits */}
                <div className="space-y-24">
                    {industrialVisitsData.map((visit, index) => (
                        <div key={visit.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Text Content */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                                    {visit.title}
                                </h2>

                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                                    <div className="flex items-center text-cyan-600 dark:text-cyan-400 bg-cyan-950/30 px-3 py-1.5 rounded-full border border-cyan-800/30">
                                        <Calendar size={16} className="mr-2" /> {visit.date}
                                    </div>
                                    <div className="flex items-center text-orange-400 bg-orange-950/30 px-3 py-1.5 rounded-full border border-orange-800/30">
                                        <Users size={16} className="mr-2" /> {visit.participants}
                                    </div>
                                    <div className="flex items-center text-blue-400 bg-blue-950/30 px-3 py-1.5 rounded-full border border-blue-800/30">
                                        <MapPin size={16} className="mr-2" /> {visit.cohort}
                                    </div>
                                </div>

                                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-6 rounded-2xl shadow-lg whitespace-pre-wrap">
                                    {visit.description}
                                </p>
                            </div>

                            {/* Images Grid */}
                            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                                {visit.images.map((img, i) => {
                                    const isBig = i === 0 || (i === visit.images.length - 1 && visit.images.length % 2 === 0);
                                    return (
                                        <div key={i} className={`${isBig ? 'col-span-2' : 'col-span-1'} aspect-video rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-lg relative group`}>
                                            {i === 0 && <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors z-10"></div>}
                                            <img src={img} alt={`Visit Gallery ${i + 1}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustrialVisits;
