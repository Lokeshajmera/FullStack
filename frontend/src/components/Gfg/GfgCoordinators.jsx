import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

// ── 2025-2026 ──────────────────────────────────────────────────────────
import prithvirajMore   from '../../assets/gfg/prithviraj-more.png';
import anujChandak      from '../../assets/gfg/anuj-chandak.png';
import digvijayBhadgale from '../../assets/gfg/digvijay-bhadgale.png';
import adinnaThaware    from '../../assets/gfg/adinna-thaware.png';
import siddhikaPujari   from '../../assets/gfg/siddhika-pujari.png';
import ananyaRajankar   from '../../assets/gfg/ananya-rajankar.png';
import parthKathane     from '../../assets/gfg/parth-kathane.png';

// ── 2024-2025 ──────────────────────────────────────────────────────────
import prathamGfg    from '../../assets/gfg/PRATHAM-modified.webp';
import sagarGfg      from '../../assets/gfg/SAGAR-modified.webp';
import sohamGfg      from '../../assets/gfg/SOHAM-modified.webp';
import felinaGfg     from '../../assets/gfg/FELINA-modified.webp';
import tejasGfg      from '../../assets/gfg/TEJAS-modified.webp';
import namishGfg     from '../../assets/gfg/NAMISH-modified.webp';
import harshalGfg    from '../../assets/gfg/HARSHAL-modified.webp';
import atharvaGfg    from '../../assets/gfg/ATHARVA-modified.webp';
import rutujGfg      from '../../assets/gfg/RUTUJ-modified.webp';
import anushkaGfg    from '../../assets/gfg/ANUSHKA-modified.webp';
import kheleshGfg    from '../../assets/gfg/KHELESH-modified.webp';
import saniyaGfg     from '../../assets/gfg/SANIYA-modified.webp';
import pragatiGfg    from '../../assets/gfg/PRAGATI-modified.webp';
import tejashreeGfg  from '../../assets/gfg/TEJASHREE-modified.webp';
import aryaGfg       from '../../assets/gfg/ARYA-modified.webp';
import harshGfg      from '../../assets/gfg/HARSH-modified.webp';
import supriyaGfg    from '../../assets/gfg/SUPRIYA-modified.webp';
import swetankGfg    from '../../assets/gfg/SWETANK-modified.webp';
import bhaveshGfg    from '../../assets/gfg/BHAVESH-modified.webp';
import yuktaGfg      from '../../assets/gfg/YUKTA-modified.webp';
import sushantGfg    from '../../assets/gfg/SUSHANT-modified.webp';
import siddheshGfg   from '../../assets/gfg/SIDDHESH-modified.webp';
import pranavGfg     from '../../assets/gfg/PRANAV-modified.webp';
import nishkaGfg     from '../../assets/gfg/NISHKA-modified.webp';
import parthGfg      from '../../assets/gfg/PARTH-modified.webp';

// ── 2022-2024 ──────────────────────────────────────────────────────────
import gautam           from '../../assets/gfg/gautam.jpg';
import powalkar         from '../../assets/gfg/powalkar.jpg';
import pranavKale       from '../../assets/gfg/pranav.jpg';
import yashSonar        from '../../assets/gfg/yash.jpg';
import piyushAgarwal    from '../../assets/gfg/piyush-agarwal.jpg';
import koustubh         from '../../assets/gfg/koustubh.jpg';
import atharvaGalne     from '../../assets/gfg/atharva-galne.jpg';
import sayaliJadhao     from '../../assets/gfg/sayali-jadhao.jpg';
import sonaliMankare    from '../../assets/gfg/sonali-mankare.jpg';
import utkarsh          from '../../assets/gfg/utkarsh.jpg';
import santrupti        from '../../assets/gfg/santrupti-golhar.jpg';
import vaishnaviChopade from '../../assets/gfg/vaishnavi-chopade.jpg';
import siddheshVarude   from '../../assets/gfg/siddhesh.jpg';
import aparnaHatte      from '../../assets/gfg/aparna-hatte.jpg';

