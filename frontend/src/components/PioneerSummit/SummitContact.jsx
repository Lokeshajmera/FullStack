import React from 'react';
import { CalendarDays, Clock, Mail, Phone, Users } from 'lucide-react';

const SummitContact = () => {
    return (
        <section className="py-16 bg-stone-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 text-slate-700 dark:text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16 underline decoration-cyan-500 decoration-4 underline-offset-8">
                    Event & Contact Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                    {/* Date & Time */}
                    <div className="flex flex-col items-center md:items-start bg-slate-100/50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-300 dark:border-slate-800">
                        <CalendarDays size={40} className="text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Date & Time</h3>
                        <p className="font-medium text-lg mb-2">24 October 2024</p>
                        <div className="flex items-center text-slate-600 dark:text-slate-400 font-semibold">
                            <Clock size={16} className="mr-2" /> 9:00 AM - 4:00 PM
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center md:items-start bg-slate-100/50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-300 dark:border-slate-800">
                        <Mail size={40} className="text-cyan-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Contact</h3>
                        <a href="mailto:vaishnavi.chormale22@pccoepune.org" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:text-cyan-300 transition-colors font-medium break-all mb-4">
                            vaishnavi.chormale22@pccoepune.org
                        </a>
                        <div className="flex items-center text-slate-700 dark:text-slate-300 font-semibold">
                            <Phone size={16} className="mr-2 text-slate-600 dark:text-slate-400" /> +91 9552281208
                        </div>
                    </div>

                    {/* Organizing Team */}
                    <div className="flex flex-col items-center md:items-start bg-slate-100/50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-300 dark:border-slate-800">
                        <Users size={40} className="text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Organizing Team</h3>
                        <ul className="space-y-3 w-full">
                            <li className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
                                <span className="font-semibold text-slate-900 dark:text-white">Varun Bhilare</span>
                                <span className="text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-0.5 rounded">TPC</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
                                <span className="font-semibold text-slate-900 dark:text-white">Aayush Bodkhe</span>
                                <span className="text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-0.5 rounded">General Chair</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="font-semibold text-slate-900 dark:text-white">Abhishek Bichare</span>
                                <span className="text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-0.5 rounded">Treasurer</span>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SummitContact;
