import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ── Real event images ──────────────────────────────────────────────── */
// Marketing Campaign
import mktg01 from '../../assets/gfg/events/marketing-campaign-01.jpg';
import mktg02 from '../../assets/gfg/events/marketing-campaign-02.jpg';

// Web Development Bootcamp
import web01 from '../../assets/gfg/events/web-development-bootcamp-01.jpg';
import web02 from '../../assets/gfg/events/web-development-bootcamp-02.jpg';
import web03 from '../../assets/gfg/events/web-development-bootcamp-03.jpg';

// Hack Matrix 4.0
import hack01 from '../../assets/gfg/events/artimas-2026-01.jpg';
import hack02 from '../../assets/gfg/events/artimas-2026-02.jpg';
import hack03 from '../../assets/gfg/events/artimas-2026-03.jpg';
import hack04 from '../../assets/gfg/events/artimas-2026-04.jpg';

// Session by Sandeep Jain
import sandeep01 from '../../assets/gfg/events/sandeep-jain-01.jpg';
import sandeep02 from '../../assets/gfg/events/sandeep-jain-02.jpg';

// Induction
import induction01 from '../../assets/gfg/events/induction-01.jpg';
import induction02 from '../../assets/gfg/events/induction-02.jpg';

// Importance of Coding
import coding01 from '../../assets/gfg/events/importance-of-coding-01.jpg';
import coding02 from '../../assets/gfg/events/importance-of-coding-02.jpg';

/* ── Event data ─────────────────────────────────────────────────────── */
const events = [
    {
        id: 1,
        title: "Marketing Campaign for GeeksforGeeks ConnectWise Platform",
        description:
            "An interactive offline campaign was organized at PCCOE to introduce the GeeksforGeeks ConnectWise Platform to students through a fun three-round technical challenge. With 120+ participants, the event combined quizzes, debugging tasks, and logical puzzles to encourage learning, engagement, and problem-solving while rewarding winners with exciting coupons.",
        images: [mktg01, mktg02],
        tag: "Campaign",
        tagColor: "bg-green-500/20 text-green-400 border-green-600/30",
    },
    {
        id: 2,
        title: "Web Development Bootcamp",
        description:
            "The Department of CSE (AI & ML) at PCCOE organized an intensive Web Development Bootcamp focused on building modern websites and full-stack applications through hands-on learning. Using a gamified approach with levels, coding challenges, and a team-based capstone project, the program helped students gain practical experience in HTML, CSS, JavaScript, backend technologies, Git, and deployment while preparing them for real-world web development.",
        images: [web01, web02, web03],
        tag: "Bootcamp",
        tagColor: "bg-blue-500/20 text-blue-400 border-blue-600/30",
    },
    {
        id: 3,
        title: "Hack Matrix 4.0 (24-hrs Hackathon) — ARTIMAS 2026",
        description:
            "Hack Matrix 4.0 was a 24-hour offline hackathon organized by the CSE (AI & ML) Department and AiMSA at PCCOE in collaboration with the GeeksforGeeks Campus Body. With 105 team registrations and a two-round selection process, the event challenged participants to build innovative AI/ML solutions, culminating in an offline finale where 12 finalist teams developed and presented working prototypes before an expert judging panel.",
        images: [hack01, hack02, hack03, hack04],
        tag: "Hackathon",
        tagColor: "bg-orange-500/20 text-orange-400 border-orange-600/30",
    },
    {
        id: 4,
        title: "Session by Mr. Sandeep Jain — Founder & CEO GFG",
        description:
            "On February 24th 2024, Mr. Sandeep Jain, Founder and CEO of GeeksforGeeks, shared his journey in building GFG. His inspiring tale of overcoming challenges resonated with attendees. The session ended with an engaging Q&A.",
        images: [sandeep01, sandeep02],
        tag: "Session",
        tagColor: "bg-purple-500/20 text-purple-400 border-purple-600/30",
    },
    {
        id: 5,
        title: "Induction",
        description:
            "Department of CSE (AI & ML) has successfully conducted the GeeksforGeeks chapter Induction program on 5th September 2023. This chapter provides an invaluable platform for students to explore the fundamentals and potential applications of these cutting-edge technologies, fostering a deeper understanding and passion for CSE's rapidly evolving landscape.",
        images: [induction01, induction02],
        tag: "Induction",
        tagColor: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-600/30",
    },
    {
        id: 6,
        title: "Session — Importance of Coding",
        description:
            'Guest Session on "Importance of Coding" at the GeeksforGeeks chapter Induction program given by Mr. Ronald Mascarenhas on 5th September 2023, an esteemed alumni of PCCOE who shared his invaluable experiences and expertise during the event.',
        images: [coding01, coding02],
        tag: "Session",
        tagColor: "bg-purple-500/20 text-purple-400 border-purple-600/30",
    },
];

/* ── Image Carousel ─────────────────────────────────────────────────── */
const ImageCarousel = ({ images, title }) => {
    const [active, setActive] = useState(0);
    const count = images.length;

    const prev = () => setActive((p) => (p - 1 + count) % count);
    const next = () => setActive((p) => (p + 1) % count);

    return (
        <div className="relative">
            {/* Main image */}
            <div className="relative h-56 rounded-xl overflow-hidden bg-stone-100 dark:bg-slate-900">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={active}
                        src={images[active]}
                        alt={`${title} – photo ${active + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                    />
                </AnimatePresence>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Counter badge */}
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {active + 1} / {count}
                </span>

                {/* Arrows — only if multiple images */}
                {count > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-green-500 text-white rounded-full transition-colors duration-200"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-green-500 text-white rounded-full transition-colors duration-200"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </>
                )}
            </div>

            {/* Dot indicators */}
            {count > 1 && (
                <div className="flex justify-center gap-1.5 mt-2.5">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`rounded-full transition-all duration-300 ${
                                i === active
                                    ? 'w-4 h-2 bg-green-500'
                                    : 'w-2 h-2 bg-slate-400 dark:bg-slate-600 hover:bg-green-400'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

/* ── Event Card ─────────────────────────────────────────────────────── */
const EventCard = ({ event, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="bg-amber-50/60 dark:bg-slate-900/80 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:border-green-500/40 transition-all duration-300"
    >
        {/* Carousel */}
        <div className="p-4 pb-0">
            <ImageCarousel images={event.images} title={event.title} />
        </div>

        {/* Text */}
        <div className="p-5 flex-grow flex flex-col gap-2.5">
            <span className={`self-start text-[11px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${event.tagColor}`}>
                {event.tag}
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {event.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {event.description}
            </p>
        </div>
    </motion.article>
);

/* ── Section ────────────────────────────────────────────────────────── */
const GfgEvents = () => (
    <section className="relative">
        <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 inline-block relative">
                Events &amp; Sessions
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-green-500 rounded-full" />
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-5 text-base max-w-2xl mx-auto">
                Highlights from GeeksforGeeks Campus Body — PCCOE activities and student-led sessions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
            ))}
        </div>
    </section>
);

export default GfgEvents;
