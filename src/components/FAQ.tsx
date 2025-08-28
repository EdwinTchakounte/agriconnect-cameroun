import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { ModernCard } from './ModernCard';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qu'est-ce qu'AgriConnect Cameroun ?",
    answer: "AgriConnect Cameroun est une plateforme digitale qui sert d'observatoire agricole pour le Cameroun. Nous collectons, analysons et présentons des données agricoles officielles pour aider les acteurs du secteur à prendre des décisions éclairées."
  },
  {
    question: "D'où proviennent vos données ?",
    answer: "Nos données proviennent de sources officielles reconnues : World Bank, INS Cameroun, FAO, Food Balance Sheets, et autres institutions internationales. Chaque donnée est accompagnée de sa source pour garantir la transparence."
  },
  {
    question: "Comment puis-je utiliser vos services ?",
    answer: "Vous pouvez explorer librement notre observatoire, consulter les statistiques, et nous contacter pour des services personnalisés de mise en relation, conseils techniques, ou analyses spécialisées."
  },
  {
    question: "Les données sont-elles mises à jour régulièrement ?",
    answer: "Oui, nous mettons à jour nos données dès que de nouvelles statistiques officielles sont publiées par nos sources. La dernière mise à jour est toujours indiquée sur chaque graphique et dans le footer."
  },
  {
    question: "Proposez-vous des services personnalisés ?",
    answer: "Absolument ! Nous offrons des services de mise en relation entre acteurs agricoles, des conseils techniques, des analyses de données personnalisées, et bientôt des outils d'IA pour le diagnostic agricole."
  },
  {
    question: "Comment contribuez-vous aux ODD et à la SND30 ?",
    answer: "Notre plateforme s'aligne sur les Objectifs de Développement Durable (ODD 1, 2, 8, 9, 12) et la Stratégie Nationale de Développement 2030 en favorisant la digitalisation agricole et l'innovation technologique."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Trouvez rapidement les réponses à vos questions sur AgriConnect Cameroun
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ModernCard className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-emerald-50/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-emerald-600" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-gradient-to-r from-emerald-200 to-transparent mb-4" />
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ModernCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};