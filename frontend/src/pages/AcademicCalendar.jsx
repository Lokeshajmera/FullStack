import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { Calendar, Download } from 'lucide-react';

import cal2025 from '../assets/documents/Academic_Calendar_2025-26.pdf';
import cal2024 from '../assets/documents/Academic Calendar for SY,TY,Final Year B.tech,and SY,TY,B.Voc Programs (Academic Year 2024-25) Semester -I.pdf';

const AcademicCalendar = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const calendars = [
        { id: 1, year: "2025-26", title: "Academic Calendar 2025-26", fileUrl: cal2025 },
        { id: 2, year: "2024-25", title: "Academic Calendar 2024-25", fileUrl: cal2024 }
    ];

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    title="Academic Calendar"
                    subtitle="Schedule of academic events, holidays, and important dates for the academic year."
                />

                <div className="mt-12 space-y-6">
                    {calendars.map((cal, index) => (
                        <motion.div
                            key={cal.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between hover:border-cyan-500/50 transition-colors group"
                        >
                            <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                                <div className="p-4 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                                    <Calendar className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{cal.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Download the official academic calendar for {cal.year}.</p>
                                </div>
                            </div>

                            <a
                                href={cal.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="px-6 py-3 bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 border border-cyan-800/50 rounded-xl hover:bg-cyan-900/60 transition-colors flex items-center font-medium w-full sm:w-auto justify-center"
                            >
                                <Download size={18} className="mr-2" /> Download
                            </a>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AcademicCalendar;
