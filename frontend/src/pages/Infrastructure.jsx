import React from 'react';
import InfrastructureSection from '../components/InfrastructureSection';

const Infrastructure = () => {
    return (
        <div className="bg-stone-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white">
            <div className="py-12 text-center bg-slate-100 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800">
                <h1 className="text-4xl font-bold">Infrastructure & Labs</h1>
            </div>
            <InfrastructureSection />
        </div>
    );
};

export default Infrastructure;
