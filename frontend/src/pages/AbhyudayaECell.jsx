import React from 'react';
import JourneyCarousel from '../components/Abhyudaya/JourneyCarousel';
import ECellAbout from '../components/Abhyudaya/ECellAbout';
import abhyudayaLogo from '../assets/abhyudaya/abhyudaya.jpg';

const AbhyudayaECell = () => {
    return (
        <div className="bg-stone-50 dark:bg-slate-950 min-h-screen pb-12 w-full text-slate-700 dark:text-slate-300">
            {/* Page Header */}
            <div className="text-center mb-6 flex flex-col items-center">
                <img 
                    src={abhyudayaLogo} 
                    alt="Abhyudaya Logo" 
                    className="h-28 md:h-36 w-auto mb-6 rounded-lg object-contain shadow-md" 
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                    Abhyudaya <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">E-Cell</span>
                </h1>
                <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full mt-4"></div>
            </div>

            {/* Main Components */}
            <JourneyCarousel />
            <ECellAbout />
        </div>
    );
};

export default AbhyudayaECell;
