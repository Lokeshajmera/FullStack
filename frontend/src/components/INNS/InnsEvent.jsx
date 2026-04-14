import React from 'react';
import { Calendar, Clock, MapPin, UserCheck, Sparkles } from 'lucide-react';
import inns1 from '../../assets/INNS/inns-event-1.webp';
import inns2 from '../../assets/INNS/inns-event-2.webp';
import inns4 from '../../assets/INNS/inns-event-4.webp';

const eventImages = [inns1, inns2, inns4];

const InnsEvent = () => {
    return (
        <section className="py-16 bg-slate-100 dark:bg-slate-900 border-y border-slate-300 dark:border-slate-800 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center space-x-2 bg-cyan-950/50 border border-cyan-800/50 text-cyan-600 dark:text-cyan-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                        <Sparkles size={16} />
                        <span>Featured Event</span>
                        <Sparkles size={16} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Inauguration Event Details</h2>
                    <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
                        This event will mark the inauguration of INNS at PCCOE, offering an exceptional opportunity for students and faculty to connect with experts in neural networks and AI.
                    </p>
                </div>

                <div className="bg-stone-50 dark:bg-slate-950 rounded-3xl shadow-xl border border-slate-300 dark:border-slate-800 p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Event Details */}
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-300 dark:border-slate-800 mr-5 shrink-0">
                                    <Calendar className="text-cyan-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-600 dark:text-slate-400 font-medium mb-1 uppercase tracking-wider text-sm">Date</h4>
                                    <p className="text-slate-900 dark:text-white text-xl font-bold">24th October 2024</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-300 dark:border-slate-800 mr-5 shrink-0">
                                    <Clock className="text-cyan-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-600 dark:text-slate-400 font-medium mb-1 uppercase tracking-wider text-sm">Time</h4>
                                    <p className="text-slate-900 dark:text-white text-xl font-bold">09:00 AM to 11:00 AM</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-300 dark:border-slate-800 mr-5 shrink-0">
                                    <MapPin className="text-cyan-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-600 dark:text-slate-400 font-medium mb-1 uppercase tracking-wider text-sm">Venue</h4>
                                    <p className="text-slate-900 dark:text-white text-xl font-bold leading-tight">LRDC Hall, 4th Floor,<br />Mechanical Building, PCCOE</p>
                                </div>
                            </div>
                        </div>

                        {/* Chief Guest */}
                        <div className="md:border-l md:border-slate-300 dark:border-slate-800 md:pl-10 flex flex-col justify-center">
                            <div className="bg-gradient-to-br from-slate-100 dark:from-slate-900 to-slate-800/50 p-8 rounded-2xl border border-slate-300 dark:border-slate-700/50 hover:border-blue-500/50 transition-colors text-center relative overflow-hidden group">
                                {/* Subtle flare effect on hover */}
                                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <UserCheck className="mx-auto text-blue-400 mb-4" size={48} />
                                <h4 className="text-orange-400 font-black tracking-widest uppercase text-sm mb-3">Chief Guest</h4>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Mr. Jayesh Dave</h3>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Event Image Gallery */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pl-4 border-l-4 border-cyan-500">Event Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {eventImages.map((img, idx) => (
                            <div key={idx} className="aspect-video bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-lg group">
                                <img src={img} alt={`INNS Inauguration Event Highlight ${idx + 1}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InnsEvent;
