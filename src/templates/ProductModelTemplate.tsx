import React from 'react';
import { Helmet } from 'react-helmet-async';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, Phone, Mail, MapPin } from 'lucide-react';
import ProductCarousel from '../components/ProductCarousel';
import SchemaMarkup from '../components/SchemaMarkup';
import Breadcrumbs from '../components/Breadcrumbs';

interface ProductModelTemplateProps {
  brand: string;
  model: string;
  description: string;
  images: Array<{ url: string; alt: string; }>;
  price?: string;
  energyLabel: string;
  capacity: string;
  features: string[];
  specifications: Array<{ label: string; value: string; }>;
  slug: string;
}

export default function ProductModelTemplate({
  brand,
  model,
  description,
  images,
  price,
  energyLabel,
  capacity,
  features,
  specifications,
  slug
}: ProductModelTemplateProps) {
  const breadcrumbItems = [
    { label: 'Producten', path: '/products' },
    { label: brand, path: `/products/${brand.toLowerCase()}` },
    { label: model, path: `/products/${brand.toLowerCase()}/${slug}` }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <SchemaMarkup 
          type="Product"
          data={{
            name: `${brand} ${model}`,
            description,
            image: images[0].url,
            brand: {
              "@type": "Brand",
              name: brand
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: price ? parseFloat(price.replace(/[^0-9.]/g, '')) : undefined,
              availability: "https://schema.org/InStock",
              priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString()
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "50"
            }
          }}
        />

        <Helmet>
          <title>{brand} {model} | Airco Specialist Limburg</title>
          <meta 
            name="description" 
            content={`${brand} ${model} airconditioning - ${description} ✓ Gratis advies ✓ Professionele installatie ✓ 5 jaar garantie`}
          />
          <link rel="canonical" href={`https://staycoolairco.nl/products/${brand.toLowerCase()}/${slug}`} />
        </Helmet>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <ProductCarousel images={images} />
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {brand} {model}
              </h1>
              <p className="text-xl text-gray-600 mb-8">{description}</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-sm text-gray-600">Energielabel</div>
                  <div className="text-2xl font-bold text-blue-600">{energyLabel}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-sm text-gray-600">Capaciteit</div>
                  <div className="text-2xl font-bold text-blue-600">{capacity}</div>
                </div>
              </div>

              {price && (
                <div className="mb-8">
                  <div className="text-sm text-gray-600">Vanaf</div>
                  <div className="text-3xl font-bold text-gray-900">{price}</div>
                </div>
              )}

              <div className="space-y-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-blue-600 mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to="/contact"
                className="block w-full py-3 px-4 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-300"
              >
                Offerte Aanvragen
              </Link>
            </div>
          </m.div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Specificaties</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {specifications.map((spec, index) => (
                <m.div
                  key={spec.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 p-4 hover:bg-gray-50"
                >
                  <div className="text-gray-600">{spec.label}</div>
                  <div className="text-gray-900 font-medium">{spec.value}</div>
                </m.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Interesse in deze {brand} {model}?
          </h2>
          <p className="text-blue-700 mb-8">
            Onze experts helpen u graag met een persoonlijk advies en scherpe offerte
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Offerte Aanvragen
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              <Phone className="h-5 w-5 mr-2" />
              Bel Direct: 046 202 1430
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
