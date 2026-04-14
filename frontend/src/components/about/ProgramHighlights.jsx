import React from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Users,
    Lightbulb,
    GraduationCap,
    FlaskConical,
    Cpu,
    Briefcase,
    LayoutDashboard,
    Sparkles,
    Globe
} from 'lucide-react';

const ProgramHighlights = () => {
    const highlights = [
        {
            icon: <BookOpen className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
            text: "Builds a solid foundation in advanced technologies of machine learning through an industry-oriented curriculum."
        },
        {
            icon: <Users className="w-6 h-6 text-purple-400" />,
            text: "'Industry-Academia Collaboration Framework' encourages students to Learn, Collaborate and Discover."
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
            text: "Exposure of In-house Incubation Cell nurturing various Startups."
        },
        {
            icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
            text: "Graduates can pursue higher education and research at premier national or international universities."
        },
        {
            icon: <FlaskConical className="w-6 h-6 text-rose-400" />,
            text: "Strong emphasis on Project, Labs, and Case Study based learning."
        },
        {
            icon: <Cpu className="w-6 h-6 text-blue-400" />,
            text: "Expertise in robotics, ML components, intelligent reasoning, deep learning, computer vision, and cognitive computing."
        },
        {
            icon: <Briefcase className="w-6 h-6 text-orange-400" />,
            text: "Hands-on industry projects and sessions by industry experts."
        },
        {
            icon: <LayoutDashboard className="w-6 h-6 text-indigo-400" />,
            text: "Ability to design intelligent models for various domains & business applications."
        },
        {
            icon: <Sparkles className="w-6 h-6 text-pink-400" />,
            text: "Unique in-depth learning on emerging AI/ML technologies."
        },
        {
            icon: <Globe className="w-6 h-6 text-teal-400" />,
            text: "Active student participation in global Hackathons and competitions."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-20 bg-stone-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Program <span className="text-cyan-600 dark:text-cyan-400">Highlights</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-slate-100/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group flex items-start gap-4"
                        >
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl group-hover:bg-white/80 dark:bg-slate-800/80 transition-colors shrink-0">
                                {item.icon}
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProgramHighlights;
