import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Camera } from 'lucide-react';
import { ModernCard } from '../components/ModernCard';
import { useLanguage } from '../contexts/LanguageContext';

import TeachableUploader from '../components/teachable_ui';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  location: string;
  crop: string;
  description: string;
  date: string;
  category: 'innovation' | 'production' | 'transformation' | 'formation';
}

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      title: "Plantation de Manioc Moderne",
      location: "Région de l'Ouest",
      crop: "Manioc",
      description: "Techniques modernes de plantation avec espacement optimisé",
      date: "Novembre 2024",
      category: "production"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
      title: "Formation Agro-technologique",
      location: "Douala, Littoral",
      crop: "Formation",
      description: "Session de formation sur les nouvelles technologies agricoles",
      date: "Octobre 2024",
      category: "formation"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=500&h=700&fit=crop",
      title: "Récolte de Maïs Mécanisée",
      location: "Adamaoua",
      crop: "Maïs",
      description: "Mécanisation des récoltes pour améliorer la productivité",
      date: "Septembre 2024",
      category: "innovation"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      title: "Transformation Artisanale",
      location: "Nord-Ouest",
      crop: "Tubercules",
      description: "Unité de transformation locale des tubercules",
      date: "Août 2024",
      category: "transformation"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      title: "Irrigation Intelligente",
      location: "Extrême-Nord",
      crop: "Cultures diverses",
      description: "Système d'irrigation goutte-à-goutte intelligent",
      date: "Juillet 2024",
      category: "innovation"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/3889851/pexels-photo-3889851.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
      title: "Marché Agricole Local",
      location: "Yaoundé, Centre",
      crop: "Produits divers",
      description: "Commercialisation directe producteur-consommateur",
      date: "Juin 2024",
      category: "production"
    }
  ];

  const categories = [
    { key: 'all', label: 'Toutes' },
    { key: 'production', label: 'Production' },
    { key: 'innovation', label: 'Innovation' },
    { key: 'transformation', label: 'Transformation' },
    { key: 'formation', label: 'Formation' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const getCategoryColor = (category: string) => {
    const colors = {
      'production': 'bg-green-100 text-green-800',
      'innovation': 'bg-blue-100 text-blue-800', 
      'transformation': 'bg-purple-100 text-purple-800',
      'formation': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('nav.gallery')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explorez l'agriculture camerounaise en images : innovations, productions et transformations
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === category.key
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 shadow'
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
                    <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
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
                    <span className="text-emerald-600 font-medium">{selectedImage.crop}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedImage.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedImage.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedImage.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedImage.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <TeachableUploader /> 
    </div>
   
  );
};