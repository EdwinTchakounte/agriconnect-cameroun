import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, BookOpen, Phone } from 'lucide-react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';

export const Help: React.FC = () => {
  return (
    <DashboardLayout currentPage="help">
      <div className="space-y-6">
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Aide & Conseils
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Obtenez des conseils techniques personnalisés de nos experts agronomes. 
            Cette section sera bientôt enrichie avec un système de chat en direct 
            et une base de connaissances complète.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl">
              <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Poser une Question</h3>
              <p className="text-sm text-gray-600">
                Obtenez des réponses d'experts agronomes
              </p>
            </div>
            
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Base de Connaissances</h3>
              <p className="text-sm text-gray-600">
                Consultez notre bibliothèque de guides techniques
              </p>
            </div>
            
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl">
              <Phone className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Support Direct</h3>
              <p className="text-sm text-gray-600">
                Contactez directement nos conseillers
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};