import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import ProfileCard from '../components/common/ProfileCard';
import { facultyData } from '../data/facultyData';

const FacultyProfile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    title="Faculty Profile"
                    subtitle="Meet our distinguished faculty members dedicated to AI & ML education and research."
                />

                <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                    {facultyData.map((faculty, index) => (
                        <motion.div
                            key={faculty.id || index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <ProfileCard profile={faculty} type="faculty" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FacultyProfile;
