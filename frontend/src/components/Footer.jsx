import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-stone-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-16 pb-8 text-slate-700 dark:text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">PCCOE <span className="text-cyan-600 dark:text-cyan-400">AI & ML</span></h3>
                        <p className="text-sm leading-relaxed">
                            Pimpri Chinchwad College of Engineering's Department of Artificial Intelligence and Machine Learning remains at the forefront of technology education.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="https://www.linkedin.com/company/pccoe-pune?trk=biz-companies-cym" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
                            <a href="https://www.linkedin.com/company/pccoe-pune?trk=biz-companies-cym" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:text-cyan-400 transition-colors"><Twitter size={20} /></a>
                            <a href="https://www.instagram.com/pccoepune/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:text-cyan-400 transition-colors"><Instagram size={20} /></a>
                            <a href="https://www.facebook.com/PCCOENigadi/#" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:text-cyan-400 transition-colors"><Facebook size={20} /></a>
                            <a href="https://www.youtube.com/channel/UCQiPDETOiteTLmAvvPk1WjA" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:text-cyan-400 transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="hover:text-cyan-600 dark:text-cyan-400 transition-colors">About Department</Link></li>
                            <li><a href="https://www.pccoepune.com/best-engineering-college-in-akurdi.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:text-cyan-400 transition-colors">About PCCOE</a></li>
                            <li><a href="https://pcet.org.in/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:text-cyan-400 transition-colors">About PCET</a></li>
                            <li><Link to="/faculty" className="hover:text-cyan-600 dark:text-cyan-400 transition-colors">Faculty Members</Link></li>
                            <li><Link to="/placements" className="hover:text-cyan-600 dark:text-cyan-400 transition-colors">Placements</Link></li>
                            <li><Link to="/contact" className="hover:text-cyan-600 dark:text-cyan-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Programs</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-cyan-600 dark:text-cyan-400 transition-colors">B.Tech AI & ML</a></li>
                            <li><a href="#" className="hover:text-cyan-600 dark:text-cyan-400 transition-colors">Honors in Data Science</a></li>
                            <li><a href="#" className="hover:text-cyan-600 dark:text-cyan-400 transition-colors">Minor in AI</a></li>
                            <li><a href="#" className="hover:text-cyan-600 dark:text-cyan-400 transition-colors">Research Opportunities</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                                <span>Near Akurdi Railway Station Road, Sector No. 26, Pradhikaran, Nigdi, Pimpri, Maharashtra 411044</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
                                <span>020-27653168-2151</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
                                <span>computer_queries@pccoepune.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} PCCOE AI & ML Department. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
