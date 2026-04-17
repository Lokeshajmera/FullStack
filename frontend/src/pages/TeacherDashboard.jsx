import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { LogOut, Upload, File, Trash2, CheckCircle2, AlertCircle, FileText, LayoutDashboard, Plus, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { studyResourcesData } from '../data/studyResourcesData';

const TeacherDashboard = () => {
    const { user, logout } = useAuth();
    const [resources, setResources] = useState([]);
    
    // Form State
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [subject, setSubject] = useState('');
    const [unit, setUnit] = useState('');
    const [file, setFile] = useState(null);
    
    // UI State
    const [isUploading, setIsUploading] = useState(false);
    const [loadingResources, setLoadingResources] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showUploadForm, setShowUploadForm] = useState(false);



    // Fetch previously uploaded resources by this teacher
    useEffect(() => {
        const fetchResources = async () => {
            try {
                const { data, error } = await supabase
                    .from('study_resources')
                    .select('*')
                    .eq('teacher_id', user.id)
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setResources(data || []);
            } catch (err) {
                console.error("Error fetching resources:", err);
            } finally {
                setLoadingResources(false);
            }
        };

        if (user) {
            fetchResources();
        }
    }, [user]);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            // Enforce PDF only
            if (selectedFile.type !== 'application/pdf') {
                setError('Only PDF files are allowed!');
                e.target.value = null;
                return;
            }
            // Enforce max size (e.g., 10MB)
            if (selectedFile.size > 10 * 1024 * 1024) {
                setError('File size must be under 10MB');
                e.target.value = null;
                return;
            }
            setFile(selectedFile);
            setError(null);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file || !title || !subject || !unit) {
            setError('Please fill in all fields and select a file.');
            return;
        }

        setIsUploading(true);
        setError(null);
        setSuccess(null);

        try {
            // 1. Upload to Supabase Storage
            const fileExt = file.name.split('.').pop();
            const fileName = `${user.id}_${Date.now()}.${fileExt}`;
            const filePath = `${subject.replace(/\s+/g, '-')}/${fileName}`;

            const { error: uploadError, data: uploadData } = await supabase.storage
                .from('study_resources')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('study_resources')
                .getPublicUrl(filePath);

            // 3. Save metadata to Supabase DB
            const { data: dbData, error: dbError } = await supabase
                .from('study_resources')
                .insert([
                    {
                        title: title,
                        subject: subject,
                        unit: unit,
                        file_url: publicUrl,
                        storage_path: filePath,
                        teacher_id: user.id,
                        teacher_email: user.email
                    }
                ])
                .select();

            if (dbError) throw dbError;

            // 4. Update UI State
            setSuccess('Resource uploaded successfully!');
            setResources([dbData[0], ...resources]);
            
            // Clean up form
            setTitle('');
            setUnit('');
            setSubject('');
            setSemester('');
            setYear('');
            setFile(null);
            document.getElementById('file-upload').value = null;
            setTimeout(() => {
                setShowUploadForm(false);
                setSuccess(null);
            }, 3000);

        } catch (err) {
            console.error("Upload error:", err);
            setError(err.message || 'Failed to upload resource. Please try again.');
        } finally {
            setIsUploading(false);
        }
    };

    const handleDelete = async (id, storagePath) => {
        if (!window.confirm('Are you sure you want to delete this resource?')) return;

        try {
            // 1. Delete from database
            const { error: dbError } = await supabase
                .from('study_resources')
                .delete()
                .eq('id', id);
            
            if (dbError) throw dbError;

            // 2. Optional: Delete from storage bucket
            if (storagePath) {
                const { error: storageError } = await supabase.storage
                    .from('study_resources')
                    .remove([storagePath]);
                if (storageError) console.error("Warning: Could not delete actual file", storageError);
            }

            // Update UI State
            setResources(resources.filter(r => r.id !== id));
        } catch (err) {
            console.error("Deletion error:", err);
            alert("Failed to delete resource.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 p-6 bg-amber-50/60 dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 rounded-full flex items-center justify-center">
                            <LayoutDashboard size={24} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Faculty Dashboard</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Welcome back, {user.email}</p>
                        </div>
                    </div>
                    <button 
                        onClick={logout}
                        className="mt-4 md:mt-0 px-5 py-2.5 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 font-semibold rounded-xl flex items-center justify-center transition-colors"
                    >
                        <LogOut size={16} className="mr-2" /> Sign Out
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column: Actions & Form */}
                    <div className="lg:col-span-1 space-y-6">
                        
                        {!showUploadForm ? (
                            <button 
                                onClick={() => setShowUploadForm(true)}
                                className="w-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-cyan-300 dark:border-cyan-800 rounded-2xl bg-cyan-50/50 dark:bg-cyan-900/10 hover:bg-cyan-100/50 dark:hover:bg-cyan-900/20 text-cyan-600 dark:text-cyan-600 dark:text-cyan-400 transition-all group"
                            >
                                <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Plus size={28} />
                                </div>
                                <span className="font-bold text-lg">Upload New Resource</span>
                                <span className="text-sm opacity-80 mt-1">Add PDF unit summaries or notes</span>
                            </button>
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-amber-50/60 dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 p-6 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500" />
                                
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                        <Upload className="text-cyan-500" size={20} />
                                        Upload Material
                                    </h2>
                                    <button 
                                        onClick={() => setShowUploadForm(false)}
                                        className="text-slate-600 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-medium"
                                    >
                                        Cancel
                                    </button>
                                </div>

                                {/* Form Alerts */}
                                {error && (
                                    <div className="mb-6 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                                        <p className="text-xs font-medium text-red-800 dark:text-red-200">{error}</p>
                                    </div>
                                )}
                                {success && (
                                    <div className="mb-6 p-3 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-lg flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">{success}</p>
                                    </div>
                                )}

                                <form onSubmit={handleUpload} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Academic Year</label>
                                        <select 
                                            required
                                            value={year}
                                            onChange={(e) => { setYear(e.target.value); setSemester(''); setSubject(''); }}
                                            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none text-slate-800 dark:text-slate-200 text-sm"
                                        >
                                            <option value="" disabled>Select Year</option>
                                            {Object.entries(studyResourcesData).map(([yearKey, yearData]) => (
                                                <option key={yearKey} value={yearKey}>{yearData.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {year && (
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Semester</label>
                                            <select 
                                                required
                                                value={semester}
                                                onChange={(e) => { setSemester(e.target.value); setSubject(''); }}
                                                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none text-slate-800 dark:text-slate-200 text-sm"
                                            >
                                                <option value="" disabled>Select Semester</option>
                                                {Object.entries(studyResourcesData[year].semesters).map(([semKey, semData]) => (
                                                    <option key={semKey} value={semKey}>{semData.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}

                                    {semester && studyResourcesData[year].semesters[semester].subjects.length > 0 && (
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Subject</label>
                                            <select 
                                                required
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none text-slate-800 dark:text-slate-200 text-sm"
                                            >
                                                <option value="" disabled>Select Subject</option>
                                                {studyResourcesData[year].semesters[semester].subjects.map(sub => (
                                                    <option key={sub.id} value={sub.name}>{sub.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Unit / Chapter</label>
                                        <input 
                                            type="text" 
                                            required
                                            value={unit}
                                            onChange={(e) => setUnit(e.target.value)}
                                            placeholder="e.g., Unit 1 or Chapter 3"
                                            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none text-slate-800 dark:text-slate-200 text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Document Title</label>
                                        <input 
                                            type="text" 
                                            required
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="e.g., Intro to Neural Networks Notes"
                                            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none text-slate-800 dark:text-slate-200 text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">PDF File</label>
                                        <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-4 bg-slate-50 dark:bg-slate-800 hover:border-cyan-400 transition-colors cursor-pointer flex flex-col items-center justify-center text-center">
                                            <input 
                                                id="file-upload"
                                                type="file" 
                                                accept=".pdf"
                                                required
                                                onChange={handleFileChange}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            {file ? (
                                                <div className="flex flex-col items-center text-cyan-600 dark:text-cyan-600 dark:text-cyan-400">
                                                    <FileText size={32} className="mb-2" />
                                                    <span className="text-sm font-medium break-all">{file.name}</span>
                                                    <span className="text-xs text-slate-500 mt-1">Click to change</span>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center text-slate-500 dark:text-slate-400">
                                                    <Upload size={28} className="mb-2 opacity-60" />
                                                    <span className="text-sm font-medium">Click or drag PDF here</span>
                                                    <span className="text-xs opacity-70 mt-1">Maximum size 10MB</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={isUploading}
                                        className={`w-full mt-4 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold transition-all shadow-md flex items-center justify-center ${isUploading ? 'opacity-70 cursor-wait' : ''}`}
                                    >
                                        {isUploading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                                Uploading...
                                            </>
                                        ) : 'Publish Resource'}
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </div>

                    {/* Right Column: Uploaded Files List */}
                    <div className="lg:col-span-2">
                        <div className="bg-amber-50/60 dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden min-h-[500px]">
                            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
                                <h3 className="font-bold text-slate-800 dark:text-slate-100">Your Uploads</h3>
                                <span className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-600 dark:text-cyan-400 py-1 px-3 rounded-full text-xs font-bold">
                                    {resources.length} Files
                                </span>
                            </div>

                            <div className="p-0">
                                {loadingResources ? (
                                    <div className="flex flex-col items-center justify-center h-64 text-slate-600 dark:text-slate-400">
                                        <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4" />
                                        <p>Loading your documents...</p>
                                    </div>
                                ) : resources.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-64 text-slate-600 dark:text-slate-400 text-center px-6">
                                        <FileText size={48} className="mb-4 opacity-20" />
                                        <p className="font-medium text-slate-500">No resources uploaded yet.</p>
                                        <p className="text-sm mt-1">Your uploaded study materials will appear here.</p>
                                    </div>
                                ) : (
                                    <ul className="divide-y divide-slate-100 dark:divide-slate-800/60">
                                        <AnimatePresence>
                                            {resources.map((resource) => (
                                                <motion.li 
                                                    key={resource.id}
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="p-6 hover:bg-stone-100 dark:hover:bg-slate-800/30 transition-colors"
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex gap-4">
                                                            <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-500 flex items-center justify-center shrink-0">
                                                                <File size={20} />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-base">{resource.title}</h4>
                                                                <div className="flex flex-wrap items-center gap-3 mt-2">
                                                                    <span className="text-xs font-semibold px-2.5 py-1 bg-stone-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                                                                        {resource.subject}
                                                                    </span>
                                                                    <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-md border border-purple-100 dark:border-purple-800/50">
                                                                        {resource.unit}
                                                                    </span>
                                                                    <span className="text-xs text-slate-600 dark:text-slate-400">
                                                                        {new Date(resource.created_at).toLocaleDateString()}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <a 
                                                                href={resource.file_url} 
                                                                target="_blank" 
                                                                rel="noreferrer"
                                                                className="p-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 rounded-lg transition-colors"
                                                                title="View PDF"
                                                            >
                                                                <ExternalLink size={18} />
                                                            </a>
                                                            <button 
                                                                onClick={() => handleDelete(resource.id, resource.storage_path)}
                                                                className="p-2 text-slate-600 dark:text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                                                title="Delete file"
                                                            >
                                                                <Trash2 size={18} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </motion.li>
                                            ))}
                                        </AnimatePresence>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;
