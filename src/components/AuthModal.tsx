import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff, Loader } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { login, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (activeTab === 'login') {
      const success = await login(formData.email, formData.password);
      if (success) {
        onSuccess();
        onClose();
      } else {
        setError('Email ou mot de passe incorrect');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ alignItems: 'center' }}
      >
        <motion.div
          className="bg-white rounded-3xl max-w-md w-full max-h-[85vh] overflow-y-auto shadow-2xl mx-auto my-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          style={{ margin: 'auto' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-yellow-500 p-4 lg:p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-xl lg:text-2xl font-bold mb-2 pr-12">
              {activeTab === 'login' ? 'Connexion' : 'Inscription'}
            </h2>
            <p className="text-emerald-100 text-sm lg:text-base">
              {activeTab === 'login' 
                ? 'Accédez à votre dashboard AgriConnect' 
                : 'Rejoignez la communauté AgriConnect'
              }
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-3 lg:py-4 px-4 lg:px-6 font-medium transition-all duration-300 relative ${
                activeTab === 'login'
                  ? 'text-emerald-700 bg-white shadow-sm'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-white/50'
              }`}
            >
              Connexion
              {activeTab === 'login' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"
                  layoutId="activeTab"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-3 lg:py-4 px-4 lg:px-6 font-medium transition-all duration-300 relative ${
                activeTab === 'register'
                  ? 'text-emerald-700 bg-white shadow-sm'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-white/50'
              }`}
            >
              Inscription
              {activeTab === 'register' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"
                  layoutId="activeTab"
                />
              )}
            </button>
          </div>

          {/* Content */}
          <div className="p-4 lg:p-6">
            {activeTab === 'login' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <motion.div
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {error}
                  </motion.div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm lg:text-base"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm lg:text-base"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-yellow-500 text-white py-3 lg:py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-yellow-600 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2 text-sm lg:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    <span>Se connecter</span>
                  )}
                </motion.button>

                <div className="text-center text-xs lg:text-sm text-gray-600 mt-4">
                  <p className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded-xl text-left">
                    <strong>Compte de test :</strong><br />
                    Email: tchambaedwin@gmail.com<br />
                    Mot de passe: 123456789
                  </p>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Votre nom complet"
                      disabled
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="votre@email.com"
                      disabled
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="••••••••"
                      disabled
                    />
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 text-orange-800 p-4 rounded-xl text-center">
                  <p className="font-medium mb-2">Fonctionnalité en développement</p>
                  <p className="text-sm">L'inscription sera disponible dans une prochaine version.</p>
                </div>

                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl font-semibold cursor-not-allowed"
                >
                  S'inscrire (Bientôt disponible)
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};