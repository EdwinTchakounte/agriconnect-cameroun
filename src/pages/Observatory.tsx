import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { ChartCard } from '../components/ChartCard';
import { useLanguage } from '../contexts/LanguageContext';
import chartData from '../data/chartData.json';

const COLORS = ['#059669', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'];

export const Observatory: React.FC = () => {
  const { t } = useLanguage();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-medium">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="font-semibold">
              {`${entry.dataKey}: ${entry.value}${entry.dataKey.includes('percentage') ? '%' : ''}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

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
            {t('observatory.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('observatory.description')}
          </p>
        </motion.div>

        {/* Charts Grid */}
        <div className="space-y-12">
          {/* Arable Land Time Series */}
          <ChartCard
            title={t('observatory.arableLands')}
            description="Évolution du pourcentage et de la superficie des terres arables au Cameroun"
            source="World Bank"
            sourceUrl="https://data.worldbank.org/indicator/AG.LND.ARBL.ZS"
            tooltip="Les terres arables sont définies comme les terres cultivées ou cultivables pour les cultures temporaires"
          >
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData.arableLandTimeSeries}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="percentage"
                  stroke="#059669"
                  strokeWidth={3}
                  dot={{ fill: '#059669', r: 6 }}
                  activeDot={{ r: 8, fill: '#047857' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Forest vs Agricultural Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ChartCard
              title="Couverture Forestière"
              description="Part forestière du territoire camerounais"
              source="World Bank"
              sourceUrl="https://data.worldbank.org/indicator/AG.LND.FRST.ZS"
              tooltip="Préserver les forêts tout en intensifiant durablement l'agriculture"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData.forestAreaTimeSeries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="percentage"
                    stroke="#16a34a"
                    strokeWidth={3}
                    dot={{ fill: '#16a34a', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Terres Agricoles"
              description="Évolution du pourcentage de terres agricoles"
              source="World Bank"
              sourceUrl="https://tradingeconomics.com/cameroon/agricultural-land-percent-of-land-area-wb-data.html"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData.agriculturalLandTimeSeries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="percentage"
                    stroke="#0d9488"
                    strokeWidth={3}
                    dot={{ fill: '#0d9488', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Import/Export */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ChartCard
              title="Importations de Céréales"
              description="Valeur des importations en milliards FCFA"
              source="INS Cameroun"
              sourceUrl="https://ins-cameroun.cm/wp-content/uploads/2024/05/Note-sur-le-Commerce-Exterieur-2023-c.pdf"
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData.cerealImportsTimeSeries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    formatter={(value: number) => [`${(value / 1000000000).toFixed(1)} Mds FCFA`, 'Valeur']}
                    labelFormatter={(label) => `Année: ${label}`}
                  />
                  <Bar dataKey="valueFCFA" fill="#059669" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Focus Maïs Importé"
              description="Évolution des importations de maïs en tonnes"
              source="MillingMEA"
              sourceUrl="https://millingmea.com/cameroons-maize-imports-soar-by-229-in-2023/"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData.maizeImportsTimeSeries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="tons"
                    stroke="#dc2626"
                    strokeWidth={3}
                    dot={{ fill: '#dc2626', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Diet Structure */}
          <ChartCard
            title="Structure des Apports Alimentaires"
            description="Répartition des sources d'énergie alimentaire au Cameroun"
            source="Food Balance Sheets / Tufts Data4Diets"
            sourceUrl="https://inddex.nutrition.tufts.edu/data4diets/case-studies/cameroon-assessment-national-food-supply-quality-fbs"
            tooltip="Données basées sur les bilans alimentaires nationaux"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData.dietStructure}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ food, percentage }) => `${food} ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="percentage"
                  >
                    {chartData.dietStructure.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData.dietStructure}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="food" stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
                  <YAxis stroke="#6b7280" />
                  <Tooltip formatter={(value) => [`${value}%`, 'Pourcentage']} />
                  <Bar dataKey="percentage" fill="#059669" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          {/* SDG & SND30 Alignment */}
          <motion.div
            className="bg-gradient-to-r from-emerald-600 via-green-600 to-yellow-500 rounded-2xl p-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              {t('observatory.sdgAlignment')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { number: '1', title: 'Pas de pauvreté', desc: 'Augmenter les revenus agricoles' },
                { number: '2', title: 'Faim zéro', desc: 'Sécurité alimentaire nationale' },
                { number: '8', title: 'Travail décent', desc: 'Emplois dans l\'agro-industrie' },
                { number: '9', title: 'Innovation', desc: 'Technologies agricoles' },
                { number: '12', title: 'Consommation responsable', desc: 'Agriculture durable' },
                { number: 'SND30', title: 'Stratégie Nationale', desc: 'Modernisation agricole' },
              ].map((sdg, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold mb-2">{sdg.number}</div>
                  <div className="font-semibold mb-1">{sdg.title}</div>
                  <div className="text-sm text-emerald-100">{sdg.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};