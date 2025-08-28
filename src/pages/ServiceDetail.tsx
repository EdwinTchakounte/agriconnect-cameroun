import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Users, BarChart3, Map, Globe, Phone, Mail } from 'lucide-react';
import { ModernCard } from '../components/ModernCard';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  process: string[];
  pricing?: string;
  status: 'active' | 'coming-soon';
}

const servicesData: Record<string, ServiceData> = {
  'mise-en-relation': {
    id: 'mise-en-relation',
    title: 'Mise en Relation',
    subtitle: 'Connectez-vous avec l\'écosystème agricole',
    description: 'Notre plateforme de mise en relation connecte producteurs, transformateurs, distributeurs et exportateurs pour créer un écosystème agricole dynamique et collaboratif.',
    icon: <Users className="w-12 h-12 text-emerald-600" />,
    features: [
      'Profils détaillés des acteurs agricoles',
      'Système de matching intelligent',
      'Messagerie sécurisée intégrée',
      'Géolocalisation des partenaires',
      'Évaluations et recommandations',
      'Notifications en temps réel'
    ],
    benefits: [
      'Réduction des intermédiaires',
      'Accès direct aux marchés',
      'Négociation transparente des prix',
      'Création de partenariats durables',
      'Expansion géographique facilitée'
    ],
    process: [
      'Création de votre profil détaillé',
      'Définition de vos besoins et offres',
      'Matching automatique avec des partenaires potentiels',
      'Prise de contact via notre plateforme',
      'Négociation et finalisation des accords'
    ],
    pricing: 'Gratuit pour les producteurs, 2% de commission sur les transactions',
    status: 'active'
  },
  'conseils-techniques': {
    id: 'conseils-techniques',
    title: 'Aide & Conseils',
    subtitle: 'Expertise agronomique personnalisée',
    description: 'Bénéficiez de l\'expertise de nos ingénieurs agronomes pour optimiser vos pratiques agricoles, améliorer vos rendements et adopter des techniques durables.',
    icon: <Map className="w-12 h-12 text-emerald-600" />,
    features: [
      'Conseils agronomiques personnalisés',
      'Analyse de sol et recommandations',
      'Planification des cultures',
      'Gestion intégrée des ravageurs',
      'Techniques d\'irrigation optimisées',
      'Formation sur le terrain'
    ],
    benefits: [
      'Augmentation des rendements',
      'Réduction des coûts de production',
      'Pratiques agricoles durables',
      'Amélioration de la qualité des produits',
      'Adaptation au changement climatique'
    ],
    process: [
      'Évaluation initiale de votre exploitation',
      'Analyse des besoins spécifiques',
      'Élaboration d\'un plan d\'action personnalisé',
      'Mise en œuvre avec accompagnement',
      'Suivi et ajustements réguliers'
    ],
    pricing: 'À partir de 25 000 FCFA par consultation',
    status: 'active'
  },
  'statistiques': {
    id: 'statistiques',
    title: 'Statistiques & Analyses',
    subtitle: 'Données agricoles en temps réel',
    description: 'Accédez à des tableaux de bord interactifs, des analyses de marché et des données statistiques pour prendre des décisions éclairées basées sur des informations fiables.',
    icon: <BarChart3 className="w-12 h-12 text-emerald-600" />,
    features: [
      'Tableaux de bord personnalisables',
      'Données d\'import/export en temps réel',
      'Analyses de tendances de marché',
      'Prévisions météorologiques agricoles',
      'Indices de prix des cultures',
      'Rapports automatisés'
    ],
    benefits: [
      'Décisions basées sur les données',
      'Anticipation des tendances de marché',
      'Optimisation des stratégies commerciales',
      'Réduction des risques',
      'Amélioration de la compétitivité'
    ],
    process: [
      'Définition de vos besoins en données',
      'Configuration de votre tableau de bord',
      'Formation à l\'utilisation des outils',
      'Accès aux données en temps réel',
      'Support technique continu'
    ],
    pricing: 'Accès de base gratuit, abonnement premium à 15 000 FCFA/mois',
    status: 'active'
  },
  'analyse-ia': {
    id: 'analyse-ia',
    title: 'Analyse IA Maladies',
    subtitle: 'Intelligence artificielle pour l\'agriculture',
    description: 'Notre système d\'intelligence artificielle analyse les images de vos cultures pour détecter précocement les maladies et ravageurs, et propose des solutions de traitement adaptées.',
    icon: <Globe className="w-12 h-12 text-orange-600" />,
    features: [
      'Détection automatique des maladies',
      'Analyse d\'images par IA',
      'Base de données de 500+ maladies',
      'Recommandations de traitement',
      'Suivi de l\'évolution des cultures',
      'Alertes préventives'
    ],
    benefits: [
      'Détection précoce des problèmes',
      'Réduction des pertes de récolte',
      'Traitement ciblé et efficace',
      'Diminution de l\'usage de pesticides',
      'Amélioration de la qualité des produits'
    ],
    process: [
      'Prise de photos de vos cultures',
      'Upload sur notre plateforme mobile',
      'Analyse automatique par IA',
      'Réception du diagnostic et recommandations',
      'Suivi de l\'efficacité du traitement'
    ],
    pricing: 'Bientôt disponible - Inscription à la liste d\'attente',
    status: 'coming-soon'
  }
};

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t } = useLanguage();
  
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service non trouvé</h1>
          <Link to="/services" className="text-emerald-600 hover:text-emerald-700">
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/services"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux services
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl">
              {service.icon}
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {service.title}
          </h1>
          
          <p className="text-xl text-emerald-700 font-medium mb-6">
            {service.subtitle}
          </p>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
          
          <div className="mt-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              service.status === 'active' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-orange-100 text-orange-800'
            }`}>
              {service.status === 'active' ? 'Service Actif' : 'Bientôt Disponible'}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ModernCard className="p-8" gradient>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Fonctionnalités
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </ModernCard>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ModernCard className="p-8" gradient>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Avantages
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ModernCard>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ModernCard className="p-8" gradient>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Comment ça marche
                </h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ModernCard>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ModernCard className="p-8" gradient>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Tarification
                </h3>
                <p className="text-gray-700 mb-6">
                  {service.pricing}
                </p>
                
                {service.status === 'active' ? (
                  <motion.button
                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Commencer maintenant
                  </motion.button>
                ) : (
                  <motion.button
                    className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    S'inscrire à la liste d'attente
                  </motion.button>
                )}
              </ModernCard>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <ModernCard className="p-8" gradient>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Besoin d'aide ?
                </h3>
                <p className="text-gray-600 mb-6">
                  Contactez notre équipe pour plus d'informations
                </p>
                
                <div className="space-y-4">
                  <a
                    href="tel:+237673398046"
                    className="flex items-center space-x-3 text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+237 673 398 046</span>
                  </a>
                  
                  <a
                    href="mailto:contact@agriconnect-cameroun.com"
                    className="flex items-center space-x-3 text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>contact@agriconnect-cameroun.com</span>
                  </a>
                </div>
              </ModernCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};