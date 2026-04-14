import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Download, FileText, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { API_BASE_URL } from "../config/api";

const SmartSummaryModal = ({ isOpen, onClose, documentLink, documentTitle }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [summaryData, setSummaryData] = useState(null);
    const [error, setError] = useState(null);
    const summaryRef = useRef(null);

    useEffect(() => {
        if (isOpen && documentLink) {
            setIsLoading(true);
            setError(null);

            // Fetch the actual PDF file from the public folder
            fetch(documentLink)
                .then(res => res.blob())
                .then(blob => {
                    const formData = new FormData();
                    formData.append('file', blob, 'document.pdf');

                    // Send to our backend parser & summarizer
                    return fetch(`${API_BASE_URL}/api/ai/summarize`, {
                        method: 'POST',
                        body: formData
                    });
                })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setSummaryData(data.summary);
                    } else {
                        setError(data.message);
                    }
                })
                .catch(err => {
                    console.error(err);
                    setError("Failed to generate summary. Please try again.");
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [isOpen, documentLink]);

    const handleDownload = () => {
        if (!summaryRef.current) return;

        // Use Native Print API for perfect, searchable PDFs without Canvas/Color errors
        const printWindow = window.open('', '', 'width=800,height=900');
        printWindow.document.write(`
            <html>
                <head>
                    <title>${documentTitle} - Smart Summary</title>
                    <style>
                        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 40px; color: #1f2937; line-height: 1.6; }
                        h1, h2, h3 { color: #1e40af; margin-top: 24px; margin-bottom: 12px; font-weight: 700; }
                        h3 { border-bottom: 2px solid #e5e7eb; padding-bottom: 8px; font-size: 1.25rem; }
                        p { margin-bottom: 16px; white-space: pre-wrap; }
                        ul, ol { margin-bottom: 16px; padding-left: 24px; }
                        li { margin-bottom: 8px; white-space: pre-wrap; }
                        strong { color: #111827; }
                        .blue-dot { display: none; }
                        @media print {
                            body { -webkit-print-color-adjust: exact; padding: 0; }
                        }
                    </style>
                </head>
                <body>
                    <h2>📘 AI Smart Summary</h2>
                    <p style="color: #6b7280; font-size: 0.875rem;">Document: ${documentTitle}</p>
                    <hr style="border: 1px solid #e5e7eb; margin-bottom: 24px;"/>
                    ${summaryRef.current.innerHTML}
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 500);
    };

    // Using React Portal to attach the modal to document.body 
    // to strictly bypass any parent z-index constraints (like the overlapping Navbar)
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-amber-50/60 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-slate-200 dark:border-neutral-800 flex items-center justify-between bg-amber-50/60 dark:bg-neutral-900/80 sticky top-0 z-10 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <Sparkles className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Smart Summary</h2>
                                    <p className="text-xs text-slate-600 dark:text-neutral-400 flex items-center gap-1">
                                        <FileText className="w-3 h-3" /> {documentTitle}
                                    </p>
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
                        <div ref={summaryRef} className="p-6 sm:p-8 overflow-y-auto flex-1 custom-scrollbar bg-amber-50/60 dark:bg-neutral-900">
                            {isLoading ? (
                                <div className="flex flex-col items-center justify-center py-20">
                                    <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                                    <p className="text-lg text-slate-700 dark:text-neutral-300 font-medium">AI is analyzing the document...</p>
                                    <p className="text-sm text-neutral-500 mt-2">Extracting key concepts and formulas</p>
                                </div>
                            ) : error ? (
                                <div className="text-center py-10">
                                    <p className="text-red-400">{error}</p>
                                </div>
                            ) : summaryData ? (
                                <div className="space-y-8">
                                    {summaryData.map((section, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="bg-stone-100 dark:bg-neutral-800/30 p-6 rounded-2xl border border-slate-200 dark:border-neutral-700/50"
                                        >
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-blue-500 blue-dot"></div>
                                                {section.title}
                                            </h3>
                                            {/* Added whitespace-pre-wrap string parsing so AI lists render tightly */}
                                            <div className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-neutral-300 prose-headings:text-white prose-a:text-blue-400 prose-strong:text-white prose-table:border-collapse prose-th:bg-stone-100 dark:bg-neutral-800 prose-th:p-2 prose-th:border prose-th:border-slate-200 dark:border-neutral-700 prose-td:p-2 prose-td:border prose-td:border-slate-200 dark:border-neutral-700 prose-li:my-0 mt-4 overflow-x-auto whitespace-pre-wrap">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                    {section.content}
                                                </ReactMarkdown>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : null}
                        </div>

                        {/* Footer */}
                        <div className="p-5 border-t border-slate-200 dark:border-neutral-800 bg-amber-50/60 dark:bg-neutral-900/80 flex justify-end gap-3 sticky bottom-0 z-10">
                            <button
                                onClick={onClose}
                                className="px-5 py-2.5 rounded-xl text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:text-white hover:bg-stone-100 dark:bg-neutral-800 transition-colors text-sm font-medium"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleDownload}
                                disabled={isLoading || !summaryData}
                                className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-slate-900 dark:text-white transition-colors flex items-center gap-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Download className="w-4 h-4" />
                                Download PDF
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default SmartSummaryModal;
