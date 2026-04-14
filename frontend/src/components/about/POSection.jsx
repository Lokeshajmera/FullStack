import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const POSection = () => {
    const pos = [
        {
            id: "PO-1",
            title: "Engineering knowledge",
            description: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems."
        },
        {
            id: "PO-2",
            title: "Problem analysis",
            description: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences."
        },
        {
            id: "PO-3",
            title: "Design/development of solutions",
            description: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations."
        },
        {
            id: "PO-4",
            title: "Conduct investigations of complex problems",
            description: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions."
        },
        {
            id: "PO-5",
            title: "Modern tool usage",
            description: "Create, select, and apply appropriate techniques, resources, and modern engineering and AI/ML tools including prediction and modeling to complex engineering activities with an understanding of the limitations."
        },
        {
            id: "PO-6",
            title: "The engineer and society",
            description: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice."
        },
        {
            id: "PO-7",
            title: "Environment and sustainability",
            description: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development."
        },
        {
            id: "PO-8",
            title: "Ethics",
            description: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice."
        },
        {
            id: "PO-9",
            title: "Individual and team work",
            description: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings."
        },
        {
            id: "PO-10",
            title: "Communication",
            description: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions."
        },
        {
            id: "PO-11",
            title: "Project management and finance",
            description: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments."
        },
        {
            id: "PO-12",
            title: "Life-long learning",
            description: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Program <span className="text-cyan-600 dark:text-cyan-400">Outcomes</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-4">
                    {pos.map((po, index) => (
                        <motion.div
                            key={po.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-white/50 dark:bg-slate-800/50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-cyan-600 dark:text-cyan-400 font-bold min-w-[3.5rem]">{po.id}</span>
                                    <span className="text-slate-900 dark:text-white font-medium text-lg">{po.title}</span>
                                </div>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-5 pt-2 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/50">
                                            <div className="pl-[4.5rem]">
                                                {po.description}
                                            </div>
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

export default POSection;
