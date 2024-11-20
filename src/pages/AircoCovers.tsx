import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { aircoCoverData } from '../data/brands/airco-covers';
import Breadcrumbs from '../components/Breadcrumbs';
import StripeBuyButton from '../components/StripeBuyButton';
import ProductCarousel from '../components/ProductCarousel';

export default function AircoCovers() {
  const [selectedModel, setSelectedModel] = useState(aircoCoverData.models[0]);

  const breadcrumbItems = [
    { label: 'Producten', path: '/products' },
    { label: 'Airco Bescherming/Omkasting', path: '/products/airco-covers' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Bescherming/Omkasting | StayCool Airco</title>
        <meta 
          name="description" 
          content="Bescherm uw airco buitenunit met onze stijlvolle en duurzame omkastingen. Verkrijgbaar in antraciet en wit, voor verschillende formaten."
        />
        <link rel="canonical" href="https://staycoolairco.nl/products/airco-covers" />
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
              {aircoCoverData.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {aircoCoverData.description}
            </p>
          </m.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="w-full">
              <ProductCarousel images={selectedModel.images || []} />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">{selectedModel.name}</h2>
              <p className="text-gray-600">{selectedModel.description}</p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Specificaties:</h3>
                <ul className="space-y-2">
                  {selectedModel.specifications.map((spec) => (
                    <li key={spec.label} className="flex justify-between">
                      <span className="text-gray-600">{spec.label}:</span>
                      <span className="font-medium">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedModel.price && (
                <div className="text-3xl font-bold text-center text-blue-600">
                  € {selectedModel.price}
                </div>
              )}
              
              {selectedModel.stripeBuyUrl && (
                <StripeBuyButton url={selectedModel.stripeBuyUrl} />
              )}
            </div>
          </div>

          {/* Model Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {aircoCoverData.models.map((model) => (
              <button
                key={model.slug}
                onClick={() => setSelectedModel(model)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedModel.slug === model.slug
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <img
                  src={model.imageUrl}
                  alt={model.name}
                  className="w-full h-32 object-contain mb-2"
                />
                <p className="text-sm font-medium text-gray-900">{model.name}</p>
                {model.price && (
                  <p className="text-sm text-blue-600">€ {model.price}</p>
                )}
              </button>
            ))}
          </div>

          <m.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-blue-50 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Vragen over onze airco omkastingen?
            </h2>
            <p className="text-blue-700 mb-8">
              Neem contact met ons op voor meer informatie of advies op maat
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
