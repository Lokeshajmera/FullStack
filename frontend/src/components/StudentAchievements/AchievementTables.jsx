import React from 'react';
import { thirdYearTable, secondYearTable, table2025, table2024 } from '../../data/studentAchievementsData';

const DataTable = ({ title, columns, data }) => {
    if (!data || data.length === 0) return null;
    
    return (
        <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 pl-2 border-l-4 border-cyan-500">
                {title}
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-700 shadow-xl">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 text-sm md:text-base tracking-wider border-b border-slate-300 dark:border-slate-700">
                            {columns.map((col, idx) => (
                                <th key={idx} className={`py-4 px-6 font-bold ${idx === 0 ? 'w-16' : ''}`}>
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-slate-100/50 dark:bg-slate-900/50 divide-y divide-slate-800/80 text-slate-700 dark:text-slate-300">
                        {data.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-white/30 dark:bg-slate-800/30 transition-colors">
                                {columns.map((col, cIdx) => (
                                    <td key={cIdx} className={`py-4 px-6 ${cIdx === 0 ? 'font-semibold text-slate-600 dark:text-slate-400' : 'font-medium'} ${cIdx === 1 ? 'text-slate-900 dark:text-white' : ''}`}>
                                        {row[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const AchievementTables = () => {
    const cols2025 = [
        { label: "Sr. No", key: "srNo" },
        { label: "Name", key: "name" },
        { label: "Nature of Competition", key: "nature" },
        { label: "Level", key: "level" },
        { label: "Achievement", key: "description" },
        { label: "Prize", key: "prize" },
        { label: "Organized By", key: "organizedBy" }
    ];

    const cols2024 = [
        { label: "Sr. No", key: "srNo" },
        { label: "Name", key: "name" },
        { label: "Nature of Competition", key: "nature" },
        { label: "Level", key: "level" },
        { label: "Achievement", key: "description" },
        { label: "Prize", key: "prize" }
    ];

    const colsLegacy = [
        { label: "Sr. No", key: "srNo" },
        { label: "Name of the Student", key: "name" },
        { label: "Event", key: "event" },
        { label: "Organized By", key: "organizedBy" },
        { label: "Prize Details", key: "prize" }
    ];

    return (
        <section className="mt-12">
            <DataTable title="Student Achievement CSE (AI & ML) Department 2025-26" columns={cols2025} data={table2025} />
            <DataTable title="Extraordinary achievements Department of CSE (AI & ML) (2024-25)" columns={cols2024} data={table2024} />
            <DataTable title="Third Year - Student Achievements" columns={colsLegacy} data={thirdYearTable} />
            <DataTable title="Second Year - Student Achievements" columns={colsLegacy} data={secondYearTable} />
        </section>
    );
};

export default AchievementTables;
