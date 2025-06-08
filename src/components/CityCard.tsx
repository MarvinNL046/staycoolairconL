import { Link } from 'react-router-dom';
import { Calendar, Info } from 'lucide-react';
import type { City } from '../utils/cityService';
import { createCitySlug } from '../utils/cityService';

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  const citySlug = createCitySlug(city.city);

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <Link to={`/airco-installatie/${citySlug}`} className="block mb-4 hover:text-blue-600 transition-colors">
        <h3 className="font-bold text-xl mb-2">{city.city}</h3>
        <div className="space-y-2 text-gray-600">
          <p>
            <span className="font-medium">Regio:</span> {city.region}
          </p>
          <p>
            <span className="font-medium">Inwoners:</span> {city.population.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Postcodes:</span> {city.postal_codes}
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Professionele airco installatie en onderhoud in {city.city} en omgeving. Ervaren specialisten voor uw klimaatcomfort.
          </p>
        </div>
      </Link>

      <div className="mt-6 space-y-3">
        <Link
          to={`/airco-installatie/${citySlug}`}
          className="block w-full text-center py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300"
        >
          <Info className="inline-block h-5 w-5 mr-2" />
          Meer informatie
        </Link>
        <a
          href="https://afspraken.staycoolairco.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <Calendar className="inline-block h-5 w-5 mr-2" />
          Direct online inplannen
        </a>
        <Link
          to="/contact"
          className="block w-full text-center py-2 px-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
        >
          Offerte aanvragen
        </Link>
      </div>
    </div>
  );
}
