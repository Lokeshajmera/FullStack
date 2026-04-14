import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const GfgMission = () => {
    return (
        <section className="relative bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 overflow-hidden border border-slate-100">
            {/* Decorative background element */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -ml-20 -mb-20 opacity-60"></div>

            <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shadow-inner">
                        <Target size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">MISSION</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-lg text-slate-600 leading-relaxed space-y-4">
                        <span className="block mb-4">
                            Our mission is to cultivate a thriving coding culture at PCCOE (Pimpri Chinchwad College of Engineering), enabling students to develop coding skills, foster innovation, and achieve excellence, ensuring they are well-prepared for successful tech careers. PCCOE’s GeeksforGeeks Student Chapter is a vibrant community of budding programmers and technology enthusiasts from Pimpri Chinchwad College of Engineering (PCCOE). We seek to cultivate a culture of constant learning, creativity, and cooperation among students who are passionate about coding, algorithms, and technology. Through seminars, hackathons, coding challenges, and knowledge-sharing events, we equip our members to flourish in the ever-changing digital scene. Through interactive workshops, insightful webinars, hackathons, and coding competitions, we empower students not just to write code, but to craft elegant solutions that make a tangible impact. By connecting classroom knowledge with real-world applications, we prepare everyone to excel in the ever-evolving technological landscape. Join us in this journey of sculpting minds, honing skills, and forging connections that last a lifetime. Stay tuned for our exciting events, thought-provoking discussions, and learning opportunities from industry experts.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default GfgMission;

