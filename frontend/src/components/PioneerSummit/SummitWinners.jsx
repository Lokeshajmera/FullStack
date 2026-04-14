import React from 'react';
import { motion } from 'framer-motion';
import winnerImg from '../../assets/pioneer-summit/winner.jpg';
import firstRunnerImg from '../../assets/pioneer-summit/first-runner-up.jpg';
import secondRunnerImg from '../../assets/pioneer-summit/second-runner-up.jpg';

const WinnerCard = ({ title, members, image, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="bg-[#323232] rounded-lg overflow-hidden flex flex-col h-full shadow-lg border border-slate-300 dark:border-slate-700/50 hover:border-slate-500 transition-colors"
        >
            {/* Card Header */}
            <div className="text-center py-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">{title}</h3>
            </div>

            {/* Members List */}
            <div className="p-6 flex-grow flex flex-col justify-center items-center text-center">
                <div className="space-y-3">
                    {members.map((member, idx) => (
                        <div key={idx} className="flex items-center justify-center text-slate-800 dark:text-slate-200 font-medium">
                            <span className="text-slate-900 dark:text-white opacity-80 mr-2 text-xl leading-none">▶</span>
                            <span>{member}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image */}
            <div className="w-full aspect-[4/3] bg-white dark:bg-slate-800 p-2">
                <img
                    src={image}
                    alt={`${title} Team`}
                    className="w-full h-full object-cover rounded shadow-inner"
                />
            </div>
        </motion.div>
    );
};

const SummitWinners = () => {
    const winnersData = [
        {
            title: "ADS 25 (Winners)",
            members: [
                "123B1C051: Piyush Daspute",
                "123B1C004: Om Deshmukh",
                "123B1C025: Om Pangaonkar"
            ],
            image: winnerImg
        },
        {
            title: "MLT 20 (First Runner-Up)",
            members: [
                "123B1C024: Ruturaj Pandharkar",
                "123B1C053: Trupti Sukale",
                "123B1C059: Abhishek Nikam"
            ],
            image: firstRunnerImg
        },
        {
            title: "DS3 (Second Runner-Up)",
            members: [
                "123B1C031: Prasad Rajendra Pawar",
                "123B1C039: Om Rajesh Shrigiriwar",
                "123B1C048: Akhilesh Anand Mohorir"
            ],
            image: secondRunnerImg
        }
    ];

    return (
        <section className="py-16 bg-[#252525]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white inline-block mb-4 relative">
                        Winners
                        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-cyan-500 rounded-full"></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {winnersData.map((winner, idx) => (
                        <WinnerCard
                            key={idx}
                            title={winner.title}
                            members={winner.members}
                            delay={idx * 0.2}
                            image={winner.image}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SummitWinners;
