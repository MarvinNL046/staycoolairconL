import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Check } from 'lucide-react';
import Logo from './Logo';
import { seoNavigation } from '../data/seoNavigation';
import Button from './ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3 top-0'
      : 'bg-white/0 backdrop-blur-none py-4 top-0 md:top-[38px]'
    }`;

  const linkClasses = "text-quatt-dark font-bold tracking-tight hover:text-quatt-orange transition-colors duration-200 text-sm uppercase";

  return (
    <>
      {/* USP Topbar */}
      <div className="bg-quatt-dark text-white py-2.5 text-[11px] font-bold tracking-widest uppercase hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-quatt-orange" />
              Erkend Installateur
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-quatt-orange" />
              4,7/5 uit 174 reviews
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-quatt-orange" />
              Binnen 2 weken in huis
            </span>
          </div>
        </div>
      </div>

      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 z-50">
              <Logo className="h-8 sm:h-9 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <div className="flex items-center space-x-8">
                <Link to="/products" className={linkClasses}>
                  Producten
                </Link>
                <Link to="/airco-installatie" className={linkClasses}>
                  Installatie
                </Link>
                <Link to="/onderhoud" className={linkClasses}>
                  Onderhoud
                </Link>
                <div className="relative group">
                  <button className={`${linkClasses} flex items-center group-hover:text-quatt-orange`}>
                    Meer <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 w-[640px] grid grid-cols-2 gap-x-12 gap-y-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <div>
                        <h4 className="font-black text-quatt-dark mb-4 text-sm uppercase tracking-wider">Kennisbank</h4>
                        <ul className="space-y-3">
                          <li><Link to="/kennisbank" className="text-gray-500 font-medium hover:text-quatt-orange block text-sm transition-colors">Alle Artikelen</Link></li>
                          <li><Link to="/kennisbank/hoe-werkt-airco" className="text-gray-500 font-medium hover:text-quatt-orange block text-sm transition-colors">Hoe werkt een airco?</Link></li>
                          <li><Link to="/kennisbank/subsidies" className="text-gray-500 font-medium hover:text-quatt-orange block text-sm transition-colors">Subsidies</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-black text-quatt-dark mb-4 text-sm uppercase tracking-wider">Tools</h4>
                        <ul className="space-y-3">
                          <li><Link to="/capaciteit-calculator" className="text-gray-500 font-medium hover:text-quatt-orange block text-sm transition-colors">Capaciteit Calculator</Link></li>
                          <li><Link to="/thuisbatterij-calculator" className="text-gray-500 font-medium hover:text-quatt-orange block text-sm transition-colors">Besparing Calculator</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-6">
                <a href="tel:0462021430" className="text-quatt-dark font-black tracking-tight hover:text-quatt-orange transition-colors hidden xl:block">
                  046 202 1430
                </a>
                <Button href="https://afspraken.staycoolairco.nl" variant="primary" size="md" className="rounded-full px-6 py-2.5 shadow-xl shadow-quatt-orange/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                  Plan adviesgesprek
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-quatt-dark hover:bg-gray-100 rounded-full transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24 px-6`}>
          <div className="flex flex-col space-y-6 text-2xl font-black text-quatt-dark tracking-tight">
            <Link to="/products" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4">Producten</Link>
            <Link to="/airco-installatie" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4">Installatie</Link>
            <Link to="/onderhoud" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4">Onderhoud</Link>
            <Link to="/kennisbank" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4">Kennisbank</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4">Contact</Link>

            <div className="pt-6 space-y-4">
              <Button href="https://afspraken.staycoolairco.nl" variant="primary" className="w-full justify-center rounded-2xl py-4 shadow-xl text-lg">
                Plan gratis advies
              </Button>
              <Button href="tel:0462021430" variant="secondary" className="w-full justify-center rounded-2xl bg-gray-50 text-quatt-dark hover:bg-gray-100 py-4 text-lg">
                Bel 046 202 1430
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
