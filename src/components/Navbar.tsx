import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Calculate scroll progress (0 to 1)
      const maxScroll = 200; // Maximum scroll for full opacity
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
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
    // Dynamic background opacity based on scroll progress
    const opacity = Math.floor(scrollProgress * 90); // Max opacity of 90%
    return `bg-white/${opacity} backdrop-blur-sm shadow-lg`;
  };

  const getLinkColor = () => {
    if (!isScrolled && isHomePage && !isOpen) {
      return 'text-white hover:text-white/90';
    }
    return 'text-gray-700 hover:text-blue-600';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavBackground()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`transition-colors duration-300 ${getLinkColor()}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors duration-300 ${getLinkColor()}`}
            >
              Producten
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
              href="https://afspraken.staycoolairco.nl"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-all duration-300 ${
                isScrolled || !isHomePage || isOpen
                  ? 'text-white bg-blue-600 hover:bg-blue-700'
                  : 'text-blue-600 bg-white hover:bg-blue-50'
              }`}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Plan afspraak
            </a>
            <a 
              href="tel:0462021430" 
              className={`inline-flex items-center px-4 py-2 border-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isScrolled || !isHomePage || isOpen
                  ? 'border-blue-600 text-blue-600 hover:bg-blue-50'
                  : 'border-white text-white hover:bg-white/10'
              }`}
            >
              <Phone className="h-4 w-4 mr-2" />
              046 202 1430
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="https://afspraken.staycoolairco.nl"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center p-2 rounded-md ${
                isScrolled || !isHomePage || isOpen ? 'text-blue-600' : 'text-white'
              }`}
            >
              <Calendar className="h-6 w-6" />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`transition-colors duration-300 ${
                isScrolled || !isHomePage || isOpen ? 'text-gray-700' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md">
            <Link 
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Producten
            </Link>
            <Link 
              to="/werkgebied"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Werkgebied
            </Link>
            <Link 
              to="/kennisbank"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Kennisbank
            </Link>
            <Link 
              to="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="https://afspraken.staycoolairco.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md bg-blue-600 text-white"
              onClick={() => setIsOpen(false)}
            >
              <Calendar className="h-4 w-4 inline mr-2" />
              Plan afspraak
            </a>
            <a 
              href="tel:0462021430" 
              className="block px-3 py-2 rounded-md text-blue-600"
            >
              <Phone className="h-4 w-4 inline mr-2" />
              046 202 1430
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
