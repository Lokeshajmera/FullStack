import React from 'react';
import { motion } from 'framer-motion';

const GfgGallery = () => {
    // Array to match the requirement of a mapped grid layout
    const placeholders = Array.from({ length: 6 }, (_, i) => i);

    return (
        <section className="relative py-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 inline-block relative">
                    IMAGE GALLERY
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-cyan-500 rounded-full"></span>
                </h2>
            </div>

            {/* 3 columns desktop, 2 columns tablet, 1 column mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {placeholders.map((item) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: item * 0.1 }}
                        className="aspect-video bg-slate-200 rounded-2xl overflow-hidden relative shadow-sm hover:shadow-md transition-shadow"
                    >
                        <img
                            src={`https://source.unsplash.com/800x600/?college,students,technology&sig=${item + 10}`}
                            alt={`Gallery Image ${item + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-0"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                            Gallery Placeholder {item + 1}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default GfgGallery;
