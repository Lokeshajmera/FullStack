import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, Target, Users } from 'lucide-react';

const SDWAccordion = ({ cell }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-slate-100/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 rounded-xl overflow-hidden mb-4 transition-all duration-300 hover:border-cyan-500/50">
            <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${isOpen ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'} transition-colors`}>
                        <BookOpen size={20} />
                    </div>
                    <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-800 dark:text-slate-200'}`}>
                        {cell.title}
                    </span>
                </div>
                <ChevronDown
                    className={`text-slate-600 dark:text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-600 dark:text-cyan-400' : ''}`}
                    size={20}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 space-y-6">

                            {/* Description */}
                            {cell.description && (
                                <div className="space-y-2">
                                    {cell.description.split('\n').map((para, i) => (
                                        <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed">{para}</p>
                                    ))}
                                </div>
                            )}

                            {/* Bullet Points */}
                            {cell.points && (
                                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                                    {cell.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}

                            {/* Focus Areas */}
                            {cell.focusAreas && (
                                <div className="space-y-3 pt-2">
                                    <h4 className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium">
                                        <Target size={16} /> Focus Areas
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        {cell.focusAreas.map((focus, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 mt-1.5 shrink-0" />
                                                {focus}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Functions / Objectives */}
                            {(cell.functions || cell.objectives) && (
                                <div className="space-y-3 pb-2">
                                    <h4 className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium">
                                        <Target size={16} /> {cell.functions ? 'Functions' : 'Objectives'}
                                    </h4>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-slate-950/50 p-4 rounded-lg border border-slate-200 dark:border-slate-800/50">
                                        {(cell.functions || cell.objectives).map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="text-cyan-500 font-bold mt-0.5">›</span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Coordinators Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/50">
                                {cell.facultyCoordinators && (
                                    <div className="bg-white/30 dark:bg-slate-800/30 p-4 rounded-lg">
                                        <h5 className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
                                            <Users size={14} className="text-cyan-600 dark:text-cyan-400" /> Faculty Coordinators
                                        </h5>
                                        <ul className="space-y-2">
                                            {cell.facultyCoordinators.map((coord, i) => (
                                                <li key={i} className="text-sm text-cyan-200/80">{coord}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {cell.studentCoordinators && (
                                    <div className="bg-white/30 dark:bg-slate-800/30 p-4 rounded-lg">
                                        <h5 className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
                                            <Users size={14} className="text-cyan-600 dark:text-cyan-400" /> Student Coordinators
                                        </h5>
                                        <ul className="space-y-2">
                                            {cell.studentCoordinators.map((coord, i) => (
                                                <li key={i} className="text-sm text-cyan-200/80">{coord}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SDWAccordion;
