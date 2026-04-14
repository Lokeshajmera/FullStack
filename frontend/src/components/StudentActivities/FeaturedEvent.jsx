import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Play } from 'lucide-react';
import { featuredEvent } from '../../data/studentActivitiesData';

const FeaturedEvent = () => {
    return (
        <section className="mb-16">
            <div className="bg-cyan-500 py-3 px-6 rounded-t-2xl shadow-lg border-b border-cyan-400 font-bold text-xl tracking-wide text-slate-900 dark:text-white">
                EVENTS GALLERY
            </div>

            <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-b-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-900/20 blur-3xl rounded-full"></div>

                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-300 dark:border-slate-700 pb-4 inline-block">
                        {featuredEvent.title}
                    </h2>

                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-medium">
                        {featuredEvent.description}
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 mb-10">
                        {/* List Section */}
                        <div className="flex-1 bg-white/50 dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-300 dark:border-slate-700">
                            <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">{featuredEvent.listHeader}</h3>
                            <ul className="space-y-3">
                                {featuredEvent.eventsList.map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-700 dark:text-slate-300 font-medium text-lg">
                                        <span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Highlight Stat Section */}
                        <div className="md:w-1/3 flex items-center justify-center">
                            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-800/50 p-8 rounded-2xl text-center w-full shadow-lg">
                                <Users size={48} className="text-cyan-600 dark:text-cyan-400 mx-auto mb-4" />
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                                    {featuredEvent.highlightStat.split(' - ')[0]}
                                </h3>
                                <p className="text-3xl md:text-4xl font-black text-cyan-600 dark:text-cyan-400 mt-2">
                                    {featuredEvent.highlightStat.split(' - ')[1]}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image/Video Grid Section */}
                    <div className="space-y-6">
                        {/* Featured Video Placeholder */}
                        {featuredEvent.videoUrl !== undefined && (
                            <div className="w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-300 dark:border-slate-800 shadow-lg relative group flex flex-col items-center justify-center">
                                {featuredEvent.videoUrl ? (
                                    <video 
                                        src={featuredEvent.videoUrl} 
                                        controls 
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/40">
                                            <Play className="text-cyan-600 dark:text-cyan-400" size={40} />
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-lg font-semibold tracking-wide">Video Premiere Coming Soon</p>
                                        <p className="text-slate-600 dark:text-slate-500 text-sm mt-1 px-4">Relive the flagship moments of ARTIMAS 2024</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Image Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {featuredEvent.images.map((imgUrl, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="rounded-2xl overflow-hidden border-2 border-slate-300 dark:border-slate-800 shadow-md group relative"
                                >
                                    <div className="aspect-video w-full bg-white dark:bg-slate-800 relative z-0">
                                        <img
                                            src={imgUrl}
                                            alt={`ARTIMAS Snapshot ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Overlay Gradient on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 dark:from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <p className="text-slate-900 dark:text-white font-medium">Flagship Event Highlight</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedEvent;
