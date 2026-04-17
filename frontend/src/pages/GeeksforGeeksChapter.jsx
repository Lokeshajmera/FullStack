import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import GfgHero from '../components/Gfg/GfgHero';
import GfgVision from '../components/Gfg/GfgVision';
import GfgMission from '../components/Gfg/GfgMission';
import GfgLeadership from '../components/Gfg/GfgLeadership';
import GfgCoordinators from '../components/Gfg/GfgCoordinators';
import GfgEvents from '../components/Gfg/GfgEvents';

const GeeksforGeeksChapter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 font-sans selection:bg-cyan-500/30 pb-20">
            <GfgHero />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
                <GfgVision />
                <GfgMission />
                <GfgLeadership />
                <GfgCoordinators />
                <GfgEvents />
            </div>
        </div>
    );
};

export default GeeksforGeeksChapter;
