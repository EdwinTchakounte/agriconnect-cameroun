import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Download, Calendar, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { KPICard } from '../components/KPICard';
import { ChartCard } from '../components/ChartCard';
import { useLanguage } from '../contexts/LanguageContext';
import keyIndicators from '../data/keyIndicators.json';
import chartData from '../data/chartData.json';

export const Statistics: React.FC = () => {
  const { t } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedCrop, setSelectedCrop] = useState('all');

  const toplineKPIs = [
    {
      title: "Terres Arables",
      value: keyIndicators.arablePercent.value,
      unit: "%",
      description: "Du territoire",
      change: "+0.1%",
      trend: "stable" as const,
    },
    {
      title: "Terres Agricoles", 
      value: keyIndicators.agriculturalLandPercent.value,
      unit: "%",
      description: "Du territoire",
      change: "-0.02%",
      trend: "down" as const,
    },
    {
      title: "Forêts",
      value: keyIndicators.forestPercent.value,
      unit: "%", 
      description: "Couverture forestière",
      change: "-0.4%",
      trend: "down" as const,
    },
    {
      title: "Import Céréales",
      value: keyIndicators.cerealImportsValueFCFA.value / 1000000000,
      unit: "Mds FCFA",
      description: "Valeur 2023",
      change: "+4.3%",
      trend: "up" as const,
    },
  ];

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
            {t('nav.stats')} & Tendances
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tableau de bord public des indicateurs agricoles du Cameroun
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-4 mb-12 p-6 bg-white rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">Filtres:</span>
          </div>
          
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="all">Toutes les périodes</option>
            <option value="2020-2023">2020-2023</option>
            <option value="2018-2020">2018-2020</option>
          </select>
          
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="all">Toutes les cultures</option>
            <option value="maize">Maïs</option>
            <option value="rice">Riz</option>
            <option value="wheat">Blé</option>
          </select>
          
          <motion.button
            className="ml-auto bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Export functionality
              const data = {
                keyIndicators,
                chartData,
                exportDate: new Date().toISOString(),
                source: "AgriConnect Cameroun"
              };
              const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `agriconnect-data-${new Date().toISOString().split('T')[0]}.json`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }}
          >
            <Download className="w-4 h-4" />
            <span>Exporter</span>
          </motion.button>
        </motion.div>

        {/* Top-line KPIs */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {toplineKPIs.map((kpi, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{kpi.title}</h3>
                <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${
                  kpi.trend === 'up' ? 'bg-green-100 text-green-800' :
                  kpi.trend === 'down' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  <TrendingUp className={`w-3 h-3 mr-1 ${
                    kpi.trend === 'down' ? 'rotate-180' : 
                    kpi.trend === 'stable' ? 'rotate-0' : ''
                  }`} />
                  {kpi.change}
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-3xl font-bold text-emerald-700 mr-1">
                  {kpi.value}{kpi.unit}
                </span>
                <span className="text-2xl font-bold text-yellow-600">{kpi.unit}</span>
              </div>
              
              <p className="text-sm text-gray-600">{kpi.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts */}
        <div className="space-y-12">
          {/* Arable Land Chart */}
          <ChartCard
            title="Terres Arables (% et hectares)"
            description="Évolution 2000-2022 du pourcentage et de la superficie"
            source="World Bank"
            sourceUrl="https://data.worldbank.org/indicator/AG.LND.ARBL.ZS"
            tooltip="Données officielles de la Banque Mondiale sur les terres arables"
          >
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData.arableLandTimeSeries}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis yAxisId="left" stroke="#6b7280" />
                <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value}${name === 'percentage' ? '%' : ' ha'}`,
                    name === 'percentage' ? 'Pourcentage' : 'Hectares'
                  ]}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="percentage"
                  stroke="#059669"
                  strokeWidth={3}
                  dot={{ fill: '#059669', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Agricultural vs Forest Land */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ChartCard
              title="Terres Agricoles (%)"
              description="Évolution des terres agricoles 2000-2022"
              source="World Bank"
              sourceUrl="https://tradingeconomics.com/cameroon/agricultural-land-percent-of-land-area-wb-data.html"
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData.agriculturalLandTimeSeries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Bar dataKey="percentage" fill="#059669" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Couverture Forestière (%)"
              description="Évolution de la couverture forestière 2000-2022"
              source="World Bank"
              sourceUrl="https://data.worldbank.org/indicator/AG.LND.FRST.ZS"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData.forestAreaTimeSeries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
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
          </div>

          {/* Import Data */}
          <ChartCard
            title="Importations de Maïs (tonnes)"
            description="Focus sur l'évolution des importations de maïs 2018-2023"
            source="MillingMEA"
            sourceUrl="https://millingmea.com/cameroons-maize-imports-soar-by-229-in-2023/"
            tooltip="Augmentation de 229% des importations de maïs en 2023"
            className="col-span-full"
          >
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData.maizeImportsTimeSeries}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip formatter={(value) => [`${value} tonnes`, 'Importations']} />
                <Bar dataKey="tons" fill="#dc2626" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Sources Section */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="w-6 h-6 text-emerald-600 mr-3" />
            Sources de Données
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-emerald-700">World Bank</h4>
              <p className="text-sm text-gray-600">Données officielles sur terres arables, agricoles et forestières</p>
              <a href="https://data.worldbank.org" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                Visiter →
              </a>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-emerald-700">INS Cameroun</h4>
              <p className="text-sm text-gray-600">Institut National de la Statistique du Cameroun</p>
              <a href="https://ins-cameroun.cm" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                Visiter →
              </a>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-emerald-700">Food Balance Sheets</h4>
              <p className="text-sm text-gray-600">Tufts Data4Diets - Structure alimentaire</p>
              <a href="https://inddex.nutrition.tufts.edu" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                Visiter →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};