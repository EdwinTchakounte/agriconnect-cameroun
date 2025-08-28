import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Upload, Zap } from 'lucide-react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';

export const AIAnalysis: React.FC = () => {
  return (
    <DashboardLayout currentPage="ai-analysis">
      <div className="space-y-6">
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Analyse IA des Maladies
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Cette fonctionnalité sera bientôt disponible. Elle permettra d'analyser 
            les images de vos cultures pour détecter automatiquement les maladies 
            et proposer des traitements adaptés.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl">
              <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Prendre une Photo</h3>
              <p className="text-sm text-gray-600">
                Utilisez votre appareil photo pour capturer la maladie
              </p>
            </div>
            
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Télécharger une Image</h3>
              <p className="text-sm text-gray-600">
                Importez une image depuis votre galerie
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};