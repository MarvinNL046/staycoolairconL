import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowRight, Star, ArrowLeft, Snowflake, Wind, Zap, ChevronRight, Eye } from 'lucide-react';
import { productData } from '../data/products';
import { aircoProducts, AircoProduct } from '../data/aircoProducts';

export default function BrandDetail() {
  const { brand } = useParams();
  const brandData = productData.brands.find(b => b.name.toLowerCase() === brand);

  // Get scraped products for this brand
  const brandNameMap: Record<string, string> = {
    'lg': 'LG',
    'tosot by gree': 'Tosot',
    'tosot': 'Tosot',
    'maxicool': 'MaxiCool'
  };
  const scrapedBrandName = brandNameMap[brand?.toLowerCase() || ''];
  const allScrapedProducts = scrapedBrandName
    ? aircoProducts.filter(p => p.brand === scrapedBrandName)
    : [];

  // State for filtering and pagination
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter products by type
  const scrapedProducts = typeFilter === 'all'
    ? allScrapedProducts
    : allScrapedProducts.filter(p => p.type === typeFilter);

  // Paginated products
  const displayProducts = scrapedProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < scrapedProducts.length;
  const remainingCount = scrapedProducts.length - visibleCount;

  // Reset visible count when filter changes
  const handleTypeFilter = (type: string) => {
    setTypeFilter(type);
    setVisibleCount(6);
  };

  if (!brandData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Merk niet gevonden</h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            Terug naar producten
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-12">
          <Link
            to="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar merken
          </Link>
        </div>

        {/* Brand Header */}
        <div className="mb-16">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{brandData.name}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{brandData.description}</p>
          </m.div>
        </div>

        {/* Brand Features */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandData.features.map((feature, index) => (
              <m.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center bg-white p-4 rounded-lg shadow-md"
              >
                <Star className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </m.div>
            ))}
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandData.models.map((model, index) => (
            <m.div
              key={model.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video">
                <img
                  src={model.imageUrl}
                  alt={model.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{model.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{model.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Capaciteit</div>
                    <div className="font-semibold text-gray-900">{model.capacity}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Energielabel</div>
                    <div className="font-semibold text-gray-900">{model.energyLabel}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link
                    to={`/products/${brand}/${model.slug}`}
                    className="block w-full text-center py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Bekijk Details
                  </Link>
                  {model.price && (
                    <div className="text-center text-gray-600">
                      Vanaf <span className="font-semibold text-gray-900">{model.price}</span>
                    </div>
                  )}
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Scraped Products from Maxicool */}
        {scrapedProducts.length > 0 && (
          <m.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Complete {brandData.name} Airco Sets
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bekijk ons uitgebreide assortiment complete {brandData.name} airco sets - inclusief binnen- en buitenunit
              </p>
            </div>

            {/* Filter buttons for type */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <button
                onClick={() => handleTypeFilter('all')}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${typeFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Alle types ({allScrapedProducts.length})
              </button>
              {['single-split', 'multi-split', 'commercieel'].map((type) => {
                const count = allScrapedProducts.filter(p => p.type === type).length;
                if (count === 0) return null;
                const labels: Record<string, string> = {
                  'single-split': 'Single-split',
                  'multi-split': 'Multi-split',
                  'commercieel': 'Commercieel'
                };
                const icons: Record<string, React.ReactNode> = {
                  'single-split': <Wind className="w-4 h-4 mr-1" />,
                  'multi-split': <Snowflake className="w-4 h-4 mr-1" />,
                  'commercieel': <Zap className="w-4 h-4 mr-1" />
                };
                return (
                  <button
                    key={type}
                    onClick={() => handleTypeFilter(type)}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${typeFilter === type
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {icons[type]}
                    {labels[type]} ({count})
                  </button>
                );
              })}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayProducts.map((product, index) => (
                <m.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.05, 0.3) }}
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

                      {/* Type Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${product.type === 'single-split' ? 'bg-green-100 text-green-700' :
                            product.type === 'multi-split' ? 'bg-blue-100 text-blue-700' :
                              'bg-purple-100 text-purple-700'
                          }`}>
                          {product.type === 'single-split' ? 'Single-split' :
                            product.type === 'multi-split' ? 'Multi-split' :
                              'Commercieel'}
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
              ))}
            </div>

            {/* Load More Button */}
            {hasMoreProducts && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors"
                >
                  Laad meer ({remainingCount} resterend)
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            )}
          </m.div>
        )}

        {/* Contact CTA */}
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-blue-50 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Interesse in {brandData.name}?
          </h2>
          <p className="text-blue-700 mb-8 max-w-2xl mx-auto">
            Onze experts helpen u graag bij het kiezen van de juiste {brandData.name} airconditioning voor uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Vraag advies aan
            </a>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Bel direct: 046 202 1430
            </a>
          </div>
        </m.div>
      </div>
    </div>
  );
}