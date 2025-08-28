import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "AgriConnect Cameroun",
    subtitle: "Observatoire & Plateforme Agricole",
    description: "Découvrez les données agricoles du Cameroun, explorez les tendances et connectez-vous avec l'écosystème agro-technologique",
    image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Explorer les Données",
    ctaLink: "/observatory"
  },
  {
    id: 2,
    title: "Innovation Agricole",
    subtitle: "Technologies Modernes au Service des Producteurs",
    description: "Découvrez comment la technologie transforme l'agriculture camerounaise avec des solutions innovantes et durables",
    image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Nos Services",
    ctaLink: "/services"
  },
  {
    id: 3,
    title: "Données & Statistiques",
    subtitle: "Observatoire Complet de l'Agriculture",
    description: "Accédez aux statistiques officielles, tendances et analyses pour comprendre l'évolution de l'agriculture camerounaise",
    image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Voir les Statistiques",
    ctaLink: "/statistics"
  }
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden -mt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-green-900/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h1
                  className="text-5xl lg:text-7xl font-bold text-white mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.p
                  className="text-2xl lg:text-3xl text-emerald-200 font-semibold mb-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                
                <motion.p
                  className="text-xl text-white/90 mb-10 leading-relaxed"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.a
                  href={slides[currentSlide].ctaLink}
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-lg rounded-2xl hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slides[currentSlide].cta}
                  <ChevronRight className="w-6 h-6 ml-3" />
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/20 backdrop-blur-md rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-110 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-500 shadow-md ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-emerald-400 to-green-400 w-12 shadow-emerald-400/50' 
                  : 'bg-white/60 w-3 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 bg-white/20 backdrop-blur-md rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-110 shadow-lg"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
        
        <button
          onClick={nextSlide}
          className="p-3 bg-white/20 backdrop-blur-md rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-110 shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};