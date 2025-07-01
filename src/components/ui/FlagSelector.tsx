
import React, { useState, useRef, useEffect } from 'react';
import { useLocalization, Locale } from '@/contexts/LocalizationContext';
import { motion, AnimatePresence } from 'framer-motion';

const FlagSelector = () => {
  const { locale, setLocale } = useLocalization();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  const getFlagEmoji = (locale: Locale) => {
    return locale === 'US' ? '🇺🇸' : '🇬🇧';
  };

  const getCountryName = (locale: Locale) => {
    return locale === 'US' ? 'United States' : 'United Kingdom';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md bg-gray-100/10 dark:bg-zinc-900/50 light:bg-gray-100/10 backdrop-blur-sm border border-gray-300/20 dark:border-zinc-800/50 light:border-gray-300/20 hover:border-[#D4AF37]/50 transition-all duration-200 text-white"
        aria-label={`Current language: ${getCountryName(locale)}`}
      >
        <span className="text-lg">{getFlagEmoji(locale)}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 dark:bg-zinc-900/95 light:bg-white/95 backdrop-blur-md border border-gray-700 dark:border-zinc-800 light:border-gray-200 rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="py-1">
              {(['US', 'UK'] as Locale[]).map((localeOption) => (
                <button
                  key={localeOption}
                  onClick={() => handleLocaleChange(localeOption)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-800/50 dark:hover:bg-zinc-800/50 light:hover:bg-gray-100 transition-colors duration-150 ${
                    locale === localeOption 
                      ? 'bg-[#D4AF37]/10 text-[#D4AF37]' 
                      : 'text-white dark:text-white light:text-gray-900'
                  }`}
                >
                  <span className="text-xl">{getFlagEmoji(localeOption)}</span>
                  <div className="flex flex-col">
                    <span className="font-medium">{getCountryName(localeOption)}</span>
                    <span className="text-xs opacity-75">
                      {localeOption === 'US' ? 'American English' : 'British English'}
                    </span>
                  </div>
                  {locale === localeOption && (
                    <div className="ml-auto">
                      <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlagSelector;
