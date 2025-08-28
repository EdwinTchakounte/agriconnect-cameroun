import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Cloud, 
  Droplets, 
  Wind, 
  TrendingUp, 
  Users, 
  BarChart3, 
  AlertTriangle,
  Leaf,
  Calendar
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import apiService from '../../services/apiService';

interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  weather: Array<{ description: string; icon: string }>;
  wind: { speed: number };
}

interface StatsCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  icon: React.ReactNode;
  color: string;
}

export const DashboardHome: React.FC = () => {
  const { user } = useAuth();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Récupérer les données météo
        const weatherData = await apiService.getWeatherData('Douala,CM');
        setWeather(weatherData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        // Données météo de fallback plus réalistes
        setWeather({
          name: 'Douala',
          main: { temp: 28, humidity: 75 },
          weather: [{ description: 'Partiellement nuageux', icon: '02d' }],
          wind: { speed: 3.2 }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statsCards: StatsCard[] = [
    {
      title: 'Analyses IA',
      value: '47',
      change: '+12%',
      trend: 'up',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'emerald'
    },
    {
      title: 'Connexions',
      value: '234',
      change: '+18%',
      trend: 'up',
      icon: <Users className="w-6 h-6" />,
      color: 'yellow'
    },
    {
      title: 'Conseils Reçus',
      value: '28',
      change: '+7',
      trend: 'up',
      icon: <Leaf className="w-6 h-6" />,
      color: 'emerald'
    },
    {
      title: 'Alertes',
      value: '5',
      change: '-3',
      trend: 'down',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'yellow'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'ai-analysis',
      title: 'Analyse IA - Maladie détectée',
      description: 'Mildiou détecté sur culture de tomate',
      time: 'Il y a 2 heures',
      status: 'warning'
    },
    {
      id: 2,
      type: 'connection',
      title: 'Nouvelle connexion',
      description: 'Coopérative Agricole de Bafoussam',
      time: 'Il y a 4 heures',
      status: 'success'
    },
    {
      id: 3,
      type: 'advice',
      title: 'Conseil technique reçu',
      description: 'Optimisation irrigation maïs',
      time: 'Hier',
      status: 'info'
    }
  ];

  return (
    <DashboardLayout currentPage="home">
      <div className="space-y-6">
        {/* Welcome Section */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">
                Bonjour, {user?.name.split(' ')[0]} ! 👋
              </h1>
              <p className="text-emerald-100 text-base lg:text-lg">
                Bienvenue sur votre dashboard AgriConnect
              </p>
              <p className="text-emerald-200 mt-2 text-sm lg:text-base">
                {new Date().toLocaleDateString('fr-FR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            
            {/* Weather Widget */}
            {weather && (
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center w-full lg:w-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <Sun className="w-8 h-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">{Math.round(weather.main?.temp || 0)}°C</div>
                <div className="text-sm text-emerald-100">{weather.name}</div>
                <div className="text-xs text-emerald-200 mt-1">
                  {weather.weather?.[0]?.description || 'Partiellement nuageux'}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 lg:p-3 rounded-xl bg-${card.color}-100`}>
                  <div className={`text-${card.color}-600`}>
                    {card.icon}
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  card.trend === 'up' ? 'bg-green-100 text-green-800' :
                  card.trend === 'down' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {card.change}
                </div>
              </div>
              
              <div className="mb-2">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {card.value}
                </div>
                <div className="text-xs lg:text-sm text-gray-600">{card.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weather Details */}
          {weather && (
            <motion.div
              className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Cloud className="w-6 h-6 text-emerald-600 mr-2" />
                Conditions Météorologiques
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Droplets className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Humidité</div>
                    <div className="font-semibold">{weather.main?.humidity || 75}%</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Wind className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Vent</div>
                    <div className="font-semibold">{weather.wind?.speed || 3.2} m/s</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Recent Activities */}
          <motion.div
            className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-6 h-6 text-emerald-600 mr-2" />
              Activités Récentes
            </h3>
            
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'warning' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{activity.title}</div>
                    <div className="text-sm text-gray-600">{activity.description}</div>
                    <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Actions Rapides</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.button
              className="p-4 border-2 border-dashed border-emerald-300 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-colors text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <BarChart3 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <div className="font-medium text-gray-900">Nouvelle Analyse IA</div>
              <div className="text-sm text-gray-600">Analyser une maladie</div>
            </motion.button>
            
            <motion.button
              className="p-4 border-2 border-dashed border-yellow-300 rounded-xl hover:border-yellow-500 hover:bg-yellow-50 transition-colors text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Users className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="font-medium text-gray-900">Trouver un Partenaire</div>
              <div className="text-sm text-gray-600">Mise en relation</div>
            </motion.button>
            
            <motion.button
              className="p-4 border-2 border-dashed border-emerald-300 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-colors text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Leaf className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <div className="font-medium text-gray-900">Demander un Conseil</div>
              <div className="text-sm text-gray-600">Aide technique</div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};