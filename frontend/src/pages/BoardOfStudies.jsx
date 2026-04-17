import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { FileText, Download, Users } from 'lucide-react';
import { bosData } from '../data/bosData';

// Role → badge color
const roleBadge = {
    'BoS Chairman':               'bg-cyan-500/10 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
    'BoS Member – VC Nominee':    'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
    'BoS Member – Academia':      'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
    'BoS Member – Alumnus':       'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    'BoS Member – Industry':      'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30',
    'BoS Member – Research':      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    'BoS Member & Subject Head':  'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
};

const getBadgeClass = (role) =>
    roleBadge[role] || 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/30';

const MemberCard = ({ member, index }) => {
    const badgeClass = getBadgeClass(member.role);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.4 }}
            className="flex gap-5 items-start bg-amber-50/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 hover:shadow-[0_0_24px_rgba(6,182,212,0.10)] transition-all duration-300 group"
        >
            {/* Avatar */}
            <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-stone-100 dark:bg-slate-800 shadow-md group-hover:border-cyan-400/50 transition-colors">
                <img
                    src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0f172a&color=22d3ee&size=160`}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0f172a&color=22d3ee&size=160`;
                    }}
                />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-900 dark:text-white text-[15px] leading-snug mb-1.5">
                    {member.name}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-[13px] leading-snug mb-3">
                    {member.designation}
                    {member.organization && (
                        <span className="block text-slate-600 dark:text-slate-400 dark:text-slate-500 text-[12px] mt-0.5">{member.organization}</span>
                    )}
                </p>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border ${badgeClass}`}>
                    {member.role}
                </span>
            </div>
        </motion.div>
    );
};

const BoardOfStudies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Separate chairman from rest for spotlight treatment
    const chairman = bosData.members.find(m => m.role === 'BoS Chairman');
    const otherMembers = bosData.members.filter(m => m.role !== 'BoS Chairman');

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    title="Board of Studies"
                    subtitle="Distinguished members guiding our academic curriculum and framework."
                />

                {/* Chairman Spotlight */}
                {chairman && (
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl mx-auto mb-12"
                    >
                        <div className="relative bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/30 dark:border-cyan-500/20 rounded-3xl p-6 flex gap-6 items-center shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all">
                            <div className="h-1 w-full absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-t-3xl" />
                            <div className="shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-lg">
                                <img
                                    src={chairman.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(chairman.name)}&background=0f172a&color=22d3ee&size=160`}
                                    alt={chairman.name}
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(chairman.name)}&background=0f172a&color=22d3ee&size=160`;
                                    }}
                                />
                            </div>
                            <div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 rounded-full text-[11px] font-bold tracking-widest uppercase mb-2">
                                    <Users size={10} /> {chairman.role}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{chairman.name}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{chairman.designation}</p>
                                <p className="text-slate-600 dark:text-slate-400 dark:text-slate-500 text-xs">{chairman.organization}</p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* All Other Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
                    {otherMembers.map((member, index) => (
                        <MemberCard key={member.id} member={member} index={index} />
                    ))}
                </div>

                {/* Minutes of Meeting Section */}
                <SectionHeader
                    title="Minutes of Meeting"
                    subtitle="Official documentation and proceedings of the Board of Studies meetings."
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl overflow-hidden"
                >
                    <div className="divide-y divide-slate-200 dark:divide-slate-800">
                        {bosData.minutesOfMeeting.map((doc) => (
                            <div
                                key={doc.id}
                                className="flex items-center justify-between p-5 md:p-6 hover:bg-white/70 dark:hover:bg-slate-800/50 transition-colors group"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                        <FileText className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 dark:text-white font-medium text-lg">BoS Meeting Minutes</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">Date: {doc.date}</p>
                                    </div>
                                </div>
                                <a
                                    href={doc.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download={doc.fileUrl.split('/').pop()}
                                    className="flex items-center px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition-colors shadow-sm"
                                >
                                    <Download size={16} className="md:mr-2" />
                                    <span className="hidden md:inline">Download</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default BoardOfStudies;
