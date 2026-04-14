import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';

const AITutorChat = ({ isOpen, onClose, contextTitle, documentLink }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'ai',
            text: `Hi! I'm your AI Tutor. I've analyzed the materials for **${contextTitle}**. What would you like to know?`,
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            sender: 'user',
            text: inputValue.trim()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        try {
            let bodyData;
            let headers = {};

            if (documentLink) {
                // Fetch the document and send as FormData
                const fileRes = await fetch(documentLink);
                const blob = await fileRes.blob();
                bodyData = new FormData();
                bodyData.append('file', blob, 'document.pdf');
                bodyData.append('question', userMessage.text);
                // Don't set Content-Type for FormData, browser does it automatically with boundary
            } else {
                bodyData = JSON.stringify({ question: userMessage.text });
                headers = { 'Content-Type': 'application/json' };
            }

            const res = await fetch('http://localhost:5000/api/ai/ask', {
                method: 'POST',
                headers: headers,
                body: bodyData
            });

            const data = await res.json();

            if (data.success) {
                const aiMessage = {
                    id: Date.now() + 1,
                    sender: 'ai',
                    text: data.answer
                };
                setMessages(prev => [...prev, aiMessage]);
            } else {
                throw new Error("Failed to get answer");
            }
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'ai',
                text: "Sorry, I'm having trouble connecting to my brain right now. Please try again later.",
                isError: true
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: "100%", opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: "100%", opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-amber-50/60 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-t-3xl sm:rounded-3xl w-full max-w-lg h-[80vh] sm:h-[600px] flex flex-col overflow-hidden shadow-2xl relative"
                >
                    {/* Header */}
                    <div className="p-5 border-b border-slate-200 dark:border-neutral-800 flex items-center justify-between bg-amber-50/60 dark:bg-neutral-900/80 sticky top-0 z-10 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-neutral-900 rounded-full"></div>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Ask AI Tutor</h2>
                                <p className="text-xs text-slate-600 dark:text-neutral-400 truncate max-w-[200px]">Context: {contextTitle}</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-stone-100 dark:bg-neutral-800 rounded-full transition-colors text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-stone-50 dark:bg-neutral-950/50">
                        {messages.map((message) => (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${message.sender === 'user' ? 'bg-blue-600' : 'bg-emerald-600'}`}>
                                    {message.sender === 'user' ? <User className="w-4 h-4 text-slate-900 dark:text-white" /> : <Bot className="w-4 h-4 text-slate-900 dark:text-white" />}
                                </div>
                                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.sender === 'user'
                                    ? 'bg-blue-600 text-slate-900 dark:text-white rounded-tr-none'
                                    : message.isError
                                        ? 'bg-red-500/10 border border-red-500/20 text-red-200 rounded-tl-none'
                                        : 'bg-stone-100 dark:bg-neutral-800 text-slate-800 dark:text-neutral-200 rounded-tl-none border border-slate-200 dark:border-neutral-700'
                                    }`}>
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                                </div>
                            </motion.div>
                        ))}

                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex gap-3"
                            >
                                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-emerald-600">
                                    <Bot className="w-4 h-4 text-slate-900 dark:text-white" />
                                </div>
                                <div className="bg-stone-100 dark:bg-neutral-800 rounded-2xl rounded-tl-none px-4 py-3 border border-slate-200 dark:border-neutral-700 flex flex-col gap-1 items-start min-w-[80px]">
                                    <div className="flex gap-1 justify-center py-1">
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                                    </div>
                                    <span className="text-[10px] text-neutral-500">Searching knowledge base...</span>
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-amber-50/60 dark:bg-neutral-900 border-t border-slate-200 dark:border-neutral-800">
                        <form onSubmit={handleSendMessage} className="relative flex items-center">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask a question about the notes..."
                                className="w-full bg-stone-100 dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 rounded-full py-3 pl-5 pr-12 text-sm text-slate-900 dark:text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                                disabled={isTyping}
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isTyping}
                                className="absolute right-2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 dark:text-white disabled:opacity-50 disabled:bg-neutral-700 transition-colors"
                            >
                                <Send className="w-4 h-4 ml-[-2px]" />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AITutorChat;
