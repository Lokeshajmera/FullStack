import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

import imgLab1 from '../assets/images/aiml_lab.webp';
import imgLab2 from '../assets/images/aiml_lab2.webp';
import imgClass from '../assets/images/classroom.jpg';
import imgLab3 from '../assets/images/aiml_lab3.webp';

const InfrastructureSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            id: 1,
            src: imgLab1,
            title: "High Performance Computing Lab",
            category: "Lab"
        },
        {
            id: 2,
            src: imgLab2,
            title: "Research Center",
            category: "Innovation"
        },
        {
            id: 3,
            src: imgClass,
            title: "Smart Classrooms",
            category: "Academics"
        },
        {
            id: 4,
            src: imgLab3,
            title: "NVIDIA AI/DL Lab",
            category: "Lab"
        }
    ];

    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950 text-slate-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">State-of-the-Art <span className="text-cyan-600 dark:text-cyan-400">Infrastructure</span></h2>
                    <p className="text-slate-600 dark:text-slate-400">Equipped with cutting-edge technology to foster innovation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            layoutId={`img-${image.id}`}
                            onClick={() => setSelectedImage(image)}
                            className="relative group cursor-pointer rounded-xl overflow-hidden h-64 md:h-80 border border-slate-300 dark:border-slate-800"
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                <ZoomIn className="text-cyan-600 dark:text-cyan-400 w-10 h-10 mb-2 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">{image.title}</h3>
                                <span className="text-cyan-600 dark:text-cyan-400 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">{image.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            layoutId={`img-${selectedImage.id}`}
                            className="relative max-w-4xl w-full bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 text-slate-900 dark:text-white hover:text-cyan-600 dark:text-cyan-400 z-10 p-2 bg-black/50 rounded-full"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-[60vh] object-cover"
                            />
                            <div className="p-6 bg-slate-100 dark:bg-slate-900">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedImage.title}</h3>
                                <p className="text-cyan-600 dark:text-cyan-400">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default InfrastructureSection;
