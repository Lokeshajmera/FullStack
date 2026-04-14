import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const GfgVision = () => {
    return (
        <section className="relative bg-slate-100/80 dark:bg-slate-900/80 rounded-3xl shadow-lg p-8 md:p-12 overflow-hidden border border-slate-300 dark:border-slate-800">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/20 rounded-full blur-3xl -mr-20 -mt-20 opacity-60"></div>

            <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-cyan-900/40 rounded-xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-cyan-800/50 shadow-inner">
                        <Eye size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">VISION</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        Our vision is to empower GeeksforGeeks Student Chapter to become a comprehensive resource, capable of addressing every person's career-related inquiries. We aim to provide expert guidance, support, and insights to help individuals make informed career decisions and excel in their chosen paths.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default GfgVision;
