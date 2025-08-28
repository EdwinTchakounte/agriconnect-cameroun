import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2, Users, Award, Target, Lightbulb, ChevronRight } from 'lucide-react';
import { ModernCard } from '../components/ModernCard';
import { useLanguage } from '../contexts/LanguageContext';

export const Partners: React.FC = () => {
  const { t } = useLanguage();

  const partners = [
    {
      name: "2MeTech",
      logo: "logos/metech.jpg",
      description: "Partenaire technologique spécialisé en solutions énergetiques durables",
      type: "Technologie"
    },
    {
      name: "KSIES",
      logo: "logos/ksies.jpg",
      description: "Cabinet de conseil d'obtention de bourse en Chine",
      type: "Conseil"
    },
    {
      name: "CFP BroadRange",
      logo: "logos/cfp.jpg",
      description: "Centre de formation professionnelle au metier moderne",
      type: "Formation"
    }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet et solution que nous développons"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-emerald-600" />,
      title: "Innovation",
      description: "L'innovation technologique au service de l'agriculture traditionnelle"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Collaboration",
      description: "Créer des ponts entre tous les acteurs de l'écosystème agricole"
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      title: "Durabilité",
      description: "Promouvoir une agriculture durable et respectueuse de l'environnement"
    }
  ];

  const testimonials = [
    {
      name: "Ing. Fandio Jean Jule",
      role: "Ingénieur Agronome",
      company: "Partenaire Technique",
      content: "Une approche innovante qui révolutionne notre compréhension des données agricoles camerounaises. Les outils développés sont d'une qualité exceptionnelle.",
      rating: 5,
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    // {
    //   name: "M. Kengne Bernard",
    //   role: "Producteur Agricole",
    //   company: "Région de l'Ouest",
    //   content: "Grâce à Cette solution AgriConnect, nous pourrons optimiser nos rendements et accéder à de nouveaux marchés. La plateforme va etre très utile.",
    //   rating: 5,
    //   image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    // },
    {
      name: "Mme Fanta Cynthia",
      role: "Ingénieure Statisticienne",
      company: "Paris - Consultante",
      content: "L'observatoire agricole d'AgriConnect est un outil remarquable pour l'analyse des tendances et la prise de décision basée sur les données.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('partners.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos partenaires stratégiques et les retours de notre communauté
          </p>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nos Partenaires Stratégiques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ModernCard className="p-8 text-center h-full" gradient>
                  <div className="mb-6">
                    <div className="w-full h-32  rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-emerald-300">
                      <div className="text-center">
                        
                        <div className="text-xs text-emerald-700 font-medium"><img src={partner.logo} alt="" /></div>
                      </div>
                    </div>
                    <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      {partner.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.name}</h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  
                  <motion.button
                    className="text-emerald-600 font-medium flex items-center justify-center space-x-2 mx-auto hover:text-emerald-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </ModernCard>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action for Partners */}
          <motion.div
            className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Devenez Notre Partenaire</h3>
            <p className="text-emerald-100 mb-6">
              Rejoignez notre écosystème et contribuez à la transformation de l'agriculture camerounaise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/237673398046"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Nous Contacter
                </motion.button>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Excellence, Durabilité, Agro-technologie Accessible
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ModernCard className="p-8 text-center h-full" gradient>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors">
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('partners.testimonials')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ModernCard className="p-8 h-full" gradient>
                  <div className="flex justify-center mb-6">
                    <Quote className="w-8 h-8 text-emerald-600" />
                  </div>
                  
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n.charAt(0)).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-emerald-600">{testimonial.company}</div>
                    </div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 bg-emerald-600 rounded-2xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Rejoignez notre écosystème
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Collaborons pour transformer l'agriculture camerounaise
          </p>
          
          <motion.button
            className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Devenir Partenaire
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};