import React from 'react';

import anuradhaMam from '../../assets/faculty/Anuradha_mam.jpeg';
import jyotiKulkarni from '../../assets/faculty/jskulkarni.jpg';
import pujaPohakar from '../../assets/faculty/puja.jpg';
import vaishnaviChormale from '../../assets/INNS/vaishnavi-chormale.webp';
import ishitaDhindsa from '../../assets/INNS/ishita-dhindsa.webp';
import pankajMore from '../../assets/INNS/pankaj-more.webp';
import arpitaNair from '../../assets/INNS/arpita-nair.webp';
import ganeshGaikwad from '../../assets/INNS/ganesh-gaikwad.webp';
import gauravTarate from '../../assets/INNS/gaurav-tarate.webp';
import varunBhilare from '../../assets/INNS/varun-bhilare.webp';

const FacultyProfileCard = ({ name, role, image }) => (
    <div className="bg-white/50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-300 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col items-center h-full">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 mb-4 border-4 border-slate-300 dark:border-slate-700 group-hover:border-cyan-500 transition-colors duration-300 shadow-xl">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
        </div>
        <div className="text-center flex-grow flex flex-col justify-center items-center w-full">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">
                {name}
            </h3>
            <p className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-950/50 py-1.5 px-4 rounded-full border border-cyan-800/30 inline-block">
                {role}
            </p>
        </div>
    </div>
);


const StudentMemberCard = ({ name, image }) => (
    <div className="bg-white/50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-300 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col items-center h-full">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 mb-4 border-4 border-slate-300 dark:border-slate-700 group-hover:border-cyan-500 transition-colors duration-300 shadow-xl">
            {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
            ) : (
                <div className="w-full h-full bg-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-3xl">
                    {name.charAt(0)}
                </div>
            )}
        </div>
        <div className="text-center flex-grow flex flex-col justify-center items-center w-full">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">{name}</h3>
            <p className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-950/50 py-1.5 px-4 rounded-full border border-cyan-800/30 inline-block">
                Member
            </p>
        </div>
    </div>
);

const InnsMembers = () => {
    const faculty = [
        { name: "Dr. Anuradha Thakare", role: "Faculty Advisor", image: anuradhaMam },
        { name: "Dr. Jyoti Kulkarni", role: "Faculty Coordinator", image: jyotiKulkarni },
        { name: "Mrs. Puja Pohakar", role: "Faculty Coordinator", image: pujaPohakar }
    ];

    const students = [
        { name: "Vaishnavi Chormale", image: vaishnaviChormale },
        { name: "Ishita Dhindsa", image: ishitaDhindsa },
        { name: "Pankaj More", image: pankajMore },
        { name: "Arpita Nair", image: arpitaNair },
        { name: "Ganesh Gaikwad", image: ganeshGaikwad },
        { name: "Gaurav Tarate", image: gauravTarate },
        { name: "Varun Bhilare", image: varunBhilare }
    ];

    return (
        <section className="py-20 bg-stone-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Faculty Leadership section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white inline-block relative">
                            Faculty Leadership
                            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-cyan-500 rounded-full"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {faculty.map((member, idx) => (
                            <FacultyProfileCard key={idx} name={member.name} role={member.role} image={member.image} />
                        ))}
                    </div>
                </div>

                {/* Student Members Section */}
                <div>
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative">
                            Student Members
                            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-orange-500 rounded-full"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {students.map((student, idx) => (
                            <StudentMemberCard key={idx} name={student.name} image={student.image} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};


export default InnsMembers;
