import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import RegionStats from '../components/RegionStats';
import RegionFilter from '../components/RegionFilter';
import CityCard from '../components/CityCard';
import { loadCities, calculateRegionStats, type City } from '../utils/cityService';

export default function ServiceArea() {
  const [activeRegion, setActiveRegion] = useState('Alle regio\'s');
  const [cities, setCities] = useState<City[]>([]);
  const [stats, setStats] = useState({
    'Noord-Limburg': { gemeenten: 0, inwoners: 0 },
    'Midden-Limburg': { gemeenten: 0, inwoners: 0 },
    'Zuid-Limburg': { gemeenten: 0, inwoners: 0 }
  });

  const regions = ['Alle regio\'s', 'Noord-Limburg', 'Midden-Limburg', 'Zuid-Limburg'];

  useEffect(() => {
    const initializeCities = async () => {
      const loadedCities = await loadCities();
      setCities(loadedCities);
      setStats(calculateRegionStats(loadedCities));
    };

    initializeCities();
  }, []);

  const filteredCities = activeRegion === 'Alle regio\'s' 
    ? cities 
    : cities.filter(city => city.region === activeRegion);

  return (
    <>
      <Helmet>
        <title>Werkgebied | StayCool Airco</title>
        <meta 
          name="description" 
          content="Bekijk ons werkgebied in Limburg. Wij installeren en onderhouden airconditioning in heel Limburg, inclusief Heerlen, Weert, Roermond en Maastricht."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Airco Installatie Limburg
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              StayCool Airco is uw specialist voor airco installatie en onderhoud in heel Limburg. 
              Erkend F-gassen installateur in Heerlen, Weert, Roermond, Eygelshoven, Maastricht en omgeving.
            </p>
          </m.div>

          <RegionStats stats={stats} />
          
          <RegionFilter 
            regions={regions}
            activeRegion={activeRegion}
            onRegionChange={setActiveRegion}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCities.map((city, index) => (
              <CityCard key={city.city} city={city} index={index} />
            ))}
          </div>

          <m.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-blue-50 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Woont u in Limburg?
            </h2>
            <p className="text-blue-700 mb-8">
              Plan direct online een afspraak in of vraag een vrijblijvende offerte aan
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://afspraken.staycoolairco.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Direct inplannen
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Offerte aanvragen
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Bel direct: 046 202 1430
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </>
  );
}