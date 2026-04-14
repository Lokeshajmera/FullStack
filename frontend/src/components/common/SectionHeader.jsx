import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, align = 'center' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {title.split(' ').map((word, i, arr) => (
                    <span key={i} className={i === arr.length - 1 ? "text-cyan-600 dark:text-cyan-400" : ""}>
                        {word}{' '}
                    </span>
                ))}
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
            {subtitle && (
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg mt-4 max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeader;
