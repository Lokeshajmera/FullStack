import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Phone, X, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const sendThankYouEmail = async (data) => {
        try {
            console.log('Attempting to send email with:', {
                serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
                templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.slice(0, 5) + '...'
            });

            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            if (result.status === 200) {
                console.log('Automated response sent successfully!');
                return true;
            }
            return false;
        } catch (error) {
            console.error('EmailJS Error Details:', error);
            return false;
        }
    };

    const validateEmail = (email) => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'message' && value.length > 200) return;
        
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim() || !validateEmail(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        if (!supabase) {
            setStatus('config_error');
            return;
        }

        setStatus('sending');
        setErrorMessage('');

        try {
            // 1. Save to Supabase
            const { error } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message
                    }
                ]);

            if (error) throw error;

            // 2. Trigger automated email response
            const emailSent = await sendThankYouEmail(formData);

            if (emailSent) {
                setStatus('success');
                setShowModal(true);
            } else {
                setStatus('partial_success');
                setShowModal(true);
            }

            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            console.error('Error submitting form:', err);
            setStatus('error');
            setErrorMessage(err.message || 'Check if the table "contact_submissions" exists and RLS allows inserts.');
        }
    };

    return (
        <section className="py-24 bg-stone-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 lg:mb-24">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Get in <span className="text-cyan-600 dark:text-cyan-400">Touch</span></h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Have questions? We'd love to hear from you.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-100/50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-300 dark:border-slate-800"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} rounded-lg focus:outline-none focus:border-cyan-500 text-slate-900 dark:text-white transition-colors`}
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} rounded-lg focus:outline-none focus:border-cyan-500 text-slate-900 dark:text-white transition-colors`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-slate-900 dark:text-white transition-colors"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} rounded-lg focus:outline-none focus:border-cyan-500 text-slate-900 dark:text-white transition-colors`}
                                    placeholder="Your message..."
                                ></textarea>
                                <div className="flex justify-between items-center mt-1">
                                    {errors.message ? (
                                        <p className="text-red-500 text-xs">{errors.message}</p>
                                    ) : (
                                        <span></span>
                                    )}
                                    <span className={`text-xs ${formData.message.length === 200 ? 'text-red-500' : formData.message.length > 180 ? 'text-orange-400' : 'text-slate-500'}`}>
                                        {formData.message.length}/200
                                    </span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-slate-900 dark:text-white font-bold rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? 'Sending...' : (
                                    <>Send Message <Send className="ml-2 w-5 h-5" /></>
                                )}
                            </button>

                            {status === 'error' && (
                                <div className="text-center">
                                    <p className="text-red-400">Failed to send message.</p>
                                    <p className="text-red-500/80 text-xs mt-1 font-mono">{errorMessage}</p>
                                </div>
                            )}
                            {status === 'config_error' && <p className="text-yellow-400 text-center">Backend not configured. Please add Supabase details to .env</p>}
                        </form>
                    </motion.div>

                    {/* Map and Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Map */}
                        <div className="h-80 w-full rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2743621455246!2d73.7610664!3d18.6517228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e665a3c613%3A0xc6cda972629b357e!2sPimpri%20Chinchwad%20College%20Of%20Engineering%20(PCCOE)!5e0!3m2!1sen!2sin!4v1708365432100!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-800 flex flex-col items-center text-center">
                                <MapPin className="text-cyan-600 dark:text-cyan-400 w-8 h-8 mb-3" />
                                <h4 className="text-slate-900 dark:text-white font-semibold mb-1">Visit Us</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Sector - 26, Pradhikaran, Nigdi, Pune, Maharashtra 411044</p>
                            </div>
                            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-800 flex flex-col items-center text-center">
                                <Phone className="text-cyan-600 dark:text-cyan-400 w-8 h-8 mb-3" />
                                <h4 className="text-slate-900 dark:text-white font-semibold mb-1">Call Us</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">020-27653168-2151</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Mon - Fri, 9am - 5pm</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Success Modal Popup */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl p-6 text-center"
                        >
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors focus:outline-none"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="flex justify-center mb-4 mt-2">
                                <CheckCircle size={64} className="text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent Successfully</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Thank you for contacting us! We will get back to you shortly.
                            </p>
                            <button 
                                onClick={() => setShowModal(false)}
                                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-slate-900 dark:text-white font-bold rounded transition-colors focus:outline-none"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ContactSection;
