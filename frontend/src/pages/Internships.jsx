import React from 'react';
import { Download, FileText, Briefcase, Trophy } from 'lucide-react';
import {
    internshipsIntro,
    internshipOffersBatch2027,
    internshipOffersBatch2026Table,
    internshipOffersBatch2025Table,
    internshipAchievements2026,
    internshipAchievements2025,
} from '../data/internshipsData';

// ─── Reusable Offer Table ─────────────────────────────────────────────────────
const OfferTable = ({ data, accentClass }) => (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
        <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
                <tr className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest border-b border-slate-200 dark:border-slate-800">
                    <th className="py-4 px-5 font-semibold w-12 text-center">S.N.</th>
                    <th className="py-4 px-5 font-semibold">Name of Industry / Organization</th>
                    <th className="py-4 px-5 font-semibold text-right">Stipend (Rs. / Month)</th>
                    <th className="py-4 px-5 font-semibold text-center">No. of Students</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                {data.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-100 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="py-3 px-5 text-center text-slate-600 dark:text-slate-400">{row.no}</td>
                        <td className="py-3 px-5 font-medium text-slate-900 dark:text-white">{row.name}</td>
                        <td className={`py-3 px-5 text-right font-bold ${accentClass}`}>{row.stipend}</td>
                        <td className="py-3 px-5 text-center text-slate-600 dark:text-slate-400">{row.students}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// ─── Achievement Card ─────────────────────────────────────────────────────────
const AchievementCard = ({ person, borderAccent }) => (
    <div className={`bg-amber-50/60 dark:bg-slate-900 border ${borderAccent} rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform duration-300 shadow-lg`}>
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 shrink-0">
            <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top" />
        </div>
        <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{person.name}</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{person.company}</p>
            <p className="text-sm font-bold text-cyan-500 mt-1">{person.stipend}</p>
        </div>
    </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
const Internships = () => {


    return (
        <div className="w-full min-h-[calc(100vh-80px)] bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans pt-16 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

                {/* ── Header ───────────────────────────────────────────── */}
                <div className="text-center mb-14">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 uppercase tracking-tight">
                        Internships
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        {internshipsIntro.description}
                    </p>
                </div>

                {/* ── Guidelines & Downloads ───────────────────────────── */}
                <div className="mb-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800/60 border border-blue-100 dark:border-slate-700 rounded-3xl p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Guidelines &amp; Downloads</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Access official internship guidelines and required forms below.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={internshipsIntro.guidelinesLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors shadow-md shadow-blue-900/20 text-sm"
                            >
                                <FileText size={16} /> Internship Guidelines
                            </a>
                            <a
                                href={internshipsIntro.permissionLetterLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-slate-700 transition-colors text-sm"
                            >
                                <Download size={16} /> Permission Letter
                            </a>
                            <a
                                href={internshipsIntro.consentFormLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-slate-700 transition-colors text-sm"
                            >
                                <Download size={16} /> Parent Consent Form
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Batch 2027 Offer Table ───────────────────────────── */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="text-purple-400" size={28} />
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Internship Offers — Batch 2027</h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8" />
                    <OfferTable data={internshipOffersBatch2027} accentClass="text-purple-500" />
                </div>

                {/* ── Batch 2026 Offer Table ───────────────────────────── */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="text-cyan-600 dark:text-cyan-400" size={28} />
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Internship Offers — Batch 2026</h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8" />
                    <OfferTable data={internshipOffersBatch2026Table} accentClass="text-cyan-500" />
                </div>

                {/* ── Batch 2026 Student Achievements ─────────────────── */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-2">
                        <Trophy className="text-yellow-400" size={26} />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Student Achievements — Batch 2026</h3>
                    </div>
                    <div className="w-20 h-1 bg-yellow-400 rounded-full mb-8" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {internshipAchievements2026.map((p, i) => (
                            <AchievementCard key={i} person={p} borderAccent="border-cyan-200 dark:border-cyan-800/50 hover:border-cyan-400" />
                        ))}
                    </div>
                </div>

                {/* ── Batch 2025 Offer Table ───────────────────────────── */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="text-orange-400" size={28} />
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Internship Offers — Batch 2025</h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-8" />
                    <OfferTable data={internshipOffersBatch2025Table} accentClass="text-orange-400" />
                </div>

                {/* ── Batch 2025 Student Achievements ─────────────────── */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-2">
                        <Trophy className="text-yellow-400" size={26} />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Student Achievements — Batch 2025</h3>
                    </div>
                    <div className="w-20 h-1 bg-yellow-400 rounded-full mb-8" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {internshipAchievements2025.map((p, i) => (
                            <AchievementCard key={i} person={p} borderAccent="border-orange-200 dark:border-orange-800/50 hover:border-orange-400" />
                        ))}
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Internships;
