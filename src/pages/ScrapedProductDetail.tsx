import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Phone, Mail, Zap, Wind, Snowflake, ChevronLeft, ChevronRight, X, Ruler, FileText, ExternalLink, Leaf, Volume2, ThermometerSun } from 'lucide-react';
import { aircoProducts, AircoProduct } from '../data/aircoProducts';

export default function ScrapedProductDetail() {
  const { productId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const product = aircoProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product niet gevonden</h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            Terug naar producten
          </Link>
        </div>
      </div>
    );
  }

  const typeLabels: Record<string, string> = {
    'single-split': 'Single-split systeem',
    'multi-split': 'Multi-split systeem',
    'commercieel': 'Commercieel systeem',
  };

  const images = product.images.length > 0 ? product.images : (product.image ? [{ path: product.image, type: 'main' as const, filename: '' }] : []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Get image label for thumbnails
  const getImageLabel = (type: string, index: number) => {
    switch (type) {
      case 'main': return 'Product';
      case 'dimensions': return 'Afmetingen';
      case 'energy': return 'Energielabel';
      default: return `Foto ${index + 1}`;
    }
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | StayCool Airco</title>
        <meta name="description" content={product.description?.substring(0, 160) || `${product.name} - Complete airco set van ${product.brand}. Vraag nu een vrijblijvende offerte aan bij StayCool Airco.`} />
        <link rel="canonical" href={`https://staycoolairco.nl/products/airco/${product.id}`} />

        {/* Open Graph */}
        <meta property="og:title" content={`${product.name} | StayCool Airco`} />
        <meta property="og:description" content={product.description?.substring(0, 160) || `${product.name} - Complete airco set van ${product.brand}`} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://staycoolairco.nl/products/airco/${product.id}`} />
        {product.image && <meta property="og:image" content={`https://staycoolairco.nl${product.image}`} />}
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="StayCool Airco" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} | StayCool Airco`} />
        <meta name="twitter:description" content={product.description?.substring(0, 160) || `${product.name} - Complete airco set van ${product.brand}`} />
        {product.image && <meta name="twitter:image" content={`https://staycoolairco.nl${product.image}`} />}

        {/* Product Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.description?.substring(0, 500) || `${product.name} - Complete airco set van ${product.brand}`,
            "image": product.images.map(img => `https://staycoolairco.nl${img.path}`),
            "brand": {
              "@type": "Brand",
              "name": product.brand
            },
            "sku": product.sku || product.id,
            "mpn": product.id,
            "category": "Airconditioning",
            ...(product.capacity && {
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Vermogen",
                  "value": `${product.capacity} kW`
                },
                {
                  "@type": "PropertyValue",
                  "name": "Type",
                  "value": typeLabels[product.type] || product.type
                }
              ]
            }),
            "offers": {
              "@type": "Offer",
              "url": `https://staycoolairco.nl/products/airco/${product.id}`,
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "StayCool Airco",
                "url": "https://staycoolairco.nl"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to={`/products/${product.brand.toLowerCase()}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar {product.brand} producten
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-square bg-white rounded-2xl shadow-lg overflow-hidden mb-4 cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                {images.length > 0 ? (
                  <img
                    src={images[currentImageIndex].path}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Snowflake className="w-24 h-24 text-gray-300" />
                  </div>
                )}

                {/* Navigation arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                  </>
                )}

                {/* Image type indicator */}
                {images.length > 0 && (
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-black/60 text-white rounded-full text-sm">
                      {getImageLabel(images[currentImageIndex].type, currentImageIndex)}
                    </span>
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    product.brand === 'LG' ? 'bg-red-100 text-red-700' :
                    product.brand === 'Tosot' ? 'bg-green-100 text-green-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {product.brand}
                  </span>
                </div>

                {/* Capacity badge */}
                {product.capacity && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gray-900 text-white rounded-full text-sm font-semibold">
                      {product.capacity} kW
                    </span>
                  </div>
                )}
              </m.div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all relative ${
                        currentImageIndex === index
                          ? 'border-blue-600 shadow-md'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={img.path}
                        alt={`${product.name} - ${getImageLabel(img.type, index)}`}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] text-center py-0.5 truncate">
                        {getImageLabel(img.type, index)}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    product.type === 'single-split' ? 'bg-green-500 text-white' :
                    product.type === 'multi-split' ? 'bg-blue-500 text-white' :
                    'bg-purple-500 text-white'
                  }`}>
                    {product.type === 'single-split' ? 'Single-split' :
                     product.type === 'multi-split' ? 'Multi-split' : 'Commercieel'}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                {product.sku && (
                  <p className="text-sm text-gray-500 mb-4">
                    Artikelnummer: {product.sku}
                  </p>
                )}

                {/* Quick specs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {product.capacity && (
                    <div className="bg-yellow-50 rounded-lg p-3">
                      <div className="flex items-center text-yellow-700">
                        <Zap className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Vermogen</span>
                      </div>
                      <p className="text-gray-900 font-bold text-lg mt-1">{product.capacity} kW</p>
                    </div>
                  )}
                  {product.coolingCapacity && (
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex items-center text-blue-700">
                        <Snowflake className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Koelen</span>
                      </div>
                      <p className="text-gray-900 font-bold text-lg mt-1">{product.coolingCapacity} kW</p>
                    </div>
                  )}
                  {product.heatingCapacity && (
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="flex items-center text-orange-700">
                        <ThermometerSun className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Verwarmen</span>
                      </div>
                      <p className="text-gray-900 font-bold text-lg mt-1">{product.heatingCapacity} kW</p>
                    </div>
                  )}
                  {product.energyLabel && (
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-center text-green-700">
                        <Leaf className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Energielabel</span>
                      </div>
                      <p className="text-gray-900 font-bold text-lg mt-1">{product.energyLabel}</p>
                    </div>
                  )}
                  {product.seer && (
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <div className="flex items-center text-emerald-700">
                        <Leaf className="w-5 h-5 mr-2" />
                        <span className="font-semibold">SEER</span>
                      </div>
                      <p className="text-gray-900 font-bold text-lg mt-1">{product.seer}</p>
                    </div>
                  )}
                  {product.soundLevel && (
                    <div className="bg-purple-50 rounded-lg p-3">
                      <div className="flex items-center text-purple-700">
                        <Volume2 className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Geluid</span>
                      </div>
                      <p className="text-gray-900 font-bold text-lg mt-1">{product.soundLevel}</p>
                    </div>
                  )}
                </div>

                {/* Dimensions */}
                {(product.dimensions.binnenunit || product.dimensions.buitenunit) && (
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Ruler className="w-5 h-5 mr-2 text-gray-600" />
                      Afmetingen (BxHxD)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.dimensions.binnenunit && (
                        <div>
                          <p className="text-sm text-gray-500">Binnenunit</p>
                          <p className="font-semibold text-gray-900">{product.dimensions.binnenunit}</p>
                        </div>
                      )}
                      {product.dimensions.buitenunit && (
                        <div>
                          <p className="text-sm text-gray-500">Buitenunit</p>
                          <p className="font-semibold text-gray-900">{product.dimensions.buitenunit}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Full Specifications */}
                {product.specifications && Object.keys(product.specifications).length > 5 && (
                  <div className="bg-white border border-gray-200 rounded-xl mb-6 overflow-hidden">
                    <details className="group">
                      <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                        <h3 className="font-semibold text-gray-900 flex items-center">
                          <FileText className="w-5 h-5 mr-2 text-gray-600" />
                          Alle specificaties ({Object.keys(product.specifications).length})
                        </h3>
                        <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="max-h-96 overflow-y-auto">
                        <table className="w-full text-sm">
                          <tbody>
                            {Object.entries(product.specifications).map(([key, value], index) => (
                              <tr key={key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="px-4 py-2 text-gray-600 w-1/2">{key}</td>
                                <td className="px-4 py-2 text-gray-900 font-medium">{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </details>
                  </div>
                )}

                {/* Description */}
                {product.description && (
                  <div className="prose prose-blue max-w-none mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Beschrijving</h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {product.description}
                    </p>
                  </div>
                )}

                {/* Documents */}
                {product.documents && product.documents.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-gray-600" />
                      Documenten
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.documents.map((doc, index) => (
                        <a
                          key={index}
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          {doc.name}
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Interesse in dit product?</h3>
                  <p className="text-blue-100 mb-6">
                    Ontvang een vrijblijvende offerte inclusief professionele installatie door onze F-gassen gecertificeerde monteurs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Vraag offerte aan
                    </a>
                    <a
                      href="tel:0462021430"
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors border border-blue-400"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Bel: 046 202 1430
                    </a>
                  </div>
                </div>
              </m.div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Vergelijkbare producten</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {aircoProducts
                .filter(p => p.brand === product.brand && p.id !== product.id && p.type === product.type)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/products/airco/${relatedProduct.id}`}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square bg-gray-100">
                      {relatedProduct.image ? (
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Snowflake className="w-12 h-12 text-gray-300" />
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      {relatedProduct.capacity && (
                        <p className="text-xs text-gray-500 mt-1">{relatedProduct.capacity} kW</p>
                      )}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && images.length > 0 && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>

          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
          )}

          <img
            src={images[currentImageIndex].path}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              {getImageLabel(images[currentImageIndex].type, currentImageIndex)}
            </span>
            <span className="text-white text-sm">
              {currentImageIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
