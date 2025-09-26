import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
                <Link to="/thuisbatterijen" className="text-gray-400 hover:text-white">
                  Thuisbatterijen
                </Link>
              </li>
              <li>
                <Link to="/onderhoud" className="text-gray-400 hover:text-white">
                  Onderhoud
                </Link>
              </li>
              <li>
                <Link to="/werkgebied" className="text-gray-400 hover:text-white">
                  Werkgebied
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Merken</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/landing/daikin" className="text-gray-400 hover:text-white">
                  Daikin
                </Link>
              </li>
              <li>
                <Link to="/landing/lg" className="text-gray-400 hover:text-white">
                  LG
                </Link>
              </li>
              <li>
                <Link to="/landing/mitsubishi-heavy" className="text-gray-400 hover:text-white">
                  Mitsubishi Heavy
                </Link>
              </li>
              <li>
                <Link to="/landing/toshiba" className="text-gray-400 hover:text-white">
                  Toshiba
                </Link>
              </li>
              <li>
                <Link to="/landing/tosot" className="text-gray-400 hover:text-white">
                  Tosot
                </Link>
              </li>
            </ul>
            <h3 className="text-white text-lg font-semibold mt-6">Handleidingen</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/handleidingen/lg" className="text-gray-400 hover:text-white">
                  LG Handleiding
                </Link>
              </li>
              <li>
                <Link to="/handleidingen/tosot" className="text-gray-400 hover:text-white">
                  Tosot Handleiding
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Informatie</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
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
                <Link to="/airco-verwarming-kosten-besparing" className="text-gray-400 hover:text-white">
                  Bespaar op Verwarmingskosten
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
            <h3 className="text-white text-lg font-semibold">Populaire Locaties</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/airco-installatie/maastricht" className="text-gray-400 hover:text-white">
                  Airco Maastricht
                </Link>
              </li>
              <li>
                <Link to="/airco-installatie/roermond" className="text-gray-400 hover:text-white">
                  Airco Roermond
                </Link>
              </li>
              <li>
                <Link to="/airco-installatie/venlo" className="text-gray-400 hover:text-white">
                  Airco Venlo
                </Link>
              </li>
              <li>
                <Link to="/airco-installatie/heerlen" className="text-gray-400 hover:text-white">
                  Airco Heerlen
                </Link>
              </li>
              <li>
                <Link to="/werkgebied" className="text-gray-400 hover:text-white">
                  Alle Locaties
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
                className="flex items-center justify-center px-4 py-2 border border-transparent bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Plan een afspraak
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center px-4 py-2 border border-white/30 text-white rounded-md hover:bg-white/10 transition-colors"
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
