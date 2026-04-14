import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Award, Users, Crosshair, Video } from 'lucide-react';
import { generalAchievements, motorsportAchievements } from '../../data/studentAchievementsData';

const EventImages = ({ images, videoUrl }) => {
    let mediaItems = [];
    if (images) mediaItems.push(...images.map((img, idx) => ({ type: 'image', src: img, key: `img-${idx}` })));
    if (videoUrl !== undefined) mediaItems.push({ type: 'video', key: 'video' });

    if (mediaItems.length === 0) return null;

    let gridClass = "grid gap-4 mt-6 ";
    if (mediaItems.length === 1) {
        gridClass += "grid-cols-1 max-w-2xl mx-auto";
    } else if (mediaItems.length === 2 || mediaItems.length === 4) {
        gridClass += "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto";
    } else {
        gridClass += "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }

    return (
        <div className={gridClass}>
            {mediaItems.map((item) => {
                if (item.type === 'image') {
                    return (
                        <div key={item.key} className="aspect-video bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 relative group shadow-md">
                            <img
                                src={item.src}
                                alt="Achievement detail"
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    );
                }
                return (
                    <div key={item.key} className="aspect-video bg-stone-100 dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 relative group flex items-center justify-center shadow-md">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                        <div className="flex flex-col items-center justify-center z-10 p-4 text-center transform transition-transform group-hover:scale-105 duration-300">
                            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(34,211,238,0.3)] border border-slate-300 dark:border-slate-700">
                                <Video size={24} className="text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-white mb-1 tracking-wide">Video Coming Soon</h4>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const StandardAccordionItem = ({ item, isOpen, onToggle }) => {
    return (
        <div className="border border-slate-300 dark:border-slate-800 rounded-xl mb-4 overflow-hidden bg-slate-100 dark:bg-slate-900 hover:border-slate-300 dark:border-slate-700 transition-colors shadow-sm">
            <button
                className={`w-full text-left px-6 py-4 flex items-center justify-between transition-colors ${isOpen ? 'bg-white/80 dark:bg-slate-800/80 border-b border-slate-300 dark:border-slate-800' : 'bg-transparent'}`}
                onClick={onToggle}
            >
                <div className="flex items-center text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200">
                    <span className="w-1.5 h-6 bg-cyan-500 rounded-full mr-4 inline-block"></span>
                    <span className={isOpen ? 'text-slate-900 dark:text-white font-semibold' : ''}>{item.title}</span>
                </div>
                <ChevronDown
                    size={20}
                    className={`text-slate-600 dark:text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-cyan-600 dark:text-cyan-400' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 md:p-8 border-t border-slate-200 dark:border-slate-800/50 bg-slate-100/30 dark:bg-slate-900/30">
                            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line text-lg leading-relaxed mb-6 font-medium">
                                {item.description}
                            </p>
                            <EventImages images={item.images} videoUrl={item.videoUrl} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const MotorsportMemberCard = ({ member }) => {
    return (
        <div className="bg-white/50 dark:bg-slate-800/50 rounded-2xl border border-slate-300 dark:border-slate-700 p-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700/50">
                <div>
                    <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h5>
                    <div className="flex items-center text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                        <Users size={16} className="mr-2" /> {member.team}
                    </div>
                </div>
                <div className="text-left md:text-right">
                    <div className="flex items-center text-slate-700 dark:text-slate-300 font-medium md:justify-end mb-1">
                        <Crosshair size={16} className="mr-2 text-blue-400" /> {member.competition}
                    </div>
                    {/* Handle multiline achievement visually */}
                    <div className="text-orange-300 font-bold whitespace-pre-line">
                        {member.achievement}
                    </div>
                </div>
            </div>

            <div>
                <h6 className="text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400 font-bold mb-3">Contributions</h6>
                <ul className="space-y-2">
                    {member.contributions.map((cont, idx) => (
                        <li key={idx} className="flex text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 shrink-0"></span>
                            <span>{cont}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <EventImages images={member.images} />
        </div>
    );
};

const MotorsportAccordion = ({ data, isOpen, onToggle }) => {
    return (
        <div className="border border-cyan-800/80 rounded-xl mb-4 overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-lg relative">
            {/* Soft background glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 blur-3xl rounded-full transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>

            <button
                className={`w-full text-left px-6 py-5 flex items-center justify-between transition-colors relative z-10 ${isOpen ? 'bg-white dark:bg-slate-800 border-b border-cyan-800/50' : 'bg-transparent hover:bg-white/50 dark:bg-slate-800/50'}`}
                onClick={onToggle}
            >
                <div className="flex items-center text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">
                    <Award size={24} className="text-cyan-600 dark:text-cyan-400 mr-4 shrink-0" />
                    <span>{data.title}</span>
                </div>
                <ChevronDown
                    size={20}
                    className={`text-slate-600 dark:text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-cyan-600 dark:text-cyan-400' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <div className="p-4 md:p-8 bg-white/30 dark:bg-slate-950/30">
                            {data.groups.map((group, gIdx) => (
                                <div key={gIdx} className="mb-10 last:mb-0">
                                    <h4 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 pb-2 border-b border-slate-300 dark:border-slate-700/50 inline-block">
                                        {group.groupName}
                                    </h4>
                                    <div className="space-y-6">
                                        {group.members.map((member, mIdx) => (
                                            <MotorsportMemberCard key={mIdx} member={member} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const AchievementAccordion = () => {
    const [openId, setOpenId] = useState(null);

    const toggleAccordion = (id) => {
        setOpenId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="w-full mb-16">
            {/* Render Motorsport specially because of its nested list structure */}
            <MotorsportAccordion
                data={motorsportAchievements}
                isOpen={openId === 'motorsport'}
                onToggle={() => toggleAccordion('motorsport')}
            />

            {/* Render Standard General Achievements */}
            <div className="space-y-4">
                {generalAchievements.map((item, idx) => (
                    <StandardAccordionItem
                        key={idx}
                        item={item}
                        isOpen={openId === `general-${idx}`}
                        onToggle={() => toggleAccordion(`general-${idx}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AchievementAccordion;
