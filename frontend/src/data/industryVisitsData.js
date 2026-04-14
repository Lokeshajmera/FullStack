import puncom1 from '../assets/industry/puncom-1.png';
import puncom2 from '../assets/industry/puncom-2.png';
import puncom3 from '../assets/industry/puncom-3.png';
import puncom4 from '../assets/industry/puncom-4.png';

import johari1 from '../assets/labs/johari-digital-and-stpi-1.jpg';
import johari2 from '../assets/labs/johari-digital-and-stpi-2.jpg';
import johari3 from '../assets/labs/johari-digital-and-stpi-3.jpg';
import johari4 from '../assets/labs/johari-digital-and-stpi-4.jpg';
import johari5 from '../assets/labs/johari-digital-and-stpi-5.jpg';

import isro1 from '../assets/industry/isro1.jpg';
import isro2 from '../assets/industry/isro2.jpg';
import isro3 from '../assets/industry/isro3.jpg';
import isro4 from '../assets/industry/isro4.jpg';

import minda1 from '../assets/industry/minda1.jpg';
import minda2 from '../assets/industry/minda2.jpg';
import minda3 from '../assets/industry/minda3.jpg';

// Industry Training imports
import fullStackLogo from '../assets/logos/Full Stack Logo.jpg';
import week1 from '../assets/events/week1.png';
import week2 from '../assets/events/week2.png';
import week3 from '../assets/events/week3.png';
import rajeshLomte from '../assets/people/Rajesh lomte.jpg';
import marketingCloud1 from '../assets/events/marketing-cloud1.png';
import marketingCloud2 from '../assets/events/marketing-cloud2.png';
import marketingCloud3 from '../assets/events/marketing-cloud3.png';


export const industrialVisitsData = [
    {
        id: "chandigarh",
        title: "Industrial Visit to SEO Discovery and Punjab Communications Ltd. (PunCom), Chandigarh",
        date: "6th January 2026",
        participants: "30 students, 4 faculty members",
        cohort: "TYBTech students",
        description: "The Department of CSE (AI&ML) organized an Industrial Visit for TYBTech students on 6th January 2026 to SEO Discovery and Punjab Communications Ltd. (PunCom), Chandigarh. The visit aimed to provide hands-on exposure to AI applications, digital marketing technologies, and communication systems used in modern industries. A total of 30 students, accompanied by four faculty members, participated in the visit.\n\nAt SEO Discovery, students explored digital marketing strategies and the role of data-driven analytics in modern business growth. They gained insights into Search Engine Optimization (SEO), keyword research, on-page and off-page optimization techniques, Google Analytics, and performance tracking tools. The session also demonstrated how AI and data analytics are used in targeted advertising, campaign optimization, and customer engagement.\n\nAt Punjab Communications Ltd. (PunCom), students learned about telecommunication infrastructure, electronic system manufacturing, and communication network technologies. Engineers explained the integration of hardware and software systems in communication devices, along with testing and quality assurance processes. The session also highlighted the role of automation and intelligent monitoring systems in improving telecom operations and network efficiency.\n\nExpert sessions and interactive discussions provided valuable career guidance and insights into industry expectations, emerging technologies, and professional work culture, helping students better understand real-world applications of their academic knowledge.",
        images: [puncom1, puncom2, puncom3, puncom4]
    },
    {
        id: "jodhpur",
        title: "Industrial Visit to Johari Digital and Software Technology Parks of India (STPI), Jodhpur",
        date: "31st Dec 2024 – 7th Jan 2025",
        participants: "24 students, 3 faculty members",
        cohort: "TYBTech students",
        description: "The Department of CSE (AI&ML) organized an Industrial Visit for TYBTech students from 31st Dec 2024 – 7th Jan 2025 to Johari Digital and Software Technology Parks of India (STPI), Jodhpur. The visit aimed to provide hands-on exposure to AI and ML applications in healthcare and IT industries. A total of 24 students, accompanied by three faculty members, participated in the visit.\n\nAt Johari Digital, students explored AI-powered medical solutions and the role of automation in healthcare technology. They gained insights into the medical device manufacturing process and its global impact.\n\nAt STPI Jodhpur, students learned about IT infrastructure, high-speed data communication, and AI applications in the software industry. Expert sessions provided valuable career insights and industry expectations.\n\nAdditionally, students explored Rajasthan’s cultural heritage, enhancing their educational experience.",
        images: [johari1, johari2, johari3, johari4, johari5]
    },
    {
        id: "ahmedabad",
        title: "Industrial Visit to Indian Space Research Organisation's Space Application Centre (ISRO - SH) and GVK Emergency Management Research Institute (GVK EMRI) at Ahmedabad",
        date: "17th Jan - 25th Jan 2024",
        participants: "20 students, 2 faculties",
        cohort: "TYBTech Students",
        description: "Industrial Visit was scheduled for TYBTech Students by The Department of CSE (AIML) from 17th Jan - 25th Jan 2024 to Indian Space Research Organisation's Space Application Centre (ISRO - SH) and GVK Emergency Management Research Institute (GVK EMRI) at Ahmedabad. The goal of the Industrial Visit was to see how things work in real-life industries. Total 20 students along with two faculties visited the industries.\n\nAt ISRO-SAC, students engaged in interactive sessions with eminent scientists, gaining insights into practical AI and ML applications in aerospace technology. They explored upcoming missions and potential internship opportunities, fostering practical skills and inspiring academic excellence.\n\nAt GVK EMRI, students witnessed the critical role of AI in emergency services, including disaster response and healthcare initiatives, reinforcing their commitment to professional development and community impact.",
        images: [isro1, isro2, isro3, isro4]
    },
    {
        id: "minda",
        title: "Industrial visit at Minda CREAT, Technology Centre",
        date: "13th April 2023",
        participants: "SY BTech CSE(AI&ML) students",
        cohort: "SY BTech students",
        description: "\"Industrial visit at Minda CREAT, Technology Centre , was scheduled for SY BTech CSE(AI&ML) students on 13th April 2023. Minda CREAT is an innovation driven research and development center incubating products. It is located at ICC DEVI GAURAV TECHNOLOGY PARK, MIDC, Pimpri Colony, Pimpri-Chinchwad,, Pune.\"\n\nThere were three sessions conducted by renowned personalities from Minda CREAT. All sessions were technically very informative and beneficial for the students. The objective of the visit was to understand the use of software & hardware for different applications used in Industry. Also to provide industrial exposure to students and will be a lifelong learning experience for them.",
        images: [minda1, minda2, minda3]
    }
];

