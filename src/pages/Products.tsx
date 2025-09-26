import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowRight, Star, Award, ThermometerSun, CheckCircle, Shield, Zap, Wind } from 'lucide-react';
import { productData } from '../data/products';
import MetaTags from '../components/MetaTags';
import LazyImage from '../components/LazyImage';
import Breadcrumbs from '../components/Breadcrumbs';
import SchemaMarkup from '../components/SchemaMarkup';

export default function Products() {
  const breadcrumbItems = [
    { label: 'Producten', path: '/products' }
  ];

  const voordelen = [
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      titel: "Tot 60% energiebesparing",
      beschrijving: "A+++ energielabels zorgen voor minimale operationele kosten"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      titel: "Tot 10 jaar garantie",
      beschrijving: "Uitgebreide fabrieksgarantie op alle premium merken"
    },
    {
      icon: <Wind className="h-8 w-8 text-blue-500" />,
      titel: "Superieure koeling",
      beschrijving: "Geavanceerde inverter technologie voor optimaal comfort"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
      titel: "Professionele installatie",
      beschrijving: "Gecertificeerde monteurs en volledige service"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title="Premium Airco Merken - Daikin, Mitsubishi & Meer | StayCool Airco"
        description="Ontdek ons uitgebreide assortiment aan hoogwaardige airconditioning merken. Van Daikin tot Mitsubishi, wij bieden alleen de beste A-merken met professionele installatie."
        keywords="airco merken, Daikin, Mitsubishi Electric, Samsung, LG, Tosot, Gree, airconditioning, klimaatbeheersing, Limburg"
      />
      
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="text-white/70 mb-4" />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Airconditioning Merken
            </h1>
            <p className="text-xl text-blue-50 mb-8">
              Wij werken uitsluitend met A-merken voor de beste kwaliteit, betrouwbaarheid en energiezuinigheid
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {voordelen.map((voordeel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex justify-center mb-2">
                    {voordeel.icon}
                  </div>
                  <p className="font-semibold text-sm">{voordeel.titel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Waarom kiezen voor een A-merk airco?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {voordelen.map((voordeel, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {voordeel.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{voordeel.titel}</h3>
                <p className="text-gray-600">{voordeel.beschrijving}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merken Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Onze Premium Merken
          </h2>
          
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Klaar om de perfecte airco te vinden?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Onze experts helpen u graag bij het kiezen van de juiste airconditioning voor uw situatie. Vraag vandaag nog gratis advies aan!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Gratis advies aanvragen
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Bel direct: 046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Waarom StayCool Airco?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Award className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Erkend Installateur</h3>
              <p className="text-gray-600">F-gassen gecertificeerd en erkend installateur van alle grote merken</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <ThermometerSun className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Energiezuinig</h3>
              <p className="text-gray-600">Alle systemen zijn zeer energiezuinig en geschikt voor verwarmen én koelen</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Star className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Premium Service</h3>
              <p className="text-gray-600">Gratis advies aan huis en professionele installatie door ervaren monteurs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
