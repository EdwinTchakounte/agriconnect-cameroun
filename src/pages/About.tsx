import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: "Tchamba Tchakounte Edwin",
      role: "Chef de Projet & Ingénieur GL",
      age: 23,
      description: "Ingénieur en travaux, spécialisé en génie logiciel et passionné par l'innovation agricole",
      image: "edwin.jpg"
    },
    {
      name: "Fandio Jean Jule",
      role: "Ingénieur Agronome",
      description: "Expert en agronomie avec une vision moderne de l'agriculture camerounaise",
      image: "jules.jpg"
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
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre équipe et notre mission pour l'agriculture camerounaise
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 via-green-600 to-yellow-500 rounded-2xl p-12 text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('about.mission')}</h2>
            <p className="text-xl text-emerald-100 leading-relaxed mb-8">
              AgriConnect Cameroun vise à transformer l'écosystème agricole camerounais par 
              la digitalisation, l'innovation et la mise en relation des acteurs. Notre plateforme 
              offre des outils modernes pour améliorer la productivité, la durabilité et la 
              compétitivité de l'agriculture nationale.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">13,1%</div>
                <div className="text-emerald-100">Terres arables à optimiser</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">387,7 Mds</div>
                <div className="text-emerald-100">FCFA d'imports à réduire</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">29+ M</div>
                <div className="text-emerald-100">Camerounais à nourrir</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nos Valeurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('about.team')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div className="max-w-xs mx-auto w-full">
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg group flex flex-col"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full flex justify-center items-center bg-gray-100" style={{ height: 220 }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                      style={{ width: 140, height: 140 }}
                    />
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    </div>
                    
                    <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      {member.role}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {member.description}
                    </p>
                    
                    <motion.button
                      className="text-emerald-600 font-medium flex items-center space-x-2 hover:text-emerald-700 transition-colors mt-auto"
                      whileHover={{ x: 5 }}
                    >
                      
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          className="mt-20 bg-white rounded-2xl p-12 shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Vision</h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Faire du Cameroun un leader de l'agriculture moderne en Afrique centrale, 
            où la technologie et l'innovation servent l'excellence agricole, la durabilité 
            environnementale et la sécurité alimentaire pour tous les Camerounais.
          </p>
        </motion.div>
      </div>
    </div>
  );
};