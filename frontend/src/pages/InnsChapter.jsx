import React from 'react';
import InnsHero from '../components/INNS/InnsHero';
import InnsAbout from '../components/INNS/InnsAbout';
import InnsEvent from '../components/INNS/InnsEvent';
import InnsMembers from '../components/INNS/InnsMembers';

const InnsChapter = () => {
    return (
        <div className="w-full min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans">
            {/* The page composite structure */}
            <InnsHero />
            <InnsAbout />
            <InnsEvent />
            <InnsMembers />
        </div>
    );
};

export default InnsChapter;
