import React from 'react';
import { motion } from 'framer-motion';
import { SourceBadge } from './SourceBadge';
import { HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ChartCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  source: string;
  sourceUrl: string;
  tooltip?: string;
  className?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({
  title,
  description,
  children,
  source,
  sourceUrl,
  tooltip,
  className = ''
}) => {
  const { t } = useLanguage();

  return (
    <motion.div
      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-bold text-xl text-gray-900">{title}</h3>
            {tooltip && (
              <div className="relative group">
                <HelpCircle className="w-4 h-4 text-gray-400 hover:text-emerald-600 cursor-help transition-colors" />
                <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                  {tooltip}
                </div>
              </div>
            )}
          </div>
          {description && (
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          )}
        </div>
      </div>
      
      <div className="mb-6">
        {children}
      </div>
      
      <div className="border-t border-gray-100 pt-4">
        <SourceBadge href={sourceUrl}>
          {t('stats.source')}: {source}
        </SourceBadge>
      </div>
    </motion.div>
  );
};