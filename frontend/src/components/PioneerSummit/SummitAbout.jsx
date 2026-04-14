import React from 'react';
import { Newspaper } from 'lucide-react';
import gal1 from '../../assets/pioneer-summit/gallery-1.jpg';
import gal2 from '../../assets/pioneer-summit/gallery-2.jpg';
import gal3 from '../../assets/pioneer-summit/gallery-3.jpg';
import gal4 from '../../assets/pioneer-summit/gallery-4.jpg';

const galleryImages = [gal1, gal2, gal3, gal4];

const SummitAbout = () => {
    return (
        <section className="py-16 bg-stone-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
                    <div className="flex items-center mb-8 border-b border-slate-300 dark:border-slate-700/50 pb-4">
                        <Newspaper size={32} className="text-orange-500 mr-4" />
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">About Event</h2>
                    </div>

                    <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        <p>
                            The third-year students of the Department of Computer Science and Engineering (AI & ML) organized the Baby Conference: <span className="text-cyan-600 dark:text-cyan-400 font-bold">“AIML Pioneer Summit 2024”</span>, a dynamic platform dedicated to showcasing the innovative research endeavors of second-year students. The conference focused on three major tracks:
                        </p>

                        <ul className="list-disc list-inside space-y-2 pl-4 text-slate-800 dark:text-slate-200">
                            <li>Advanced Machine Learning Techniques and Applications</li>
                            <li>AI-Driven Solutions for Sustainable Development</li>
                            <li>Domain-Specific AI.</li>
                        </ul>

                        <p>
                            The event commenced with a welcome speech by <span className="text-slate-900 dark:text-white font-semibold">Aayush Bodkhe</span>, the General Chair of the conference, who set an enthusiastic tone for the day, highlighting the importance of academic research and collaboration in AI and ML.
                        </p>

                        <p>
                            <span className="text-slate-900 dark:text-white font-semibold">Mr. Jayesh Dave</span>, Head of Business Development at Cnergee Technologies Pvt. Ltd., delivered the plenary speech. His insights into the current applications of AI and ML, alongside future opportunities in the industry, provided a motivational start for all participants.
                        </p>

                        <p>
                            The Head of the CSE (AI & ML) department offered encouraging words, commending the second-year students for their commitment to research and innovation in AI and ML.
                        </p>
                    </div>
                </div>

                {/* Gallery Section */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-cyan-500 pl-4">Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {galleryImages.map((imgSrc, idx) => (
                            <div key={idx} className="aspect-video bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-md">
                                <img src={imgSrc} alt={`Summit Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SummitAbout;
