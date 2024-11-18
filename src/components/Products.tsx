import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award } from 'lucide-react';

export default function Products() {
  const brands = [
    {
      name: 'Daikin',
      logo: '/images/products/daikin-stylish-silver.webp',
      description: 'Japanse kwaliteit en innovatie, bekend om hun betrouwbaarheid en energiezuinigheid.',
      features: ['Zeer energiezuinig', 'Stil in gebruik', 'Smart Home integratie'],
      popular: ['Perfera', 'Stylish', 'Emura']
    },
    {
      name: 'LG',
      logo: '/images/products/lg-artcool-mirror.webp',
      description: 'Vooruitstrevende technologie met focus op design en gebruiksgemak.',
      features: ['ThinQ technologie', 'Dual Inverter', 'Ingebouwde wifi'],
      popular: ['Artcool', 'Standard Plus', 'Premium']
    },
    {
      name: 'Toshiba',
      logo: '/images/products/daikin-stylish-silver.webp',
      description: 'Betrouwbare Japanse techniek met uitstekende prijs-kwaliteitverhouding.',
      features: ['Hi-Power modus', 'Self-cleaning', 'Compact design'],
      popular: ['Shorai Edge', 'Seiya', 'Daiseikai']
    },
    {
      name: 'Mitsubishi',
      logo: '/images/products/daikin-stylish-wit.webp',
      description: 'Premium kwaliteit met geavanceerde filtratiesystemen.',
      features: ['3D i-See Sensor', 'Plasma Quad Filter', 'Hyper Heating'],
      popular: ['MSZ-LN', 'MSZ-AP', 'MSZ-EF']
    },
    {
      name: 'Tosot by Gree',
      logo: '/images/products/rac-eu-lg-premium.webp',
      description: 'Moderne technologie voor optimaal comfort tegen een scherpe prijs.',
      features: ['G-Tech Inverter', 'I Feel functie', 'ECO modus'],
      popular: ['Amber', 'Liberty', 'U-Crown']
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Onze Merken en Modellen
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Wij werken uitsluitend met A-merken voor de beste kwaliteit en betrouwbaarheid
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="h-12 mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">{brand.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-8">{brand.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Kenmerken:</h4>
                      <ul className="space-y-2">
                        {brand.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-600">
                            <Check className="h-5 w-5 text-blue-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Populaire modellen:</h4>
                      <ul className="space-y-2">
                        {brand.popular.map((model) => (
                          <li key={model} className="flex items-center text-gray-600">
                            <Award className="h-5 w-5 text-blue-600 mr-2" />
                            {model}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                    >
                      Vraag offerte aan
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-8 lg:p-12 flex items-center justify-center">
                  <div className="relative w-full aspect-[4/3] bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} airconditioner`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Niet zeker welk model het beste bij u past? Wij adviseren u graag!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Vraag gratis advies aan
          </a>
        </div>
      </div>
    </section>
  );
}
