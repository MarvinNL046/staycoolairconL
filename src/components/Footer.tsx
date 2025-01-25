import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo inverted className="h-10 w-auto mb-4" />
            <p className="text-gray-400">
              Uw specialist in airconditioning installatie en onderhoud in Limburg
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="tel:0462021430" className="flex items-center text-gray-400 hover:text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  046 202 1430
                </a>
              </li>
              <li>
                <a href="https://wa.me/31636481054" className="text-gray-400 hover:text-white">
                  WhatsApp: 06 36481054
                </a>
              </li>
              <li>
                <a href="mailto:info@staycoolairco.nl" className="flex items-center text-gray-400 hover:text-white">
                  <Mail className="h-5 w-5 mr-2" />
                  info@staycoolairco.nl
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Producten</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white">
                  Alle Airco's
                </Link>
              </li>
              <li>
                <Link to="/capaciteit-calculator" className="text-gray-400 hover:text-white">
                  Capaciteit Calculator
                </Link>
              </li>
              <li>
                <Link to="/werkgebied" className="text-gray-400 hover:text-white">
                  Werkgebied
                </Link>
              </li>
              <li>
                <Link to="/onderhoud" className="text-gray-400 hover:text-white">
                  Onderhoud
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Informatie</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/kennisbank" className="text-gray-400 hover:text-white">
                  Kennisbank
                </Link>
              </li>
              <li>
                <Link to="/kennisbank/hoe-werkt-airco" className="text-gray-400 hover:text-white">
                  Hoe werkt airco?
                </Link>
              </li>
              <li>
                <Link to="/kennisbank/verwarmen-met-airco" className="text-gray-400 hover:text-white">
                  Verwarmen met airco
                </Link>
              </li>
              <li>
                <Link to="/voorwaarden" className="text-gray-400 hover:text-white">
                  Algemene Voorwaarden
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Direct Regelen</h3>
            <div className="mt-4 space-y-4">
              <a
                href="https://afspraken.staycoolairco.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Direct inplannen
                <span className="ml-2 text-sm opacity-75">(coming soon)</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-400 rounded-md hover:bg-blue-600/10 transition-colors"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} StayCool Airco. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
