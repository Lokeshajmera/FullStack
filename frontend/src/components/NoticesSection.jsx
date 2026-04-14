import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

const NoticesSection = () => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const recentNotices = [
        {
            _id: '1',
            title: "Sem End Exam Schedule",
            date: "2026-05-04",
            content: "The Semester End Examinations are scheduled to commence from 4th May to 13th May 2026. Students are advised to check the official ERP portal and department notice board for the detailed subject-wise timetable."
        },
        {
            _id: '2',
            title: "Highest Internship Stipend",
            date: "2026-04-05",
            content: "Proud to announce that our final year student secured a 6-month internship at Microsoft with a record stipend of ₹1.25 Lakhs/month."
        },
        {
            _id: '3',
            title: "Muks Robotics Summer Internship",
            date: "2026-01-20",
            content: "Six students from our department successfully completed their summer internship with stipend at Muks Robotics, gaining hands-on experience in real-time robotics projects."
        }
    ];

    useEffect(() => {
        setNotices(recentNotices);
        setLoading(false);
    }, []);

    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950 relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Latest <span className="text-cyan-600 dark:text-cyan-400">Notices</span></h2>
                        <p className="text-slate-600 dark:text-slate-400">Stay updated with department activities and announcements.</p>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center text-slate-600 dark:text-slate-400">Loading notices...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notices.map((notice, index) => (
                            <motion.div
                                key={notice._id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-300 dark:border-slate-800 hover:border-cyan-500/30 transition-all hover:bg-slate-200 dark:hover:bg-slate-800 group"
                            >
                                <div className="flex items-center text-cyan-500 mb-4 bg-cyan-500/10 inline-block px-3 py-1 rounded-full w-fit">
                                    <Calendar size={14} className="mr-2" />
                                    <span className="text-xs font-semibold">{notice.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">{notice.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                                    {notice.content || "Click to view more details about this notice."}
                                </p>
                                <div className="flex items-center justify-end mt-auto pt-2 border-t border-slate-200 dark:border-slate-800/50">
                                    <button 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedEvent(notice);
                                        }}
                                        className="text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:text-cyan-300 flex items-center focus:outline-none"
                                    >
                                        Read More <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Event Registration Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm aiml-modal"
                        onClick={() => setSelectedEvent(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl"
                        >
                            <div className="flex justify-between items-center p-6 border-b border-slate-300 dark:border-slate-800">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white pr-4">{selectedEvent.title}</h3>
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors focus:outline-none"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="p-6 text-slate-700 dark:text-slate-300">
                                <div className="flex items-center text-cyan-600 dark:text-cyan-400 mb-4 bg-cyan-500/10 px-3 py-1.5 rounded-full w-fit">
                                    <Calendar size={16} className="mr-2" />
                                    <span className="text-sm font-medium">{selectedEvent.date}</span>
                                </div>
                                <p className="mb-6 leading-relaxed">
                                    {selectedEvent.content || "More details will be shared soon."}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default NoticesSection;
