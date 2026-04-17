import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import CurrencyConverter from '../components/CurrencyConverter';
import { Receipt, GraduationCap, Building2, BookOpen, Loader2 } from 'lucide-react';

const CURRENCIES = [
  { code: 'INR', name: 'Indian Rupee (?)' },
  { code: 'USD', name: 'US Dollar ($)' },
  { code: 'EUR', name: 'Euro (�)' },
  { code: 'GBP', name: 'British Pound (�)' },
  { code: 'AUD', name: 'Australian Dollar (A$)' },
  { code: 'CAD', name: 'Canadian Dollar (C$)' },
  { code: 'SGD', name: 'Singapore Dollar (S$)' },
  { code: 'JPY', name: 'Japanese Yen (�)' }
];

const FeesStructure = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('INR');
    const [exchangeRate, setExchangeRate] = useState(1);
    const [isConverting, setIsConverting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchRate = async () => {
            if (selectedCurrency === 'INR') {
                setExchangeRate(1);
                return;
            }
            
            setIsConverting(true);
            try {
                let response = await fetch(`https://api.exchangerate.host/convert?from=INR&to=${selectedCurrency}&amount=1`);
                let data = await response.json();
                
                if (data && data.success) {
                    setExchangeRate(data.result);
                } else {
                    const fallbackResponse = await fetch(`https://api.exchangerate-api.com/v4/latest/INR`);
                    const fallbackData = await fallbackResponse.json();
                    if (fallbackData && fallbackData.rates && fallbackData.rates[selectedCurrency]) {
                        setExchangeRate(fallbackData.rates[selectedCurrency]);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch exchange rate", err);
            } finally {
                setIsConverting(false);
            }
        };
        fetchRate();
    }, [selectedCurrency]);

    const formatAmount = (baseAmount) => {
        const converted = baseAmount * exchangeRate;
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: selectedCurrency,
            maximumFractionDigits: selectedCurrency === 'INR' || selectedCurrency === 'JPY' ? 0 : 2
        }).format(converted);
    };

    const feeDetails = [
        { category: 'Tuition Fee', baseAmount: 115000, icon: <BookOpen className="text-cyan-600 dark:text-cyan-400" size={24} /> },
        { category: 'Development Fee', baseAmount: 15000, icon: <Building2 className="text-blue-400" size={24} /> },
        { category: 'University Fee', baseAmount: 500, icon: <GraduationCap className="text-indigo-400" size={24} /> },
        { category: 'Total Estimated Fee (Annual)', baseAmount: 130500, icon: <Receipt className="text-cyan-600 dark:text-cyan-400" size={24} />, isTotal: true },
    ];

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pb-20">
            <SectionHeader
                title="Fees Structure"
                subtitle="Transparent and accessible fee structures for our academic programs."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-slate-100/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-[80px]" />
                        
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-300 dark:border-slate-800 pb-4 gap-4 md:gap-0">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                Undergraduate Programs (B.Tech AIML)
                            </h3>
                            
                            {/* Currency Filter */}
                            <div className="flex items-center space-x-3 z-10 shrink-0">
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">View in:</span>
                                <div className="relative">
                                    <select 
                                        value={selectedCurrency}
                                        onChange={(e) => setSelectedCurrency(e.target.value)}
                                        className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 text-sm rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none cursor-pointer font-semibold"
                                    >
                                        {CURRENCIES.map(c => (
                                            <option key={c.code} value={c.code}>
                                                {c.code} - {c.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        ?
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {feeDetails.map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${item.isTotal ? 'bg-cyan-950/30 border-cyan-800/50 mt-8' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800/50 hover:bg-white/50 dark:bg-slate-800/50'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-stone-50 dark:bg-slate-950 flex items-center justify-center border border-slate-300 dark:border-slate-800 shadow-inner">
                                            {item.icon}
                                        </div>
                                        <span className={`text-lg transition-colors ${item.isTotal ? 'font-bold text-cyan-600 dark:text-cyan-400' : 'font-medium text-slate-700 dark:text-slate-300'}`}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="relative flex items-center">
                                        <AnimatePresence mode="wait">
                                            {isConverting ? (
                                                <motion.div 
                                                    key="loader"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex items-center text-cyan-600 dark:text-cyan-400"
                                                >
                                                    <Loader2 className="w-6 h-6 animate-spin" />
                                                </motion.div>
                                            ) : (
                                                <motion.span 
                                                    key="amount"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className={`text-xl md:text-2xl font-mono ${item.isTotal ? 'font-black text-slate-900 dark:text-white' : 'font-bold text-slate-800 dark:text-slate-200'}`}
                                                >
                                                    {formatAmount(item.baseAmount)}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="mt-8 text-sm text-slate-500 italic text-center">
                            * The fee structure is subject to changes as per the university directives across academic years. 
                            {selectedCurrency !== 'INR' && " Converted values are estimates based on live exchange rates."}
                        </p>
                    </div>
                </motion.div>

                {/* The standalone Currency Converter component */}
                <div>
                     <CurrencyConverter />
                </div>
            </div>
        </div>
    );
};

export default FeesStructure;
