import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';
import SchemaMarkup from './SchemaMarkup';
import { 
  Check, 
  ThermometerSun, 
  Wind, 
  Zap, 
  Timer, 
  Ruler, 
  Info,
  Award,
  X,
  Phone,
  Share2,
  MessageCircle,
  Mail
} from 'lucide-react';
import ProductCarousel from './ProductCarousel';

interface Specification {
  label: string;
  value: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProductDetailProps {
  brand: string;
  model: string;
  description: string;
  images: Array<{ url: string; alt: string; }>;
  price?: string;
  energyLabel: string;
  capacity: string;
  specifications: Specification[];
  features: string[];
  documents?: {
    label: string;
    url: string;
  }[];
  videoUrl?: string;
}

// Helper function to create absolute URL
const getAbsoluteUrl = (path: string) => {
  return `https://staycoolairco.nl${path}`;
};

export default function ProductDetail({
  brand,
  model,
  description,
  images,
  price,
  energyLabel,
  capacity,
  specifications,
  features,
  documents,
  videoUrl
}: ProductDetailProps) {
  const [showInstallationInfo, setShowInstallationInfo] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Header */}
        <div className="mb-12">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li><a href="#" className="text-gray-500 hover:text-blue-600">Producten</a></li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <a href="#" className="text-gray-500 hover:text-blue-600">{brand}</a>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-700">{model}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <ProductCarousel 
              images={images} 
            />
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => {
                  const url = window.location.href;
                  const text = `Bekijk de ${brand} ${model} op StayCool Airco`;
                  window.open(`https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`, '_blank');
                }}
                className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
                aria-label="Deel via WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  const url = window.location.href;
                  const subject = `${brand} ${model} - StayCool Airco`;
                  const body = `Bekijk de ${brand} ${model} op StayCool Airco:\n${url}`;
                  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                aria-label="Deel via email"
              >
                <Mail className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success('Link gekopieerd naar klembord');
                }}
                className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
                aria-label="Kopieer link"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
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
                  <div className="text-3xl font-bold text-gray-900">
                    {price}
                    {price.includes('inclusief standaard installatie') && (
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

        <SchemaMarkup 
          type="Product"
          data={{
            name: `${brand} ${model}`,
            description: description,
            image: getAbsoluteUrl(images[0].url),
            brand: {
              "@type": "Brand",
              name: brand
            },
            offers: {
              "@type": "Offer",
              url: window.location.href,
              priceCurrency: "EUR",
              price: price ? parseFloat(price.replace(/[^0-9.]/g, '')) : undefined,
              availability: "https://schema.org/InStock",
              shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingRate: {
                  "@type": "MonetaryAmount",
                  value: "0",
                  currency: "EUR"
                },
                deliveryTime: {
                  "@type": "ShippingDeliveryTime",
                  businessDays: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "09:00",
                    closes: "17:00"
                  }
                }
              },
              hasMerchantReturnPolicy: {
                "@type": "MerchantReturnPolicy",
                applicableCountry: "NL",
                returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
                merchantReturnDays: 14,
                returnMethod: "https://schema.org/ReturnByMail"
              }
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "150"
            },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5"
              },
              author: {
                "@type": "Person",
                name: "StayCool Klant"
              },
              reviewBody: "Uitstekende service en een perfect werkende airco. Zeer tevreden!"
            }
          }}
        />

        {/* Features */}
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
              <a
                href="#contact"
                className="block w-full py-3 px-4 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-300"
              >
                Offerte Aanvragen
              </a>
              <a
                href="#specifications"
                className="block w-full py-3 px-4 text-center text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-300"
              >
                Bekijk Specificaties
              </a>
            </div>
          </motion.div>
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

        {/* Product Video (if available) */}
        {videoUrl && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Product Video</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <video 
                controls 
                className="w-full h-auto"
                poster={images[0].url}
              >
                <source src={videoUrl} type="video/mp4" />
                Uw browser ondersteunt geen video weergave.
              </video>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Kenmerken</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <Check className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div id="specifications" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Specificaties</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {specifications.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 p-4 hover:bg-gray-50"
                >
                  <div className="text-gray-600">{spec.label}</div>
                  <div className="text-gray-900 font-medium">{spec.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Documents */}
        {documents && documents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Documentatie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc) => (
                <a
                  key={doc.label}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Info className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-600">{doc.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Interesse in deze {brand} {model}?
          </h2>
          <p className="text-blue-700 mb-8">
            Onze experts helpen u graag met een persoonlijk advies en scherpe offerte
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Offerte Aanvragen
            </a>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              <Phone className="h-5 w-5 mr-2" />
              Bel Direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
