import React from 'react';
import { motion } from 'framer-motion';
import { SourceBadge } from './SourceBadge';
import { useLanguage } from '../contexts/LanguageContext';

interface KPICardProps {
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  source: string;
  sourceUrl: string;
  year: number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'stable';
}

export const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  unit,
  description,
  source,
  sourceUrl,
  year,
  icon,
  trend
}) => {
  const { t } = useLanguage();

  const formatValue = (val: string | number): string => {
    if (typeof val === 'number') {
      if (val >= 1000000000) {
        return `${(val / 1000000000).toFixed(1)} ${t('common.billion')}`;
      } else if (val >= 1000000) {
        return `${(val / 1000000).toFixed(1)} ${t('common.million')}`;
      } else if (val >= 1000) {
        return val.toLocaleString();
      }
      return val.toString();
    }
    return val;
  };

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="p-2 bg-emerald-100 rounded-lg">
              {icon}
            </div>
          )}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
            {description && (
              <p className="text-gray-600 text-sm mt-1">{description}</p>
            )}
          </div>
        </div>
        
        {trend && (
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            trend === 'up' ? 'bg-green-100 text-green-800' :
            trend === 'down' ? 'bg-red-100 text-red-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'}
          </div>
        )}
      </div>
      
      <div className="mb-4">
        <div className="text-3xl font-bold text-emerald-700 mb-1">
          {formatValue(value)}{unit && <span className="text-lg ml-1">{unit}</span>}
        </div>
        <div className="text-xs text-gray-500">({year})</div>
      </div>
      
      <div className="flex items-center justify-between">
        <SourceBadge href={sourceUrl}>
          {t('stats.source')}: {source}
        </SourceBadge>
      </div>
    </motion.div>
  );
};