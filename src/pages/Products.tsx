import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowRight, Star, Award, ThermometerSun } from 'lucide-react';
import { productData } from '../data/products';
import { Helmet } from 'react-helmet-async';
import LazyImage from '../components/LazyImage';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Products() {
  const breadcrumbItems = [
    { label: 'Producten', path: '/products' }
  ];

  return (
    <>
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
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Airconditioning Merken
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij werken uitsluitend met A-merken voor de beste kwaliteit en betrouwbaarheid
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData.brands.map((brand, index) => (
              <m.div
                key={brand.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <LazyImage
                    src={brand.imageUrl}
                    alt={`${brand.name} airconditioning`}
                    className="w-full h-full object-cover"
                    width="100%"
                    height="100%"
                    aspectRatio={16/9}
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
                      className="block w-full text-center py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      {brand.name === "Airco Bescherming/Omkasting" ? "Bekijk Omkastingen" : "Bekijk Modellen"}
                      <ArrowRight className="inline-block ml-2 h-5 w-5" />
                    </Link>
                    {brand.name !== "Airco Bescherming/Omkasting" && (
                      <Link
                        to="/contact"
                        className="block w-full text-center py-3 px-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                      >
                        Vraag Offerte Aan
                      </Link>
                    )}
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

          <m.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-blue-50 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Hulp nodig bij het kiezen?
            </h2>
            <p className="text-blue-700 mb-8">
              Onze experts helpen u graag bij het selecteren van de juiste airconditioning voor uw situatie
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Vraag advies aan
              </Link>
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
    </>
  );
}
