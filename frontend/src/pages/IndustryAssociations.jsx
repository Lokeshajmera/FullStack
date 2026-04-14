import React, { useState } from 'react';
import AssociationCards from '../components/IndustryInteraction/AssociationCards';
import AssociationModal from '../components/IndustryInteraction/AssociationModal';

const IndustryAssociations = () => {
    const [selectedAssociation, setSelectedAssociation] = useState(null);

    const handleReadMore = (association) => {
        setSelectedAssociation(association);
    };

    const handleCloseModal = () => {
        setSelectedAssociation(null);
    };

    return (
        <div className="w-full min-h-[calc(100vh-80px)] bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans pt-16 relative">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 uppercase tracking-tight">
                    Industry Associations
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-3xl mx-auto">
                    Exploring our prestigious partnerships and memorandums with industry leaders to drive innovation and student success.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-8 rounded-full"></div>
            </div>

            <AssociationCards onReadMore={handleReadMore} />

            <AssociationModal
                isOpen={!!selectedAssociation}
                onClose={handleCloseModal}
                association={selectedAssociation}
            />
        </div>
    );
};

export default IndustryAssociations;
