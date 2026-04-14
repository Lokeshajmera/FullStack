import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BarChart2, Loader2, TrendingUp, Search } from 'lucide-react';

const PYQAnalyzerModal = ({ isOpen, onClose, subjectId, subjectName }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [analysisData, setAnalysisData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen && subjectId) {
            setIsLoading(true);
            setError(null);

            fetch(`http://localhost:5000/api/ai/pyq-analysis/${subjectId}`)
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setAnalysisData(data.statistics);
                    } else {
                        setError("Failed to fetch analysis.");
                    }
                })
                .catch(err => {
                    console.error(err);
                    setError("Failed to fetch analysis. Please try again.");
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [isOpen, subjectId]);

    if (!isOpen) return null;

    // Calculate max count for determining progress bar widths
    const maxCount = analysisData.length > 0 ? Math.max(...analysisData.map(d => d.count)) : 0;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-amber-50/60 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-slate-200 dark:border-neutral-800 flex items-center justify-between bg-amber-50/60 dark:bg-neutral-900/80 sticky top-0 z-10 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                                <BarChart2 className="w-5 h-5 text-amber-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Smart PYQ Analyzer</h2>
                                <p className="text-xs text-slate-600 dark:text-neutral-400">Exam Pattern Analysis: {subjectName}</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-stone-100 dark:bg-neutral-800 rounded-full transition-colors text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 overflow-y-auto flex-1 custom-scrollbar">
                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-20">
                                <Loader2 className="w-12 h-12 text-amber-500 animate-spin mb-4" />
                                <p className="text-lg text-slate-700 dark:text-neutral-300 font-medium">Scanning Previous Year Question Papers...</p>
                                <p className="text-sm text-neutral-500 mt-2">Extracting topic frequencies using AI</p>
                            </div>
                        ) : error ? (
                            <div className="text-center py-10">
                                <p className="text-red-400">{error}</p>
                            </div>
                        ) : analysisData.length > 0 ? (
                            <div className="space-y-8">
                                <div className="flex items-center gap-2 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm">
                                    <TrendingUp className="w-5 h-5 text-amber-400" />
                                    <p>Based on our AI analysis of the last 5 years' exams, here are the most frequently asked topics. Focusing on these will yield the highest ROI for your study time.</p>
                                </div>

                                <div className="space-y-6">
                                    {analysisData.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="space-y-2"
                                        >
                                            <div className="flex justify-between items-end">
                                                <span className="text-sm font-medium text-slate-800 dark:text-neutral-200">{item.topic}</span>
                                                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded">
                                                    Asked {item.count} times
                                                </span>
                                            </div>
                                            <div className="h-3 w-full bg-stone-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${(item.count / maxCount) * 100}%` }}
                                                    transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                                                    className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full relative"
                                                >
                                                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] opacity-50"></div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-10">
                                <Search className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                                <p className="text-slate-600 dark:text-neutral-400">No PYQ data available for this subject to analyze.</p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="p-5 border-t border-slate-200 dark:border-neutral-800 bg-amber-50/60 dark:bg-neutral-900/80 flex justify-end sticky bottom-0 z-10">
                        <button
                            onClick={onClose}
                            className="px-5 py-2.5 rounded-xl text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:text-white hover:bg-stone-100 dark:bg-neutral-800 transition-colors text-sm font-medium"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PYQAnalyzerModal;
