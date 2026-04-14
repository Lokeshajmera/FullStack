import React from 'react';
import { motion } from 'framer-motion';

const AboutIntro = () => {
    return (
        <section className="py-20 bg-stone-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-wider uppercase mb-4">
                        About The Department
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        A Center of Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Artificial Intelligence & Machine Learning</span>
                    </h3>
                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                        The Department of Computer Science & Engineering(Artificial Intelligence and Machine Learning) at PCCOE aim to be one of the leading program to provide value-added quality education in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning. The department plans efforts to develop technically proficient CSE graduates by disseminating in-depth knowledge of various domains. Moreover, the department cater holistic development of our students by providing conducive environment for academics and research, state-of-the-art curriculum, modern infrastruture, activities for co-curricular/extra-curricular development. Involvement of various stakeholders from Education, Industry, other sectors help us to build skilled and ethically responsible engineers in order to serve the society at large.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutIntro;
