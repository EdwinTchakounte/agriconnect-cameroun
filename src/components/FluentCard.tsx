import React from 'react';
import { motion } from 'framer-motion';

interface FluentCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  acrylic?: boolean;
  onClick?: () => void;
  href?: string;
}

export const FluentCard: React.FC<FluentCardProps> = ({
  children,
  className = '',
  hover = true,
  acrylic = false,
  onClick,
  href
}) => {
  const cardContent = (
    <motion.div
      className={`
        relative overflow-hidden rounded-xl
        ${acrylic 
          ? 'bg-white/85 backdrop-blur-xl border border-emerald-200/40 shadow-xl' 
          : 'bg-white/95 backdrop-blur-md border border-emerald-100/60 shadow-lg'
        }
        ${hover ? 'hover:shadow-2xl hover:scale-[1.03] hover:bg-white hover:border-emerald-200' : ''}
        transition-all duration-500 ease-out
        ${className}
      `}
      whileHover={hover ? { 
        y: -6,
        transition: { duration: 0.3, type: "spring", stiffness: 300 }
      } : {}}
      onClick={onClick}
    >
      {/* Fluent Design Highlight */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-emerald-500/15 via-green-500/15 to-teal-500/15 opacity-0 hover:opacity-100 transition-opacity duration-500" />
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

export const FluentKPICard: React.FC<{
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'stable';
  color?: string;
}> = ({ title, value, unit, description, icon, trend, color = 'emerald' }) => {
  return (
    <FluentCard className="p-6 group" acrylic>
      <div className="flex items-start justify-between mb-4">
        {icon && (
          <motion.div 
            className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/15 to-emerald-600/25 group-hover:from-emerald-500/25 group-hover:to-emerald-600/35 transition-all duration-500"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {icon}
          </motion.div>
        )}
        
        {trend && (
          <motion.div
            className={`px-2 py-1 rounded-md text-xs font-medium ${
              trend === 'up' ? 'bg-yellow-100/80 text-yellow-700' :
              trend === 'down' ? 'bg-red-100/80 text-red-700' :
              'bg-emerald-100/80 text-emerald-700'
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
        <h3 className="text-sm font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent mb-1">
          {typeof value === 'number' ? value.toLocaleString() : value}
          {unit && <span className="text-lg ml-1 text-yellow-600 font-semibold">{unit}</span>}
        </div>
        {description && (
          <p className="text-xs text-gray-700 font-medium">{description}</p>
        )}
      </motion.div>
    </FluentCard>
  );
};