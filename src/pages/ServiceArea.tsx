import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { City, loadCitiesFromCSV, calculateRegionStats } from '../utils/cityService';
import CityCard from '../components/CityCard';
import RegionStats from '../components/RegionStats';
import Breadcrumbs from '../components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';

export default function ServiceArea() {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const breadcrumbItems = [
    { label: 'Werkgebied', path: '/werkgebied' }
  ];

  useEffect(() => {
    async function fetchCities() {
      try {
        const citiesData = await loadCitiesFromCSV();
        setCities(citiesData);
        setLoading(false);
      } catch (err) {
        setError('Error loading cities data');
        setLoading(false);
      }
    }

    fetchCities();
  }, []);

  const filteredCities = selectedRegion === 'all' 
    ? cities 
    : cities.filter(city => city.region === selectedRegion);

  const stats = calculateRegionStats(cities);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-red-600 text-center">
        <p className="text-xl font-semibold mb-2">Error</p>
        <p>{error}</p>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Werkgebied | StayCool Airco</title>
        <meta 
          name="description" 
          content="StayCool Airco is actief in heel Limburg. Bekijk hier alle steden en gemeenten waar wij onze airco diensten aanbieden."
        />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 pt-32 pb-8"
      >
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} />
          
          <h1 className="text-4xl font-bold mb-4">Werkgebied</h1>
          <p className="text-gray-600 mb-8">
            StayCool Airco is actief in heel Limburg. Bekijk hieronder alle steden en gemeenten waar wij onze diensten aanbieden.
          </p>
          
          {/* Region Filter */}
          <div className="mb-8">
            <label htmlFor="region" className="block text-sm font-medium mb-2">
              Filter op regio:
            </label>
            <select
              id="region"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full md:w-64 p-2 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Alle regio's</option>
              <option value="Noord-Limburg">Noord-Limburg</option>
              <option value="Midden-Limburg">Midden-Limburg</option>
              <option value="Zuid-Limburg">Zuid-Limburg</option>
            </select>
          </div>

          {/* Region Statistics */}
          <RegionStats stats={stats} />

          {/* Cities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCities.map((city, index) => (
              <motion.div
                key={`${city.city}-${city.postal_codes}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <CityCard city={city} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
