import React from 'react';
import { motion } from 'framer-motion';

const AdvisoryBoard = () => {
    const boardMembers = [
        {
            name: "Dr. Govind N. Kulkarni",
            designation: "Director, PCCOE, Pune",
            role: "Chairman",
            category: null,
        },
        {
            name: "Dr. Anuradha D. Thakare",
            designation: "Professor & Head of Department CSE(AI&ML), PCCOE, Pune",
            role: "Secretary",
            category: null,
        },
        {
            name: "Dr. Pramod Patil",
            designation: "Dean Science and Technology, SPPU, Pune\nProfessor, Department of Computer Engineering, D.Y. Patil Institute of Technology, Pimpri, Pune",
            role: "Member",
            category: "Academics",
        },
        {
            name: "Dr. Yogesh Deshpande",
            designation: "Professor, Department of Information Technology,\nVishwakarma Institute Of Information Technology, Pune",
            role: "Member",
            category: "Academics",
        },
        {
            name: "Dr. Sunita Jahirabadkar",
            designation: "Professor & Head of Department, Department of Computer Engineering, Cummins College of Engineering for Women, Pune",
            role: "Member",
            category: "Academics",
        },
        {
            name: "Mr Ambarish Deshpande",
            designation: "AI Enterprise Architect, LTIMindtree (insurance), Pune",
            role: "Member",
            category: "Industry",
        },
        {
            name: "Mr. Pratap Sanap",
            designation: "Head of Research and Innovation, Neilsoft Pvt Ltd, Pune",
            role: "Member",
            category: "Research Organization",
        },
        {
            name: "Mr. Mandar Bhatwadekar",
            designation: "TCS Research, Pune",
            role: "Member",
            category: "Research Organization",
        },
        {
            name: "Dr. Amar Buchade",
            designation: "Chair IEEE Pune Section, Pune",
            role: "Member",
            category: "Professional Society",
        },
        {
            name: "Mr. Jayesh Dave",
            designation: "Business Development Head, Cnergee Technologies, Pune",
            role: "Member",
            category: "Parent",
        },
        {
            name: "Mr. Nandkumar B. Mahajan",
            designation: "DGM Tata Motors Ltd., Pune",
            role: "Member",
            category: "Parent",
        },
        {
            name: "Mr. Parth Singhal",
            designation: "Batch 2025 Student, Department of CSE(AI&ML), PCCoE",
            role: "Member",
            category: "Student Representative",
        },
        {
            name: "Mr. Atharva Joshi",
            designation: "Batch 2025 Student, Department of CSE(AI&ML), PCCoE",
            role: "Member",
            category: "Student Representative",
        },
    ];

    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/50 overflow-hidden">
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Department Advisory <span className="text-cyan-600 dark:text-cyan-400">Board (DAB)</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Guiding our department towards academic and professional excellence.
                    </p>
                </motion.div>

                {/* Desktop Table View */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-100/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-200/80 dark:bg-slate-800/80 border-b border-slate-300 dark:border-slate-700">
                                <th className="py-5 px-6 font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider w-[65%]">
                                    Name of the Member
                                </th>
                                <th className="py-5 px-6 font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider text-right">
                                    Representative as - Category
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800/70">
                            {boardMembers.map((member, index) => (
                                <motion.tr
                                    key={index}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="hover:bg-white/60 dark:hover:bg-slate-800/40 transition-colors"
                                >
                                    {/* Left: Name + Designation */}
                                    <td className="py-5 px-6">
                                        <p className="font-semibold text-slate-900 dark:text-white text-[15px] leading-snug">
                                            {member.name}
                                        </p>
                                        {member.designation.split('\n').map((line, i) => (
                                            <p key={i} className="text-slate-500 dark:text-slate-400 text-[13px] leading-snug mt-0.5">
                                                {line}
                                            </p>
                                        ))}
                                    </td>

                                    {/* Right: Role + (Category) */}
                                    <td className="py-5 px-6 text-right align-middle">
                                        <p className="text-slate-700 dark:text-slate-300 font-medium text-[14px] leading-snug">
                                            {member.role}
                                        </p>
                                        {member.category && (
                                            <p className="text-slate-500 dark:text-slate-400 text-[13px] leading-snug">
                                                ({member.category})
                                            </p>
                                        )}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Mobile Card View */}
                <div className="md:hidden mt-8 space-y-4">
                    {boardMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-slate-100/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 p-5 rounded-2xl shadow-lg relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none" />
                            <h3 className="text-[15px] font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                            {member.designation.split('\n').map((line, i) => (
                                <p key={i} className="text-[13px] text-slate-500 dark:text-slate-400 leading-snug">{line}</p>
                            ))}
                            <div className="mt-3 flex items-center gap-2">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{member.role}</span>
                                {member.category && (
                                    <span className="text-xs text-slate-500 dark:text-slate-400">({member.category})</span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvisoryBoard;
