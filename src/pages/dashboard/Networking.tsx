import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, MapPin } from 'lucide-react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';

export const Networking: React.FC = () => {
  return (
    <DashboardLayout currentPage="networking">
      <div className="space-y-6">
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Mise en Relation
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connectez-vous avec d'autres acteurs de l'écosystème agricole camerounais. 
            Cette fonctionnalité sera bientôt disponible pour faciliter les échanges 
            entre producteurs, transformateurs et distributeurs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Trouver des Partenaires</h3>
              <p className="text-sm text-gray-600">
                Recherchez des producteurs, transformateurs ou distributeurs
              </p>
            </div>
            
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl">
              <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Messagerie</h3>
              <p className="text-sm text-gray-600">
                Communiquez directement avec vos contacts
              </p>
            </div>
            
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Géolocalisation</h3>
              <p className="text-sm text-gray-600">
                Trouvez des partenaires près de chez vous
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};