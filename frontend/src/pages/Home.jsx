import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import FacultySection from '../components/FacultySection';
import InfrastructureSection from '../components/InfrastructureSection';
import AchievementsSection from '../components/AchievementsSection';
import PlacementsSection from '../components/PlacementsSection';
import NoticesSection from '../components/NoticesSection';
import ContactSection from '../components/ContactSection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import ProjectsGallery from '../components/ProjectsGallery';

const Home = () => {
    return (
        <div className="w-full relative">
            <Hero />
            <AboutSection />
            <ProgramsSection />
            <FacultySection />
            <InfrastructureSection />
            <AchievementsSection />
            <ProjectsGallery />
            <PlacementsSection />
            <NoticesSection />
            <BlogSection />
            <FAQSection />
            <ContactSection />
        </div>
    );
};

export default Home;
