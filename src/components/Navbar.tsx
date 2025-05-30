import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Throttle scroll handler to run at most every 100ms
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavBackground = () => {
    if (isOpen) {
      return 'bg-white shadow-lg';
    }
    if (!isScrolled && isHomePage) {
      return 'bg-transparent';
    }
    return 'bg-white/90 backdrop-blur-sm shadow-lg';
  };

  const getLinkColor = () => {
    if (!isScrolled && isHomePage && !isOpen) {
      return 'text-white hover:text-white/90';
    }
    return 'text-gray-700 hover:text-orange-500';
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-colors duration-300 h-[64px] sm:h-[80px] ${getNavBackground()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full">
          <div className="flex items-center h-full py-2">
            <Link to="/" className="flex items-center h-full">
              <Logo className="h-8 sm:h-10 w-[100px] sm:w-[120px]" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`transition-colors duration-300 ${getLinkColor()}`}
            >
              Home
            </Link>
            <div className="relative group">
              <Link 
                to="/products" 
                className={`transition-colors duration-300 ${getLinkColor()}`}
              >
                Producten
              </Link>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-lg">
                <div className="py-2">
                  <Link 
                    to="/products"
                    className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  >
                    Alle Producten
                  </Link>
                  <Link 
                    to="/capaciteit-calculator"
                    className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  >
                    Capaciteit Calculator
                  </Link>
                  <Link 
                    to="/mobiele-airco"
                    className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  >
                    Mobiele Airco
                  </Link>
                  <Link 
                    to="/airco-met-buitenunit"
                    className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  >
                    Airco Met Buitenunit
                  </Link>
                  <Link 
                    to="/airco-installatie"
                    className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  >
                    Airco Installatie
                  </Link>
                  <Link 
                    to="/airco-onderhoud"
                    className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  >
                    Airco Onderhoud
                  </Link>
                  <Link 
                    to="/airco-reparatie"
                    className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  >
                    Airco Reparatie
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              to="/onderhoud" 
              className={`transition-colors duration-300 ${getLinkColor()}`}
            >
              Onderhoud
            </Link>
            <Link 
              to="/werkgebied" 
              className={`transition-colors duration-300 ${getLinkColor()}`}
            >
              Werkgebied
            </Link>
            <Link 
              to="/kennisbank" 
              className={`transition-colors duration-300 ${getLinkColor()}`}
            >
              Kennisbank
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors duration-300 ${getLinkColor()}`}
            >
              Contact
            </Link>
            <a 
              href="tel:0462021430" 
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors duration-300 ${
                isScrolled || !isHomePage || isOpen
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-white text-orange-500 hover:bg-orange-50'
              }`}
            >
              <Phone className="h-4 w-4 mr-2" />
              046 202 1430
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4 relative z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`inline-flex items-center justify-center transition-colors duration-300 ${
                isScrolled || !isHomePage || isOpen ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-white/90'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[64px] z-40 transition-all duration-200 ${
          isOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-2 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2 bg-white shadow-lg">
          <Link 
            to="/"
            className="block px-4 py-2.5 rounded-md text-gray-700 hover:text-orange-500 active:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <div className="space-y-1">
            <Link 
              to="/products"
              className="block px-4 py-2.5 rounded-md text-gray-700 hover:text-orange-500 active:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Alle Producten
            </Link>
            <Link 
              to="/capaciteit-calculator"
              className="block px-4 py-2.5 rounded-md text-gray-700 hover:text-orange-500 active:bg-gray-50 ml-4"
              onClick={() => setIsOpen(false)}
            >
              Capaciteit Calculator
            </Link>
            <Link 
              to="/mobiele-airco"
              className="block px-4 py-2.5 rounded-md text-gray-700 hover:text-orange-500 active:bg-gray-50 ml-4"
              onClick={() => setIsOpen(false)}
            >
              Mobiele Airco
            </Link>
            <Link 
              to="/airco-met-buitenunit"
              className="block px-4 py-2.5 rounded-md text-gray-700 hover:text-orange-500 active:bg-gray-50 ml-4"
              onClick={() => setIsOpen(false)}
            >
              Airco Met Buitenunit
            </Link>
            <Link 
              to="/airco-installatie"
              className="block px-4 py-2.5 rounded-md text-gray-700 hover:text-orange-500 active:bg-gray-50 ml-4"
              onClick={() => setIsOpen(false)}
            >
              Airco Installatie
            </Link>
            <Link 
              to="/airco-onderhoud"
              className="block px-4 py-2.5 rounded-md text-gray-700 hover:text-orange-500 active:bg-gray-50 ml-4"
              onClick={() => setIsOpen(false)}
            >
              Airco Onderhoud
            </Link>
            <Link 
              to="/airco-reparatie"
              className="block px-4 py-2.5 rounded-md text-gray-700 hover:text-orange-500 active:bg-gray-50 ml-4"
              onClick={() => setIsOpen(false)}
            >
              Airco Reparatie
            </Link>
          </div>
          <Link 
            to="/onderhoud"
            className="block px-4 py-2.5 rounded-md text-gray-700 hover:text-orange-500 active:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Onderhoud
          </Link>
          <Link 
            to="/werkgebied"
            className="block px-4 py-2.5 rounded-md text-gray-700 hover:text-orange-500 active:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Werkgebied
          </Link>
          <Link 
            to="/kennisbank"
            className="block px-4 py-2.5 rounded-md text-gray-700 hover:text-orange-500 active:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Kennisbank
          </Link>
          <Link 
            to="/contact"
            className="block px-4 py-2.5 rounded-md text-gray-700 hover:text-orange-500 active:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <a 
            href="tel:0462021430" 
            className="block px-4 py-2.5 rounded-md bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700"
          >
            <Phone className="h-4 w-4 inline mr-2" />
            046 202 1430
          </a>
        </div>
      </div>
    </nav>
  );
}
