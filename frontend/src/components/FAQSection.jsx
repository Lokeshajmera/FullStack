import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        id: 1,
        question: "What is the scope of AIML in current industry?",
        answer: "AIML is at the forefront of technological innovation today. From autonomous vehicles to generative AI, natural language processing, and advanced predictive analytics, there is massive demand for skilled AIML engineers across sectors like healthcare, finance, and software development."
    },
    {
        id: 2,
        question: "What placement opportunities are available for AIML students?",
        answer: "Our students receive excellent placement opportunities with top-tier product-based and service-based companies. We have a dedicated placement cell that focuses on tech roles involving data science, machine learning engineering, and AI development."
    },
    {
        id: 3,
        question: "Can I participate in internships during my coursework?",
        answer: "Yes! We highly encourage students to participate in internships. The department facilitates industrial training, and students can pursue summer internships as well as semester-long internships in their final year as per the curriculum guidelines."
    },
    {
        id: 4,
        question: "How frequently are workshops and hackathons organized?",
        answer: "We organize hands-on technical workshops, guest lectures, and hackathons frequently throughout the academic year. Our student chapters like Abhyudaya and GeeksForGeeks actively conduct events to keep students updated with the latest trends."
    }
];

const FAQSection = () => {
    const [openId, setOpenId] = useState(null);

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950 aiml-faq relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked <span className="text-cyan-600 dark:text-cyan-400">Questions</span></h2>
                    <p className="text-slate-600 dark:text-slate-400">Find answers to common questions about the AIML department and curriculum.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors"
                        >
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                            >
                                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-4">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="flex-shrink-0 text-cyan-600 dark:text-cyan-400"
                                >
                                    <ChevronDown size={20} />
                                </motion.div>
                            </button>
                            
                            <AnimatePresence>
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
