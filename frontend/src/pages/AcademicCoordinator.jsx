import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import ProfileCard from '../components/common/ProfileCard';
import santwanaImage from '../assets/faculty/santwana-gudadhe.jpg';

const AcademicCoordinator = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const coordinator = {
        name: "Prof. Santwana Gudadhe",
        designation: "Academic Coordinator",
        email: "santwana.gudadhe@pccoe.org",
        Contact : 8380095194,
        image: santwanaImage,
        organization: "PCCOE AI & ML Department"
    };


    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    title="Academic Coordinator"
                    subtitle="Ensuring academic excellence and smooth curriculum delivery."
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <ProfileCard profile={coordinator} type="admin" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl"
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-cyan-500 rounded-full inline-block"></span>
                        Message
                    </h3>
                    <div className="prose prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                        {/* Placeholder for exactly pasted paragraph */}
                        <p className="italic text-slate-600 dark:text-slate-400 border-l-2 border-cyan-500 pl-4 py-1 mb-6 bg-white/20 dark:bg-slate-800/20">
                            "Computer Science & Engineering (Artificial Intelligence and Machine Learning) Course started with an aim to develop high quality professionals in the area of Artificial Intelligence and Machine Learning emerging technologies. The Computer Science and Engineering (Artificial Intelligence and Machine Learning) Department has built, cutting-edge computer labs and classrooms outfitted with contemporary instructional aids and computing equipment. The department's experienced faculty and dedicated staff work hard to shape students' technical skills and overall personalities through meticulously designed outcome-based curriculum delivery and enjoyable co-curricular and extracurricular learning activities."
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default AcademicCoordinator;
