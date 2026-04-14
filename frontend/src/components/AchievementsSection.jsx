import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, FileText, Award, Users } from 'lucide-react';

const Counter = ({ value, label, icon }) => {
    const [count, setCount] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(value);
            const duration = 2000;
            const incrementTime = duration / end;

            let timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center p-6 bg-slate-100/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-800 hover:border-cyan-500/50 transition-colors">
            <div className="inline-block p-4 bg-white dark:bg-slate-800 rounded-full mb-4 text-cyan-600 dark:text-cyan-400">
                {icon}
            </div>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{count}+</h3>
            <p className="text-slate-600 dark:text-slate-400">{label}</p>
        </div>
    );
};

const AchievementsSection = () => {
    const stats = [
        { label: "Placement % (Batch 2025)", value: "78", icon: <Trophy size={28} /> },
        { label: "Research Publications", value: "245", icon: <FileText size={28} /> },
        { label: "Patents Filed", value: "10", icon: <Award size={28} /> },
        { label: "Student Strength", value: "300", icon: <Users size={28} /> },
    ];

    return (
        <section className="py-20 bg-white/50 dark:bg-slate-950/50 border-y border-slate-200 dark:border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Our <span className="text-cyan-600 dark:text-cyan-400">Achievements</span></h2>
                    <p className="text-slate-600 dark:text-slate-400">Milestones that define our excellence.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <Counter key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
