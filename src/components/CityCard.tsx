import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import type { City } from '../utils/cityService';

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
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
      </div>

      <div className="mt-6 space-y-3">
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
