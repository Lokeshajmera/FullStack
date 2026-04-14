import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, Trophy, Users, Zap, Download, Play } from 'lucide-react';
import { academicYearsData } from '../../data/studentActivitiesData';

const StatCard = ({ label, value }) => {
    let Icon = Trophy;
    if (label.includes("Registrations")) Icon = Users;
    if (label.includes("Rounds")) Icon = Zap;

    return (
        <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-4 border border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-center shadow-inner">
            <Icon size={24} className="text-cyan-600 dark:text-cyan-400 mb-2 opacity-80" />
            <p className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">{label}</p>
            <p className="text-slate-900 dark:text-white font-bold text-lg md:text-xl leading-tight">{value}</p>
        </div>
    );
};

const EventImages = ({ images }) => {
    if (!images || images.length === 0) return null;

    // Dynamically adjust grid to prevent orphaned items (like 3+1 grid)
    let gridClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    if (images.length === 1) {
        gridClass = "grid-cols-1 max-w-2xl mx-auto";
    } else if (images.length === 2 || images.length === 4) {
        // 2 or 4 images look best in a 2-column grid
        gridClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto";
    }

    return (
        <div className={`grid gap-4 mt-6 ${gridClass}`}>
            {images.map((img, idx) => {
                const isSingle = images.length === 1;
                return (
                    <div 
                        key={idx} 
                        className={`bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 relative group flex justify-center ${isSingle ? 'max-h-[600px]' : 'aspect-video'}`}
                    >
                        <img
                            src={img}
                            alt={`Event view ${idx + 1}`}
                            className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${isSingle ? 'object-contain' : 'object-cover'}`}
                        />
                    </div>
                );
            })}
        </div>
    );
};

const SubEventCard = ({ event }) => {
    return (
        <div className="bg-slate-100/50 dark:bg-slate-900/50 rounded-2xl border border-slate-300 dark:border-slate-800 p-6 md:p-8 mb-6 hover:border-cyan-500/30 transition-colors">
            <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-cyan-500 pl-4">{event.title}</h4>
            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line mb-6 font-medium leading-relaxed">
                {event.description}
            </p>

            {event.stats && (
                <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6">
                    {event.stats.map((stat, idx) => (
                        <StatCard key={idx} label={stat.label} value={stat.value} />
                    ))}
                </div>
            )}

            <EventImages images={event.images} />
        </div>
    );
};

const NestedEventAccordion = ({ event, isOpen, onToggle }) => {

    // If it's a grouped wrapper (e.g. ARTIMAS), it has artimasEvents
    const isGroup = event.isArtimasGroup && event.artimasEvents;

    return (
        <div className="border border-slate-300 dark:border-slate-800 rounded-xl mb-4 overflow-hidden bg-slate-100 dark:bg-slate-900 hover:border-slate-300 dark:border-slate-700 transition-colors shadow-sm">
            <button
                className={`w-full text-left px-6 py-4 flex items-center justify-between transition-colors ${isOpen ? 'bg-white/80 dark:bg-slate-800/80 border-b border-slate-300 dark:border-slate-800' : 'bg-transparent'}`}
                onClick={onToggle}
            >
                <div className="flex items-center text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200">
                    <span className="w-1.5 h-6 bg-cyan-500 rounded-full mr-4 inline-block"></span>
                    <span className={isOpen ? 'text-slate-900 dark:text-white font-semibold' : ''}>{event.title}</span>
                </div>
                <ChevronDown
                    size={20}
                    className={`text-slate-600 dark:text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-cyan-600 dark:text-cyan-400' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 md:p-8 border-t border-slate-200 dark:border-slate-800/50 bg-slate-100/30 dark:bg-slate-900/30">
                            {/* PDF Download Link */}
                            {event.pdfLink && (
                                <div className="mb-8">
                                    <a
                                        href={event.pdfLink}
                                        download
                                        className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 group"
                                    >
                                        <Download className="mr-2 group-hover:animate-bounce" size={20} />
                                        Download PDF Report
                                    </a>
                                </div>
                            )}

                            {/* Video Section */}
                            {(event.videoUrl !== undefined) && (
                                <div className="mb-8 aspect-video w-full max-w-2xl mx-auto bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center relative group">
                                    {event.videoUrl ? (
                                        <video
                                            controls
                                            className="w-full h-full object-cover"
                                            src={event.videoUrl}
                                        />
                                    ) : (
                                        <div className="text-center p-8">
                                            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                                                <Play className="text-cyan-600 dark:text-cyan-400" size={32} />
                                            </div>
                                            <p className="text-slate-500 dark:text-slate-400 font-medium">Video content coming soon...</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Standard Event Description */}
                            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line text-lg leading-relaxed mb-6 font-medium">
                                {event.description}
                            </p>

                            {/* Nested Group Objects (like Artimas Sub-events) */}
                            {isGroup && (
                                <div className="mt-8 space-y-6">
                                    {event.artimasEvents.map((subEvent, idx) => (
                                        <SubEventCard key={idx} event={subEvent} />
                                    ))}
                                </div>
                            )}

                            {/* Standard Event Images */}
                            {!isGroup && <EventImages images={event.images} />}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const AcademicYearSection = ({ data, yearIndex, openEventId, setOpenEventId }) => {
    // Academic Year headers themselves are also large block segments. 
    // In the screenshot, they look like major dividers holding events inside.
    return (
        <section className="mb-12">
            <div className="flex items-center mb-6 px-2">
                <Calendar size={28} className="text-cyan-600 dark:text-cyan-400 mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-wide">
                    {data.year}
                </h3>
            </div>
            <div className="space-y-4">
                {data.events.map((event, idx) => {
                    const eventId = `${yearIndex}-${idx}`;
                    return (
                        <NestedEventAccordion 
                            key={idx} 
                            event={event} 
                            isOpen={openEventId === eventId}
                            onToggle={() => setOpenEventId(openEventId === eventId ? null : eventId)}
                        />
                    );
                })}
            </div>
        </section>
    );
};

const ActivityAccordion = () => {
    const [openEventId, setOpenEventId] = useState(null);

    return (
        <div className="w-full">
            <div className="bg-cyan-500 py-3 px-6 rounded-t-2xl shadow-lg border-b border-cyan-400 font-bold text-xl tracking-wide text-slate-900 dark:text-white mb-6 w-full text-center md:text-left">
                Student Activities
            </div>

            <div className="bg-stone-50 dark:bg-slate-950 rounded-b-3xl p-2 md:p-6 relative">
                {academicYearsData.map((yearData, index) => (
                    <AcademicYearSection 
                        key={index} 
                        data={yearData} 
                        yearIndex={index}
                        openEventId={openEventId}
                        setOpenEventId={setOpenEventId}
                    />
                ))}
            </div>
        </div>
    );
};

export default ActivityAccordion;
