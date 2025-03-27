import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { productData } from '../data/products';
import LazyImage from './LazyImage';

export default function BrandLogos() {
  // Filter out airco-covers and airco bescherming/omkasting as they are not brands but product categories
  const brands = productData.brands.filter(brand => 
    brand.name !== 'Airco Covers' && 
    !brand.name.toLowerCase().includes('bescherming') && 
    !brand.name.toLowerCase().includes('omkasting')
  );
  
  // Map brand names to their logo files with exact filenames
  const brandLogos: Record<string, string> = {
    'Daikin': '/images/brands/DAIKIN_logo.svg',
    'LG': '/images/brands/LG_logo_(2014).svg',
    'Samsung': '/images/brands/Samsung_Logo.svg',
    'Toshiba': '/images/brands/Toshiba_logo.svg',
    // Mitsubishi Heavy and Tosot logos are not displaying correctly, so we'll use text instead
  };

  // Brands that should be displayed as text
  const textOnlyBrands = ['Mitsubishi Heavy', 'Tosot'];

  // Debug: Log the brand names and their logo paths
  console.log('Brand logos:', brandLogos);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <m.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Wij werken met topmerken
          </m.h2>
          <m.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Bij StayCool Airco werken we uitsluitend met betrouwbare en energiezuinige airconditioners van gerenommeerde merken.
          </m.p>
        </div>

        <m.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {brands.map((brand, index) => (
            <Link 
              key={brand.name} 
              to={`/products/${brand.name.toLowerCase()}`}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105"
            >
              <div className="h-20 w-full flex items-center justify-center">
                {brandLogos[brand.name] && !textOnlyBrands.includes(brand.name) ? (
                  <img 
                    src={brandLogos[brand.name]} 
                    alt={`${brand.name} logo`} 
                    className="max-h-16 max-w-[80%] object-contain"
                    onError={(e) => {
                      console.error(`Failed to load logo for ${brand.name}:`, e);
                      const imgElement = e.currentTarget as HTMLImageElement;
                      imgElement.style.display = 'none';
                      // Fallback to text if image fails to load
                      const parent = imgElement.parentElement;
                      if (parent) {
                        const textSpan = document.createElement('span');
                        textSpan.className = 'text-xl font-bold text-blue-600';
                        textSpan.textContent = brand.name;
                        parent.appendChild(textSpan);
                      }
                    }}
                  />
                ) : (
                  <span className="text-xl font-bold text-blue-600">{brand.name}</span>
                )}
              </div>
            </Link>
          ))}
        </m.div>
      </div>
    </section>
  );
}
