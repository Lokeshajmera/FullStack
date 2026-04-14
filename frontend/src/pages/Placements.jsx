import React from 'react';
import { Trophy, TrendingUp, Building2, ShieldCheck, Users, Banknote } from 'lucide-react';
import {
    placementSummary2026, topPerformers2026, majorRecruiters2026,
    placementSummary2025, topPerformers2025, majorRecruiters2025
} from '../data/placementsData';

// ─── Stat Card ────────────────────────────────────────────────────────────────
const StatCard = ({ icon: Icon, value, label, colorClass }) => (
    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 transition-transform group">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${colorClass}`}>
            <Icon size={28} />
        </div>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">{value}</h3>
        <p className="text-slate-600 dark:text-slate-400 font-medium uppercase tracking-widest text-xs">{label}</p>
    </div>
);

// ─── Top Performer Card ───────────────────────────────────────────────────────
const PerformerCard = ({ performer, batch }) => (
    <div className="flex flex-col items-center w-full max-w-[180px]">
        <div className="w-36 h-44 mb-4 overflow-hidden rounded-xl border-4 border-slate-200 dark:border-slate-700 shadow-xl bg-white dark:bg-slate-800">
            <img src={performer.image} alt={performer.name} className="w-full h-full object-cover object-top" />
        </div>
        <h4 className="text-sm font-black text-slate-900 dark:text-white text-center leading-tight mb-1 uppercase tracking-tight">{performer.name}</h4>
        <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1 text-center">Batch-{batch}</p>
        <p className="text-cyan-600 dark:text-cyan-400 font-black text-base text-center mb-2">{performer.company}</p>
        <div className="bg-blue-600/20 dark:bg-blue-600/30 text-blue-600 dark:text-blue-300 font-bold px-4 py-1 rounded-full text-sm border border-blue-500/40">
            {performer.package}
        </div>
    </div>
);

// ─── Recruiter Grid ───────────────────────────────────────────────────────────
const RecruiterGrid = ({ recruiters }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {recruiters.map((r, i) => (
            <div key={i} className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 p-3 rounded-xl flex items-center justify-center text-center transition-colors min-h-[60px]">
                <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm leading-tight">{r}</span>
            </div>
        ))}
    </div>
);

// ─── Section divider ──────────────────────────────────────────────────────────
const SectionDivider = () => (
    <div className="my-20 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
    </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
const Placements = () => {
    return (
        <div className="w-full min-h-[calc(100vh-80px)] bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans pt-16 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

                {/* ── Page Header ──────────────────────────────────────── */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-6 uppercase tracking-tight">
                        Placements Showcase
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Setting new benchmarks in artificial intelligence and machine learning career opportunities.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-8 rounded-full" />
                </div>

                {/* ════════════════  BATCH 2026  ════════════════ */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-2">
                        <Trophy className="text-emerald-400" size={28} />
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Placement Summary — Batch 2026</h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mb-10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                        <StatCard icon={Users}      value={placementSummary2026.eligible} label="Total Students"       colorClass="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400" />
                        <StatCard icon={ShieldCheck} value={placementSummary2026.placed}   label="Students Placed"      colorClass="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400" />
                        <StatCard icon={TrendingUp}  value={placementSummary2026.percent}  label="Placement %"          colorClass="bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400" />
                        <StatCard icon={Trophy}     value={placementSummary2026.highest}  label="Highest Salary"       colorClass="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-500" />
                        <StatCard icon={Banknote}   value={placementSummary2026.average}  label="Average Salary"       colorClass="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400" />
                        <StatCard icon={Banknote}   value={placementSummary2026.median}   label="Median Salary"        colorClass="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300" />
                    </div>
                </div>

                {/* Top Performers 2026 */}
                <div className="mb-10">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 text-center">
                        Our Top Performers of Batch-2026 with <span className="text-cyan-600 dark:text-cyan-400">10+ LPA</span>
                    </h3>
                    <div className="w-16 h-1 bg-cyan-400 rounded-full mb-10 mx-auto" />
                    <div className="flex flex-wrap justify-center gap-10">
                        {topPerformers2026.map((p, i) => <PerformerCard key={i} performer={p} batch="2026" />)}
                    </div>
                </div>

                {/* Major Recruiters 2026 */}
                <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                        <Building2 className="text-slate-500" size={22} />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Major Recruiters — Batch 2026</h3>
                    </div>
                    <div className="w-16 h-1 bg-slate-400 rounded-full mb-8" />
                    <RecruiterGrid recruiters={majorRecruiters2026} />
                </div>

                <SectionDivider />

                {/* ════════════════  BATCH 2025  ════════════════ */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-2">
                        <Trophy className="text-amber-400" size={28} />
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Placement Summary — Batch 2025</h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full mb-10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                        <StatCard icon={Users}      value={placementSummary2025.eligible} label="Total Students"  colorClass="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400" />
                        <StatCard icon={ShieldCheck} value={placementSummary2025.placed}   label="Students Placed" colorClass="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400" />
                        <StatCard icon={TrendingUp}  value={placementSummary2025.percent}  label="Placement %"     colorClass="bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400" />
                        <StatCard icon={Trophy}     value={placementSummary2025.highest}  label="Highest Salary"  colorClass="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-500" />
                        <StatCard icon={Banknote}   value={placementSummary2025.average}  label="Average Salary"  colorClass="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400" />
                        <StatCard icon={Banknote}   value={placementSummary2025.median}   label="Median Salary"   colorClass="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300" />
                    </div>
                </div>

                {/* Top Performers 2025 */}
                <div className="mb-10">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 text-center">
                        Our Top Performers of Batch-2025 with <span className="text-cyan-600 dark:text-cyan-400">10+ LPA</span>
                    </h3>
                    <div className="w-16 h-1 bg-cyan-400 rounded-full mb-10 mx-auto" />
                    <div className="bg-gradient-to-br from-slate-50 dark:from-slate-900 to-slate-100 dark:to-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 overflow-hidden shadow-2xl relative">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="flex flex-wrap justify-center gap-10 relative z-10">
                            {topPerformers2025.map((p, i) => <PerformerCard key={i} performer={p} batch="2025" />)}
                        </div>
                    </div>
                </div>

                {/* Major Recruiters 2025 */}
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Building2 className="text-slate-500" size={22} />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Major Recruiters — Batch 2025</h3>
                    </div>
                    <div className="w-16 h-1 bg-slate-400 rounded-full mb-8" />
                    <RecruiterGrid recruiters={majorRecruiters2025} />
                </div>

            </div>
        </div>
    );
};

export default Placements;
