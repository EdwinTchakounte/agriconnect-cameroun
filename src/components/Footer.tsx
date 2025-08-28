import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.observatory'), href: '/observatory' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.stats'), href: '/statistics' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                          <img src="logo.png" alt="" className="w-12 h-12 object-contain" />
                         
                        </Link>
              <div>
                <div className="font-bold text-xl">AgriConnect</div>
                <div className="text-emerald-200">Cameroun</div>
              </div>
            </motion.div>
            
            <p className="text-emerald-100 mb-6 leading-relaxed max-w-md">
              {t('hero.description')}
            </p>
            
            <div className="mb-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-100 text-sm">{t('footer.address')}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a
                  href="mailto:contact@agriconnect-cameroun.com"
                  className="text-emerald-100 text-sm hover:text-white transition-colors"
                >
                  contact@agriconnect-cameroun.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <div className="text-emerald-100 text-sm">
                  <div>+237 673 398 046</div>
                  <div>+237 659 902 191</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-emerald-200 text-sm">
              © 2025 AgriConnect Cameroun. {t('footer.rights')}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="text-emerald-200">
                {t('footer.lastUpdate')}: Juiellet 2025
              </div>
              <a
                href="https://snd30.cm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-white transition-colors"
              >
                SND30
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};