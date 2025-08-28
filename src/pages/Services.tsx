import React from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart3, Map, Globe, ArrowRight, CheckCircle, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernCard } from '../components/ModernCard';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'mise-en-relation',
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: t('services.connection'),
      description: "Connectez-vous avec l'écosystème agricole camerounais",
      features: [
        "Mise en relation producteurs-transformateurs",
        "Réseau de distributeurs et exportateurs",
        "Plateforme de communication sécurisée",
        "Géolocalisation des acteurs"
      ],
      status: "En cours",
      color: "emerald",
      bgGradient: "from-emerald-500/10 to-green-500/10"
    },
    {
      id: 'conseils-techniques',
      icon: <Map className="w-8 h-8 text-yellow-600" />,
      title: t('services.advice'),
      description: "Conseils techniques et accompagnement personnalisé",
      features: [
        "Conseils agronomiques experts",
        "Techniques de culture optimisées",
        "Gestion des sols et fertilisation",
        "Support technique en continu"
      ],
      status: "En cours",
      color: "yellow",
      bgGradient: "from-yellow-500/10 to-amber-500/10"
    },
    {
      id: 'statistiques',
      icon: <BarChart3 className="w-8 h-8 text-emerald-600" />,
      title: t('services.statistics'),
      description: "Accès aux données agricoles en temps réel",
      features: [
        "Tableaux de bord interactifs",
        "Données d'import/export",
        "Tendances de marché",
        "Analyses prédictives"
      ],
      status: "Actif",
      color: "emerald",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      id: 'analyse-ia',
      icon: <Globe className="w-8 h-8 text-yellow-600" />,
      title: t('services.ai'),
      description: "Intelligence artificielle pour diagnostics agricoles",
      features: [
        "Détection maladies par IA",
        "Analyse d'images de cultures",
        "Recommandations automatisées",
        "Vision par ordinateur"
      ],
      status: "Bientôt",
      color: "yellow",
      bgGradient: "from-yellow-500/10 to-orange-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-yellow-50/30 relative overflow-hidden">
      {/* Illustrations d'arrière-plan agricoles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tracteur en arrière-plan */}
        <div className="absolute top-20 right-10 opacity-5">
          <svg width="200" height="120" viewBox="0 0 200 120" className="text-emerald-600">
            <path fill="currentColor" d="M40 80c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm120 0c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zM60 60h80v20H60V60zm-20-20h120v15H40V40zm20-20h80v15H60V20z"/>
          </svg>
        </div>
        
        {/* Plants agricoles */}
        <div className="absolute bottom-20 left-10 opacity-5">
          <svg width="150" height="150" viewBox="0 0 150 150" className="text-yellow-600">
            <path fill="currentColor" d="M75 20c-5 0-10 5-10 10v30c0 5 5 10 10 10s10-5 10-10V30c0-5-5-10-10-10zm-30 30c-5 0-10 5-10 10v40c0 5 5 10 10 10s10-5 10-10V60c0-5-5-10-10-10zm60 0c-5 0-10 5-10 10v40c0 5 5 10 10 10s10-5 10-10V60c0-5-5-10-10-10zM75 90c-5 0-10 5-10 10v30c0 5 5 10 10 10s10-5 10-10v-30c0-5-5-10-10-10z"/>
          </svg>
        </div>
        
        {/* Outils agricoles */}
        <div className="absolute top-1/2 left-1/4 opacity-3">
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-emerald-500">
            <path fill="currentColor" d="M20 20h60v10H20V20zm0 20h60v10H20V40zm0 20h60v10H20V60zm10-50v70h10V10H30zm20 0v70h10V10H50z"/>
          </svg>
        </div>
        
        {/* Éléments flottants animés */}
        <motion.div
          className="absolute top-1/3 right-1/3 opacity-10"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-yellow-500">
            <circle cx="40" cy="25" r="12" fill="currentColor"/>
            <rect x="35" y="37" width="10" height="30" fill="currentColor"/>
            <path d="M20 67 Q40 57 60 67" stroke="currentColor" strokeWidth="4" fill="none"/>
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header avec animations */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-yellow-100 px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-800 font-semibold">Solutions Innovantes</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-green-700 to-yellow-600 bg-clip-text text-transparent mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos solutions pour transformer l'écosystème agricole camerounais
          </p>
        </motion.div>

        {/* Services Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full group`}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                {/* Effet glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-white/10" />
                
                {/* Bordure animée */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-${service.color}-400/30 via-${service.color === 'yellow' ? 'amber' : 'green'}-400/30 to-${service.color}-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Contenu */}
                <div className="relative z-10 p-8">
                  {/* Icône en haut */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      className={`p-4 rounded-2xl bg-gradient-to-br from-${service.color}-100 to-${service.color}-200 group-hover:from-${service.color}-200 group-hover:to-${service.color}-300 transition-all duration-300 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  
                  {/* Header avec statut */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <motion.span 
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          service.status === 'Actif' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {service.status}
                      </motion.span>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className={`w-5 h-5 text-${service.color}-600 flex-shrink-0`} />
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-gray-600 font-medium pl-8">
                        +{service.features.length - 3} autres fonctionnalités
                      </div>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <Link to={`/services/${service.id}`}>
                    <motion.button
                      className={`w-full bg-gradient-to-r from-${service.color}-600 to-${service.color === 'yellow' ? 'amber' : 'green'}-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-${service.color}-700 hover:to-${service.color === 'yellow' ? 'amber' : 'green'}-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{t('services.learnMore')}</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
                
                {/* Éléments décoratifs flottants */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-${service.color}-400/20 to-${service.color === 'yellow' ? 'amber' : 'green'}-400/20 rounded-full blur-xl opacity-60`} />
                <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-${service.color === 'yellow' ? 'amber' : 'teal'}-400/20 to-${service.color}-400/20 rounded-full blur-xl opacity-40`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Section Innovation */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 via-green-600 to-yellow-500 rounded-3xl p-12 text-white text-center relative overflow-hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Éléments décoratifs */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
          
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <motion.div
                className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Prêt à transformer l'agriculture camerounaise ?
            </h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoignez notre plateforme et contribuez à l'innovation agricole pour un Cameroun plus prospère
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/237673398046"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <motion.button
                  className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-colors shadow-xl w-full"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                >
                  Nous Contacter
                </motion.button>
              </a>
              
            
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};