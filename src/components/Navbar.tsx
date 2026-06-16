import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Check, Phone } from 'lucide-react';
import Logo from './Logo';
import Button from './ui/Button';
import { trackEvent } from '../utils/analytics';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Click-to-call is the strongest leadgen conversion — fire a GTM/gtag event
  // (safe-capture: trackEvent never throws if analytics isn't loaded).
  const handlePhoneClick = (location: string) => {
    trackEvent('phone_click', { location, phone: '0462021430' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl shadow-sm md:shadow-none ${isScrolled
      ? 'md:bg-white/90 md:backdrop-blur-xl md:shadow-sm py-3 top-0'
      : 'md:bg-white/0 md:backdrop-blur-none py-4 top-0 md:top-[38px]'
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
            <span className="flex items-center gap-2 hidden lg:flex">
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
                <Link to="/products" className={linkClasses}>Airco's</Link>
                <Link to="/thuisbatterijen" className={linkClasses}>Thuisbatterijen</Link>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-6">
                <a
                  href="tel:0462021430"
                  onClick={() => handlePhoneClick('navbar_desktop')}
                  aria-label="Bel ons: 046 202 1430"
                  className="flex items-center gap-2 text-quatt-dark font-black tracking-tight hover:text-quatt-orange transition-colors"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  <span className="hidden lg:inline">046 202 1430</span>
                </a>
                <Button href="https://afspraken.staycoolairco.nl" variant="primary" size="md" shape="pill"
                  className="px-6 py-2.5 shadow-elevation-md hover:-translate-y-0.5 transition-all">
                  Plan adviesgesprek
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Menu sluiten' : 'Menu openen'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="p-2 text-quatt-dark hover:bg-gray-100 rounded-full transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu Overlay — buiten <nav> gehouden: de navbar heeft backdrop-blur, en een
          backdrop-filter maakt het element het containing block voor fixed-kinderen. Binnen <nav>
          zou `fixed inset-0` daardoor tegen de 96px navbalk rekenen i.p.v. de viewport, waardoor
          het menu een onzichtbaar strookje werd. z-[45] zit boven de sticky CTA (z-40) maar onder
          de navbalk (z-50), zodat de X-sluitknop bereikbaar blijft. */}
      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Hoofdmenu" className={`fixed inset-0 bg-white z-[45] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'} md:hidden pt-24 px-6 overflow-y-auto`}>
        <div className="flex flex-col space-y-6 text-2xl font-black text-quatt-dark tracking-tight">
          <Link to="/products" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4">Airco's</Link>
          <Link to="/thuisbatterijen" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4">Thuisbatterijen</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4">Contact</Link>

          <div className="pt-6 space-y-4">
            <Button href="https://afspraken.staycoolairco.nl" variant="primary" className="w-full justify-center rounded-2xl py-4 shadow-xl text-lg">
              Plan gratis advies
            </Button>
            <a
              href="tel:0462021430"
              onClick={() => { handlePhoneClick('navbar_mobile'); setIsOpen(false); }}
              className="flex items-center justify-center gap-2 w-full rounded-2xl bg-gray-50 text-quatt-dark hover:bg-gray-100 py-4 text-lg font-extrabold transition-colors"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              Bel 046 202 1430
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
