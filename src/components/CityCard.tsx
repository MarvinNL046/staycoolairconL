import React from 'react';
import { m } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CityCardProps {
  city: {
    city: string;
    region: string;
    population: number;
    postal_codes: string;
  };
  index: number;
}

export default function CityCard({ city, index }: CityCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {city.city}
            </h3>
            <p className="text-sm text-gray-500">{city.region}</p>
          </div>
          <MapPin className="h-5 w-5 text-blue-600" />
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Inwoners:</span>{' '}
            {city.population.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Postcodes:</span>{' '}
            {city.postal_codes}
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
    </m.div>
  );
}