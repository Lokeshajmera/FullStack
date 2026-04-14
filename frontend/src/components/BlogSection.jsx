import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ArrowRight, X, Share2, Copy, MessageCircle, Mail, Twitter, Linkedin, Calendar, Clock } from 'lucide-react';

import nhcxImg from '../assets/achievements/nhcx.png';
import labImg from '../assets/labs/Nano-Kits.jpg';
import muksImg from '../assets/industry/27-August.jpg';

const blogPosts = [
    {
        id: 1,
        title: "National First Prize at NHCX Hackathon",
        author: "Student Achievements",
        date: "April 4, 2024",
        readTime: "5 min read",
        image: nhcxImg,
        preview: "A massive congratulations to Abhishek Nikam and team for securing 1st Prize and a ₹5,00,000 cash award at the NHCX Hackathon organized by NHA and IIT Hyderabad.",
        content: `
            We are incredibly proud to announce that our AIML students have secured the First Prize and a cash award of ₹5,00,000 at the highly competitive NHCX Hackathon! The event was jointly organized by the National Health Authority (NHA) and IIT Hyderabad.
            
            Our winning team, led by Abhishek Nikam, developed an innovative AI healthcare solution that impressed the judges with its precision and real-world applicability in predictive diagnostics. 
            
            This remarkable achievement underlines the quality of education and practical problem-solving skills nurtured at PCCOE's AIML Department. We applaud the students' dedication and the faculty mentors who guided them toward this prestigious national recognition.
        `
    },
    {
        id: 2,
        title: "NVIDIA Edge AI Laboratory Inaugurated",
        author: "Department Infrastructure",
        date: "March 28, 2024",
        readTime: "3 min read",
        image: labImg,
        preview: "We have successfully developed an Industry associated 'NVIDIA® AI/ DL Embedded Laboratory' to solve real-time problems using advanced Jetson Nano edge AI technologies.",
        content: `
            We are thrilled to announce the successful inauguration of our new 'NVIDIA® AI/ DL Embedded Laboratory' – a dedicated facility developed in association with industry leaders.
            
            This specialized lab is equipped with the latest NVIDIA Jetson Nano computing modules and Edge AI toolkits, designed specifically to train students in real-time problem-solving. By working on high-performance edge computing infrastructure, students can deploy lightweight machine learning models for robotics, smart IoT networks, and computer vision applications directly on the edge.
            
            The facility bridges the gap between academic theory and industry demands, giving our AIML students hands-on access to the same hardware technologies used in autonomous vehicles and intelligent automation globally.
        `
    },
    {
        id: 3,
        title: "AI Robotics Lab & Muks Robotics MOU",
        author: "Industry Interaction",
        date: "March 15, 2024",
        readTime: "4 min read",
        image: muksImg,
        preview: "A strategic 5-year MOU with Muks Robotics brings a new AI Robotics Lab, hardware sponsorships, and exclusive paid summer internships for our AIML students.",
        content: `
            In a major step towards enhancing industry-academia collaboration, the AIML Department has signed a strategic 5-year Memorandum of Understanding (MOU) with Muks Robotics.
            
            This partnership brings a multitude of benefits to our students. Centerpiece to the MOU is the establishment of a state-of-the-art 'AI Robotics Lab' right on campus, fully sponsored by Muks Robotics. Additionally, the company will provide raw materials, specialized hardware, and continuous mentorship for student projects.
            
            Outstanding students will also have the direct opportunity to secure paid summer internships and full-time placement offers, allowing them to work on core robotics and AI automation products before they even graduate.
        `
    }
];

