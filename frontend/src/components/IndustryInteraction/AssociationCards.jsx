import React from 'react';
import { ArrowRight } from 'lucide-react';
import { associationsData } from '../../data/industryInteractionData';

const AssociationCard = ({ association, onReadMore }) => {
    return (
        <div className="bg-amber-50/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-lg flex flex-col group h-full">
            {/* Logo Area */}
            <div className="h-56 bg-white p-6 flex flex-col items-center justify-center relative overflow-hidden border-b border-slate-100 dark:border-slate-800">
                {association.logo ? (
                    <img
                        src={association.logo}
                        alt={association.title}
                        className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="text-4xl font-black text-cyan-600 dark:text-cyan-600 dark:text-cyan-400">
                        {association.title.charAt(0)}
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow bg-slate-50 dark:bg-slate-950">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 min-h-[3.5rem]">
                    {association.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-4 flex-grow">
                    {association.shortDescription}
                </p>

                <button
                    onClick={() => onReadMore(association)}
                    className="self-start inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors mt-auto group/btn text-sm"
                >
                    Read more
                    <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

const AssociationCards = ({ onReadMore }) => {
    return (
        <section className="py-8 bg-stone-50 dark:bg-slate-950 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {associationsData.map((assoc) => (
                        <AssociationCard
                            key={assoc.id}
                            association={assoc}
                            onReadMore={onReadMore}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AssociationCards;
