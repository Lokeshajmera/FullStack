import React from 'react';
import { motion } from 'framer-motion';
import { BookMarked } from 'lucide-react';
import { bookPublicationsData } from '../data/bookPublicationsData';

const BookPublications = () => {
    return (
        <div className="pt-[160px] bg-stone-50 dark:bg-slate-950 min-h-screen text-slate-700 dark:text-slate-300 font-sans pb-20">
            {/* Header */}
            <div className="py-16 text-center bg-slate-100 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20" />
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 relative z-10 tracking-tight">
                    Book <span className="text-cyan-600 dark:text-cyan-400">Publications</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto relative z-10">
                    A comprehensive list of authored and edited books by our esteemed faculty.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full relative z-10 mt-6" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-300 dark:border-slate-800 shadow-2xl overflow-hidden"
                >
                    <div className="p-8 border-b border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 flex items-center">
                        <div className="p-3 bg-cyan-500/10 rounded-xl mr-4 border border-cyan-500/20">
                            <BookMarked className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Books Published</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-stone-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-sm uppercase tracking-wider">
                                    <th className="p-4 pl-8 border-b border-slate-300 dark:border-slate-800 font-semibold">Title</th>
                                    <th className="p-4 border-b border-slate-300 dark:border-slate-800 font-semibold w-36">Publication Date</th>
                                    <th className="p-4 border-b border-slate-300 dark:border-slate-800 font-semibold">Publisher</th>
                                    <th className="p-4 pr-8 border-b border-slate-300 dark:border-slate-800 font-semibold">Author / Editor</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/50">
                                {bookPublicationsData.map((book, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-white/30 dark:bg-slate-800/30 transition-colors group"
                                    >
                                        <td className="p-4 pl-8">
                                            <p className="text-slate-900 dark:text-white font-medium group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">{book.title}</p>
                                        </td>
                                        <td className="p-4 text-slate-600 dark:text-slate-400 text-sm">
                                            {book.date}
                                        </td>
                                        <td className="p-4 text-slate-700 dark:text-slate-300">
                                            {book.publisher}
                                        </td>
                                        <td className="p-4 pr-8">
                                            <div className="text-slate-800 dark:text-slate-200 font-medium text-[15px] leading-relaxed">
                                                {book.author}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default BookPublications;
