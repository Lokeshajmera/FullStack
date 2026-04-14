import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import ProfileCard from '../components/common/ProfileCard';
import { adminStaffData } from '../data/adminStaffData';

const AdminStaff = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    title="Administrative Staff"
                    subtitle="The dedicated team supporting operations and facilities for the AI & ML department."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {adminStaffData.map((staff, index) => (
                        <motion.div
                            key={staff.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <ProfileCard profile={staff} type="admin" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminStaff;
