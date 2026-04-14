import React, { useEffect } from 'react';
import AboutIntro from '../components/about/AboutIntro';
import ProgramHighlights from '../components/about/ProgramHighlights';
import VisionMission from '../components/about/VisionMission';
import PEOSection from '../components/about/PEOSection';
import POSection from '../components/about/POSection';
import PSOSection from '../components/about/PSOSection';
import AdvisoryBoard from '../components/about/AdvisoryBoard';

const About = () => {
    // Scroll to top when page mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pt-16">
            <AboutIntro />
            <ProgramHighlights />
            <VisionMission />
            <PEOSection />
            <POSection />
            <PSOSection />
            <AdvisoryBoard />
        </div>
    );
};

export default About;
