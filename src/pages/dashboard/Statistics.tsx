import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, PieChart } from 'lucide-react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';

export const Statistics: React.FC = () => {
  return (
    <DashboardLayout currentPage="statistics">
      <div className="space-y-6">
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Statistiques & Analyses
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Cette section contiendra des tableaux de bord interactifs avec des 
            données agricoles en temps réel, des analyses de tendances et des 
            rapports personnalisés.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Tableaux de Bord</h3>
              <p className="text-sm text-gray-600">
                Visualisations interactives des données
              </p>
            </div>
            
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl">
              <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Analyses de Tendances</h3>
              <p className="text-sm text-gray-600">
                Évolution des indicateurs agricoles
              </p>
            </div>
            
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl">
              <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Rapports</h3>
              <p className="text-sm text-gray-600">
                Génération de rapports personnalisés
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};