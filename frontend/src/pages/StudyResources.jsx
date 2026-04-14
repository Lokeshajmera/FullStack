import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, MonitorPlay, Link as LinkIcon, ChevronRight, Download, ArrowLeft, FolderOpen, Video, Award, Sparkles } from 'lucide-react';
import { studyResourcesData } from '../data/studyResourcesData';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import SmartSummaryModal from '../components/SmartSummaryModal';

const StudyResources = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedSemester, setSelectedSemester] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);

    // AI Feature States
    const [summaryModalOpen, setSummaryModalOpen] = useState(false);
    const [activeDocumentId, setActiveDocumentId] = useState(null);
    const [activeDocumentTitle, setActiveDocumentTitle] = useState('');

    // Dynamic Faculty Uploads
    const [facultyDocs, setFacultyDocs] = useState([]);

    // Fetch live documents from Supabase on component mount
    React.useEffect(() => {
        const fetchFacultyDocs = async () => {
            const { data, error } = await supabase
                .from('study_resources')
                .select('*')
                .order('created_at', { ascending: false });
            if (!error && data) {
                setFacultyDocs(data);
            }
        };
        fetchFacultyDocs();
    }, []);

    // Helper to format bytes
    const formatBytes = (bytes, decimals = 2) => {
        if (!+bytes) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    };

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setSelectedSemester(null);
        setSelectedSubject(null);
    };

    const handleSemesterSelect = (sem) => {
        setSelectedSemester(sem);
        setSelectedSubject(null);
    };

    const currentYearData = selectedYear ? studyResourcesData[selectedYear] : null;
    const currentSemesterData = (currentYearData && selectedSemester) ? currentYearData.semesters[selectedSemester] : null;

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-neutral-950 text-slate-900 dark:text-white font-sans py-24">
            {/* Decorative Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-6 ring-1 ring-blue-500/20">
                        <BookOpen className="w-8 h-8 text-blue-400" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 text-transparent bg-clip-text">
                        Centralized Study Resources
                    </h1>
                    <p className="text-slate-600 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Your one-stop destination for notes, previous year papers, lab manuals, and assignments.
                    </p>
                </motion.div>

                {/* Breadcrumbs Navigation */}
                <div className="mb-10 flex items-center gap-2 text-sm text-slate-600 dark:text-neutral-400">
                    <button
                        onClick={() => handleYearSelect(null)}
                        className={`hover:text-slate-900 dark:text-white transition-colors ${!selectedYear ? 'text-blue-400 font-medium' : ''}`}
                    >
                        All Years
                    </button>

                    {selectedYear && (
                        <>
                            <ChevronRight className="w-4 h-4" />
                            <button
                                onClick={() => handleSemesterSelect(null)}
                                className={`hover:text-slate-900 dark:text-white transition-colors ${selectedYear && !selectedSemester ? 'text-blue-400 font-medium' : ''}`}
                            >
                                {currentYearData.name}
                            </button>
                        </>
                    )}

                    {selectedSemester && (
                        <>
                            <ChevronRight className="w-4 h-4" />
                            <button
                                onClick={() => setSelectedSubject(null)}
                                className={`hover:text-slate-900 dark:text-white transition-colors ${selectedSemester && !selectedSubject ? 'text-blue-400 font-medium' : ''}`}
                            >
                                {currentSemesterData.name}
                            </button>
                        </>
                    )}

                    {selectedSubject && (
                        <>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-blue-400 font-medium truncate max-w-[200px] md:max-w-none">
                                {selectedSubject.name}
                            </span>
                        </>
                    )}
                </div>

                {/* Main Content Area */}
                <div className="relative">
                    <AnimatePresence mode="wait">

                        {/* View 1: Year Selection */}
                        {!selectedYear && (
                            <motion.div
                                key="years"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                                {Object.entries(studyResourcesData).map(([yearNum, data], index) => (
                                    <motion.button
                                        key={yearNum}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleYearSelect(yearNum)}
                                        className="p-8 rounded-3xl bg-amber-50/60 dark:bg-neutral-900/50 border border-slate-200 dark:border-neutral-800 hover:border-blue-500/50 relative overflow-hidden group text-left transition-all"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 rounded-xl bg-stone-100 dark:bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                                <Award className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">{data.name}</h3>
                                            <p className="text-slate-600 dark:text-neutral-400 text-sm">Select to view semesters</p>
                                        </div>
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}

                        {/* View 2: Semester Selection */}
                        {selectedYear && !selectedSemester && (
                            <motion.div
                                key="semesters"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="max-w-4xl mx-auto"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {Object.entries(currentYearData.semesters).map(([semNum, data]) => (
                                        <motion.button
                                            key={semNum}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleSemesterSelect(semNum)}
                                            className="p-8 rounded-3xl bg-amber-50/60 dark:bg-neutral-900/50 border border-slate-200 dark:border-neutral-800 hover:border-indigo-500/50 flex flex-col items-center justify-center text-center group transition-all"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-stone-100 dark:bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                                                <span className="text-2xl font-bold">{semNum}</span>
                                            </div>
                                            <h3 className="text-xl font-bold">{data.name}</h3>
                                            <p className="text-slate-600 dark:text-neutral-400 mt-2">{data.subjects.length} Subjects Available</p>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* View 3: Subject Selection */}
                        {selectedYear && selectedSemester && !selectedSubject && (
                            <motion.div
                                key="subjects"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                {currentSemesterData.subjects.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {currentSemesterData.subjects.map((subject) => (
                                            <motion.button
                                                key={subject.id}
                                                whileHover={{ scale: 1.02, y: -4 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => setSelectedSubject(subject)}
                                                className="p-6 rounded-2xl bg-amber-50/60 dark:bg-neutral-900/50 border border-slate-200 dark:border-neutral-800 hover:border-emerald-500/50 text-left group transition-all"
                                            >
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                                                        <BookOpen className="w-5 h-5" />
                                                    </div>
                                                    <span className="text-xs font-mono text-neutral-500 bg-stone-100 dark:bg-neutral-800 px-2 py-1 rounded">
                                                        {subject.code || subject.id.toUpperCase()}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                                                    {subject.name}
                                                </h3>

                                                {/* Quick Stats */}
                                                <div className="mt-6 flex items-center gap-3 text-sm text-slate-600 dark:text-neutral-400">
                                                    {subject.materials?.notes && <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {subject.materials.notes.length} Note(s)</span>}
                                                    {subject.materials?.youtube && <span className="flex items-center gap-1"><MonitorPlay className="w-3 h-3" /> {subject.materials.youtube.length} Video(s)</span>}
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-20 bg-amber-50/60 dark:bg-neutral-900/30 rounded-3xl border border-slate-200 dark:border-neutral-800 border-dashed">
                                        <FolderOpen className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-slate-700 dark:text-neutral-300">No Subjects Found</h3>
                                        <p className="text-neutral-500 mt-2">Materials for this semester are currently being updated.</p>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {/* View 4: Subject Resources Detailed View */}
                        {selectedSubject && (
                            <motion.div
                                key="resources"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center justify-between bg-amber-50/60 dark:bg-neutral-900/80 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-neutral-800 backdrop-blur-sm">
                                    <div>
                                        <span className="text-emerald-400 font-mono text-sm mb-2 block">{selectedSubject.code}</span>
                                        <h2 className="text-2xl sm:text-3xl font-bold">{selectedSubject.name}</h2>
                                    </div>
                                    <button
                                        onClick={() => setSelectedSubject(null)}
                                        className="p-3 bg-stone-100 dark:bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors flex-shrink-0"
                                    >
                                        <ArrowLeft className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                                    {/* Left Column: PDFs & Docs */}
                                    <div className="lg:col-span-2 space-y-6">

                                        {/* Dynamic Faculty Uploads Section */}
                                        {(() => {
                                            const matchingDocs = facultyDocs.filter(doc =>
                                                doc.subject.toLowerCase() === selectedSubject.name.toLowerCase() ||
                                                doc.subject.toLowerCase().includes(selectedSubject.name.toLowerCase()) ||
                                                selectedSubject.name.toLowerCase().includes(doc.subject.toLowerCase())
                                            ).map(doc => ({
                                                id: doc.id,
                                                title: `${doc.unit ? doc.unit + ': ' : ''}${doc.title}`,
                                                link: doc.file_url,
                                                type: "pdf",
                                                size: "Live",
                                                uploader: doc.teacher_email
                                            }));

                                            if (matchingDocs.length > 0) {
                                                return (
                                                    <ResourceSection
                                                        title="Live Faculty Uploads"
                                                        icon={<Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />}
                                                        items={matchingDocs}
                                                        onSummarize={(item) => {
                                                            setActiveDocumentId(item.link || '#');
                                                            setActiveDocumentTitle(item.title);
                                                            setSummaryModalOpen(true);
                                                        }}
                                                    />
                                                );
                                            }
                                            return null;
                                        })()}

                                        {/* Notes Section */}
                                        {selectedSubject.materials?.notes && selectedSubject.materials.notes.length > 0 && (
                                            <ResourceSection
                                                title="Lecture Notes"
                                                icon={<FileText className="w-5 h-5 text-blue-400" />}
                                                items={selectedSubject.materials.notes}
                                                onSummarize={(item) => {
                                                    setActiveDocumentId(item.link || '#');
                                                    setActiveDocumentTitle(item.title);
                                                    setSummaryModalOpen(true);
                                                }}
                                            />
                                        )}

                                        {/* PYQs Section */}
                                        {selectedSubject.materials?.pyqs && selectedSubject.materials.pyqs.length > 0 && (
                                            <ResourceSection
                                                title="Previous Year Papers (PYQs)"
                                                icon={<FolderOpen className="w-5 h-5 text-amber-400" />}
                                                items={selectedSubject.materials.pyqs}
                                            />
                                        )}

                                        {/* Lab Manuals Section */}
                                        {selectedSubject.materials?.labFiles && selectedSubject.materials.labFiles.length > 0 && (
                                            <ResourceSection
                                                title="Lab Manuals & Assignments"
                                                icon={<BookOpen className="w-5 h-5 text-emerald-400" />}
                                                items={selectedSubject.materials.labFiles}
                                            />
                                        )}

                                        {/* PPTs Section */}
                                        {selectedSubject.materials?.ppts && selectedSubject.materials.ppts.length > 0 && (
                                            <ResourceSection
                                                title="Presentations (PPTs)"
                                                icon={<MonitorPlay className="w-5 h-5 text-purple-400" />}
                                                items={selectedSubject.materials.ppts}
                                            />
                                        )}
                                    </div>

                                    {/* Right Column: Media & Links */}
                                    <div className="space-y-6">

                                        {/* YouTube Links */}
                                        {selectedSubject.materials?.youtube && selectedSubject.materials.youtube.length > 0 && (
                                            <div className="bg-amber-50/60 dark:bg-neutral-900/50 rounded-2xl border border-slate-200 dark:border-neutral-800 overflow-hidden">
                                                <div className="p-5 border-b border-slate-200 dark:border-neutral-800 flex items-center gap-3 bg-amber-50/60 dark:bg-neutral-900/80">
                                                    <Video className="w-5 h-5 text-red-500" />
                                                    <h3 className="font-bold text-lg">Recommended Videos</h3>
                                                </div>
                                                <div className="p-3">
                                                    {selectedSubject.materials.youtube.map((video, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={video.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-3 p-3 hover:bg-stone-100 dark:bg-neutral-800 rounded-xl transition-colors group"
                                                        >
                                                            <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                                                                <MonitorPlay className="w-5 h-5" />
                                                            </div>
                                                            <div className="overflow-hidden">
                                                                <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-red-400 transition-colors truncate">{video.title}</p>
                                                                <p className="text-xs text-neutral-500">YouTube</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Important Links */}
                                        {selectedSubject.materials?.importantLinks && selectedSubject.materials.importantLinks.length > 0 && (
                                            <div className="bg-amber-50/60 dark:bg-neutral-900/50 rounded-2xl border border-slate-200 dark:border-neutral-800 overflow-hidden">
                                                <div className="p-5 border-b border-slate-200 dark:border-neutral-800 flex items-center gap-3 bg-amber-50/60 dark:bg-neutral-900/80">
                                                    <LinkIcon className="w-5 h-5 text-blue-500" />
                                                    <h3 className="font-bold text-lg">Important Links</h3>
                                                </div>
                                                <div className="p-3">
                                                    {selectedSubject.materials.importantLinks.map((link, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={link.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="block p-3 hover:bg-stone-100 dark:bg-neutral-800 rounded-xl transition-colors text-sm text-blue-400 hover:text-blue-300 hover:underline"
                                                        >
                                                            {link.title}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </div>

            {/* AI Modals */}
            <SmartSummaryModal
                isOpen={summaryModalOpen}
                onClose={() => setSummaryModalOpen(false)}
                documentLink={activeDocumentId} // Active doc id stores the link here
                documentTitle={activeDocumentTitle}
            />
        </div>
    );
};

// Helper Component for rendering sections (Notes, PYQs, etc.)
const ResourceSection = ({ title, icon, items, onSummarize }) => {
    return (
        <div className="bg-stone-100/40 dark:bg-neutral-900/50 rounded-2xl border border-slate-200 dark:border-neutral-800 overflow-hidden">
            <div className="p-5 border-b border-slate-200 dark:border-neutral-800 flex items-center justify-between bg-white/40 dark:bg-neutral-900/80">
                <div className="flex items-center gap-3">
                    {icon}
                    <h3 className="font-bold text-lg">{title}</h3>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold bg-stone-100 dark:bg-neutral-800 text-slate-600 dark:text-neutral-400 px-3 py-1 rounded-full hidden sm:inline-block">
                        {items.length} file{items.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </div>

            <div className="divide-y divide-slate-200 dark:divide-neutral-800/50">
                {items.map((item, index) => (
                    <div key={index} className="group flex items-center justify-between p-4 bg-white/20 dark:bg-transparent hover:bg-blue-500/5 dark:hover:bg-blue-500/10 transition-all duration-300 relative">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                                <FileText className="w-5 h-5 text-slate-600 dark:text-neutral-400" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-slate-900 dark:text-white transition-colors line-clamp-1 pr-20">
                                    {item.title}
                                </p>
                                <div className="flex items-center gap-3 mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    <span className="uppercase text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                                        {item.type || 'Doc'}
                                    </span>
                                    {item.size && <span>{item.size}</span>}
                                    {item.uploader && (
                                        <span className="text-cyan-600 dark:text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded flex items-center border border-cyan-500/20">
                                            By: {item.uploader}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 relative z-10 shrink-0">
                            {onSummarize && (
                                <button
                                    onClick={() => onSummarize(item)}
                                    className="p-2 sm:px-3 sm:py-2 text-blue-400 hover:text-slate-900 dark:text-white bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-lg transition-all flex items-center gap-2 text-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 shadow-[0_0_10px_rgba(59,130,246,0.1)]"
                                    title="Smart Summary"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    <span className="hidden sm:inline font-medium">Summarize</span>
                                </button>
                            )}
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 sm:px-3 sm:py-2 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:text-white bg-stone-100 dark:bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-all flex items-center gap-2 text-sm"
                                title="Download"
                            >
                                <Download className="w-4 h-4" />
                                <span className="hidden sm:inline font-medium">PDF</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudyResources;
