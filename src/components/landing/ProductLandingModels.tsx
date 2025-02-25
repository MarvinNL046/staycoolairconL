import React from 'react';
import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LazyImage from '../../components/LazyImage';

interface Model {
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  price?: string;
  energyLabel: string;
  capacity: string;
  features: string[];
}

interface ProductLandingModelsProps {
  title: string;
  subtitle: string;
  brandName: string;
  brandSlug: string;
  models: Model[];
}

export default function ProductLandingModels({
  title,
  subtitle,
  brandName,
  brandSlug,
  models
}: ProductLandingModelsProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            {title}
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {subtitle}
          </m.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <m.div
              key={model.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video">
                <LazyImage
                  src={model.imageUrl}
                  alt={`${brandName} ${model.name}`}
                  className="w-full h-full object-cover"
                  width="100%"
                  height="100%"
                  aspectRatio={16/9}
                  priority={index < 3}
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
                    to={`/products/${brandSlug}/${model.slug}`}
                    className="block w-full text-center py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Bekijk Details
                    <ArrowRight className="inline-block ml-2 h-5 w-5" />
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

        <div className="mt-12 text-center">
          <Link
            to={`/products/${brandSlug}`}
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-lg text-blue-600 hover:bg-blue-50 transition-colors duration-300"
          >
            Bekijk alle {brandName} modellen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
