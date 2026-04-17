import React from 'react';
import FeaturedEvent from '../components/StudentActivities/FeaturedEvent';
import ActivityAccordion from '../components/StudentActivities/ActivityAccordion';

const StudentActivities = () => {
    return (
        <div className="bg-stone-50 dark:bg-slate-950 min-h-screen pb-16 w-full text-slate-700 dark:text-slate-300">
            {/* Page Header */}
            <div className="text-center mb-10 pt-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                    Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Activities</span>
                </h1>
                <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full mt-4"></div>
            </div>

            {/* Main Content Container */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeaturedEvent />
                <ActivityAccordion />
            </main>
        </div>
    );
};

export default StudentActivities;
