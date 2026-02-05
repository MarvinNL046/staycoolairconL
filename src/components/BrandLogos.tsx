import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { productData } from '../data/products';

export default function BrandLogos() {
  const brands = productData.brands.filter(brand =>
    brand.name !== 'Airco Covers' &&
    !brand.name.toLowerCase().includes('bescherming') &&
    !brand.name.toLowerCase().includes('omkasting')
  );

  const brandLogos: Record<string, string> = {
    'Daikin': '/images/brands/DAIKIN_logo.svg',
    'LG': '/images/brands/LG_logo_(2014).svg',
    'Samsung': '/images/brands/Samsung_Logo.svg',
    'Toshiba': '/images/brands/Toshiba_logo.svg',
  };

  const textOnlyBrands = ['Mitsubishi Heavy', 'Tosot'];

  return (
    <section className="py-24 bg-quatt-warm border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-quatt-dark mb-4 tracking-tight">
            Officiële dealer van topmerken
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wij werken uitsluitend met de meest betrouwbare en energiezuinige airco systemen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              to={`/products/${brand.name.toLowerCase()}`}
              className="flex items-center justify-center p-8 bg-white rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-300 group grayscale hover:grayscale-0"
            >
              <div className="h-12 w-full flex items-center justify-center">
                {brandLogos[brand.name] && !textOnlyBrands.includes(brand.name) ? (
                  <img
                    src={brandLogos[brand.name]}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-lg font-bold text-gray-400 group-hover:text-quatt-dark transition-colors">{brand.name}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
