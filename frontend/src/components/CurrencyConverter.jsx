import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftRight, Loader2, RefreshCcw, AlertCircle } from 'lucide-react';

const CURRENCIES = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
];

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [result, setResult] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchExchangeRate = async () => {
    if (!amount || amount <= 0) {
      setError('Please enter a valid amount greater than 0');
      return;
    }

    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      // Primary API as requested: api.exchangerate.host 
      // Note: This API frequently requires an access key now. We implement a seamless fallback to ensure it works.
      let response = await fetch(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
      let data = await response.json();

      if (data && data.success) {
        setResult(data.result);
        setExchangeRate(data.info.quote);
      } else {
        // Fallback to a free, open API (exchangerate-api.com) when exchangerate.host fails (e.g. key required)
        const fallbackResponse = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const fallbackData = await fallbackResponse.json();
        
        if (fallbackData && fallbackData.rates && fallbackData.rates[toCurrency]) {
          const rate = fallbackData.rates[toCurrency];
          setExchangeRate(rate);
          setResult(amount * rate);
        } else {
            throw new Error('Conversion data unavailable');
        }
      }
    } catch (err) {
      setError('Failed to fetch real-time exchange rates. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    // Optional: Auto fetch on first load or when currencies swap
    fetchExchangeRate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromCurrency, toCurrency]);

  const formatCurrency = (value, currencyCode) => {
    if (value === null || value === undefined) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <section className="py-20 bg-stone-50 dark:bg-slate-950 relative overflow-hidden" id="tools">
      {/* Background aesthetics balancing existing app design */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-indigo-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6"
          >
            Currency <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Converter</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Convert real-time exchange rates securely and instantly.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-slate-100/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-300 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-end">
            
            {/* Amount & From */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Amount</label>
                <div className="relative">
                  <input 
                    type="number"
                    min="0"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full bg-white/50 dark:bg-slate-950/50 border border-slate-300 dark:border-slate-800 rounded-xl py-3 px-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-mono"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">From</label>
                <div className="relative">
                  <select 
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full bg-white/50 dark:bg-slate-950/50 border border-slate-300 dark:border-slate-800 rounded-xl py-3 px-4 text-slate-900 dark:text-white cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  >
                    {CURRENCIES.map(c => (
                      <option key={`from-${c.code}`} value={c.code}>
                        {c.code} - {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center mb-2 md:mb-4">
              <button
                onClick={handleSwap}
                className="bg-white dark:bg-slate-800 hover:bg-slate-700 text-cyan-600 dark:text-cyan-400 p-4 rounded-full transition-transform hover:scale-110 active:scale-95 shadow-lg flex items-center justify-center border border-slate-300 dark:border-slate-700"
                aria-label="Swap Currencies"
              >
                <ArrowLeftRight className="w-6 h-6" />
              </button>
            </div>

            {/* To Currency & Convert Button */}
            <div className="space-y-4">
               {/* Spacer to align correctly on desktop */}
               <div className="hidden md:block h-[72px]" /> 
               <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">To</label>
                <div className="relative">
                  <select 
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="w-full bg-white/50 dark:bg-slate-950/50 border border-slate-300 dark:border-slate-800 rounded-xl py-3 px-4 text-slate-900 dark:text-white cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  >
                    {CURRENCIES.map(c => (
                      <option key={`to-${c.code}`} value={c.code}>
                        {c.code} - {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <button
              onClick={fetchExchangeRate}
              disabled={isLoading}
              className="w-full md:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-slate-900 dark:text-white font-medium py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_25px_rgba(8,145,178,0.5)] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Converting...
                </>
              ) : (
                <>
                  <RefreshCcw className="w-5 h-5 mr-2" />
                  Convert
                </>
              )}
            </button>

            <AnimatePresence mode="wait">
              <motion.div 
                key={result ? 'result' : error ? 'error' : 'empty'}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex-1 text-center md:text-right"
              >
                {error && (
                  <div className="flex items-center justify-center md:justify-end text-red-400 gap-2 font-medium">
                    <AlertCircle className="w-5 h-5" />
                    <span>{error}</span>
                  </div>
                )}
                
                {!error && result !== null && (
                  <div className="flex flex-col items-center md:items-end">
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                      {amount} {fromCurrency} =
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      {formatCurrency(result, toCurrency)}
                    </div>
                    {exchangeRate && (
                      <div className="text-xs text-slate-500 mt-2">
                        1 {fromCurrency} = {formatCurrency(exchangeRate, toCurrency)}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
