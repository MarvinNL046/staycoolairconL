import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Calendar, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { seoNavigation } from '../data/seoNavigation';
import Button from './ui/Button';

export default function Footer() {
  return (
    <footer className="bg-quatt-dark text-white pt-24 pb-12 rounded-t-[3rem] mt-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-quatt-orange to-orange-400" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <Logo inverted className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Uw specialist in airconditioning installatie en onderhoud in Limburg.
              Wij zorgen voor een perfect binnenklimaat, het hele jaar door.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <SocialLink href="https://facebook.com" icon={Facebook} />
              <SocialLink href="https://instagram.com" icon={Instagram} />
              <SocialLink href="https://linkedin.com" icon={Linkedin} />
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 text-white">Producten</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/products" className="hover:text-quatt-orange transition-colors">Alle Airco's</Link></li>
              <li><Link to="/airco-installatie" className="hover:text-quatt-orange transition-colors">Installatie</Link></li>
              <li><Link to="/onderhoud" className="hover:text-quatt-orange transition-colors">Onderhoud</Link></li>
              <li><Link to="/thuisbatterijen" className="hover:text-quatt-orange transition-colors">Thuisbatterijen</Link></li>
              <li><Link to="/capaciteit-calculator" className="hover:text-quatt-orange transition-colors">Calculator</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 text-white">Informatie</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-quatt-orange transition-colors">Over Ons</Link></li>
              <li><Link to="/werkgebied" className="hover:text-quatt-orange transition-colors">Werkgebied</Link></li>
              <li><Link to="/kennisbank" className="hover:text-quatt-orange transition-colors">Kennisbank</Link></li>
              <li><Link to="/contact" className="hover:text-quatt-orange transition-colors">Contact</Link></li>
              <li><Link to="/vacatures" className="hover:text-quatt-orange transition-colors">Vacatures</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="font-bold text-lg mb-6 text-white">Direct Contact</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="tel:0462021430" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-quatt-orange transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">046 202 1430</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@staycoolairco.nl" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-quatt-orange transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">info@staycoolairco.nl</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/31636481054" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-quatt-orange transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="font-medium">WhatsApp: 06 36481054</span>
                </a>
              </li>
            </ul>
            <Button href="https://afspraken.staycoolairco.nl" variant="primary" className="w-full">
              Plan gratis adviesgesprek
            </Button>
          </div>
        </div>

        {/* SEO Grid (Collapsed/Subtle) */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Onze Diensten & Regio's</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {seoNavigation.slice(0, 8).map((pillar) => (
              <div key={pillar.slug} className="mb-4">
                <p className="text-white text-xs font-bold mb-2">{pillar.name}</p>
                <ul className="space-y-1">
                  {pillar.subpillars.slice(0, 4).map(sub => (
                    <li key={sub.slug}>
                      <Link to={sub.path} className="text-gray-500 hover:text-gray-300 text-[10px] block truncate">{sub.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} StayCool Airco.</p>
          <div className="flex gap-6">
            <Link to="/voorwaarden" className="hover:text-white transition-colors">Algemene Voorwaarden</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacybeleid</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-quatt-orange hover:border-quatt-orange transition-all"
    >
      <Icon className="w-5 h-5" />
    </a>
  )
}
