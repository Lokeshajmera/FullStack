import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import HODDesk from './pages/HODDesk';
import BoardOfStudies from './pages/BoardOfStudies';
import FacultyProfile from './pages/FacultyProfile';
import AdminStaff from './pages/AdminStaff';
import AcademicCoordinator from './pages/AcademicCoordinator';
import TeachingLearning from './pages/TeachingLearning';
import CoTeaching from './pages/CoTeaching';
import AcademicCalendar from './pages/AcademicCalendar';
import Syllabus from './pages/Syllabus';
import Infrastructure from './pages/Infrastructure';
import StudentSatisfactionIndex from './pages/StudentSatisfactionIndex';
import AcademicResults from './pages/AcademicResults';
import Placements from './pages/Placements';
import Contact from './pages/Contact';
import StudentDevelopmentWelfare from './pages/StudentDevelopmentWelfare';
import GeeksforGeeksChapter from './pages/GeeksforGeeksChapter';
import AbhyudayaECell from './pages/AbhyudayaECell';
import StudentActivities from './pages/StudentActivities';
import StudentAchievements from './pages/StudentAchievements';
import AiMlPioneerSummit from './pages/AiMlPioneerSummit';
import InnsChapter from './pages/InnsChapter';
import IiiCoordinator from './pages/IiiCoordinator';
import IndustryAssociations from './pages/IndustryAssociations';
import IndustrialVisits from './pages/IndustrialVisits';
import IndustryTraining from './pages/IndustryTraining';
import Internships from './pages/Internships';
import RiCoordinator from './pages/RiCoordinator';
import ResearchPublications from './pages/ResearchPublications';
import BookPublications from './pages/BookPublications';
import Ipr from './pages/Ipr';
import ResearchFundings from './pages/ResearchFundings';
import Consultancy from './pages/Consultancy';
import SpecializedLabs from './pages/SpecializedLabs';
import StudyResources from './pages/StudyResources';
import AiMSA from './pages/AiMSA';
import FeesStructure from './pages/FeesStructure';
import AaaiChapter from './pages/AaaiChapter';
import IeeeCsChapter from './pages/IeeeCsChapter';
import IeeeCisChapter from './pages/IeeeCisChapter';
import HonorsDataScience from './pages/HonorsDataScience';
import MinorInAI from './pages/MinorInAI';
import TeacherLogin from './pages/TeacherLogin';
import TeacherDashboard from './pages/TeacherDashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen font-sans selection:bg-cyan-500/30">
            <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[100]"
              style={{ scaleX }}
            />
            <CustomCursor />
            <Navbar />
            <main className="flex-grow z-10 relative">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/hod-desk" element={<HODDesk />} />
                <Route path="/board-of-studies" element={<BoardOfStudies />} />
                <Route path="/faculty" element={<FacultyProfile />} />
                <Route path="/admin-staff" element={<AdminStaff />} />
                <Route path="/academic-coordinator" element={<AcademicCoordinator />} />
                <Route path="/teaching-learning" element={<TeachingLearning />} />
                <Route path="/academic-calendar" element={<AcademicCalendar />} />
                <Route path="/syllabus" element={<Syllabus />} />
                <Route path="/academic-results" element={<AcademicResults />} />
                <Route path="/co-teaching" element={<CoTeaching />} />
                <Route path="/infrastructure" element={<Infrastructure />} />
                <Route path="/student-satisfaction-index" element={<StudentSatisfactionIndex />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/achievements" element={<StudentAchievements />} />
                <Route path="/sdw" element={<StudentDevelopmentWelfare />} />
                <Route path="/gfg" element={<GeeksforGeeksChapter />} />
                <Route path="/abhyudaya" element={<AbhyudayaECell />} />
                <Route path="/student-activities" element={<StudentActivities />} />
                <Route path="/pioneer-summit" element={<AiMlPioneerSummit />} />
                <Route path="/inns" element={<InnsChapter />} />
                <Route path="/ri-coordinator" element={<RiCoordinator />} />
                <Route path="/research-publications" element={<ResearchPublications />} />
                <Route path="/book-publications" element={<BookPublications />} />
                <Route path="/ipr" element={<Ipr />} />
                <Route path="/research-fundings" element={<ResearchFundings />} />
                <Route path="/consultancy" element={<Consultancy />} />
                <Route path="/specialized-labs" element={<SpecializedLabs />} />
                <Route path="/iii-coordinator" element={<IiiCoordinator />} />
                <Route path="/industry-associations" element={<IndustryAssociations />} />
                <Route path="/industrial-visits" element={<IndustrialVisits />} />
                <Route path="/industry-training" element={<IndustryTraining />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/study-resources" element={<StudyResources />} />
                <Route path="/aimsa" element={<AiMSA />} />
                <Route path="/fees" element={<FeesStructure />} />
                <Route path="/aaai" element={<AaaiChapter />} />
                <Route path="/ieee-cs" element={<IeeeCsChapter />} />
                <Route path="/ieee-cis" element={<IeeeCisChapter />} />
                <Route path="/honors" element={<HonorsDataScience />} />
                <Route path="/minor" element={<MinorInAI />} />

                {/* Teacher Portal Routes */}
                <Route path="/teacher-login" element={<TeacherLogin />} />
                <Route path="/teacher-dashboard" element={<ProtectedRoute><TeacherDashboard /></ProtectedRoute>} />

                {/* Legal Routes */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
