import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail } from 'lucide-react';
import pccoeLogo from '../assets/logos/pccoelogo.webp';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'About Us',
            path: '#',
            dropdown: [
                { name: 'About Department', path: '/about' },
                { name: 'HOD Desk', path: '/hod-desk' },
                { name: 'Board of Studies', path: '/board-of-studies' }
            ]
        },
        {
            name: 'People',
            path: '#',
            dropdown: [
                { name: 'Faculty Profile', path: '/faculty' },
                { name: 'Admin Staff Profile', path: '/admin-staff' },
                { name: 'Faculty Portal (Login)', path: '/teacher-login' }
            ]
        },
        {
            name: 'Academics',
            path: '#',
            dropdown: [
                { name: 'Academic Coordinator', path: '/academic-coordinator' },
                { name: 'Teaching Learning', path: '/teaching-learning' },
                { name: 'Academic Calendar', path: '/academic-calendar' },
                { name: 'Syllabus', path: '/syllabus' },
                { name: 'Academic Results', path: '/academic-results' },
                { name: 'Co-Teaching', path: '/co-teaching' },
                { name: 'Fees Structure & Currency Converter', path: '/fees' }
            ]
        },
        {
            name: 'Research',
            path: '#',
            dropdown: [
                { name: 'Research and Innovation Coordinator', path: '/ri-coordinator' },
                { name: 'Research Paper Publication', path: '/research-publications' },
                { name: 'Book Publication', path: '/book-publications' },
                { name: 'Intellectual Property Rights', path: '/ipr' },
                { name: 'Research Fundings', path: '/research-fundings' },
                { name: 'Consultancy / Sponsored Projects', path: '/consultancy' },
                { name: 'Specialized Labs', path: '/specialized-labs' }
            ]
        },
        {
            name: 'Student Corner',
            path: '#',
            dropdown: [
                { name: 'Study Resources', path: '/study-resources' },
                { name: 'Student Development and Welfare', path: '/sdw' },
                { name: 'AIMSA (Student Association)', path: '/aimsa' },
                { name: 'GeeksforGeeks Student Chapter', path: '/gfg' },
                { name: 'Abhyudaya E-Cell', path: '/abhyudaya' },
                { name: 'Student Activities', path: '/student-activities' },
                { name: 'Student Achievement', path: '/achievements' },
                { name: 'AI/ML Pioneer Summit', path: '/pioneer-summit' },
                { name: 'International Neural Network Society (INNS)', path: '/inns' },
                { name: 'AAAI Student Chapter', path: '/aaai' },
                { name: 'IEEE CS Chapter', path: '/ieee-cs' },
                { name: 'IEEE CIS Chapter', path: '/ieee-cis' }
            ]
        },
        {
            name: 'Industry Interaction',
            path: '#',
            dropdown: [
                { name: 'III Coordinator', path: '/iii-coordinator' },
                { name: 'Industry Associations', path: '/industry-associations' },
                { name: 'Industry Training', path: '/industry-training' },
                { name: 'Industrial Visits', path: '/industrial-visits' },
                { name: 'Internships', path: '/internships' },
                { name: 'Placements', path: '/placements' }
            ]
        },
        { name: 'Student Satisfaction Index', path: '/student-satisfaction-index' },
        { name: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 flex flex-col transition-all duration-300 ${scrolled
                ? 'bg-white/90 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800'
                : 'bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm border-b border-slate-200/30 dark:border-slate-800/20'
                }`}
        >
            {/* Top Bar */}
            <div className={`w-full text-slate-800 dark:text-white text-[13.5px] py-1.5 transition-colors duration-300 ${scrolled ? 'bg-slate-100/50 dark:bg-slate-900/50' : 'bg-transparent'}`}>
                <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="flex items-center"><Phone size={14} className="mr-1" />+91 - 8087174347</span>
                        <span className="hidden sm:inline">|</span>
                        <a href="mailto:pccoeadmin@gmail.com" className="flex items-center hover:text-cyan-200 transition-colors">
                            <Mail size={14} className="mr-1" /> <span className="hidden sm:inline">pccoeadmin@gmail.com</span>
                        </a>
                    </div>
                    <div className="hidden lg:flex items-center space-x-3">
                        <a href="https://www.pccoepune.com/international-admissions.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-200 transition-colors animate-pulse text-amber-600 dark:text-yellow-300 font-semibold">International Admission Enquiry</a>
                        <span>|</span>
                        <a href="https://forms.zohopublic.in/pcet/form/CourseApplicationForm/formperma/Zr0u0jP3t36iheLlMd0R2qrKfxZBRs0E-U_MMRCyLM8" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-200 transition-colors animate-pulse text-amber-600 dark:text-yellow-300 font-semibold">Admission Enquiry</a>
                        <span>|</span>
                        <a href="https://www.pccoepune.com/faculty-training-opportunities.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition-colors">FTO</a>
                        <span>|</span>
                        <a href="https://www.pccoepune.com/nirf.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition-colors">NIRF</a>
                        <span>|</span>
                        <a href="https://www.aicte.gov.in/feedback/index.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition-colors">AICTE Feedback</a>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        {/* Replaced abstract logo with placeholder for actual PCCOE logo */}
                        <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                            {/* Use a public URL for PCCOE logo if available, otherwise a text placeholder that looks like a logo */}
                            <img
                                src={pccoeLogo}
                                alt="PCCOE Logo"
                                className="w-full h-full object-contain"
                                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerText = 'PCCOE' }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[19px] font-bold text-slate-900 dark:text-white tracking-wide group-hover:text-cyan-600 dark:group-hover:text-cyan-600 dark:text-cyan-400 transition-colors">PCCOE</span>
                            <span className="text-[11.5px] text-cyan-600 dark:text-cyan-200 tracking-widest uppercase font-semibold">CSE-AIML Dept</span>
                        </div>
                    </Link>

                    {/* Desktop Menu & Right Controls Group */}
                    <div className="flex items-center md:gap-4 lg:gap-8">
                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative group h-20 flex items-center"
                                    onMouseEnter={() => setHoveredMenu(link.name)}
                                    onMouseLeave={() => setHoveredMenu(null)}
                                >
                                    <Link
                                        to={link.path}
                                        className={`flex items-center text-[15px] font-medium transition-colors duration-300 ${location.pathname === link.path ? 'text-cyan-600 dark:text-cyan-600 dark:text-cyan-400' : 'text-slate-600 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-600 dark:text-cyan-400'
                                            }`}
                                    >
                                        {link.name}
                                        {link.dropdown && <ChevronDown size={14} className="ml-1 transition-transform group-hover:rotate-180" />}
                                    </Link>

                                    {/* Desktop Dropdown */}
                                    {link.dropdown && (
                                        <div
                                            className={`absolute top-full left-1/2 transform -translate-x-1/2 bg-white/95 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md transition-all duration-300 origin-top ${hoveredMenu === link.name ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                                                } ${link.dropdown.length > 7 ? 'w-[480px]' : 'w-64'}`}
                                        >
                                            <div className={`p-2 ${link.dropdown.length > 7 ? 'grid grid-cols-2 gap-1' : 'space-y-1'}`}>
                                                {link.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.path}
                                                        className="block px-4 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors h-full flex items-center"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop/Mobile Right Controls */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />

                            {/* Mobile Menu Button */}
                            <div className="lg:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none p-2"
                                >
                                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden fixed inset-0 top-[112px] pb-24 bg-stone-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-y-auto"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.dropdown ? (
                                        <div className="space-y-2">
                                            <div className="px-4 py-3 text-lg font-medium text-slate-800 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800/50">
                                                {link.name}
                                            </div>
                                            <div className="pl-4 space-y-1">
                                                {link.dropdown.map(subItem => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.path}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block px-4 py-3 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-600 dark:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-100 dark:bg-slate-900 transition-colors flex items-center"
                                                    >
                                                        <ChevronRight size={14} className="mr-2 text-slate-600" />
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-3 rounded-lg text-lg font-medium flex items-center justify-between group transition-colors ${location.pathname === link.path
                                                ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400'
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-cyan-600 dark:text-cyan-400'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
