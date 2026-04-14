import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, CheckCircle, Award, ChevronDown } from 'lucide-react';

const ImageCarousel = ({ images }) => {
    if (!images || images.length === 0) return null;
    
    if (images.length === 1) {
        return (
            <div className="flex justify-start mt-4 mb-2">
                <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/50 group w-full max-w-md aspect-video flex items-center justify-center">
                    <img 
                        src={images[0]} 
                        alt="Gallery Image" 
                        loading="lazy"
                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {images.map((img, idx) => (
                <div key={idx} className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/50 group aspect-video flex items-center justify-center">
                    <img 
                        src={img} 
                        alt={`Gallery Image ${idx + 1}`} 
                        loading="lazy"
                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            ))}
        </div>
    );
};

const InfiniteMarquee = ({ images }) => {
    if (!images || images.length === 0) return null;
    
    return (
        <div className="overflow-hidden whitespace-nowrap py-6 bg-slate-100/50 dark:bg-slate-900/40 rounded-3xl mb-10 relative border border-slate-200/60 dark:border-slate-800/60">
            <motion.div 
                className="inline-flex gap-6 px-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                {/* Double the images for seamless loop */}
                {[...images, ...images, ...images].map((img, idx) => (
                    <div key={idx} className="w-72 h-44 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-white/20 dark:border-slate-700/50 group">
                        <img 
                            src={img} 
                            alt={`Industry expert ${idx}`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                    </div>
                ))}
            </motion.div>
            
            {/* Gradient overlays for smooth fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-100 dark:from-slate-900/60 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-100 dark:from-slate-900/60 to-transparent z-10" />
        </div>
    );
};

const AutoImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden group">
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={`Slider image ${currentIndex + 1}`}
                />
            </AnimatePresence>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 shadow-md ${idx === currentIndex ? "w-6 bg-cyan-400" : "w-2 bg-white/60 hover:bg-white/90"}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

const SectionRenderer = ({ content, type }) => {

    // For Events which have nested accordions
    const [openEventId, setOpenEventId] = useState(null);

    if (type === 'events_accordion') {
        return (
            <div className="space-y-6">
                <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-6 uppercase tracking-wider flex items-center">
                    <Award className="mr-3 text-cyan-500" />
                    {content.subtitle}
                </h3>

                {/* Infinite Marquee for Industry Images */}
                {content.marqueeImages && (
                    <InfiniteMarquee images={content.marqueeImages} />
                )}

                <div className="flex flex-col space-y-4">
                    {content.sessionsList.map((session, idx) => {
                        const isOpen = openEventId === idx;
                        return (
                            <div key={idx} className={`bg-stone-100 dark:bg-slate-900/50 rounded-2xl border ${isOpen ? 'border-cyan-500/50 shadow-md' : 'border-slate-200 dark:border-slate-800 shadow-sm'} overflow-hidden transition-all duration-300`}>
                                <button 
                                    onClick={() => setOpenEventId(isOpen ? null : idx)}
                                    className="w-full text-left p-6 flex justify-between items-center group"
                                >
                                    <div className="flex-1 pr-4">
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-cyan-600 dark:text-cyan-400 mb-2 leading-tight">{session.title}</h4>
                                        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                            <Calendar size={16} className="mr-2 text-blue-500 shrink-0" />
                                            {session.date}
                                        </div>
                                    </div>
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-cyan-500 text-white rotate-180' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 group-hover:bg-cyan-100 dark:group-hover:bg-slate-700'}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>
                                
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-6 pt-0 border-t border-slate-200 dark:border-slate-800 mt-4">
                                                <div className="flex items-start text-sm text-slate-600 dark:text-slate-300 mb-4 ml-2">
                                                    <User size={16} className="mr-2 mt-0.5 shrink-0 text-blue-500" />
                                                    <span className="font-semibold">{session.speaker}</span>
                                                </div>
                                                <p className="text-slate-700 dark:text-slate-400 ml-2 mb-4 leading-relaxed whitespace-pre-line">{session.desc}</p>
                                                {session.images && session.images.length > 0 && (
                                                    <div className="mt-4 ml-2 w-full pr-4">
                                                        <ImageCarousel images={session.images} />
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {content.intro && (
                <div className={`flex flex-col ${content.introImage ? 'lg:flex-row gap-6 items-start' : ''}`}>
                    <div className={`flex-1 ${!content.introImage ? 'bg-blue-50/50 dark:bg-slate-900/30 p-6 rounded-2xl border-l-4 border-blue-500' : ''}`}>
                        <p className={`text-base text-slate-700 dark:text-slate-300 ${content.introImage ? 'leading-relaxed' : 'font-medium leading-relaxed'} whitespace-pre-line`}>
                            {content.intro}
                        </p>
                    </div>
                    {content.introImage && (
                        <div className="w-full lg:w-1/2 flex-shrink-0 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 aspect-video">
                             {Array.isArray(content.introImage) ? (
                                 <AutoImageSlider images={content.introImage} />
                             ) : (
                                 <img src={content.introImage} alt="Intro Image" className="w-full h-full absolute inset-0 object-cover" />
                             )}
                        </div>
                    )}
                </div>
            )}
            
            {content.mouDetails && (
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-cyan-600 dark:text-cyan-400 mb-4">MOU Highlights & Activities</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {content.mouDetails.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                                <CheckCircle size={20} className="mr-3 text-emerald-500 shrink-0 mt-0.5" />
                                <span className="text-slate-700 dark:text-slate-300">{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {content.sections && content.sections.map((section, idx) => (
                <div key={idx} className="bg-stone-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <h4 className="text-lg md:text-xl font-bold text-white bg-[#1ba1e2] dark:bg-cyan-600 w-full p-4">{section.heading}</h4>
                    
                    <div className="p-5">
                        {section.details && (
                            <ul className="space-y-3 mb-4">
                                {section.details.map((desc, dIdx) => (
                                    <li key={dIdx} className="text-slate-700 dark:text-slate-400 text-sm">{desc}</li>
                                ))}
                            </ul>
                        )}

                        {/* Side-by-side layout when both bullets and images exist */}
                        {section.bullets && section.images ? (
                            <div className="flex flex-col sm:flex-row gap-5 items-start">
                                <ul className="space-y-2 flex-1">
                                    {section.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="flex items-start">
                                            <CheckCircle size={16} className="mr-2 text-emerald-500 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 dark:text-slate-300 text-sm">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="sm:w-64 sm:shrink-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <img src={section.images[0]} alt={section.heading} className="w-full h-auto object-contain" />
                                </div>
                            </div>
                        ) : (
                            <>
                                {section.bullets && (
                                    <ul className="space-y-2">
                                        {section.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="flex items-start">
                                                <CheckCircle size={16} className="mr-2 text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-slate-700 dark:text-slate-300 text-sm">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {section.images && (
                                    <div className="mt-3 inline-block rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm max-w-xs">
                                        {section.images.length === 1
                                            ? <img src={section.images[0]} alt={section.heading} className="w-full h-auto object-contain" />
                                            : <ImageCarousel images={section.images} />
                                        }
                                    </div>
                                )}
                            </>
                        )}

                        {section.subSections && (
                             <div className="space-y-6 mt-4">
                                 {section.subSections.map((sub, sIdx) => (
                                     <div key={sIdx}>
                                         <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed font-medium text-sm">{sub.text}</p>
                                         {sub.images && <ImageCarousel images={sub.images} />}
                                     </div>
                                 ))}
                             </div>
                        )}
                    </div>
                </div>
            ))}

            {content.objectives && (
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-cyan-600 dark:text-cyan-400 mb-4">Key Objectives</h3>
                    <ul className="space-y-3">
                        {content.objectives.map((obj, idx) => (
                            <li key={idx} className="flex items-start">
                                <CheckCircle size={20} className="mr-3 text-blue-500 shrink-0 mt-0.5" />
                                <span className="text-slate-700 dark:text-slate-300">{obj}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {content.coteachingData && (
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">Co-Teaching Programs</h3>
                    {content.coteachingData.map((course, idx) => (
                        <div key={idx} className="bg-amber-50/60 dark:bg-slate-900/50 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h4 className="text-xl font-black text-blue-600 dark:text-cyan-600 dark:text-cyan-400 mb-4">{course.course}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mb-6">
                                <div className="text-sm"><strong className="text-slate-900 dark:text-white">Expert:</strong> <span className="text-slate-600 dark:text-slate-400">{course.expert}</span></div>
                                <div className="text-sm"><strong className="text-slate-900 dark:text-white">Semester:</strong> <span className="text-slate-600 dark:text-slate-400">{course.semester}</span></div>
                                <div className="text-sm"><strong className="text-slate-900 dark:text-white">Duration:</strong> <span className="text-slate-600 dark:text-slate-400">{course.duration}</span></div>
                                <div className="text-sm"><strong className="text-slate-900 dark:text-white">Sessions:</strong> <span className="text-slate-600 dark:text-slate-400">{course.sessions}</span></div>
                                <div className="text-sm"><strong className="text-slate-900 dark:text-white">Syllabus:</strong> <span className="text-slate-600 dark:text-slate-400">{course.syllabus}</span></div>
                                <div className="text-sm"><strong className="text-slate-900 dark:text-white">Students Benefited:</strong> <span className="text-slate-600 dark:text-slate-400">{course.students}</span></div>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">{course.details}</p>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-4">
                                <strong className="block text-blue-600 dark:text-blue-400 mb-1 flex items-center">
                                    <Award size={18} className="mr-2" /> Student Accomplishments
                                </strong>
                                <p className="text-sm text-slate-700 dark:text-slate-300">{course.accomplishments}</p>
                            </div>
                            {course.images && <ImageCarousel images={course.images} />}
                        </div>
                    ))}
                </div>
            )}

            {content.projects && (
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">Key Projects</h3>
                    {content.projectsIntro && <p className="text-slate-600 dark:text-slate-400 whitespace-pre-line">{content.projectsIntro}</p>}
                    {content.projectsIntroImage && <ImageCarousel images={Array.isArray(content.projectsIntroImage) ? content.projectsIntroImage : [content.projectsIntroImage]} />}
                    <div className="space-y-6 mt-6">
                        {content.projects.map((proj, idx) => (
                            <div key={idx} className="bg-stone-100 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{proj.name}</h4>
                                    <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-600 dark:text-cyan-400 text-xs font-bold rounded-full">{proj.year}</span>
                                </div>
                                <p className="text-sm text-blue-600 dark:text-cyan-600 dark:text-cyan-400 font-semibold mb-3">Team: {proj.team}</p>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed mb-4">{proj.desc}</p>
                                {proj.images && <ImageCarousel images={proj.images} />}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {content.roadmap && (
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-cyan-600 dark:text-cyan-400 mb-3">Roadmap</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{content.roadmap}</p>
                </div>
            )}

            {content.certifications && (
                <div className="overflow-x-auto mt-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-cyan-600 dark:text-cyan-400 mb-4">Certifications</h3>
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden hidden md:table">
                        <thead>
                            <tr className="bg-stone-100 dark:bg-slate-800/80">
                                <th className="p-4 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">Student Name</th>
                                <th className="p-4 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">Course</th>
                                <th className="p-4 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700 whitespace-nowrap">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content.certifications.map((cert, idx) => (
                                <tr key={idx} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-stone-100 dark:bg-slate-900/30 transition-colors">
                                    <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{cert.student}</td>
                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400 whitespace-pre-line">{cert.course}</td>
                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{cert.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="md:hidden space-y-4">
                         {content.certifications.map((cert, idx) => (
                             <div key={idx} className="bg-stone-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                                 <strong className="block text-slate-900 dark:text-white mb-2">{cert.student}</strong>
                                 <p className="text-xs text-slate-600 dark:text-slate-400 whitespace-pre-line mb-2">{cert.course}</p>
                                 <p className="text-xs text-cyan-600 dark:text-cyan-600 dark:text-cyan-400">{cert.date}</p>
                             </div>
                         ))}
                    </div>
                    {content.certificationsImage && <ImageCarousel images={Array.isArray(content.certificationsImage) ? content.certificationsImage : [content.certificationsImage]} />}
                </div>
            )}

            {content.scope && (
                <div className="space-y-6">
                    {content.scope.map((item, idx) => (
                        <div key={idx}>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-cyan-600 dark:text-cyan-400 mb-3">{item.title}</h3>
                            <ul className="space-y-2">
                                {item.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start text-slate-700 dark:text-slate-400 text-sm">
                                        <CheckCircle size={16} className="mr-3 text-cyan-500 shrink-0 mt-0.5" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
            
            {content.details && !content.sections && (
                 <div className="bg-stone-100 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 whitespace-pre-line text-slate-700 dark:text-slate-300 leading-relaxed">
                     {content.details}
                 </div>
            )}
            {content.notes && (
                <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-200 dark:border-amber-800/30 whitespace-pre-line text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                    {content.notes}
                </div>
            )}

            {content.images && <ImageCarousel images={content.images} />}

        </div>
    );
};


import { createPortal } from 'react-dom';

const AssociationModal = ({ isOpen, onClose, association }) => {
    if (!association) return null;

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-stone-100 dark:bg-slate-900/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl bg-stone-50 dark:bg-slate-950 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10 border border-slate-200 dark:border-slate-800"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-6 py-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between z-[100000]">
                            <div className="flex items-center gap-6 pr-12">
                                <div className="hidden sm:flex shrink-0 w-20 h-20 bg-stone-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 items-center justify-center p-2">
                                    {association.logo ? (
                                        <img src={association.logo} alt={association.title} className="max-w-full max-h-full object-contain" />
                                    ) : (
                                        <span className="text-2xl font-black text-cyan-600">{association.title.charAt(0)}</span>
                                    )}
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                                        {association.title}
                                    </h2>
                                    {association.content.subtitle && (
                                        <span className="inline-block mt-2 px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-600 dark:text-cyan-400 text-xs font-bold rounded-full">
                                            {association.content.subtitle}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="absolute right-6 top-6 p-2 rounded-full bg-stone-100 dark:bg-slate-800 text-slate-500 hover:text-red-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-[100001] shadow-sm hover:shadow-md cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto overflow-x-hidden p-6 md:p-10 hide-scrollbar flex-1 bg-slate-50/50 dark:bg-slate-950">
                            <SectionRenderer content={association.content} type={association.type} />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    // Render directly into document body to completely bypass any stacking context issues (e.g. z-index vs Navbar)
    return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};

export default AssociationModal;
