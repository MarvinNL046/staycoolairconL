import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { Phone, Mail, ChevronRight, Zap, Snowflake, Wind, Eye } from 'lucide-react';
import { aircoProducts, AircoProduct } from '../data/aircoProducts';

type BrandFilter = 'all' | 'LG' | 'Tosot' | 'MaxiCool';
type TypeFilter = 'all' | 'single-split' | 'multi-split' | 'commercieel';

interface ProductGridProps {
  showFilters?: boolean;
  maxProducts?: number;
  loadMoreCount?: number;
  title?: string;
  subtitle?: string;
}

export default function ProductGrid({
  showFilters = true,
  maxProducts = 12,
  loadMoreCount = 6,
  title = "Onze Airco Systemen",
  subtitle = "Bekijk ons assortiment hoogwaardige airconditioners van topmerken"
}: ProductGridProps) {
  const [brandFilter, setBrandFilter] = useState<BrandFilter>('all');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
  const [visibleCount, setVisibleCount] = useState(maxProducts);

  // Reset visible count when filters change
  const handleBrandFilter = (brand: BrandFilter) => {
    setBrandFilter(brand);
    setVisibleCount(maxProducts);
  };

  const handleTypeFilter = (type: TypeFilter) => {
    setTypeFilter(type);
    setVisibleCount(maxProducts);
  };

  const filteredProducts = aircoProducts.filter(product => {
    if (brandFilter !== 'all' && product.brand !== brandFilter) return false;
    if (typeFilter !== 'all' && product.type !== typeFilter) return false;
    return true;
  });

  const displayProducts = filteredProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < filteredProducts.length;
  const remainingCount = filteredProducts.length - visibleCount;

  const brandCounts = {
    all: aircoProducts.length,
    LG: aircoProducts.filter(p => p.brand === 'LG').length,
    Tosot: aircoProducts.filter(p => p.brand === 'Tosot').length,
    MaxiCool: aircoProducts.filter(p => p.brand === 'MaxiCool').length,
  };

  return (
    <section id="airco-systemen" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            {/* Brand Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {(['all', 'LG', 'Tosot', 'MaxiCool'] as BrandFilter[]).map((brand) => (
                <button
                  key={brand}
                  onClick={() => handleBrandFilter(brand)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    brandFilter === brand
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {brand === 'all' ? 'Alle merken' : brand}
                  <span className="ml-1 text-xs opacity-70">({brandCounts[brand]})</span>
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => handleTypeFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  typeFilter === 'all'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Alle types
              </button>
              <button
                onClick={() => handleTypeFilter('single-split')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  typeFilter === 'single-split'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Wind className="inline-block w-4 h-4 mr-1" />
                Single-split
              </button>
              <button
                onClick={() => handleTypeFilter('multi-split')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  typeFilter === 'multi-split'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Wind className="inline-block w-4 h-4 mr-1" />
                Multi-split
              </button>
              <button
                onClick={() => handleTypeFilter('commercieel')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  typeFilter === 'commercieel'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Zap className="inline-block w-4 h-4 mr-1" />
                Commercieel
              </button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Show More Button */}
        {hasMoreProducts && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount(prev => prev + loadMoreCount)}
              className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors"
            >
              Laad meer ({remainingCount} resterend)
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Interesse in een van deze systemen?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Ontvang gratis en vrijblijvend advies van onze airco specialisten.
            Wij helpen u graag bij het kiezen van het juiste systeem voor uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel: 046 202 1430
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors border-2 border-blue-400"
            >
              <Mail className="w-5 h-5 mr-2" />
              Vraag offerte aan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: AircoProduct; index: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      {/* Image - Clickable */}
      <Link to={`/products/airco/${product.id}`} className="block">
        <div className="relative aspect-square bg-gray-100 overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Snowflake className="w-16 h-16 text-gray-300" />
            </div>
          )}

          {/* Brand Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              product.brand === 'LG' ? 'bg-red-100 text-red-700' :
              product.brand === 'Tosot' ? 'bg-green-100 text-green-700' :
              'bg-blue-100 text-blue-700'
            }`}>
              {product.brand}
            </span>
          </div>

          {/* Capacity Badge */}
          {product.capacity && (
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 bg-gray-900/80 text-white rounded-full text-xs font-semibold">
                {product.capacity} kW
              </span>
            </div>
          )}

          {/* Type Badge */}
          <div className="absolute bottom-3 left-3">
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              product.type === 'single-split' ? 'bg-green-500/90 text-white' :
              product.type === 'multi-split' ? 'bg-blue-500/90 text-white' :
              'bg-purple-500/90 text-white'
            }`}>
              {product.type === 'single-split' ? 'Single-split' :
               product.type === 'multi-split' ? 'Multi-split' : 'Commercieel'}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/products/airco/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-2 line-clamp-2 min-h-[40px] hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Quick Specs */}
        <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
          {product.capacity && (
            <span className="flex items-center">
              <Zap className="w-3 h-3 mr-1 text-yellow-500" />
              {product.capacity} kW
            </span>
          )}
          <span>•</span>
          <span>{product.type === 'single-split' ? 'Single-split' :
                 product.type === 'multi-split' ? 'Multi-split' : 'Commercieel'}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Link
            to={`/products/airco/${product.id}`}
            className="flex-1 text-center py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors flex items-center justify-center"
          >
            <Eye className="w-4 h-4 mr-1" />
            Meer info
          </Link>
          <a
            href="#contact"
            className="flex-1 text-center py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Offerte
          </a>
        </div>
      </div>
    </m.div>
  );
}
