import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ChevronRight, Snowflake, Phone } from 'lucide-react';
import { aircoProducts, AircoProduct } from '../data/aircoProducts';
import Card from './ui/Card';
import Button from './ui/Button';
import { cn } from '../utils/cn';

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

  return (
    <section id="airco-systemen" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-black text-quatt-dark mb-8 tracking-tighter italic">
            {title}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-20 flex flex-col items-center gap-8">
            {/* Brand Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {(['all', 'LG', 'Tosot', 'MaxiCool'] as BrandFilter[]).map((brand) => (
                <button
                  key={brand}
                  onClick={() => handleBrandFilter(brand)}
                  className={cn(
                    "px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 border-2",
                    brandFilter === brand
                      ? 'bg-quatt-dark text-white border-quatt-dark shadow-xl shadow-gray-200'
                      : 'bg-white text-gray-400 border-gray-100 hover:border-quatt-orange hover:text-quatt-orange'
                  )}
                >
                  {brand === 'all' ? 'Alle merken' : brand}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { id: 'all', label: 'Alle types' },
                { id: 'single-split', label: 'Single-split' },
                { id: 'multi-split', label: 'Multi-split' },
                { id: 'commercieel', label: 'Commercieel' }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTypeFilter(type.id as TypeFilter)}
                  className={cn(
                    "px-4 py-2 text-sm font-bold transition-all duration-200 border-b-2",
                    typeFilter === type.id
                      ? 'text-quatt-orange border-quatt-orange'
                      : 'text-gray-400 border-transparent hover:text-quatt-dark'
                  )}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {displayProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Show More Button */}
        {hasMoreProducts && (
          <div className="text-center mt-20">
            <Button
              variant="outline"
              onClick={() => setVisibleCount(prev => prev + loadMoreCount)}
              className="group rounded-3xl"
            >
              Laad meer producten
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}

        {/* Bottom Card */}
        <div className="mt-32">
          {/* Dark Theme CTA - Quatt Dark */}
          <Card radius="5xl" padding="none" className="!bg-quatt-dark text-white border-none shadow-2xl shadow-gray-200/50 overflow-hidden group relative isolate">
            <div className="relative p-12 sm:p-20 text-center">
              {/* Subtle Dark Accents (No Gradients) */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none -z-10" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-4xl sm:text-5xl font-black mb-8 tracking-tight text-white">
                  Hulp nodig bij uw keuze?
                </h3>
                <p className="text-gray-300 mb-12 text-xl leading-relaxed font-medium">
                  Onze adviseurs komen graag bij u langs voor een <span className="font-bold text-white">gratis en vrijblijvend adviesgesprek</span>. Wij meten de ruimte op en berekenen direct uw besparing.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="px-10 h-16 text-lg rounded-2xl shadow-xl shadow-quatt-orange/20 hover:shadow-2xl hover:scale-105 transition-all bg-quatt-orange hover:bg-orange-500 text-white border-none font-black"
                  >
                    Adviesgesprek inplannen
                  </Button>
                  <Button
                    href="tel:0462021430"
                    variant="outline"
                    size="lg"
                    className="px-10 h-16 text-lg rounded-2xl bg-white/5 text-white hover:bg-white hover:text-quatt-dark border-2 border-white/20 hover:border-white backdrop-blur-sm transition-all font-bold group/btn"
                  >
                    <Phone className="w-5 h-5 mr-3 group-hover/btn:text-quatt-orange transition-colors" />
                    Bel 046 202 1430
                  </Button>
                </div>

                <div className="mt-12 flex items-center justify-center opacity-80 gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-quatt-dark" />
                    <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-quatt-dark" />
                    <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-quatt-dark" />
                  </div>
                  <p className="text-sm font-bold text-gray-400">
                    Al <span className="text-white">500+</span> tevreden klanten
                  </p>
                </div>
              </div>
            </div>
          </Card>
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
    >
      <Card radius="3xl" padding="none" className="h-full flex flex-col group border-transparent hover:border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden bg-white">
        {/* Image - Clickable */}
        <Link to={`/products/airco/${product.id}`} className="block relative aspect-[4/3] bg-gray-50 overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Snowflake className="w-12 h-12 text-gray-200" />
            </div>
          )}

          {/* Energy Label Badge */}
          <div className="absolute top-4 left-4">
            <span className={cn(
              "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm border",
              product.energyLabel === 'A+++'
                ? "bg-green-50 text-green-700 border-green-100"
                : "bg-white/90 backdrop-blur-md text-quatt-dark border-white/20"
            )}>
              {product.energyLabel ? `Label ${product.energyLabel}` : 'Energiezuinig'}
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-quatt-orange">{product.brand}</span>
          </div>

          <Link to={`/products/airco/${product.id}`} className="block mb-6">
            <h3 className="font-bold text-quatt-dark text-lg leading-snug group-hover:text-quatt-orange transition-colors min-h-[56px] line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* Pricing & Specs */}
          <div className="flex items-end justify-between mb-6 pt-6 border-t border-gray-50 mt-auto">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Prijs incl. montage</p>
              <p className="text-lg font-black text-quatt-orange leading-none group-hover:underline decoration-2 underline-offset-4">
                Vraag offerte aan
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Vermogen</p>
              <p className="font-bold text-quatt-dark">{product.capacity} kW</p>
            </div>
          </div>

          {/* Button */}
          <Button variant="secondary" href={`/products/airco/${product.id}`} className="w-full rounded-xl font-bold bg-gray-50 hover:bg-quatt-orange hover:text-white border-none transition-all">
            Bekijk details
          </Button>
        </div>
      </Card>
    </m.div>
  );
}
