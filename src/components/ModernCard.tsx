import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
  href?: string;
}

export const ModernCard: React.FC<ModernCardProps> = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  onClick,
  href
}) => {
  const cardContent = (
    <motion.div
      className={`
        relative overflow-hidden rounded-3xl backdrop-blur-sm border border-white/20
        ${gradient 
          ? 'bg-gradient-to-br from-white/90 via-white/80 to-white/70' 
          : 'bg-white/90'
        }
        shadow-xl shadow-emerald-500/10
        ${hover ? 'hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2' : ''}
        transition-all duration-500 ease-out
        ${className}
      `}
      whileHover={hover ? { 
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
    >
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-xl opacity-60" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-xl opacity-40" />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export const ModernKPICard: React.FC<{
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'stable';
  color?: string;
}> = ({ title, value, unit, description, icon, trend, color = 'emerald' }) => {
  return (
    <ModernCard className="p-8 group" gradient>
      <div className="flex items-start justify-between mb-6">
        {icon && (
          <motion.div 
            className={`p-4 rounded-2xl bg-gradient-to-br from-${color}-500/20 to-${color}-600/20 group-hover:from-${color}-500/30 group-hover:to-${color}-600/30 transition-all duration-300`}
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            {icon}
          </motion.div>
        )}
        
        {trend && (
          <motion.div
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              trend === 'up' ? 'bg-green-100 text-green-700' :
              trend === 'down' ? 'bg-red-100 text-red-700' :
              'bg-gray-100 text-gray-700'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'}
          </motion.div>
        )}
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <div className={`text-4xl font-bold bg-gradient-to-r from-${color}-600 to-${color}-700 bg-clip-text text-transparent mb-2`}>
          {typeof value === 'number' ? value.toLocaleString() : value}
          {unit && <span className="text-2xl ml-1">{unit}</span>}
        </div>
        {description && (
          <p className="text-sm text-gray-600">{description}</p>
        )}
      </motion.div>
    </ModernCard>
  );
};