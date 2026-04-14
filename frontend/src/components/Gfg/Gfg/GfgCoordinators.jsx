import React from 'react';
import { motion } from 'framer-motion';

const coordinators = [
    { imageText: "nuradha Thakare", name: "Soham Mhatre", role: "Secretary" },
    { imageText: "nuradha Thakare", name: "Felina Mathew", role: "Secretary" },
    { imageText: "nuradha Thakare", name: "Tejas Ubale", role: "Treasurer" },
    { imageText: "sonal-gore", name: "Namish Arora", role: "Treasurer" },
    { imageText: "nuradha Thakare", name: "Harshal Mali", role: "Technical Head" },
    { imageText: "sonal-gore", name: "Atharva Kamtalwar", role: "Technical Head" },
    { imageText: "Pallavi Dhade", name: "Rutuj Dhongade", role: "Technical Head" },
    { imageText: "Pallavi Dhade", name: "Anushka Patil", role: "Technical Head" },
    { imageText: "nuradha Thakare", name: "Khelesh Patil", role: "Events Head" },
    { imageText: "sonal-gore", name: "Saniya Thigale", role: "Events Head" },
    { imageText: "Pallavi Dhade", name: "Pragati Hinge", role: "Design head" },
    { imageText: "Pallavi Dhade", name: "Tejashree Chougule", role: "Design head" },
    { imageText: "Pallavi Dhade", name: "Arya Singh", role: "Social Media Head" },
    { imageText: "Pallavi Dhade", name: "Harsh Vahal", role: "Social Media Head" },
    { imageText: "nuradha Thakare", name: "Supriya Baride", role: "Social Media Head" },
    { imageText: "sonal-gore", name: "Swetank Raut", role: "Social Media and Photography Head" },
    { imageText: "Pallavi Dhade", name: "Bhavesh Pagare", role: "Photography Head" },
    { imageText: "Pallavi Dhade", name: "Yukta Joshi", role: "Marketing and Publicity Head" },
    { imageText: "Pallavi Dhade", name: "Sushant Kabra", role: "Marketing and Publicity Head" },
    { imageText: "Pallavi Dhade", name: "Siddhesh Pohare", role: "Marketing and Publicity Head" },
    { imageText: "Pallavi Dhade", name: "Pranav Jagtap", role: "Marketing and Sponsorship Head" },
    { imageText: "Pallavi Dhade", name: "Nishka Salunkhe", role: "Membership Chairperson" },
    { imageText: "Pallavi Dhade", name: "Parth Chitale", role: "Membership Chairperson" }
];

const CoordinatorCard = ({ coordinator, index }) => (
    <motion.article
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index % 6 * 0.05 }}
        className="bg-white rounded-2xl shadow-md border border-slate-100 p-5 flex items-center space-x-4 hover:shadow-lg hover:border-cyan-100 transition-all duration-300"
    >
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
            <span className="text-xl font-bold text-slate-600 dark:text-slate-400">
                {coordinator.name.charAt(0)}
            </span>
            <span className="sr-only">{coordinator.imageText}</span>
        </div>
        <div>
            <h4 className="text-lg font-bold text-slate-800 leading-tight">
                {coordinator.name}
            </h4>
            <p className="text-sm text-cyan-600 font-medium mt-1">
                {coordinator.role}
            </p>
        </div>
    </motion.article>
);

const GfgCoordinators = () => {
    return (
        <section className="relative">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 inline-block relative">
                    Student Coordinators 2024–2025
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-cyan-500 rounded-full"></span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {coordinators.map((coordinator, index) => (
                    <CoordinatorCard key={index} coordinator={coordinator} index={index} />
                ))}
            </div>
        </section>
    );
};

export default GfgCoordinators;