export const industryTrainingData = [
    {
        id: "quantiphi-fullstack",
        term: "SY BTech Summer Term Training (Academic Year 2023-24)",
        title: "\"Full Stack Development\"",
        subtitle: "under Quantiphi Mentored Coding Club Activity by Team Quantiphi Analytics Solutions Pvt. Ltd.",
        duration: "3 Weeks (3rd June to 21st June 2024)",
        highlights: [
            "Comprehensive training in full stack development, covering frontend and backend technologies.",
            "Designing, developing, and implementing interfaces for web and mobile applications."
        ],
        logo: fullStackLogo,
        smes: [
            { name: "Shamin Ali", role: "Senior Software Developer, Quantiphi" },
            { name: "Sujit Mali", role: "SDE, Quantiphi" },
            { name: "Vrushabh Ashok", role: "Software Developer, Quantiphi" },
            { name: "Irene George", role: "Senior Software Engineer, Quantiphi" },
            { name: "Sejal Golchha", role: "Senior UI/UX Designer, Quantiphi" },
            { name: "Sibaram Sahu", role: "Senior Full Stack Developer, Quantiphi" },
            { name: "Sana Khan", role: "Software Developer, Quantiphi" },
            { name: "Punit Batra", role: "Senior Software Developer, Quantiphi" },
            { name: "Rishwanth B", role: "Senior Software Developer, Quantiphi" },
            { name: "Kushal Tak", role: "Software Developer, Quantiphi" },
            { name: "Vinay Kumar Singh", role: "Software Developer, Quantiphi" },
            { name: "Shubham Shirke", role: "Software Developer, Quantiphi" },
            { name: "Sarin CR", role: "Lead L&D (Data Science), Quantiphi" }
        ],
        images: [week1, week2, week3]
    },
    {
        id: "salesforce-cloud",
        term: "",
        title: "\"Salesforce Cloud Training\"",
        subtitle: "by Mr. Rajesh Lomte, Assistant Professor (Certified in Salesforce), CSE(AI&ML) PCCOE Pune",
        duration: "3 Weeks (24th June to 12th July 2024)",
        highlights: [
            "Comprehensive understanding of Salesforce fundamentals.",
            "Proficiency in Marketing Cloud, Sales Cloud, and Service Cloud.",
            "Expertise in Salesforce configuration."
        ],
        logo: null,
        headerImage: rajeshLomte,
        smes: [
            { name: "Mr. Rajesh Lomte", role: "Assistant Professor CSE(AI&ML), PCCOE Pune", image: rajeshLomte }
        ],
        images: [marketingCloud1, marketingCloud2, marketingCloud3]
    }
];
