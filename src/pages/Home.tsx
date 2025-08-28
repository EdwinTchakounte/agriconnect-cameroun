import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Leaf, BarChart3, Map, Globe, Zap, Target, Award, Lightbulb, Shield, Cpu, Sprout, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FluentKPICard } from '../components/FluentCard';
import { HeroSlider } from '../components/HeroSlider';
import { ModernCharts } from '../components/ModernCharts';
import { FAQ } from '../components/FAQ';
import { useLanguage } from '../contexts/LanguageContext';
import keyIndicators from '../data/keyIndicators.json';
import { Partners } from './Partners';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const Home: React.FC = () => {
  const { t } = useLanguage();

  const impactStats = [
    {
      icon: <Target className="w-6 h-6 text-orange-600" />,
      title: "Sécurité Alimentaire",
      value: "387,7 Mds",
      unit: "FCFA",
      description: "Importations céréales à réduire",
      trend: "down" as const,
      color: "yellow"
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: "Potentiel Agricole",
      value: "13,1",
      unit: "%",
      description: "Terres arables à optimiser",
      trend: "up" as const,
      color: "emerald"
    },
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      title: "Innovation Digitale",
      value: "2030",
      description: "Objectifs SND30 & ODD",
      trend: "up" as const,
      color: "green"
    },
    {
      icon: <Users className="w-6 h-6 text-teal-600" />,
      title: "Population",
      value: "29,1",
      unit: "M",
      description: "Camerounais à nourrir",
      trend: "up" as const,
      color: "emerald"
    },
  ];

  const services = [
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: t('services.connection'),
      description: "Connectez producteurs, transformateurs et marchés",
      href: "/services",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-yellow-600" />,
      title: t('services.statistics'),
      description: "Accédez aux données agricoles en temps réel",
      href: "/statistics",
    },
    {
      icon: <Map className="w-6 h-6 text-green-600" />,
      title: t('services.advice'),
      description: "Conseils techniques et accompagnement",
      href: "/services",
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-600" />,
      title: t('services.ai'),
      description: "Intelligence artificielle pour l'agriculture (bientôt)",
      href: "/services",
    },
  ];

  const challenges = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-600" />,
      title: "Déficit Alimentaire",
      description: "Réduire la dépendance aux importations de céréales",
      impact: "387,7 Mds FCFA",
      color: "yellow"
    },
    {
      icon: <Sprout className="w-6 h-6 text-emerald-600" />,
      title: "Productivité Agricole",
      description: "Optimiser l'utilisation des terres arables disponibles",
      impact: "13,1% du territoire",
      color: "emerald"
    },
    {
      icon: <Cpu className="w-6 h-6 text-green-600" />,
      title: "Digitalisation",
      description: "Moderniser l'agriculture avec les nouvelles technologies",
      impact: "Objectif 2030",
      color: "green"
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "Durabilité",
      description: "Préserver l'environnement tout en augmentant les rendements",
      impact: "42,8% de forêts",
      color: "emerald"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-emerald-50/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-400/5 to-green-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/5 to-emerald-400/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Agricultural Background Illustrations */}
        <div className="absolute top-10 right-10 opacity-5">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-emerald-600">
            <path fill="currentColor" d="M60 10c-5 0-10 5-10 10v20c0 5 5 10 10 10s10-5 10-10V20c0-5-5-10-10-10zm-30 30c-5 0-10 5-10 10v30c0 5 5 10 10 10s10-5 10-10V50c0-5-5-10-10-10zm60 0c-5 0-10 5-10 10v30c0 5 5 10 10 10s10-5 10-10V50c0-5-5-10-10-10zM60 70c-5 0-10 5-10 10v20c0 5 5 10 10 10s10-5 10-10V80c0-5-5-10-10-10z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-20 opacity-5">
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-green-600">
            <circle cx="50" cy="30" r="15" fill="currentColor"/>
            <rect x="45" y="45" width="10" height="40" fill="currentColor"/>
            <path d="M30 85 Q50 75 70 85" stroke="currentColor" strokeWidth="3" fill="none"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-800 to-green-700 bg-clip-text text-transparent mb-4">
              Statistiques Clés
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les enjeux de l'agriculture camerounaise en chiffres
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <FluentKPICard
                  title={stat.title}
                  value={stat.value}
                  unit={stat.unit}
                  description={stat.description}
                  icon={stat.icon}
                  trend={stat.trend}
                  color={stat.color}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Charts */}
      <ModernCharts />

      {/* Why Now Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              {t('why.title')}
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              L'agriculture camerounaise face aux défis du 21ème siècle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
                title: "Déficit Céréalier Croissant",
                description: "387,7 milliards FCFA d'importations de céréales en 2023, une dépendance qui s'aggrave",
                stat: "+4,3%",
                statLabel: "vs 2022"
              },
              {
                icon: <Leaf className="w-6 h-6 text-emerald-400" />,
                title: "Potentiel Sous-exploité",
                description: "Seulement 13,1% des terres sont arables alors que le potentiel agricole est énorme",
                stat: "6,2M ha",
                statLabel: "disponibles"
              },
              {
                icon: <Zap className="w-6 h-6 text-yellow-400" />,
                title: "Révolution Digitale",
                description: "Digitalisation de l'agriculture dans le cadre de la SND30 et des ODD 2030",
                stat: "2030",
                statLabel: "objectif"
              }
            ].map((point, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center group hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white/15 rounded-xl group-hover:bg-white/25 transition-colors">
                    {point.icon}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-white mb-2">{point.stat}</div>
                  <div className="text-sm text-emerald-200">{point.statLabel}</div>
                </div>
                
                <h3 className="font-bold text-xl text-white mb-4">{point.title}</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-400/5 to-green-400/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-800 to-green-700 bg-clip-text text-transparent mb-4">
              Défis à Relever
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les enjeux majeurs de l'agriculture camerounaise moderne
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FluentKPICard
                  title={challenge.title}
                  value={challenge.impact}
                  description={challenge.description}
                  icon={challenge.icon}
                  color={challenge.color}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-green-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-800 to-green-700 bg-clip-text text-transparent mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions innovantes pour transformer l'écosystème agricole camerounais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.href}>
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-100/50 group hover:shadow-xl hover:bg-white hover:border-emerald-200 transition-all duration-300 h-full"
                    whileHover={{ y: -4, scale: 1.01 }}
                  >
                    <div className="flex justify-center mb-6">
                      <motion.div 
                        className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl group-hover:from-emerald-100 group-hover:to-green-100 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                    
                    <h3 className="font-bold text-xl text-gray-900 mb-4 text-center">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex justify-center">
                      <motion.span 
                        className="text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        {t('services.learnMore')}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demonstration Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-800 to-green-700 bg-clip-text text-transparent mb-4">
              Démonstration de la Plateforme
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos outils en action avec des captures d'écran de résultats réels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tableau de Bord Interactif",
                description: "Visualisation en temps réel des données agricoles",
                image: "captures/dashboard.png",
                metrics: "15+ Indicateurs"
              },
              {
                title: "Analyse Prédictive",
                description: "Prévisions basées sur l'intelligence artificielle",
                image: "captures/demonstration1.PNG",
                metrics: "95% Précision"
              },
              {
                title: "Réseau de Producteurs",
                description: "Plateforme de mise en relation efficace (en cours ...)",
                image: "captures/jeune.jpg",
                metrics: "500+ Membres prevus"
              }
            ].map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-emerald-100/50 group-hover:shadow-2xl group-hover:border-emerald-200 transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={demo.image}
                      alt={demo.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {demo.metrics}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                      {demo.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {demo.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


{/* patner Section */}
      <Partners />

      {/* FAQ Section */}
      <FAQ />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Cpath%20d=%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
        
        {/* Floating agricultural elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-white">
              <path fill="currentColor" d="M30 5c-3 0-6 3-6 6v12c0 3 3 6 6 6s6-3 6-6V11c0-3-3-6-6-6zm-18 18c-3 0-6 3-6 6v18c0 3 3 6 6 6s6-3 6-6V29c0-3-3-6-6-6zm36 0c-3 0-6 3-6 6v18c0 3 3 6 6 6s6-3 6-6V29c0-3-3-6-6-6zM30 42c-3 0-6 3-6 6v7c0 3 3 6 6 6s6-3 6-6v-7c0-3-3-6-6-6z"/>
            </svg>
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Explorez l'agriculture camerounaise en données
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              Accédez à notre observatoire complet avec graphiques interactifs et sources fiables
            </p>
            
            <Link to="/observatory">
              <motion.button
                className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Accéder à l'Observatoire
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};