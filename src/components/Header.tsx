import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Menu, X, User, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthModal } from './AuthModal';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showAuthModal, setShowAuthModal] = React.useState(false);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.observatory'), href: '/observatory' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.stats'), href: '/statistics' },
    // { name: t('nav.partners'), href: '/partners' },
    // { name: t('nav.gallery'), href: '/gallery' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const handleAuthSuccess = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <motion.header
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="logo.png" alt="" className="w-12 h-12 object-contain" />
            <div>
              <div className="font-bold text-lg lg:text-xl text-emerald-700">AgriConnect</div>
              <div className="text-xs lg:text-sm text-gray-600">Cameroun</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  location.pathname === item.href
                    ? 'text-emerald-700'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600"
                    layoutId="activeTab"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Button, Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Auth Button */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Link
                  to="/dashboard"
                  className="bg-gradient-to-r from-emerald-600 to-yellow-500 text-white px-3 py-2 lg:px-6 lg:py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-yellow-600 transition-colors text-sm lg:text-base shadow-lg flex items-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden lg:inline">Dashboard</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-800 font-medium text-sm lg:text-base hidden lg:block"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <motion.button
                onClick={() => setShowAuthModal(true)}
                className="bg-gradient-to-r from-emerald-600 to-yellow-500 text-white px-3 py-2 lg:px-6 lg:py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-yellow-600 transition-colors shadow-lg text-sm lg:text-base flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden lg:inline">Connexion</span>
                <span className="lg:hidden">Connexion</span>
              </motion.button>
            )}
            
            {/* Language Switcher - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-2 bg-emerald-50 rounded-lg px-3 py-2">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  language === 'fr' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                EN
              </button>
            </div>
            
            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-gray-200 bg-white"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                      location.pathname === item.href
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Auth Button */}
                <div className="px-4 py-2 border-t border-gray-100 mt-4">
                  {isAuthenticated ? (
                    <div className="space-y-2">
                      <Link
                        to="/dashboard"
                        className="block w-full bg-gradient-to-r from-emerald-600 to-yellow-500 text-white py-2 px-4 rounded-lg font-medium text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-gray-600 hover:text-gray-800 font-medium py-2"
                      >
                        Déconnexion
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          setShowAuthModal(true);
                          setIsMenuOpen(false);
                        }}
                        className="block w-full bg-gradient-to-r from-emerald-600 to-yellow-500 text-white py-3 px-4 rounded-lg font-medium text-center"
                      >
                        Connexion / Inscription
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Mobile Language Switcher */}
                <div className="px-4 py-2 border-t border-gray-100 mt-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-700">Langue:</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setLanguage('fr')}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                          language === 'fr' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        FR
                      </button>
                      <button
                        onClick={() => setLanguage('en')}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                          language === 'en' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        EN
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </motion.header>
  );
};