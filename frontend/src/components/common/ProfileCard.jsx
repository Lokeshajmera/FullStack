import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Globe, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';

const ProfileCard = ({ profile, type = 'faculty' }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (type === 'faculty') {
        return (
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row bg-amber-50/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-[24px] overflow-hidden shadow-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:border-cyan-500/50 transition-all duration-300 relative group max-w-5xl mx-auto w-full"
            >
                {/* Left Side: Image with Name Overlay */}
                <div className="w-full md:w-[280px] shrink-0 relative bg-white/80 dark:bg-slate-950/80 overflow-hidden border-b md:border-b-0 md:border-r border-slate-300 dark:border-slate-800">
                    <img
                        src={profile.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=0f172a&color=22d3ee&size=200`}
                        alt={profile.name}
                        className="w-full h-[350px] md:h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=0f172a&color=22d3ee&size=200` }}
                    />
                    
                    {/* Text overlay on bottom of the image area */}
                    <div className="w-full p-4 text-center z-10 bg-black/60 backdrop-blur-md absolute bottom-0 left-0 border-t border-slate-200 dark:border-slate-800/80">
                        <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-1 tracking-wide">{profile.name}</h3>
                        <p className="text-[13px] font-semibold text-cyan-600 dark:text-cyan-400">
                            {profile.role ? `${profile.role} | ${profile.designation}` : profile.designation}
                        </p>
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full p-6 md:p-8 flex flex-col justify-center bg-white dark:bg-transparent">
                    <div className="text-left w-full space-y-4">
                        <div className="border-b border-slate-200 dark:border-slate-800/60 pb-4 flex text-[14px] leading-relaxed">
                            <span className="text-slate-900 dark:text-slate-100 font-medium whitespace-nowrap mr-2">Qualification :</span> 
                            <span className="text-slate-700 dark:text-slate-300">{profile.qualification}</span>
                        </div>
                        
                        <div className="border-b border-slate-200 dark:border-slate-800/60 pb-4 flex text-[14px] leading-relaxed">
                            <span className="text-slate-900 dark:text-slate-100 font-medium whitespace-nowrap mr-2">Area of Interest :</span> 
                            <span className="text-slate-700 dark:text-slate-300">{profile.areaOfInterest}</span>
                        </div>

                        <div className="border-b border-slate-200 dark:border-slate-800/60 pb-4 flex text-[14px]">
                            <span className="text-slate-900 dark:text-slate-100 font-medium whitespace-nowrap mr-2">Experience :</span> 
                            <span className="text-slate-700 dark:text-slate-300">{profile.experience}</span>
                        </div>
                    </div>

                    {/* Quick Links / Buttons Row (Pills) */}
                    <div className="flex flex-wrap gap-3 mt-6">
                        {profile.website && profile.website !== '#' && profile.website !== '' && (
                            <a href={profile.website} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 border border-cyan-100 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center transform hover:-translate-y-1">
                                Personal Website
                            </a>
                        )}
                        {profile.email && profile.email !== '#' && profile.email !== '' && (
                            <a href={`mailto:${profile.email}`} className="px-4 py-2 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 border border-cyan-100 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center transform hover:-translate-y-1">
                                E-Mail
                            </a>
                        )}
                        {profile.scopus && profile.scopus !== '#' && profile.scopus !== '' && (
                            <a href={profile.scopus} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 border border-cyan-100 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center transform hover:-translate-y-1">
                                Scopus Profile
                            </a>
                        )}
                        {profile.googleScholar && profile.googleScholar !== '#' && profile.googleScholar !== '' && (
                            <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 border border-cyan-100 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center transform hover:-translate-y-1">
                                Google Scholar
                            </a>
                        )}
                        {profile.wos && profile.wos !== '#' && profile.wos !== '' && (
                            <a href={profile.wos} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 border border-cyan-100 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center transform hover:-translate-y-1">
                                WOS Profile
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    }

    // Previous Layout for other types (admin staff, etc.)
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-100/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300"
        >
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start relative">

                {/* Profile Image */}
                <div className="shrink-0 relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-300 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-800">
                        <img
                            src={profile.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=0f172a&color=22d3ee&size=200`}
                            alt={profile.name}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=0f172a&color=22d3ee&size=200` }}
                        />
                    </div>
                </div>

                {/* Main Info */}
                <div className="flex-1 w-full text-left">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{profile.name}</h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium text-sm lg:text-base mb-4 tracking-wide uppercase">
                        {profile.role ? `${profile.role} | ${profile.designation}` : profile.designation}
                    </p>

                    {profile.organization && (
                        <p className="text-slate-600 dark:text-slate-400 mb-4">{profile.organization}</p>
                    )}

                    {/* Quick Links / Buttons Row (Pills) */}
                    <div className="flex flex-wrap gap-3 mt-4">
                        {profile.website && profile.website !== '#' && profile.website !== '' && (
                            <a href={profile.website} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 border border-cyan-100 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center transform hover:-translate-y-1">
                                <Globe size={12} className="mr-1.5" /> Website
                            </a>
                        )}
                        {profile.email && profile.email !== '#' && profile.email !== '' && (
                            <a href={`mailto:${profile.email}`} className="px-4 py-2 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 border border-cyan-100 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center transform hover:-translate-y-1">
                                <Mail size={12} className="mr-1.5" /> E-Mail
                            </a>
                        )}
                        {(profile.Contact || profile.contact) && (
                            <a href={`tel:${profile.Contact || profile.contact}`} className="px-4 py-2 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 border border-cyan-100 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center transform hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                {profile.Contact || profile.contact}
                            </a>
                        )}
                        {profile.scopus && profile.scopus !== '#' && profile.scopus !== '' && (
                            <a href={profile.scopus} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 border border-cyan-100 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center transform hover:-translate-y-1">
                                <ExternalLink size={12} className="mr-1.5" /> Scopus
                            </a>
                        )}
                        {profile.googleScholar && profile.googleScholar !== '#' && profile.googleScholar !== '' && (
                            <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 border border-cyan-100 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center transform hover:-translate-y-1">
                                <ExternalLink size={12} className="mr-1.5" /> Google Scholar
                            </a>
                        )}
                        {profile.wos && profile.wos !== '#' && profile.wos !== '' && (
                            <a href={profile.wos} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 border border-cyan-100 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center transform hover:-translate-y-1">
                                <ExternalLink size={12} className="mr-1.5" /> WOS Profile
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
