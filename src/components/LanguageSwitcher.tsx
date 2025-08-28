import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <motion.button
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Languages className="w-4 h-4 text-emerald-700" />
        <span className="text-sm font-medium text-emerald-700 uppercase">
          {language}
        </span>
      </motion.button>
      
      <motion.div
        className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        initial={{ opacity: 0, y: -10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        <button
          onClick={() => setLanguage('fr')}
          className={`block w-full px-4 py-2 text-left text-sm hover:bg-emerald-50 transition-colors ${
            language === 'fr' ? 'bg-emerald-50 text-emerald-700 font-medium' : 'text-gray-700'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`block w-full px-4 py-2 text-left text-sm hover:bg-emerald-50 transition-colors ${
            language === 'en' ? 'bg-emerald-50 text-emerald-700 font-medium' : 'text-gray-700'
          }`}
        >
          EN
        </button>
      </motion.div>
    </div>
  );
};