// ── avatar fallback ────────────────────────────────────────────────────
const getAvatar = (name) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2d6a4f&color=fff&size=150`;

// ── Data ───────────────────────────────────────────────────────────────
const coordinators2025_2026 = [
    { name: 'Anuj Chandak',      role: 'Campus Mantri',                  image: anujChandak },
    { name: 'Prithviraj More',   role: 'President',                      image: prithvirajMore },
    { name: 'Anuj Chandak',      role: 'Vice-President',                 image: anujChandak },
    { name: 'Digvijay Bhadgale', role: 'Event Head',                     image: digvijayBhadgale },
    { name: 'Adinna Thaware',    role: 'Design Head',                    image: adinnaThaware },
    { name: 'Siddhika Pujari',   role: 'Marketing and Sponsorship Head', image: siddhikaPujari },
    { name: 'Ananya Rajankar',   role: 'Social Media Head',              image: ananyaRajankar },
    { name: 'Parth Kathane',     role: 'Event Head',                     image: parthKathane },
];

const coordinators2024_2025 = [
    { name: 'Pratham Mali',        role: 'President',                           image: prathamGfg },
    { name: 'Sagar Karatagi',      role: 'Vice President',                      image: sagarGfg },
    { name: 'Soham Mhatre',        role: 'Secretary',                           image: sohamGfg },
    { name: 'Felina Mathew',       role: 'Secretary',                           image: felinaGfg },
    { name: 'Tejas Ubale',         role: 'Treasurer',                           image: tejasGfg },
    { name: 'Namish Arora',        role: 'Treasurer',                           image: namishGfg },
    { name: 'Harshal Mali',        role: 'Technical Head',                      image: harshalGfg },
    { name: 'Atharva Kamtalwar',   role: 'Technical Head',                      image: atharvaGfg },
    { name: 'Rutuj Dhongade',      role: 'Technical Head',                      image: rutujGfg },
    { name: 'Anushka Patil',       role: 'Technical Head',                      image: anushkaGfg },
    { name: 'Khelesh Patil',       role: 'Events Head',                         image: kheleshGfg },
    { name: 'Saniya Thigale',      role: 'Events Head',                         image: saniyaGfg },
    { name: 'Pragati Hinge',       role: 'Design Head',                         image: pragatiGfg },
    { name: 'Tejashree Chougule',  role: 'Design Head',                         image: tejashreeGfg },
    { name: 'Arya Singh',          role: 'Social Media Head',                   image: aryaGfg },
    { name: 'Harsh Vahal',         role: 'Social Media Head',                   image: harshGfg },
    { name: 'Supriya Baride',      role: 'Social Media Head',                   image: supriyaGfg },
    { name: 'Swetank Raut',        role: 'Social Media and Photography Head',   image: swetankGfg },
    { name: 'Bhavesh Pagare',      role: 'Photography Head',                    image: bhaveshGfg },
    { name: 'Yukta Joshi',         role: 'Marketing and Publicity Head',        image: yuktaGfg },
    { name: 'Sushant Kabra',       role: 'Marketing and Publicity Head',        image: sushantGfg },
    { name: 'Siddhesh Pohare',     role: 'Marketing and Publicity Head',        image: siddheshGfg },
    { name: 'Pranav Jagtap',       role: 'Marketing and Sponsorship Head',      image: pranavGfg },
    { name: 'Nishka Salunkhe',     role: 'Membership Chairperson',              image: nishkaGfg },
    { name: 'Parth Chitale',       role: 'Membership Chairperson',              image: parthGfg },
];

const coordinators2022_2024 = [
    { name: 'Gautam Bhagat',     role: 'President',                        image: gautam },
    { name: 'Atharv Powalkar',   role: 'Vice President',                   image: powalkar },
    { name: 'Pranav Kale',       role: 'Technical Head',                   image: pranavKale },
    { name: 'Yash Sonar',        role: 'Co-Technical Head',                image: yashSonar },
    { name: 'Piyush Agarwal',    role: 'Events Head',                      image: piyushAgarwal },
    { name: 'Koustubh Kulkarni', role: 'Co-Events Head',                   image: koustubh },
    { name: 'Atharva Galne',     role: 'Design and Branding Head',         image: atharvaGalne },
    { name: 'Sayali Jadhao',     role: 'Co-Design Head',                   image: sayaliJadhao },
    { name: 'Sonali Mankare',    role: 'Marketing Head',                   image: sonaliMankare },
    { name: 'Utkarsh Patil',     role: 'Co-Marketing Head',                image: utkarsh },
    { name: 'Santrupti Golhar',  role: 'Social Media Head',                image: santrupti },
    { name: 'Vaishnavi Chopade', role: 'Co-Social Media Head',             image: vaishnaviChopade },
    { name: 'Siddhesh Varude',   role: 'Public Relations and Outreach',    image: siddheshVarude },
    { name: 'Aparna Hatte',      role: 'Co-Public Relations and Outreach', image: aparnaHatte },
];

// ── Card ───────────────────────────────────────────────────────────────
const CoordinatorCard = ({ coordinator, index }) => (
    <motion.article
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.35, delay: (index % 8) * 0.05 }}
        className="bg-white/50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-green-500/60 hover:shadow-[0_0_24px_rgba(34,197,94,0.12)] transition-all duration-300 group flex flex-col items-center h-full"
    >
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden flex-shrink-0 mb-4 border-4 border-slate-200 dark:border-slate-700 group-hover:border-green-500 transition-colors duration-300 shadow-xl">
            <img
                src={coordinator.image}
                alt={coordinator.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { e.target.src = getAvatar(coordinator.name); }}
            />
        </div>
        <div className="text-center flex-grow flex flex-col justify-center items-center w-full gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-green-400 transition-colors leading-snug">
                {coordinator.name}
            </h3>
            <p className="text-xs font-semibold text-green-400 bg-green-950/40 py-1.5 px-3 rounded-full border border-green-800/30 inline-block leading-tight">
                {coordinator.role}
            </p>
        </div>
    </motion.article>
);

// ── Main ───────────────────────────────────────────────────────────────
const YEARS = [
    { key: '25-26', label: '2025 – 2026', data: coordinators2025_2026 },
    { key: '24-25', label: '2024 – 2025', data: coordinators2024_2025 },
    { key: '22-24', label: '2022 – 2024', data: coordinators2022_2024 },
];

const GfgCoordinators = () => {
    const [activeYear, setActiveYear] = useState('25-26');
    const activeData = YEARS.find((y) => y.key === activeYear).data;

    return (
        <section className="relative">
            {/* Section heading */}
            <div className="text-center mb-10 relative">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 dark:bg-slate-800 -z-0 hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white inline-flex items-center justify-center gap-3 bg-stone-50 dark:bg-slate-950 px-8 py-2 relative z-10">
                    <Calendar className="text-green-500" size={28} />
                    Student Coordinators By Year
                </h2>
            </div>

            {/* Year tab pills */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-12">
                {YEARS.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setActiveYear(key)}
                        className={`px-6 md:px-8 py-3 rounded-full font-bold transition-all duration-300 border ${
                            activeYear === key
                                ? 'bg-green-500 text-white border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.35)] scale-105'
                                : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:border-green-500/50 hover:text-green-500'
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Animated grid */}
            <div className="relative min-h-[200px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeYear}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -18 }}
                        transition={{ duration: 0.28 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {activeData.map((coordinator, index) => (
                                <CoordinatorCard key={`${activeYear}-${index}`} coordinator={coordinator} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default GfgCoordinators;