const BlogSection = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [isShareOpen, setIsShareOpen] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedPost) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setIsShareOpen(false); // Reset share dropdown when closing
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedPost]);

    return (
        <section className="py-24 bg-slate-100 dark:bg-slate-900 aiml-blog relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Technical <span className="text-cyan-600 dark:text-cyan-400">Insights</span> & News</h2>
                        <p className="text-slate-600 dark:text-slate-400">Latest updates, tutorials, and research from the AIML department.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="bg-stone-50 dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 hover:border-cyan-500/50 transition-all group shadow-lg flex flex-col"
                        >
                            <div className="w-full h-48 overflow-hidden relative shrink-0">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 to-transparent opacity-60"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-cyan-600 dark:text-cyan-400 mb-3 text-sm font-medium">
                                    <User size={14} className="mr-2" />
                                    <span>{post.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">
                                    {post.preview}
                                </p>
                                <button 
                                    onClick={() => setSelectedPost(post)}
                                    className="inline-flex items-center text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 font-semibold transition-colors group/btn mt-auto text-left"
                                >
                                    Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Inline Modal for the Article */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 pt-28 sm:px-6 sm:pt-32"
                    >
                        {/* Backdrop overlay */}
                        <div 
                            className="fixed inset-0 bg-stone-100 dark:bg-slate-900/80 backdrop-blur-sm"
                            onClick={() => setSelectedPost(null)}
                        ></div>

                        <motion.div 
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-3xl bg-stone-50 dark:bg-slate-950 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[calc(100vh-140px)] z-10 border border-slate-200 dark:border-slate-800"
                        >
                            {/* Header Buttons */}
                            <div className="absolute top-4 right-4 z-20 flex items-center gap-3">
                                {/* Share Dropdown Wrapper */}
                                <div className="relative">
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsShareOpen(!isShareOpen);
                                        }}
                                        className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white hover:bg-white/40 dark:hover:bg-black/60 transition-colors shadow-sm"
                                        title="Share"
                                    >
                                        <Share2 size={18} />
                                    </button>
                                    
                                    <AnimatePresence>
                                        {isShareOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute right-0 mt-2 w-48 bg-amber-50/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden z-50 flex flex-col py-2"
                                            >
                                                <button 
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(window.location.href);
                                                        setIsShareOpen(false);
                                                        alert('Link copied to clipboard!');
                                                    }}
                                                    className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors w-full text-left"
                                                >
                                                    <Copy size={16} className="mr-3" /> Copy Link
                                                </button>
                                                <a 
                                                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(selectedPost.title + " - " + window.location.href)}`}
                                                    target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-green-500 transition-colors w-full text-left"
                                                >
                                                    <MessageCircle size={16} className="mr-3" /> WhatsApp
                                                </a>
                                                <a 
                                                    href={`mailto:?subject=${encodeURIComponent(selectedPost.title)}&body=${encodeURIComponent("Check out this article: " + window.location.href)}`}
                                                    className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-red-500 transition-colors w-full text-left"
                                                >
                                                    <Mail size={16} className="mr-3" /> Gmail
                                                </a>
                                                <a 
                                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedPost.title)}&url=${encodeURIComponent(window.location.href)}`}
                                                    target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-400 transition-colors w-full text-left"
                                                >
                                                    <Twitter size={16} className="mr-3" /> X (Twitter)
                                                </a>
                                                <a 
                                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                                    target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors w-full text-left"
                                                >
                                                    <Linkedin size={16} className="mr-3" /> LinkedIn
                                                </a>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <button 
                                    onClick={() => setSelectedPost(null)}
                                    className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors shadow-sm"
                                    title="Close"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Content Scrollable Area */}
                            <div className="overflow-y-auto custom-scrollbar flex-grow">
                                <div className="w-full h-64 md:h-80 relative shrink-0">
                                    <img 
                                        src={selectedPost.image} 
                                        alt={selectedPost.title} 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 to-transparent"></div>
                                </div>
                                
                                <div className="p-6 sm:p-10 -mt-20 relative z-10 w-full">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                                        {selectedPost.title}
                                    </h2>

                                    <div className="flex flex-wrap items-center text-sm text-slate-600 dark:text-slate-400 gap-4 mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
                                        <div className="flex items-center">
                                            <User size={16} className="mr-2 text-cyan-600 dark:text-cyan-400" />
                                            <span className="font-medium text-slate-700 dark:text-slate-300">{selectedPost.author}</span>
                                        </div>
                                    </div>

                                    <div className="prose prose-lg dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:text-slate-700 dark:prose-p:text-slate-700 dark:text-slate-300">
                                        {selectedPost.content.split('\n').map((paragraph, idx) => (
                                            paragraph.trim() ? <p key={idx} className="mb-6">{paragraph.trim()}</p> : null
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default BlogSection;
