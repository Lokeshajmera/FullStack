import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, BookOpen, AlertTriangle, CheckCircle, Ban, Globe, Mail } from 'lucide-react';

const sections = [
    {
        icon: <CheckCircle className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
        title: "Acceptance of Terms",
        content: [
            "By accessing or using the PCCOE CSE-AIML Department website (hereinafter \"the Website\"), you agree to be bound by these Terms of Service.",
            "If you are accessing this website on behalf of an institution, organization, or as a staff member, you represent that you have the authority to bind them to these terms.",
            "We reserve the right to modify these Terms at any time. Continued use of the Website after changes constitutes your acceptance of the revised Terms.",
            "If you do not agree to these Terms, you must immediately discontinue use of the Website."
        ]
    },
    {
        icon: <BookOpen className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
        title: "Use of Study Resources & AI Tools",
        content: [
            "**Study Resources:** All notes, PYQs, lab manuals, and other materials available on this platform are intended exclusively for students enrolled in PCCOE's CSE-AIML program.",
            "**AI Tools:** The Smart Summary, PYQ Analyzer, and AI Tutor features are provided as supplementary learning aids. They are not a substitute for classroom learning, faculty guidance, or official study materials.",
            "**Accuracy Disclaimer:** AI-generated summaries and analyses are produced automatically and may contain inaccuracies. Always verify critical information against official course materials and faculty guidance.",
            "**Fair Use:** You may use materials for personal academic study only. Redistribution, commercial use, or sharing for profit is strictly prohibited.",
            "**No Warranty:** Study resources are provided 'as-is'. The department makes no warranties about completeness, accuracy, or fitness for a particular purpose."
        ]
    },
    {
        icon: <Users className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
        title: "Faculty Portal — User Obligations",
        content: [
            "**Authentication:** Only authorized PCCOE faculty members may register and use the Faculty Portal. Misrepresentation of identity is grounds for immediate account termination and may result in disciplinary action.",
            "**Content Responsibility:** Faculty are solely responsible for all content (notes, assignments, lab files) they upload. Uploaded content must be original, academically appropriate, and free of copyright violations.",
            "**Prohibited Uploads:** Faculty must not upload personal data of students, copyrighted third-party materials without authorization, or content that violates any applicable law.",
            "**Account Security:** You are responsible for maintaining the confidentiality of your login credentials. Report any unauthorized access immediately to the department.",
            "**Content Removal:** The department reserves the right to remove any uploaded content that violates these Terms without prior notice."
        ]
    },
    {
        icon: <Ban className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
        title: "Prohibited Conduct",
        content: [
            "Attempting to gain unauthorized access to any part of the website, the Faculty Portal, or our backend systems.",
            "Uploading, transmitting, or distributing malware, viruses, or any code designed to interfere with the functioning of the website.",
            "Scraping, crawling, or harvesting data from the website using automated tools without express written permission.",
            "Using AI tools to generate and pass off content as your own original academic work in violation of PCCOE's academic integrity policy.",
            "Impersonating any person, including PCCOE faculty, staff, or administrators.",
            "Using the website for any commercial, political, or non-academic promotional purpose."
        ]
    },
    {
        icon: <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
        title: "Intellectual Property",
        content: [
            "The website's design, code, branding, logos, and original content are the property of PCCOE CSE-AIML Department and are protected under applicable intellectual property laws.",
            "Faculty-uploaded study materials remain the intellectual property of the respective faculty members/authors. The department is granted a license to host and display these materials for academic purposes.",
            "The PCCOE name, logo, and associated marks are trademarks of Pimpri Chinchwad College of Engineering. Unauthorized use is prohibited.",
            "You may print or download content for your personal academic use, but may not reproduce, distribute, or create derivative works without written permission."
        ]
    },
    {
        icon: <AlertTriangle className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
        title: "Limitation of Liability & Disclaimers",
        content: [
            "The website and all content are provided 'as is' without warranty of any kind, express or implied.",
            "PCCOE CSE-AIML Department shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website or its services.",
            "We do not guarantee uninterrupted or error-free operation of the website or any AI-powered features.",
            "External links on this website lead to third-party sites. We are not responsible for the content, privacy practices, or reliability of those sites.",
            "Results from AI tools (Smart Summary, AI Tutor, PYQ Analyzer) are estimates and should not be relied upon for official academic decisions or exam preparation exclusively."
        ]
    }
];

const TermsOfService = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pt-28 pb-20 text-slate-700 dark:text-slate-300">
            {/* Hero Banner */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-800 dark:to-purple-900 py-16 mb-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 ring-1 ring-white/30"
                    >
                        <FileText className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
                    >
                        Terms of Service
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-indigo-100 text-lg max-w-2xl mx-auto"
                    >
                        Rules, responsibilities, and guidelines for using the PCCOE CSE-AIML Department website.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-indigo-200 text-sm mt-4"
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
                        These Terms of Service ("Terms") govern your access and use of the official website of the
                        <strong> Department of Computer Science & Engineering (AI & ML) at Pimpri Chinchwad College of Engineering (PCCOE)</strong>,
                        including all AI-powered tools, study resources, and the Faculty Portal. Please read these Terms carefully before use.
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
                                <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                                    {section.icon}
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {section.content.map((item, i) => {
                                    const parts = item.split(/\*\*(.*?)\*\*/);
                                    return (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
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

                {/* Governing Law */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 bg-amber-50/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-8"
                >
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Governing Law</h2>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        These Terms shall be governed by and construed in accordance with the laws of the Republic of India.
                        Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in
                        Pune, Maharashtra. By using this website, you consent to such jurisdiction and waive any objections thereto.
                    </p>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-700/50 rounded-2xl p-8"
                >
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Questions About These Terms</h2>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-5">
                        If you have any questions or concerns about these Terms of Service, please contact our department.
                    </p>
                    <a href="mailto:computer_queries@pccoepune.org"
                        className="inline-flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-indigo-400 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
                        <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        computer_queries@pccoepune.org
                    </a>
                </motion.div>

                <p className="text-center text-xs text-slate-500 dark:text-slate-600 mt-8">
                    © {new Date().getFullYear()} PCCOE CSE-AIML Department. Violation of these Terms may result in suspension of access.
                </p>
            </div>
        </div>
    );
};

export default TermsOfService;
