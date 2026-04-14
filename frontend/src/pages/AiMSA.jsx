import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Award, Calendar } from 'lucide-react';
import { 
  aimsaAbout, 
  facultyCoordinators, 
  presidents, 
  vicePresidents,
  studentCoordinators2025_2026,
  studentCoordinators2024_2025,
  studentCoordinators2022_2024
} from '../data/aimsaData';

const ImageWithFallback = ({ src, fallbackSrc, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
      loading="lazy"
    />
  );
};

const ProfileCard = ({ person, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index % 4 * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-300 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col items-center h-full"
  >
    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 mb-4 border-4 border-slate-300 dark:border-slate-700 group-hover:border-cyan-500 transition-colors duration-300 shadow-xl">
      <ImageWithFallback
        src={person.image}
        fallbackSrc={person.fallbackImage}
        alt={person.name}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="text-center flex-grow flex flex-col justify-center items-center w-full">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">{person.name}</h3>
      <p className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-950/50 py-1.5 px-4 rounded-full border border-cyan-800/30 inline-block">
        {person.role}
      </p>
    </div>
  </motion.div>
);

const YearSection = ({ data }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {data.map((person, idx) => (
      <ProfileCard key={idx} person={person} index={idx} />
    ))}
  </div>
);

const AiMSA = () => {
    const [activeYear, setActiveYear] = useState('25-26');

    const yearData = {
        '25-26': studentCoordinators2025_2026,
        '24-25': studentCoordinators2024_2025,
        '22-24': studentCoordinators2022_2024,
    };

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pt-32 pb-12">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            AiMSA
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Artificial Intelligence and Machine Learning Students Association
                    </p>
                </motion.div>

                {/* About Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-100/40 dark:bg-slate-900/40 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 md:p-12 mb-20 backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                       <Users size={200} />
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center justify-center gap-3">
                            <span className="w-12 h-[2px] bg-cyan-500 rounded-full"></span>
                            About AiMSA
                            <span className="w-12 h-[2px] bg-cyan-500 rounded-full"></span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8 text-justify md:text-center">
                            {aimsaAbout.description}
                        </p>
                        
                        <div className="inline-flex items-center gap-4 bg-cyan-950/30 border border-cyan-500/20 px-6 py-4 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.1)] mb-10">
                            <Award className="text-yellow-400" size={32} />
                            <div className="text-left">
                                <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-1">Recognition</p>
                                <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{aimsaAbout.recognition}</p>
                            </div>
                        </div>

                        {/* NVIDIA Recognition Group Photo */}
                        {aimsaAbout.recognitionImage && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.97 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] group"
                            >
                                <img
                                    src={aimsaAbout.recognitionImage}
                                    alt="AiMSA NVIDIA Student Network Recognition"
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    style={{ maxHeight: '480px', objectPosition: 'center top' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                                    <span className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-cyan-500/40 text-cyan-700 dark:text-cyan-300 px-5 py-2 rounded-full text-sm font-semibold">
                                        <Award size={16} className="text-yellow-400" />
                                        AiMSA recognized as NVIDIA Student Network
                                    </span>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Core Team Section */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12 flex items-center justify-center gap-3">
                       Faculty & Core Committee
                    </h2>
                    
                    {/* Faculty */}
                    <div className="mb-16">
                        <h3 className="text-xl text-slate-600 dark:text-slate-400 font-semibold mb-8 text-center uppercase tracking-widest relative">
                            <span className="bg-stone-50 dark:bg-slate-950 px-4 relative z-10">Faculty Coordinator</span>
                            <div className="absolute top-1/2 left-0 right-0 h-px bg-white dark:bg-slate-800 -z-0"></div>
                        </h3>
                        <div className="flex justify-center">
                            <div className="max-w-xs w-full">
                                {facultyCoordinators.map((person, idx) => (
                                    <ProfileCard key={idx} person={person} index={idx} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Presidents & Vice Presidents */}
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        <div className="bg-slate-100/20 dark:bg-slate-900/20 p-6 rounded-2xl border border-slate-300 dark:border-slate-800 w-full max-w-xs">
                            <h3 className="text-xl text-slate-600 dark:text-slate-400 font-semibold mb-6 text-center border-b border-slate-300 dark:border-slate-700/50 pb-4">President</h3>
                            <div className="flex flex-col gap-6">
                                {presidents.map((person, idx) => (
                                    <ProfileCard key={idx} person={person} index={idx} />
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-100/20 dark:bg-slate-900/20 p-6 rounded-2xl border border-slate-300 dark:border-slate-800 w-full max-w-xs">
                            <h3 className="text-xl text-slate-600 dark:text-slate-400 font-semibold mb-6 text-center border-b border-slate-300 dark:border-slate-700/50 pb-4">Vice President</h3>
                            <div className="flex flex-col gap-6">
                                {vicePresidents.map((person, idx) => (
                                    <ProfileCard key={idx} person={person} index={idx} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coordinators Tabs */}
                <div>
                    <div className="text-center mb-10 relative">
                         <div className="absolute top-1/2 left-0 right-0 h-px bg-white/80 dark:bg-slate-800/80 -z-0 hidden md:block"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white inline-flex items-center justify-center gap-3 bg-stone-50 dark:bg-slate-950 px-8 py-2 relative z-10">
                            <Calendar className="text-cyan-600 dark:text-cyan-400" size={28} />
                            Student Coordinators By Year
                        </h2>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
                        {Object.keys(yearData).map((year) => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className={`px-6 md:px-8 py-3 rounded-full font-bold transition-all duration-300 border ${
                                    activeYear === year 
                                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                                        : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:bg-white dark:bg-slate-800 hover:text-slate-900 dark:text-white hover:border-slate-500'
                                }`}
                            >
                                {year === '25-26' ? '2025 - 2026' : year === '24-25' ? '2024 - 2025' : '2022 - 2024'}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeYear}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <YearSection data={yearData[activeYear]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AiMSA;
