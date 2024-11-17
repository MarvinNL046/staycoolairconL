import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowRight, Star, ArrowLeft } from 'lucide-react';
import { productData } from '../data/products';

export default function BrandDetail() {
  const { brand } = useParams();
  const brandData = productData.brands.find(b => b.name.toLowerCase() === brand);

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
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