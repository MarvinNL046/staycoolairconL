import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { City, loadCitiesFromCSV, calculateRegionStats } from '../utils/cityService';
import CityCard from '../components/CityCard';
import RegionStats from '../components/RegionStats';
import Breadcrumbs from '../components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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
          <p className="text-gray-600 mb-4">
            StayCool Airco is actief in heel Limburg. Bekijk hieronder alle steden en gemeenten waar wij onze diensten aanbieden.
          </p>
          
          {/* Featured Locations */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Uitgelichte Locaties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                to="/airco-installatie/roermond"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Roermond</h3>
                <p className="text-gray-600">Specialist in airconditioning voor Roermond en omgeving. Bekijk onze lokale diensten.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/maastricht"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Maastricht</h3>
                <p className="text-gray-600">Ervaren airco installateurs in Maastricht. Ontdek onze oplossingen voor historische panden.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/heerlen"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Heerlen</h3>
                <p className="text-gray-600">Airconditioning in Heerlen en omgeving. Bekijk onze specifieke diensten voor de voormalige mijnstreek.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/venlo"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Venlo</h3>
                <p className="text-gray-600">Deskundige airconditioning diensten in Venlo. Bekijk onze oplossingen voor woningen en bedrijven.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/sittard"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Sittard</h3>
                <p className="text-gray-600">Professionele airco installatie in Sittard. Ontdek onze aanpak voor karakteristieke panden.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/weert"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Weert</h3>
                <p className="text-gray-600">Specialist in airconditioning voor de warmste stad van Nederland. Ontdek onze koeloplossingen.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/geleen"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Geleen</h3>
                <p className="text-gray-600">Airco oplossingen voor Geleen met extra aandacht voor de omgeving van Chemelot. Ontdek onze diensten.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/stein"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Stein</h3>
                <p className="text-gray-600">Professionele airconditioning voor woningen in Stein. Met speciale oplossingen voor het Maasdal.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/landgraaf"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Landgraaf</h3>
                <p className="text-gray-600">Deskundige airco installatie in Landgraaf. Bekijk onze speciale aanpak voor de unieke ligging.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
            </div>
          </div>
          
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
