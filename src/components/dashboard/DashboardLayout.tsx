import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  BarChart3, 
  Users, 
  HelpCircle, 
  Camera, 
  Images, 
  Settings,
  LogOut,
  Bell,
  Search,
  User,
  Mail
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, currentPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { id: 'home', label: 'Accueil', icon: Home, path: '/dashboard' },
    { id: 'messages', label: 'Messages', icon: Mail, path: '/dashboard/messages' },
    { id: 'ai-analysis', label: 'Analyse IA Maladies', icon: Camera, path: '/dashboard/ai-analysis' },
    { id: 'networking', label: 'Mise en Relation', icon: Users, path: '/dashboard/networking' },
    { id: 'help', label: 'Aide & Conseils', icon: HelpCircle, path: '/dashboard/help' },
    { id: 'statistics', label: 'Statistiques', icon: BarChart3, path: '/dashboard/statistics' },
    { id: 'gallery', label: 'Galerie', icon: Images, path: '/dashboard/gallery' },
    { id: 'settings', label: 'Paramètres', icon: Settings, path: '/dashboard/settings' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-white shadow-xl lg:shadow-none"
            initial={{ x: -256 }}
            animate={{ x: 0 }}
            exit={{ x: -256 }}
            transition={{ duration: 0.3 }}
          >
            {/* Sidebar content */}
            <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AC</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">AgriConnect</div>
                  <div className="text-xs text-gray-500">Dashboard</div>
                </div>
              </div>
              
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* User Info */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {user?.name.split(' ').map(n => n.charAt(0)).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{user?.name}</div>
                  <div className="text-sm text-gray-500">{user?.role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <li key={item.id}>
                      <motion.button
                        onClick={() => navigate(item.path)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                          isActive
                            ? 'bg-gradient-to-r from-emerald-500 to-yellow-500 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </motion.button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-gray-200">
              <motion.button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Déconnexion</span>
              </motion.button>
            </div>
            </div>
          </motion.div>
        )}
        
        {/* Desktop Sidebar - Always visible on large screens */}
        <div className="hidden lg:block w-64 bg-white shadow-xl">
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AC</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">AgriConnect</div>
                  <div className="text-xs text-gray-500">Dashboard</div>
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {user?.name.split(' ').map(n => n.charAt(0)).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{user?.name}</div>
                  <div className="text-sm text-gray-500">{user?.role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <li key={item.id}>
                      <motion.button
                        onClick={() => navigate(item.path)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                          isActive
                            ? 'bg-gradient-to-r from-emerald-500 to-yellow-500 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </motion.button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-gray-200">
              <motion.button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Déconnexion</span>
              </motion.button>
            </div>
          </div>
        </div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {menuItems.find(item => item.id === currentPage)?.label || 'Dashboard'}
                </h1>
                <p className="text-xs lg:text-sm text-gray-500">
                  Bienvenue, {user?.name}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Notifications */}
              <motion.button
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </motion.button>

              {/* Profile */}
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {user?.name.split(' ').map(n => n.charAt(0)).join('')}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};