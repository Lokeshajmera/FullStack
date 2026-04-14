import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ExternalLink, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const CATEGORIES = ["All", "Web Development", "AI/ML", "IoT / Hardware"];

const PROJECTS = [
  {
    id: 1,
    title: "NeuroVision API",
    description: "A real-time deep learning model for computer vision anomaly detection used in smart surveillance.",
    details: "This system was developed over 6 months using PyTorch and OpenCV. It utilizes a modified ResNet50 architecture fine-tuned on custom CCTV footage sets to detect unauthorized access and suspicious behavior with an inference time of <50ms. The backend is deployed via Docker on AWS ECS to ensure 99.9% uptime for campus security.",
    tags: ["PyTorch", "OpenCV", "AWS", "Python", "Docker"],
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "AgriSmart Dashboard",
    description: "A comprehensive web portal integrating drone telemetry and multispectral IoT data for precision agriculture.",
    details: "The AgriSmart Dashboard aggregates live telemetry from agricultural drones. It features a modern React UI integrated statically with Supabase for real-time Postgres updates. It visually maps NDVI/NDWI layers over farm maps using Leaflet.js, automatically triggering irrigation pumps when soil moisture drops below threshold markers.",
    tags: ["React", "Supabase", "Leaflet.js", "TailwindCSS"],
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Automated Hydroponics",
    description: "An embedded system monitoring soil moisture, pH, and humidity with automated pump triggers.",
    details: "Using an ESP32 microcontroller, this project reads pH levels and EC (Electrical Conductivity) of nutrient water in a vertical hydroponics stack. It sends telemetry over MQTT to a local Node-RED server, which triggers peristaltic pumps to inject pH UP/DOWN solutions, ensuring perfect growing conditions 24/7 without human intervention.",
    tags: ["C++", "ESP32", "MQTT", "Node-RED", "Sensors"],
    category: "IoT / Hardware",
    image: "https://images.unsplash.com/photo-1530836339394-3320c0c20e5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "PrediStock Engine",
    description: "Time-series forecasting application using LSTM networks for predicting short-term stock market trends.",
    details: "PrediStock utilizes historical NSE metadata fed into Long Short-Term Memory (LSTM) recursive neural networks via TensorFlow. The engine pulls daily EOD stock data using Yahoo Finance APIs, runs its validation loop, and publishes buy/sell probabilities to an encrypted MongoDB cluster. The platform demonstrated a 68% back-testing profitability.",
    tags: ["TensorFlow", "Pandas", "MongoDB", "Flask"],
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a2236a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 5,
    title: "EcoTrack Backend",
    description: "High-performance Node.js microservices architecture handling millions of sensor data points daily.",
    details: "Built to support the EcoTrack initiative, this system relies on a horizontally scaled Express.js backend backed by Redis caching. It handles massive throughput data ingestion from thousands of smart-city pollution sensors, standardizing payload protocols and routing them securely directly into a Snowflake data warehouse for business intelligence.",
    tags: ["Node.js", "Redis", "Snowflake", "Docker", "Express"],
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 6,
    title: "Smart Traffic Controller",
    description: "Raspberry-Pi based distributed system optimizing traffic light durations based on live vehicle density.",
    details: "This hardware pipeline utilizes Raspberry Pi 4 models installed at junctions parsing YOLOv8 models locally to count cars in each lane. Through a master-slave socket configuration, it dynamically recalculates red/green light durational splits dynamically to relieve intersection bottlenecks, proven to reduce absolute wait times by 22% in simulations.",
    tags: ["Raspberry Pi", "YOLOv8", "Python", "Sockets"],
    category: "IoT / Hardware",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  }
];

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  // Close the modal fully if clicking outside or pressing Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
        setIsDetailsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleOpenModal = (project) => {
    setSelectedImage(project);
    setIsDetailsOpen(false); // Reset details state on new open
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsDetailsOpen(false);
  };

  return (
    <section className="py-24 bg-stone-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300" id="projects-gallery">
      {/* Decorative blobs */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Project Showcase</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            Explore the innovative solutions built by our AIML department students across different technical domains.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${activeCategory === category
                ? 'text-slate-900 dark:text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 bg-stone-100 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-white dark:bg-slate-800'
                }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </motion.div>

        {/* Image Grid with framer-motion AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-amber-50/60 dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden shadow-xl hover:border-cyan-500/30 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden cursor-pointer" onClick={() => handleOpenModal(project)}>
                  {/* Lazy loading handled natively */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-white/40 dark:via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                  {/* Click to Preview Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-amber-50/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-slate-200 dark:border-transparent">
                    <Search className="text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 w-5 h-5" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 mb-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-700 dark:text-cyan-300 text-xs font-semibold backdrop-blur-sm">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal (Increased Z-index to 99999 to cover all navbars universally) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            // Add extreme z-index and padding to keep modal fully safe from overlap
            className="fixed inset-0 z-[99999] p-4 sm:p-6 bg-slate-100/40 dark:bg-slate-900/40 dark:bg-slate-950/90 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicking inside modal from closing it
              className="relative max-w-4xl w-full bg-amber-50/60 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl mx-auto mt-24 mb-12"
            >
              {/* Restored Close Button inside the modal boundary */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-slate-100/80 dark:bg-slate-950/80 hover:bg-red-500 dark:hover:bg-red-500 hover:text-slate-900 dark:text-white text-slate-500 dark:text-slate-300 rounded-full flex items-center justify-center transition-all backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-300/50 dark:border-slate-700/50 hover:scale-110"
              >
                <X size={20} />
              </button>
              
              <div className="relative bg-slate-100 dark:bg-black max-h-[45vh] flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover sm:object-contain"
                  style={{ maxHeight: '45vh' }}
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                  <div className="flex-1 w-full">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
                      {selectedImage.category}
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{selectedImage.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-3xl">
                      {selectedImage.description}
                    </p>

                    {/* Expandable Project Details dynamically rendered locally */}
                    <AnimatePresence>
                      {isDetailsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
                        >
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <FileText size={18} className="text-cyan-600 dark:text-cyan-600 dark:text-cyan-400" />
                            Technical Overview
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-base">
                            {selectedImage.details}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {selectedImage.tags.map(tag => (
                              <span key={tag} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-950 text-cyan-700 dark:text-cyan-200 rounded-lg text-xs font-semibold border border-cyan-200 dark:border-cyan-900/50 shadow-inner">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-slate-900 dark:text-white rounded-xl transition-all shadow-lg hover:shadow-cyan-500/25 font-semibold shrink-0 w-full lg:w-auto mt-4 lg:mt-0"
                  >
                    {isDetailsOpen ? (
                      <>Hide Details <ChevronUp size={18} /></>
                    ) : (
                      <>View Details <ChevronDown size={18} /></>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsGallery;
