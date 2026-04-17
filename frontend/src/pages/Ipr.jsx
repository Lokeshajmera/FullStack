import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, FileText } from 'lucide-react';
import { patentsData, copyrightsData } from '../data/iprData';

const Ipr = () => {
    const [activeTab, setActiveTab] = useState('patents');

    return (
        <div className="bg-stone-50 dark:bg-slate-950 min-h-screen text-slate-700 dark:text-slate-300 font-sans pb-20">
            {/* Header */}
            <div className="py-16 text-center bg-slate-100 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20" />
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 relative z-10 tracking-tight">
                    Intellectual Property <span className="text-cyan-600 dark:text-cyan-400">Rights</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto relative z-10">
                    Patents and Copyrights filed and granted to our department faculty and students.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full relative z-10 mt-6" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-300 dark:border-slate-800 p-8 flex items-center justify-between shadow-xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
                        <div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-bold tracking-wider uppercase mb-2">Total Patents</p>
                            <h3 className="text-5xl font-black text-slate-900 dark:text-white">{patentsData.length}</h3>
                            <p className="text-sm text-slate-500 mt-2">Count Till Date</p>
                        </div>
                        <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400">
                            <Shield className="w-10 h-10" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-300 dark:border-slate-800 p-8 flex items-center justify-between shadow-xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors"></div>
                        <div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-bold tracking-wider uppercase mb-2">Total Copyrights</p>
                            <h3 className="text-5xl font-black text-slate-900 dark:text-white">{copyrightsData.length}</h3>
                            <p className="text-sm text-slate-500 mt-2">Count Till Date</p>
                        </div>
                        <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-purple-400">
                            <FileText className="w-10 h-10" />
                        </div>
                    </motion.div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-1 rounded-2xl">
                        <button
                            onClick={() => setActiveTab('patents')}
                            className={`flex items-center px-8 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'patents'
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-slate-900 dark:text-white shadow-lg shadow-cyan-500/25'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-white dark:bg-slate-800'
                                }`}
                        >
                            <Shield className={`w-5 h-5 mr-2 ${activeTab === 'patents' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`} />
                            Patents
                        </button>
                        <button
                            onClick={() => setActiveTab('copyrights')}
                            className={`flex items-center px-8 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'copyrights'
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-slate-900 dark:text-white shadow-lg shadow-purple-500/25'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-white dark:bg-slate-800'
                                }`}
                        >
                            <FileText className={`w-5 h-5 mr-2 ${activeTab === 'copyrights' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`} />
                            Copyrights
                        </button>
                    </div>
                </div>

                {/* Content Table */}
                <motion.div
                    layout
                    className="bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-300 dark:border-slate-800 shadow-2xl overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-x-auto"
                        >
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-stone-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-sm uppercase tracking-wider">
                                        <th className="p-4 pl-8 border-b border-slate-300 dark:border-slate-800 font-semibold w-24">Sr. No.</th>
                                        <th className="p-4 border-b border-slate-300 dark:border-slate-800 font-semibold w-1/4">Faculty Name</th>
                                        <th className="p-4 border-b border-slate-300 dark:border-slate-800 font-semibold w-1/3">Title</th>
                                        <th className="p-4 border-b border-slate-300 dark:border-slate-800 font-semibold text-center w-32">Type</th>
                                        <th className="p-4 pr-8 border-b border-slate-300 dark:border-slate-800 font-semibold">Application No. & Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/50">
                                    {(activeTab === 'patents' ? patentsData : copyrightsData).map((item, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-white/30 dark:bg-slate-800/30 transition-colors group"
                                        >
                                            <td className="p-4 pl-8 text-slate-500 font-medium">#{item.sr}</td>
                                            <td className="p-4 text-slate-900 dark:text-white font-medium whitespace-pre-line leading-relaxed">{item.facultyName}</td>
                                            <td className="p-4 text-slate-700 dark:text-slate-300">
                                                <p className="group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">{item.title}</p>
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className="inline-flex px-3 py-1 bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 rounded-md text-sm border border-slate-300 dark:border-slate-700/50">
                                                    {item.type}
                                                </span>
                                            </td>
                                            <td className="p-4 pr-8">
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 rounded-full mr-3 ${item.status.toLowerCase().includes('granted') || item.status.toLowerCase().includes('registered') ? 'bg-green-500' :
                                                            item.status.toLowerCase().includes('published') ? 'bg-blue-500' : 'bg-orange-500'
                                                        }`}></div>
                                                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                        {item.status}
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

            </div>
        </div>
    );
};

export default Ipr;
