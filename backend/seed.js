const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Faculty = require('./models/Faculty');
const Student = require('./models/Student');
const Notice = require('./models/Notice');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => console.log(err));

const seedData = async () => {
    try {
        // Clear existing data
        await Faculty.deleteMany({});
        await Student.deleteMany({});
        await Notice.deleteMany({});

        // Faculty Data from frontend/src/data/facultyData.js
        const facultyData = [
            {
                name: "Dr. Anuradha Thakare",
                designation: "Professor & Head CSE (AI & ML)",
                qualification: "ME (Computer Engineering), PhD (Computer Science and Engineering)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anuradha",
                areaOfInterest: "Data Science,Intelligent Systems, Machine Learning, Artificial Intelligence and Evolutionary Computing",
                experience: "24+ Years",
                website: "https://www.anuradhathakare.in/",
                email: "#",
                scopus: "https://www.scopus.com/authid/detail.uri?authorId=55995624200",
                googleScholar: "https://scholar.google.com/citations?user=sjE0ZZAAAAAJ&hl=en"
            },
            {
                name: "Dr. Sonal A. Gore",
                designation: "Associate Professor",
                qualification: "B.E (Computer Engineering), M.E(Computer Engineering), Ph.D. (Computer Science Engineering)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal",
                areaOfInterest: "Medical Image Analysis, Artificial Intelligence",
                experience: "20+ Years",
                website: "#",
                email: "#",
                scopus: "#",
                googleScholar: "#"
            },
            {
                name: "Dr. J. S. Kulkarni",
                designation: "Associate Professor",
                qualification: "M.E. (E & TC), Ph.D (E&TC)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kulkarni",
                areaOfInterest: "Microprocessors & Microcontrollers, Digital Image Processing, Optimization in Image Fusion",
                experience: "21+ Years",
                website: "#",
                email: "#",
                scopus: "#",
                googleScholar: "#"
            },
            {
                name: "Mrs. Shailaja V. Pede",
                designation: "Assistant Professor",
                qualification: "ME (Computer Engineering), Ph.D (Pursuing)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shailaja",
                areaOfInterest: "Data Mining, Information Security",
                experience: "18+ Years",
                website: "#",
                email: "#",
                scopus: "#",
                googleScholar: "#"
            },
            {
                name: "Mrs. Pallavi V. Dhade",
                designation: "Assistant Professor",
                qualification: "B.E. (Computer Engineering), M.E. (Computer Engineering), Ph.D. (Pursuing)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pallavi",
                areaOfInterest: "Artificial Intelligence, Machine Learning",
                experience: "15+ Years",
                website: "#",
                email: "#",
                scopus: "#",
                googleScholar: "#"
            },
            {
                name: "Dr. Santwana S. Gudadhe",
                designation: "Assistant Professor",
                qualification: "B.E. (Computer Engineering), M.E. (Computer Engineering), Ph.D. (Computer Engineering)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Santwana",
                areaOfInterest: "Data Science, Machine Learning, Artificial Neural Networks",
                experience: "15+ Years",
                website: "#",
                email: "#",
                scopus: "#",
                googleScholar: "#"
            },
            {
                name: "Mrs Puja Pohakar",
                designation: "Assistant Professor",
                qualification: "ME (Electrical Power Systems) , Ph.D. (Pursuing)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Puja",
                areaOfInterest: "Artificial Neural Network, Deep Learning, Electrical Machines, Optimization techniques.",
                experience: "14+ Years",
                website: "#",
                email: "#",
                googleScholar: "#"
            },
            {
                name: "Mr. Rajesh Lomte",
                designation: "Assistant Professor",
                qualification: "ME (Computer Science & Engineering), PhD (Pursuing)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
                areaOfInterest: "Web Security,Cloud,Bigdata,Compiler,operating System",
                experience: "13+ Years",
                website: "#",
                email: "#",
                scopus: "#",
                googleScholar: "#"
            },
            {
                name: "Mrs. Suvarna Bhatsangave",
                designation: "Assistant Professor",
                qualification: "B.E. (Information Technology), M.E. (Computer Network Engg.) ,Ph.D. (Pursuing)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Suvarna",
                areaOfInterest: "Data Science, Machine learning, Deep Learning and Cyber security",
                experience: "10.2+ Years",
                website: "#",
                email: "#",
                scopus: "#",
                googleScholar: "#"
            },
            {
                name: "Ms. Pranita S. Chaudhary",
                designation: "Assistant Professor",
                qualification: "B.E (Computer Engineering), M.Tech(Computer Science and Engineering), Ph.D. (Pursuing)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pranita",
                areaOfInterest: "Data Science, Machine learning, Deep Learning and Computer Networking",
                experience: "10.1+ Years",
                website: "#",
                email: "#",
                wos: "#",
                googleScholar: "#"
            },
            {
                name: "Mrs. Ashwini Deshpande",
                designation: "Assistant Professor",
                qualification: "M.Tech (Electrical Power Systems), Ph.D (Pursuing)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ashwini",
                areaOfInterest: "Electrical machines, EV, Renewable energy, Power systems",
                experience: "9+ Years",
                website: "#",
                email: "#",
                scopus: "#"
            },
            {
                name: "Mrs. Pradnya G. Narkhede",
                designation: "Assistant Professor",
                qualification: "B.E. (Computer Science and Engineering), M.E. (Computer Science and Information Technology) ,Ph.D. (Pursuing)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pradnya",
                areaOfInterest: "Data Science, Machine learning, Deep Learning and Cyber security",
                experience: "5+ Years",
                website: "#",
                email: "#",
                scopus: "#",
                googleScholar: "#"
            },
            {
                name: "Dr. Madhuri Pagale",
                designation: "Assistant Professor",
                qualification: "M.E. (Computer Engineering), Ph.D. (Computer Science & Engineering)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Madhuri",
                areaOfInterest: "Data Science, Machine Learning, Deep Learning, Artificial Intelligence, Autonomous Vehicle",
                experience: "6+ Years",
                website: "#",
                email: "#",
                scopus: "#",
                googleScholar: "#"
            },
            {
                name: "Mrs. Sarika Milind Bartakke",
                designation: "Assistant Professor",
                qualification: "ME Computer Engineering",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarika",
                areaOfInterest: "Image processing and information retrieval",
                experience: "5 Years",
                website: "#",
                email: "#"
            },
            {
                name: "Mrs. Yogita Sharma",
                designation: "Assistant Professor",
                qualification: "MTECH(CSE-IT)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yogita",
                areaOfInterest: "Artificial Intelligence, Machine Learning, Data Science",
                experience: "1 year Teaching, 6 years Industry",
                website: "#"
            },
            {
                name: "Priyanka Jadhav",
                designation: "Assistant Professor",
                qualification: "BE (Computer Science and Engineering), ME ( Computer Engineering)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priyanka",
                areaOfInterest: "Web Development, Music Information Retrieval, Artificial Intelligence and Machine Learning",
                experience: "5.8 yrs",
                website: "#",
                email: "#",
                scopus: "#",
                googleScholar: "#"
            },
            {
                name: "Ms. Vaishnavi Pujari",
                designation: "Assistant Professor",
                qualification: "ME VLSI AND EMBEDDED SYSTEMS , Ph.D PURSUING (ELECTRONICS ENGINEERING)",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vaishnavi",
                areaOfInterest: "AIML, ROBOTICS , SIGNALS AND SYSTEMS",
                experience: "3 yrs",
                website: "#",
                email: "#",
                googleScholar: "#"
            },
            {
                name: "Isha B. Vyas",
                designation: "Assistant Professor",
                qualification: "MTech Electronics, PhD Pursuing",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isha",
                areaOfInterest: "Control systems, Data Analytics",
                experience: "11+ yrs",
                website: "#",
                email: "#",
                googleScholar: "#"
            }
        ];

        // Sample Student Data
        const studentData = [
            {
                name: "Prathamesh Mohite",
                role: "Student Coordinator",
                department: "Higher Study Cell (HSC) – GATE / IES",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prathamesh",
            },
            {
                name: "Pranav Ukhade",
                role: "Student Coordinator",
                department: "Higher Study Cell (HSC) – CAT / GMAT",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pranav",
            },
            {
                name: "Vinay Sawant",
                role: "Student Coordinator",
                department: "Study Circle – UPSC / MPSC",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vinay",
            },
            {
                name: "Tejashree Choughule",
                role: "Student Coordinator",
                department: "NSS",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tejashree",
            },
            // GeeksforGeeks Chapter Data
            { name: "Prof Pallavi Dhade", role: "Faculty Coordinator", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Pratham Mali", role: "President", department: "GeeksforGeeks", image: "nuradha Thakare" },
            { name: "Sagar Karatagi", role: "Vice President", department: "GeeksforGeeks", image: "nuradha Thakare" },
            { name: "Soham Mhatre", role: "Secretary", department: "GeeksforGeeks", image: "nuradha Thakare" },
            { name: "Felina Mathew", role: "Secretary", department: "GeeksforGeeks", image: "nuradha Thakare" },
            { name: "Tejas Ubale", role: "Treasurer", department: "GeeksforGeeks", image: "nuradha Thakare" },
            { name: "Namish Arora", role: "Treasurer", department: "GeeksforGeeks", image: "sonal-gore" },
            { name: "Harshal Mali", role: "Technical Head", department: "GeeksforGeeks", image: "nuradha Thakare" },
            { name: "Atharva Kamtalwar", role: "Technical Head", department: "GeeksforGeeks", image: "sonal-gore" },
            { name: "Rutuj Dhongade", role: "Technical Head", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Anushka Patil", role: "Technical Head", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Khelesh Patil", role: "Events Head", department: "GeeksforGeeks", image: "nuradha Thakare" },
            { name: "Saniya Thigale", role: "Events Head", department: "GeeksforGeeks", image: "sonal-gore" },
            { name: "Pragati Hinge", role: "Design head", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Tejashree Chougule", role: "Design head", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Arya Singh", role: "Social Media Head", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Harsh Vahal", role: "Social Media Head", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Supriya Baride", role: "Social Media Head", department: "GeeksforGeeks", image: "nuradha Thakare" },
            { name: "Swetank Raut", role: "Social Media and Photography Head", department: "GeeksforGeeks", image: "sonal-gore" },
            { name: "Bhavesh Pagare", role: "Photography Head", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Yukta Joshi", role: "Marketing and Publicity Head", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Sushant Kabra", role: "Marketing and Publicity Head", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Siddhesh Pohare", role: "Marketing and Publicity Head", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Pranav Jagtap", role: "Marketing and Sponsorship Head", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Nishka Salunkhe", role: "Membership Chairperson", department: "GeeksforGeeks", image: "Pallavi Dhade" },
            { name: "Parth Chitale", role: "Membership Chairperson", department: "GeeksforGeeks", image: "Pallavi Dhade" }
        ];

        // Notice Data (keeping existing for demo)
        const noticeData = [
            {
                title: "BE Project Submission Deadline",
                date: "2024-03-25",
                content: "All final year students must submit their project reports by 25th March."
            },
            {
                title: "Guest Lecture on Generative AI",
                date: "2024-03-20",
                content: "A guest lecture by industry experts on GenAI trends."
            },
            {
                title: "Hackathon Registration Open",
                date: "2024-04-01",
                link: "https://hackathon.pccoepune.com"
            }
        ];

        await Faculty.insertMany(facultyData);
        await Student.insertMany(studentData);
        await Notice.insertMany(noticeData);

        console.log('Data Seeded Successfully');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedData();
