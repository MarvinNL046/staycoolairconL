import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowRight, Star, Award, ThermometerSun } from 'lucide-react';
import { productData } from '../data/products';
import { Helmet } from 'react-helmet-async';
import LazyImage from '../components/LazyImage';
import Breadcrumbs from '../components/Breadcrumbs';
import SchemaMarkup from '../components/SchemaMarkup';

export default function Products() {
  const breadcrumbItems = [
    { label: 'Producten', path: '/products' }
  ];

  return (
    <>
      <SchemaMarkup 
        type="Product"
        data={{
          "@type": "ItemList",
          itemListElement: productData.brands.map((brand, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Product",
              name: brand.name,
              description: brand.description,
              image: brand.imageUrl,
              brand: {
                "@type": "Brand",
                name: brand.name
              },
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                highPrice: 3500,
                lowPrice: 1200,
                offerCount: brand.models?.length || 5,
                priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString()
              },
              additionalProperty: brand.features.map(feature => ({
                "@type": "PropertyValue",
                name: "Feature",
                value: feature
              }))
            }
          }))
        }}
      />
      <Helmet>
        <title>Airco Merken | Airco Offerte Limburg</title>
        <meta 
          name="description" 
          content="Ontdek ons uitgebreide assortiment aan hoogwaardige airconditioning merken. Van Daikin tot Mitsubishi, wij bieden alleen de beste kwaliteit."
        />
        <meta 
          name="keywords" 
          content="airco merken, Daikin, Mitsubishi Electric, Samsung, LG, Tosot, Gree, airconditioning, klimaatbeheersing, Limburg"
        />
        <link rel="canonical" href="https://staycoolairco.nl/products" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Airconditioning Merken
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij werken uitsluitend met A-merken voor de beste kwaliteit en betrouwbaarheid
            </p>
          </m.div>
          
          {/* Enhanced brand intro section instead of filters */}
          <div className="mb-16 bg-white rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3 flex justify-center">
                <img
                  src="/images/products/374-WTS-indoor-console-vloernmodel-tosot.webp"
                  alt="Premium airconditioning"
                  className="w-full max-w-[250px] h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Waarom een A-merk airco?</h2>
                <p className="text-gray-600 mb-4">
                  Bij StayCool werken we uitsluitend met de beste A-merken zoals Daikin, Mitsubishi en Tosot. Deze keuze garandeert niet alleen optimale prestaties, maar ook een langere levensduur, energiezuinigheid en uitzonderlijk comfort.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Tot 60% energiebesparing</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Superieure koeling</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Tot 5 jaar garantie</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Professionele installatie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData.brands.map((brand, index) => (
              <m.div
                key={brand.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative group overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                  <LazyImage
                    src={brand.imageUrl}
                    alt={`${brand.name} airconditioning`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    width="100%"
                    height="100%"
                    aspectRatio={16/9}
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Badge - only for top models or special offers */}
                  {(index < 2 || brand.name === "Tosot by Gree") && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg">
                      BESTSELLER
                    </div>
                  )}
                  {index === 2 && brand.name !== "Tosot by Gree" && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg">
                      ENERGIEZUINIG
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-2xl font-bold text-white">{brand.name}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{brand.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {brand.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-700">
                        <Star className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <Link
                      to={brand.name === "Airco Bescherming/Omkasting" 
                        ? "/products/airco-covers" 
                        : `/products/${brand.name.toLowerCase()}`}
                      className="group block w-full text-center py-4 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300"
                    >
                      <div className="flex items-center justify-center">
                        <span className="font-medium">{brand.name === "Airco Bescherming/Omkasting" ? "Bekijk Omkastingen" : "Bekijk Modellen"}</span>
                        <ArrowRight className="inline-block ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                    
                    {brand.name !== "Airco Bescherming/Omkasting" && (
                      <Link
                        to="/contact"
                        className="group block w-full text-center py-4 px-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 transition-all duration-300"
                      >
                        <div className="flex items-center justify-center">
                          <span className="font-medium">Vraag Gratis Offerte Aan</span>
                          <svg className="inline-block ml-2 h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    )}
                    
                    {/* Availability indicator instead of price */}
                    <div className="text-center mt-3 flex items-center justify-center text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">
                        <svg className="mr-1.5 h-2 w-2 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Direct leverbaar
                      </span>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* USPs Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Erkend Installateur</h3>
              <p className="text-gray-600">F-gassen gecertificeerd en erkend installateur van alle grote merken</p>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <ThermometerSun className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Energiezuinig</h3>
              <p className="text-gray-600">Alle systemen zijn zeer energiezuinig en geschikt voor verwarmen én koelen</p>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <Star className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Premium Service</h3>
              <p className="text-gray-600">Gratis advies aan huis en professionele installatie door ervaren monteurs</p>
            </m.div>
          </div>

          {/* Enhanced CTA section */}
          <m.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 shadow-xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="inline-block px-4 py-2 rounded-full bg-blue-500/40 text-white text-sm font-medium mb-6">
                ⚡ Tijdelijke actie: Gratis installatiecheck bij offerte
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">
                Vind De Perfecte Airco Voor Uw Woning
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Onze experts helpen u graag bij het selecteren van de juiste airconditioning. 
                Binnen 24 uur ontvangt u een vrijblijvende offerte op maat.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300"
                >
                  <span className="mr-2">Vraag Gratis Offerte Aan</span>
                  <svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="tel:0462021430"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white/10 shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300"
                >
                  <svg className="h-5 w-5 mr-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Bel Direct: 046 202 1430</span>
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Geen verplichtingen</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Snelle reactie</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <span>Persoonlijk advies</span>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </>
  );
}
