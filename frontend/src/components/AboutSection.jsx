import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

const AboutSection = () => {
    const cards = [
        {
            icon: <Target className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
            title: "Our Vision",
            description: "To be a center of excellence in Artificial Intelligence and Machine Learning, fostering innovation and research."
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
            title: "Our Mission",
            description: "To provide quality education, promote research culture, and develop ethical professionals ready for the industry."
        }
    ];

    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text & Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            About the <span className="text-cyan-600 dark:text-cyan-400">Department</span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                            The Department of Artificial Intelligence and Machine Learning at PCCOE is dedicated to shaping the future of technology types. Established with a vision to create industry-ready professionals, we offer a curriculum that blends theoretical foundations with practical applications in AI, ML, Deep Learning, and Data Science.
                        </p>

                        <div className="space-y-6">
                            {cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                    className="bg-slate-100/50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-300 dark:border-slate-800 hover:border-cyan-500/50 transition-colors flex items-start space-x-4"
                                >
                                    <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">{card.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{card.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-10 dark:opacity-30" />
                        <img
                            src="https://aiml.pccoepune.com/assets/images/lab/lab1.webp"
                            alt="AI Laboratory"
                            className="relative rounded-2xl shadow-2xl border border-slate-300 dark:border-slate-800"
                        />
                        {/* Floating Stats or Element */}

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
