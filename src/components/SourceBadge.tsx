import React, { useState } from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

interface SourceBadgeProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({ href, children, className = '' }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopySource = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy source URL:', err);
    }
  };

  return (
    <div className={`inline-flex items-center space-x-2 ${className}`}>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium hover:bg-emerald-200 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{children}</span>
        <ExternalLink className="w-3 h-3 ml-1" />
      </motion.a>
      
      <motion.button
        onClick={handleCopySource}
        className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs hover:bg-gray-200 transition-colors"
        title={t('common.copySource')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {copied ? (
          <Check className="w-3 h-3 text-green-600" />
        ) : (
          <Copy className="w-3 h-3" />
        )}
      </motion.button>
    </div>
  );
};