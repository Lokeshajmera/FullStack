import React from 'react';
import SummitHero from '../components/PioneerSummit/SummitHero';
import SummitAbout from '../components/PioneerSummit/SummitAbout';
import SummitGuidelines from '../components/PioneerSummit/SummitGuidelines';
import SummitWinners from '../components/PioneerSummit/SummitWinners';
import SummitContact from '../components/PioneerSummit/SummitContact';

const AiMlPioneerSummit = () => {
    return (
        <div className="w-full min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans">
            {/* 
                We compose the entire Pioneer Summit page cleanly out of 5 semantic blocks
            */}
            <SummitHero />
            <SummitAbout />
            <SummitGuidelines />
            <SummitWinners />
            <SummitContact />
        </div>
    );
};

export default AiMlPioneerSummit;
