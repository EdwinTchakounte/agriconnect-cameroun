import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';
import { FluentCard } from './FluentCard';
import { ArrowRight, TrendingUp, Leaf, BarChart3, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLORS = ['#059669', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0', '#D1FAE5'];

const landUseData = [
  { name: 'Forêts', value: 42.8, color: '#059669' },
  { name: 'Terres Agricoles', value: 20.6, color: '#059669' },
  { name: 'Terres Arables', value: 13.1, color: '#EAB308' },
  { name: 'Autres', value: 23.5, color: '#10B981' }
];

const importTrendData = [
  { year: '2019', value: 320.5 },
  { year: '2020', value: 345.2 },
  { year: '2021', value: 356.8 },
  { year: '2022', value: 371.2 },
  { year: '2023', value: 387.7 }
];

const cropProductionData = [
  { crop: 'Manioc', production: 35.2, color: '#059669' },
  { crop: 'Maïs', production: 18.5, color: '#059669' },
  { crop: 'Plantain', production: 12.3, color: '#EAB308' },
  { crop: 'Riz', production: 7.1, color: '#10B981' }
];

export const ModernCharts: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-emerald-50/30 to-green-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400/5 to-green-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-400/5 to-teal-400/5 rounded-full blur-3xl animate-pulse" />
      
      {/* Agricultural Tools Background */}
      <div className="absolute top-1/4 right-1/4 opacity-3">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-emerald-500">
          <path fill="currentColor" d="M40 5L35 15h10l-5-10zm-20 20v10h40V25H20zm5 15v35h5V40h-5zm15 0v35h5V40h-5zm15 0v35h5V40h-5z"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-800 to-green-700 bg-clip-text text-transparent mb-4">
            Données Agricoles Interactives
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez les statistiques clés de l'agriculture camerounaise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Land Use Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FluentCard className="p-6 h-full" acrylic>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-emerald-100/80 rounded-lg">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Utilisation des Terres</h3>
              </div>
              
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={landUseData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {landUseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Pourcentage']} />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="grid grid-cols-2 gap-2 mt-4">
                {landUseData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-xs font-medium text-gray-800">{item.name}</span>
                    <span className="text-xs font-bold text-emerald-700">{item.value}%</span>
                  </div>
                ))}
              </div>
            </FluentCard>
          </motion.div>

          {/* Import Trend */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FluentCard className="p-6 h-full" acrylic>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100/80 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Importations Céréales</h3>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-yellow-600">387,7 Mds</div>
                  <div className="text-xs font-medium text-gray-700">FCFA (2023)</div>
                </div>
              </div>
              
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={importTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip formatter={(value) => [`${value} Mds FCFA`, 'Valeur']} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#EAB308"
                    strokeWidth={3}
                    dot={{ fill: '#EAB308', r: 4 }}
                    activeDot={{ r: 6, fill: '#CA8A04' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </FluentCard>
          </motion.div>
        </div>

        {/* Crop Production */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <FluentCard className="p-6" acrylic>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-emerald-100/80 rounded-lg">
                <BarChart3 className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Production par Culture</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cropProductionData.map((crop, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-lg bg-gray-50/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: `${crop.color}20` }}>
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: crop.color }} />
                  </div>
                  <div className="text-lg font-bold text-emerald-700">{crop.production}%</div>
                  <div className="text-xs font-medium text-gray-800">{crop.crop}</div>
                </motion.div>
              ))}
            </div>
          </FluentCard>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/observatory">
            <motion.button
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold text-sm rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Voir l'Observatoire Complet
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};