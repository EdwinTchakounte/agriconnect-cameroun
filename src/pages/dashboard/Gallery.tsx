import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Camera } from 'lucide-react';
import { ModernCard } from '../../components/ModernCard';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: 'assets' | 'simulation' | 'resultat';
}

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    // Assets
    {
      id: 1,
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      title: "Plantation de Manioc",
      description: "Techniques modernes de plantation avec espacement optimisé",
      category: "assets"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
      title: "Formation Agro-technologique",
      description: "Session de formation sur les nouvelles technologies agricoles",
      category: "assets"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=500&h=700&fit=crop",
      title: "Récolte de Maïs",
      description: "Mécanisation des récoltes pour améliorer la productivité",
      category: "assets"
    },
    
    // Simulations
    {
      id: 4,
      image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      title: "Simulation Croissance",
      description: "Modélisation de la croissance des cultures selon les conditions",
      category: "simulation"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      title: "Simulation Irrigation",
      description: "Optimisation des systèmes d'irrigation par simulation",
      category: "simulation"
    },
    
    // Résultats
    {
      id: 6,
      image: "https://images.pexels.com/photos/3889851/pexels-photo-3889851.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
      title: "Résultats Analyse IA",
      description: "Détection automatique de maladies par intelligence artificielle",
      category: "resultat"
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Rapport de Rendement",
      description: "Analyse comparative des rendements par région",
      category: "resultat"
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Prédictions Météo",
      description: "Prévisions météorologiques pour l'agriculture",
      category: "resultat"
    }
  ];

  const categories = [
    { key: 'all', label: 'Toutes', color: 'emerald' },
    { key: 'assets', label: 'Assets', color: 'emerald' },
    { key: 'simulation', label: 'Simulation', color: 'yellow' },
    { key: 'resultat', label: 'Résultat', color: 'green' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const getCategoryColor = (category: string) => {
    const colors = {
      'assets': 'bg-emerald-100 text-emerald-800',
      'simulation': 'bg-yellow-100 text-yellow-800', 
      'resultat': 'bg-green-100 text-green-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <DashboardLayout currentPage="gallery">
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Galerie AgriConnect
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez nos assets, simulations et résultats d'analyses
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                filter === category.key
                  ? `bg-${category.color}-600 text-white shadow-lg`
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow border'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(item)}
              >
                <ModernCard className="overflow-hidden h-full" hover>
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-96 object-cover"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedImage.category)}`}>
                      {selectedImage.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedImage.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
};