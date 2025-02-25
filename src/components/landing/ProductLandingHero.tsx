import React from 'react';
import { m } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductLandingHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  brandName: string;
  features: string[];
}

export default function ProductLandingHero({
  title,
  subtitle,
  description,
  backgroundImage,
  brandName,
  features
}: ProductLandingHeroProps) {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 to-transparent"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[42px]">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-100">
                {subtitle}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
              {title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-[45ch]">
              {description}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-white">
                  <span className="h-2 w-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Gratis Offerte Aanvragen
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-base sm:text-lg font-medium rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                046 202 1430
              </a>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img 
              src={backgroundImage} 
              alt={`${brandName} airconditioning`} 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg">
              <p className="text-lg font-bold">Premium {brandName} Kwaliteit</p>
              <p className="text-sm opacity-90">Energiezuinig & Betrouwbaar</p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
