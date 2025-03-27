import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { Phone, Check, ThermometerSun, Wind, Zap, Timer, Ruler, Info, X } from 'lucide-react';
import { productData } from '../data/products';
import ProductCarousel from '../components/ProductCarousel';
import { Helmet } from 'react-helmet-async';

export default function ProductDetail() {
  const { brand, model } = useParams();
  const [showInstallationInfo, setShowInstallationInfo] = useState(false);
  
  // Find the product data
  const brandData = productData.brands.find(b => 
    b.name.toLowerCase() === brand || 
    b.name.toLowerCase().startsWith(brand || '') ||
    b.name.toLowerCase().includes(brand || '')
  );
  const modelData = brandData?.models.find(m => m.slug === model);

  if (!brandData || !modelData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product niet gevonden</h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            Terug naar producten
          </Link>
        </div>
      </div>
    );
  }

  // Default images if none provided
  const productImages = modelData.images || [
    {
      url: modelData.imageUrl,
      alt: `${brandData.name} ${modelData.name} - Vooraanzicht`
    }
  ];

  // Extract price without currency symbol and convert to number
  const priceValue = modelData.price 
    ? parseFloat(modelData.price.replace(/[^0-9,-]/g, '').replace(',', '.'))
    : null;

  // Find energy values from specifications
  const seerValue = modelData.specifications.find(spec => spec.label === 'SEER')?.value;
  const scopValue = modelData.specifications.find(spec => spec.label === 'SCOP')?.value;

  // Generate schema.org data
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": `${brandData.name} ${modelData.name}`,
    "image": productImages.map(img => img.url),
    "description": modelData.description,
    "brand": {
      "@type": "Brand",
      "name": brandData.name
    },
    "manufacturer": {
      "@type": "Organization",
      "name": brandData.name
    },
    "model": modelData.name,
    ...(priceValue && {
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": priceValue,
        "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "StayCool Airco"
        }
      }
    }),
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Energielabel",
        "value": modelData.energyLabel
      },
      {
        "@type": "PropertyValue",
        "name": "Capaciteit",
        "value": modelData.capacity
      },
      ...(seerValue ? [{
        "@type": "PropertyValue",
        "name": "SEER",
        "value": seerValue
      }] : []),
      ...(scopValue ? [{
        "@type": "PropertyValue",
        "name": "SCOP",
        "value": scopValue
      }] : []),
      ...modelData.specifications.map(spec => ({
        "@type": "PropertyValue",
        "name": spec.label,
        "value": spec.value
      }))
    ]
  };

  return (
    <>
      <Helmet>
        <title>{`${brandData.name} ${modelData.name} | StayCool Airco`}</title>
        <meta 
          name="description" 
          content={modelData.description}
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-12">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li>
                  <Link to="/products" className="text-gray-500 hover:text-blue-600">
                    Producten
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to={`/products/${brand}`} className="text-gray-500 hover:text-blue-600">
                    {brandData.name}
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-700">{modelData.name}</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Product Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCarousel images={productImages} />
            </m.div>

            {/* Product Info */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between"
            >
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {brandData.name} {modelData.name}
                </h1>
                <p className="text-xl text-gray-600 mb-8">{modelData.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="text-sm text-gray-600">Energielabel</div>
                    <div className="text-2xl font-bold text-blue-600">{modelData.energyLabel}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="text-sm text-gray-600">Capaciteit</div>
                    <div className="text-2xl font-bold text-blue-600">{modelData.capacity}</div>
                  </div>
                </div>

                {modelData.price && (
                  <div className="mb-8">
                    <div className="text-sm text-gray-600">Vanaf</div>
                    <div className="text-3xl font-bold text-gray-900">
                      {modelData.price}
                      {modelData.price.includes('inclusief standaard installatie') && (
                        <button
                          onClick={() => setShowInstallationInfo(true)}
                          className="ml-2 text-sm font-normal text-blue-600 hover:text-blue-700 underline"
                        >
                          Wat houdt dit in?
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {modelData.features.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-blue-600 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block w-full py-3 px-4 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-300"
                >
                  Offerte Aanvragen
                </Link>
                <a
                  href="tel:0462021430"
                  className="block w-full py-3 px-4 text-center text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-300"
                >
                  <Phone className="inline-block h-5 w-5 mr-2" />
                  Bel voor Advies
                </a>
              </div>
            </m.div>
          </div>

          {/* Product Video (if available) */}
          {modelData.videoUrl && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Product Video</h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <video 
                  controls 
                  className="w-full h-auto"
                  poster={productImages[0].url}
                >
                  <source src={modelData.videoUrl} type="video/mp4" />
                  Uw browser ondersteunt geen video weergave.
                </video>
              </div>
            </div>
          )}

          {/* Technical Specifications */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Technische Specificaties</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                {modelData.specifications.map((spec, index) => (
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

          {/* Installation Info Modal */}
          {showInstallationInfo && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
                <button
                  onClick={() => setShowInstallationInfo(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Standaard Installatie</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="font-medium">Een standaard installatie bij StayCool Airco bestaat uit:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Koelleiding lengte tussen binnen- en buitenunit maximaal 4 meter</li>
                    <li>Gangbare hoogte voor de buitenunit tot 2,5 meter hoogte</li>
                    <li>Diamantboring door de muur (uitgezonderd beton)</li>
                    <li>Electra aansluiting zonder groep bij plaatsing in de meterkast</li>
                  </ul>
                  <p className="text-sm mt-4">
                    <strong>Let op:</strong> Eventueel benodigde hoogwerker of steigerwerk is niet inbegrepen in de standaard installatie.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
