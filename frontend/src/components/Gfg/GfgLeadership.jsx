import React from 'react';
import { motion } from 'framer-motion';
import pallaviDhadeImage from '../../assets/faculty/pallavi-dhade.jpg';
import prithvirajMore    from '../../assets/gfg/prithviraj-more.png';
import anujChandak       from '../../assets/gfg/anuj-chandak.png';

const LeadershipCard = ({ member, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-slate-100/80 dark:bg-slate-900/80 rounded-2xl shadow-lg border border-slate-300 dark:border-slate-800 p-6 flex flex-col items-center text-center hover:shadow-[0_0_30px_rgba(34,197,94,0.12)] hover:border-green-500/50 hover:-translate-y-1 transition-all duration-300 group"
    >
        <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-800 flex items-center justify-center shadow-inner group-hover:border-green-500/50 transition-colors">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0f172a&color=22d3ee&size=200`; }}
            />
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-green-400 transition-colors">
            {member.name}
        </h3>
        <p className="text-green-400 font-medium px-4 py-1.5 bg-green-900/20 border border-green-800/40 rounded-full text-sm">
            {member.role}
        </p>
    </motion.article>
);

const leadershipMembers = [
    { name: "Prof. Pallavi Dhade",  role: "Faculty Coordinator", image: pallaviDhadeImage },
    { name: "Anuj Chandak",         role: "Campus Mantri",                        image: anujChandak },
    { name: "Prithviraj More",      role: "President",                             image: prithvirajMore },
];

const GfgLeadership = () => {
    return (
        <section className="relative">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 inline-block relative">
                    Faculty &amp; Leadership
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-green-500 rounded-full"></span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {leadershipMembers.map((member, index) => (
                    <LeadershipCard key={index} member={member} index={index} />
                ))}
            </div>
        </section>
    );
};

export default GfgLeadership;
