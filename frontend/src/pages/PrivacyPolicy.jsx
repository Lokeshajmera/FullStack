import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Mail, Phone, AlertCircle } from 'lucide-react';

const sections = [
    {
        icon: <Eye className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
        title: "Information We Collect",
        content: [
            "**Personal Information:** When you contact us, register for events, or use our Faculty Portal, we may collect your name, email address, phone number, and institutional affiliation.",
            "**Academic Information:** For students and faculty using the Study Resources and Faculty Portal, we collect information such as student ID, year of study, and uploaded academic materials.",
            "**Usage Data:** We automatically collect data about how you interact with the website, including pages visited, time spent, browser type, IP address, and device information.",
            "**Cookies:** We use essential cookies to maintain your session (e.g., login state, theme preference). No third-party tracking cookies are used."
        ]
    },
    {
        icon: <Database className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
        title: "How We Use Your Information",
        content: [
            "**Service Delivery:** To provide access to study materials, AI-powered tools (Smart Summary, AI Tutor, PYQ Analyzer), and departmental resources.",
            "**Communication:** To respond to your enquiries, send event notifications, and important departmental announcements.",
            "**Academic Administration:** To manage faculty uploads, authenticate staff on the Faculty Portal, and track resource availability.",
            "**Improvement:** To analyze usage patterns and improve the website's functionality and user experience.",
            "**Security:** To detect and prevent unauthorized access, fraudulent activity, and technical issues."
        ]
    },
    {
        icon: <Lock className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
        title: "Data Security",
        content: [
            "All data is stored securely on Supabase's encrypted servers hosted in compliance with industry standards.",
            "Faculty Portal logins are protected via Supabase's Row-Level Security (RLS) policies ensuring each user can only access their own data.",
            "All data transmission between your browser and our servers is encrypted using HTTPS/TLS.",
            "We do not sell, rent, or share your personal data with any third-party marketers or advertisers.",
            "AI-processed documents (via Smart Summary / PYQ Analyzer) are sent to our secure backend API and are not permanently stored after processing."
        ]
    },
    {
        icon: <Shield className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
        title: "Your Rights",
        content: [
            "**Access & Correction:** You may request to access or correct any personal information we hold about you.",
            "**Deletion:** You may request deletion of your personal data, subject to any legal or administrative obligations.",
            "**Objection:** You may object to the processing of your data for non-essential purposes at any time.",
            "**Data Portability:** You may request a copy of your data in a machine-readable format.",
            "To exercise any of these rights, contact us at computer_queries@pccoepune.org."
        ]
    },
    {
        icon: <AlertCircle className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
        title: "Third-Party Services",
        content: [
            "**Supabase:** Used for our database, authentication, and file storage. Governed by Supabase's own Privacy Policy.",
            "**Google Fonts / CDN:** Used to load typography assets. Standard CDN logging may apply.",
            "**External Links:** Our website may contain links to external resources (AICTE, SPPU, NIRF). We are not responsible for the privacy practices of those sites.",
            "**AI Backend:** Our AI summarization features communicate with our own backend (not third-party AI services) to protect the privacy of uploaded academic materials."
        ]
    }
];

const PrivacyPolicy = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pb-20 text-slate-700 dark:text-slate-300">
            {/* Hero Banner */}
            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 dark:from-cyan-800 dark:to-blue-900 py-16 mb-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 ring-1 ring-white/30"
                    >
                        <Shield className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
                    >
                        Privacy Policy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-cyan-100 text-lg max-w-2xl mx-auto"
                    >
                        How PCCOE CSE-AIML Department collects, uses, and protects your information.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-cyan-200 text-sm mt-4"
                    >
                        Effective Date: April 15, 2025 &nbsp;|&nbsp; Last Updated: April 15, 2026
                    </motion.p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6">
                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-amber-50/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-10"
                >
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                        The Department of Computer Science & Engineering (Artificial Intelligence and Machine Learning) at
                        <strong> Pimpri Chinchwad College of Engineering (PCCOE), Pune</strong> is committed to protecting
                        your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your
                        information when you visit our departmental website or use any of our digital services.
                        Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
                    </p>
                </motion.div>

                {/* Sections */}
                <div className="space-y-8">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-amber-50/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-11 h-11 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center">
                                    {section.icon}
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {section.content.map((item, i) => {
                                    const parts = item.split(/\*\*(.*?)\*\*/);
                                    return (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                                            <span>
                                                {parts.map((p, pi) =>
                                                    pi % 2 === 1
                                                        ? <strong key={pi} className="text-slate-900 dark:text-white font-semibold">{p}</strong>
                                                        : p
                                                )}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-700/50 rounded-2xl p-8"
                >
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Contact & Grievances</h2>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-6">
                        If you have questions, concerns, or wish to exercise your data rights, please reach out to our department:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="mailto:computer_queries@pccoepune.org"
                            className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-cyan-400 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
                            <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                            computer_queries@pccoepune.org
                        </a>
                        <a href="tel:+912027653168"
                            className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-cyan-400 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
                            <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                            020-27653168-2151
                        </a>
                    </div>
                </motion.div>

                <p className="text-center text-xs text-slate-500 dark:text-slate-600 mt-8">
                    © {new Date().getFullYear()} PCCOE CSE-AIML Department. This policy is subject to change with notice.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
