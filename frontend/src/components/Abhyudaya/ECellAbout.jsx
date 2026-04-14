import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, CheckCircle2 } from 'lucide-react';
import ProfileCard from '../common/ProfileCard';
import ayushImg from '../../assets/abhyudaya/ayush.jpg';
import abhyudayaLogo from '../../assets/abhyudaya/abhyudaya.jpg';

const ECellAbout = () => {
    const mentorProfile = {
        name: "Ayush Khandelwal",
        designation: "Student Mentor",
        role: "Mentor",
        organization: "Abhyudaya E-Cell, AiMSA",
        description: "Leveraging Ayush's past experience of over 3 years in startups and achieving financial independence since high school, we are passionate about guiding others to take control of their finances and entrepreneurial dreams.",
        image: ayushImg
    };

    return (
        <section className="py-16 w-full max-w-6xl mx-auto px-4 text-slate-700 dark:text-slate-300">
            {/* About Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <div className="bg-cyan-500 py-3 px-6 rounded-t-2xl shadow-lg border-b border-cyan-400 w-full mb-0 text-slate-900 dark:text-white font-bold text-xl tracking-wide flex items-center justify-between">
                    <span>AiMSA's Abhyudaya E-Cell</span>
                    <img src={abhyudayaLogo} alt="Abhyudaya Logo" className="h-10 w-auto rounded border-2 border-white/30 shadow-sm" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-b-3xl p-8 md:p-12 shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-shadow">

                    <div className="mb-8">
                        <p className="text-lg md:text-xl leading-relaxed mb-6 font-medium">
                            AiMSA's "Abhyudaya" E-cell aims to foster a culture of entrepreneurship among students by providing a platform for ideation, mentorship, and execution of startup projects. Through a structured process, the E-cell encourages students to develop innovative ideas, refine them into viable business concepts, and ultimately transform them into successful startups.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed font-medium">
                            By facilitating collaboration between students, faculty members, and industry experts, Abhyudaya E-cell endeavors to nurture the entrepreneurial spirit and contribute to the growth of the startup ecosystem within the institute.
                        </p>
                    </div>

                    <div className="bg-white/50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-300 dark:border-slate-700/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/20 blur-3xl -mr-32 -mt-32 rounded-full pointer-events-none"></div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                            <Target className="mr-3 text-cyan-600 dark:text-cyan-400" size={28} />
                            Our Mission
                        </h3>
                        <p className="text-lg leading-relaxed relative z-10">
                            Abhyudaya E-Cell serves as a dynamic platform for fostering entrepreneurial spirit among students. Our mission is to instill values like discipline, ethics, and resilience while providing students with the tools and resources to realize their entrepreneurial aspirations. Through workshops, mentorship programs, and networking events, E-Cell empowers students to innovate, create, and make meaningful contributions to society.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Mentor Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 inline-block relative border-b-4 border-cyan-500 pb-2">
                        Student Mentor
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Reusing existing ProfileCard component but with custom description underneath */}
                    <ProfileCard profile={mentorProfile} type="admin" />
                </div>
            </motion.div>

            {/* Objectives Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="bg-gradient-to-br from-slate-100 dark:from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-300 dark:border-slate-800 shadow-2xl relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-900/30 blur-3xl rounded-full pointer-events-none"></div>
                    <div className="absolute top-10 right-10 opacity-10">
                        <Rocket size={120} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10 flex items-center relative z-10">
                        <Lightbulb className="mr-4 text-cyan-600 dark:text-cyan-400" size={36} />
                        Objectives
                    </h2>

                    <ul className="space-y-6 relative z-10 text-lg md:text-xl font-medium">
                        <li className="flex items-start bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-300 dark:border-slate-700/50 hover:border-cyan-500/30 transition-colors shadow-sm">
                            <CheckCircle2 className="mr-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-1" size={28} />
                            <span>To encourage potential startup ideas and develop entrepreneurial thought process.</span>
                        </li>
                        <li className="flex items-start bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-300 dark:border-slate-700/50 hover:border-cyan-500/30 transition-colors shadow-sm">
                            <CheckCircle2 className="mr-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-1" size={28} />
                            <span>To provide a platform for building.</span>
                        </li>
                        <li className="flex items-start bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-300 dark:border-slate-700/50 hover:border-cyan-500/30 transition-colors shadow-sm">
                            <CheckCircle2 className="mr-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-1" size={28} />
                            <span>To guide students in converting their project ideas into startups.</span>
                        </li>
                    </ul>
                </div>
            </motion.div>

        </section>
    );
};

export default ECellAbout;
