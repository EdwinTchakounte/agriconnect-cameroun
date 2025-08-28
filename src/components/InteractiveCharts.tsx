import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';
import { ModernCard } from './ModernCard';
import { ArrowRight, TrendingUp, Leaf, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLORS = ['#059669', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'];

const landUseData = [
  { name: 'Forêts', value: 42.8, color: '#16a34a' },
  { name: 'Terres Agricoles', value: 20.6, color: '#059669' },
  { name: 'Terres Arables', value: 13.1, color: '#10b981' },
  { name: 'Autres', value: 23.5, color: '#6b7280' }
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
  { crop: 'Maïs', production: 18.5, color: '#10b981' },
  { crop: 'Plantain', production: 12.3, color: '#34d399' },
  { crop: 'Riz', production: 7.1, color: '#6ee7b7' },
  { crop: 'Blé', production: 4.9, color: '#a7f3d0' }
];

export const InteractiveCharts: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent mb-6">
            Données Agricoles en Temps Réel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explorez les statistiques clés de l'agriculture camerounaise avec nos visualisations interactives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Land Use Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <ModernCard className="p-8 h-full" gradient>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-emerald-100 rounded-2xl">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Utilisation des Terres</h3>
              </div>
              
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={landUseData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {landUseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Pourcentage']} />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="space-y-2 mt-4">
                {landUseData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                    <span className="font-semibold text-gray-800">{item.value}%</span>
                  </div>
                ))}
              </div>
            </ModernCard>
          </motion.div>

          {/* Import Trend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <ModernCard className="p-8 h-full" gradient>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-red-100 rounded-2xl">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Importations de Céréales</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-red-600">387,7 Mds</div>
                  <div className="text-sm text-gray-600">FCFA (2023)</div>
                </div>
              </div>
              
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={importTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip formatter={(value) => [`${value} Mds FCFA`, 'Valeur']} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#dc2626"
                    strokeWidth={4}
                    dot={{ fill: '#dc2626', r: 6 }}
                    activeDot={{ r: 8, fill: '#b91c1c' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ModernCard>
          </motion.div>
        </div>

        {/* Crop Production */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <ModernCard className="p-8" gradient>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-emerald-100 rounded-2xl">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Production par Culture (% de l'apport énergétique)</h3>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cropProductionData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="crop" type="category" stroke="#6b7280" width={80} />
                <Tooltip formatter={(value) => [`${value}%`, 'Contribution']} />
                <Bar dataKey="production" radius={[0, 8, 8, 0]}>
                  {cropProductionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ModernCard>
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
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold text-lg rounded-2xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir l'Observatoire Complet
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};