import React from 'react';
import { motion } from 'framer-motion';
import pallaviDhadeImage from '../../../assets/faculty/pallavi-dhade.jpg';
import prathamGfg from '../../../assets/gfg/PRATHAM-modified.webp';
import sagarGfg from '../../../assets/gfg/SAGAR-modified.webp';

const leadershipMembers = [
    {
        image: pallaviDhadeImage,
        name: "Prof Pallavi Dhade",
        role: "Faculty Coordinator"
    },
    {
        image: prathamGfg,
        name: "Pratham Mali",
        role: "President"
    },
    {
        image: sagarGfg,
        name: "Sagar Karatagi",
        role: "Vice President"
    }
];

const LeadershipCard = ({ member, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >
        <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-cyan-50 bg-slate-100 flex items-center justify-center shadow-inner group-hover:border-cyan-100 transition-colors">
            {member.image ? (
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                />
            ) : (
                <span className="text-4xl font-bold text-slate-700 dark:text-slate-300 select-none">
                    {member.name.charAt(0)}
                </span>
            )}
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-cyan-600 transition-colors">
            {member.name}
        </h3>
        <p className="text-cyan-600 font-medium px-4 py-1.5 bg-cyan-50 rounded-full text-sm">
            {member.role}
        </p>
    </motion.article>
);

const GfgLeadership = () => {
    return (
        <section className="relative">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 inline-block relative">
                    FACULTY & LEADERSHIP
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-cyan-500 rounded-full"></span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leadershipMembers.map((member, index) => (
                    <LeadershipCard key={index} member={member} index={index} />
                ))}
            </div>
        </section>
    );
};

export default GfgLeadership;
