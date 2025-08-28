import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const translations = {
      fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.observatory': 'Observatoire',
        'nav.services': 'Nos Services',
        'nav.stats': 'Statistiques',
        'nav.partners': 'Collaborateurs',
        'nav.gallery': 'Galerie',
        'nav.about': 'À propos',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'AgriConnect Cameroun',
        'hero.subtitle': 'Observatoire & Plateforme Agricole du Cameroun',
        'hero.description': 'Découvrez les données agricoles du Cameroun, explorez les tendances et connectez-vous avec l\'écosystème agro-technologique',
        'hero.cta.explore': 'Explorer les Données',
        'hero.cta.discover': 'Découvrir nos Services',
        
        // Stats
        'stats.population': 'Population',
        'stats.area': 'Superficie',
        'stats.arable': 'Terres Arables',
        'stats.agricultural': 'Terres Agricoles',
        'stats.forest': 'Forêts',
        'stats.imports': 'Import. Céréales',
        'stats.source': 'Source',
        
        // Why Now Section
        'why.title': 'Pourquoi maintenant ?',
        'why.deficit': 'Déficit céréalier croissant',
        'why.potential': 'Potentiel agricole sous-utilisé',
        'why.digital': 'Digitalisation SND30/ODD',
        
        // Services
        'services.title': 'Nos Services',
        'services.connection': 'Mise en Relation',
        'services.advice': 'Aide & Conseils',
        'services.ai': 'Analyse IA Maladies',
        'services.statistics': 'Statistiques',
        'services.learnMore': 'En savoir plus',
        
        // Footer
        'footer.quickLinks': 'Liens Rapides',
        'footer.contact': 'Contact',
        'footer.address': 'Akwa, Douala - Cameroun',
        'footer.lastUpdate': 'Dernière mise à jour des données',
        'footer.rights': 'Tous droits réservés',
        
        // Observatory
        'observatory.title': 'Observatoire Agricole',
        'observatory.description': 'Données interactives sur l\'agriculture camerounaise',
        'observatory.arableLands': 'Terres Arables & Agricoles',
        'observatory.forestVsArable': 'Forêt vs. Terres Cultivables',
        'observatory.majorCrops': 'Cultures Majeures & Tendances',
        'observatory.importExport': 'Import/Export',
        'observatory.consumption': 'Consommation & Structure Alimentaire',
        'observatory.sdgAlignment': 'Alignement ODD & SND30',
        
        // Contact
        'contact.title': 'Contactez-nous',
        'contact.name': 'Nom',
        'contact.email': 'Email',
        'contact.phone': 'Téléphone',
        'contact.message': 'Message',
        'contact.send': 'Envoyer',
        
        // About
        'about.title': 'À propos de nous',
        'about.mission': 'Notre Mission',
        'about.team': 'Notre Équipe',
        
        // Partners
        'partners.title': 'Nos Collaborateurs',
        'partners.testimonials': 'Avis & Témoignages',
        
        // Common
        'common.learnMore': 'En savoir plus',
        'common.copySource': 'Copier la source',
        'common.loading': 'Chargement...',
        'common.million': 'M',
        'common.billion': 'Mds',
        'common.hectares': 'ha',
        'common.km2': 'km²',
        'common.tons': 't',
        'common.fcfa': 'FCFA',
        'common.percent': '%',
      },
      en: {
        // Navigation
        'nav.home': 'Home',
        'nav.observatory': 'Observatory',
        'nav.services': 'Our Services',
        'nav.stats': 'Statistics',
        'nav.partners': 'Partners',
        'nav.gallery': 'Gallery',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'AgriConnect Cameroon',
        'hero.subtitle': 'Agricultural Observatory & Platform of Cameroon',
        'hero.description': 'Discover Cameroon\'s agricultural data, explore trends and connect with the agro-technological ecosystem',
        'hero.cta.explore': 'Explore Data',
        'hero.cta.discover': 'Discover our Services',
        
        // Stats
        'stats.population': 'Population',
        'stats.area': 'Area',
        'stats.arable': 'Arable Land',
        'stats.agricultural': 'Agricultural Land',
        'stats.forest': 'Forests',
        'stats.imports': 'Cereal Imports',
        'stats.source': 'Source',
        
        // Why Now Section
        'why.title': 'Why now?',
        'why.deficit': 'Growing cereal deficit',
        'why.potential': 'Underused agricultural potential',
        'why.digital': 'SND30/SDG digitalization',
        
        // Services
        'services.title': 'Our Services',
        'services.connection': 'Networking',
        'services.advice': 'Help & Advice',
        'services.ai': 'AI Disease Analysis',
        'services.statistics': 'Statistics',
        'services.learnMore': 'Learn more',
        
        // Footer
        'footer.quickLinks': 'Quick Links',
        'footer.contact': 'Contact',
        'footer.address': 'Akwa, Douala - Cameroon',
        'footer.lastUpdate': 'Last data update',
        'footer.rights': 'All rights reserved',
        
        // Observatory
        'observatory.title': 'Agricultural Observatory',
        'observatory.description': 'Interactive data on Cameroonian agriculture',
        'observatory.arableLands': 'Arable & Agricultural Lands',
        'observatory.forestVsArable': 'Forest vs. Cultivable Land',
        'observatory.majorCrops': 'Major Crops & Trends',
        'observatory.importExport': 'Import/Export',
        'observatory.consumption': 'Consumption & Food Structure',
        'observatory.sdgAlignment': 'SDG & SND30 Alignment',
        
        // Contact
        'contact.title': 'Contact us',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.message': 'Message',
        'contact.send': 'Send',
        
        // About
        'about.title': 'About us',
        'about.mission': 'Our Mission',
        'about.team': 'Our Team',
        
        // Partners
        'partners.title': 'Our Partners',
        'partners.testimonials': 'Reviews & Testimonials',
        
        // Common
        'common.learnMore': 'Learn more',
        'common.copySource': 'Copy source',
        'common.loading': 'Loading...',
        'common.million': 'M',
        'common.billion': 'B',
        'common.hectares': 'ha',
        'common.km2': 'km²',
        'common.tons': 't',
        'common.fcfa': 'FCFA',
        'common.percent': '%',
      }
    };
    
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};