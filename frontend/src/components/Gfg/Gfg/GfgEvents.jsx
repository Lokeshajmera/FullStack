import React from 'react';
import { motion } from 'framer-motion';

const events = [
    {
        title: "Session by Mr. Sandeep Jain - Founder & CEO GFG",
        description: "On February 24th 2024 , Mr. Sandeep Jain, Founder and CEO of GeeksforGeeks, shared his journey in building GFG. His inspiring tale of overcoming challenges resonated with attendees. The session ended with an engaging Q&A.",
        imageAlt: "Session by Mr. Sandeep Jain - Founder & CEO GFG"
    },
    {
        title: "Induction",
        description: "Department of CSE (AI & ML) has has successfully conducted the GeeksforGeeks chapter Induction program on 5th September 2023. This chapter provides an invaluable platform for students to explore the fundamentals and potential applications of these cutting-edge technologies, fostering a deeper understanding and passion for CSE's rapidly evolving landscape.",
        imageAlt: "Induction"
    },
    {
        title: "Session - Importance of Coding",
        description: "Guest Session on \"Importance of coding \" at the GeeksforGeeks chapter Induction program given by Mr. Ronald Mascarenhas on 5th september 2023 who is an esteemed alumni of PCCOE, who shared his invaluable experiences and expertise during the event.",
        imageAlt: "Session - Importance of Coding"
    }
];

const EventCard = ({ event, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
    >
        <div className="p-8 flex-grow">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 inline-block">
                {event.title}
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
                {event.description}
            </p>
        </div>

        {/* Image placeholder below description */}
        <div className="h-64 bg-slate-100 flex items-center justify-center border-t border-slate-50 relative group">
            <img
                src={`https://source.unsplash.com/800x600/?technology,coding,event&sig=${index}`}
                alt={event.imageAlt}
                className="w-full h-full object-cover rounded-b-2xl opacity-0 group-hover:opacity-0 transition-opacity"
                loading="lazy"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                }}
            />
            {/* Visual placeholder text if image fails/loads */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-600 dark:text-slate-400 font-medium">
                Image Placeholder
            </div>
        </div>
    </motion.article>
);

const GfgEvents = () => {
    return (
        <section className="relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 inline-block relative max-w-2xl mx-auto leading-tight">
                    Student Coordinators 2022–2024 (Events & Sessions)
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-cyan-500 rounded-full"></span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {events.map((event, index) => (
                    <EventCard key={index} event={event} index={index} />
                ))}
            </div>
        </section>
    );
};

export default GfgEvents;
