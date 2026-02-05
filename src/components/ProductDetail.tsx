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
    <section className="py-8 lg:py-20 bg-gray-50 overflow-hidden">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Header */}
        <div className="mb-12">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 flex-wrap">
              <li><a href="#" className="text-gray-500 hover:text-blue-600">Producten</a></li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <a href="#" className="text-gray-500 hover:text-blue-600">{brand}</a>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-700 truncate max-w-[150px] sm:max-w-none">{model}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 relative">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg w-full max-w-full overflow-hidden"
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
              {/* Enhanced product title section */}
              <div className="mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Bestseller
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 flex flex-wrap items-center gap-3">
              </h1>

              {/* Product Status & Rating - Mobile Optimized */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                  Op voorraad
                </span>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-500 underline">150 reviews</span>
                </div>
              </div>

              <p className="text-xl text-gray-600 mb-8">{description}</p>

              {/* Key benefits box */}
              <div className="bg-blue-50 p-4 rounded-lg mb-8">
                <h3 className="font-semibold text-blue-900 mb-2">Belangrijkste voordelen:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1">
                  <li className="flex items-center text-blue-800">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Energiezuinig {energyLabel} label
                  </li>
                  <li className="flex items-center text-blue-800">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hoog rendement
                  </li>
                  <li className="flex items-center text-blue-800">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fluisterstille werking
                  </li>
                  <li className="flex items-center text-blue-800">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Incl. 5 jaar garantie
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
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
                <div className="mb-8 bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">All-in prijs vanaf</span>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-3xl font-bold text-gray-900">
                        {price.replace('inclusief standaard installatie', '').replace('Vanaf', '').trim()}
                      </span>
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                        Inclusief montage
                      </span>
                    </div>
                    <button
                      onClick={() => setShowInstallationInfo(true)}
                      className="text-xs text-gray-500 hover:text-blue-600 underline mt-1 text-left"
                    >
                      Wat is standaard installatie?
                    </button>
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

            {/* Enhanced CTA buttons */}
            <div className="space-y-4">
              <a
                href="#contact"
                className="group relative block w-full py-4 px-6 text-center text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:translate-y-[-2px]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span className="text-base">Offerte Aanvragen</span>
                </span>
                <span className="absolute top-0 right-0 px-2 py-1 text-xs font-semibold bg-orange-500 rounded-bl-lg text-white">GRATIS</span>
              </a>

              <a
                href="tel:0462021430"
                className="group block w-full py-4 px-6 text-center text-blue-600 bg-white border-2 border-blue-600 hover:border-blue-700 hover:text-blue-700 rounded-lg font-medium transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                <span className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2 animate-pulse" />
                  <span className="text-base">Direct Advies: 046 202 1430</span>
                </span>
              </a>

              <a
                href="#specifications"
                className="flex items-center justify-center w-full py-3 px-4 text-center text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-300"
              >
                <Info className="h-4 w-4 mr-2" />
                <span>Bekijk Specificaties</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap justify-between items-center">
              <div className="flex items-center text-sm text-gray-600 mr-4">
                <svg className="h-5 w-5 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Op voorraad</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mr-4">
                <svg className="h-5 w-5 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Snelle levering</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="h-5 w-5 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>5 jaar garantie</span>
              </div>
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
                <p className="font-medium">De prijzen zijn inclusief standaard installatie. Dit houdt in:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Koelleiding lengte tussen binnen- en buitenunit maximaal 4 meter</li>
                  <li>Gangbare hoogte voor de buitenunit tot 2,5 meter hoogte</li>
                  <li>Diamantboring door de muur (uitgezonderd beton)</li>
                  <li>Electra aansluiting zonder groep bij plaatsing in de meterkast</li>
                  <li>Afwerking met kunststof goten</li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg mt-4">
                  <p className="text-sm font-semibold text-orange-800 mb-2">Goed om te weten:</p>
                  <ul className="text-sm text-orange-800 list-disc pl-5 space-y-1">
                    <li>Betonboring is mogelijk tegen meerprijs (€ 175,00)</li>
                    <li>Extra koelleiding: € 45,00 - € 70,00 per meter (afhankelijk van vermogen)</li>
                    <li>Exclusief steigerwerk en/of hoogwerker indien nodig</li>
                    <li>Dakdoorvoer (bitumen) is mogelijk tegen meerprijs (€ 175,00)</li>
                  </ul>
                </div>
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

        {/* Enhanced CTA Section */}
        <div id="contact" className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 lg:p-10 relative overflow-hidden shadow-xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid-pattern)" />
            </svg>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-12 text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/30 text-white text-sm font-medium mb-4">
                ⚡ Actie: Gratis installatie-check bij offerte
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">
                Interesse in deze {brand} {model}?
              </h2>
              <p className="text-blue-100 mb-6 max-w-3xl">
                Onze experts helpen u graag met een persoonlijk advies en scherpe offerte.
                Wij staan voor kwaliteit, service en vakmanschap.
              </p>

              {/* Testimonial */}
              <div className="bg-white/10 p-4 rounded-lg mb-6 backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-white text-sm">5/5</span>
                </div>
                <p className="text-white text-sm italic">"Zeer tevreden met onze nieuwe {brand} airco. Professionele installatie en uitstekende service!" - Johan uit Rotterdam</p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 text-white text-sm">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Garantie tot 5 jaar</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>500+ tevreden klanten</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Reactie binnen 24 uur</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Vraag direct een offerte aan</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Uw naam"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mailadres"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telefoonnummer"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-3 px-4 bg-white text-blue-700 rounded-lg font-medium shadow-lg hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  <span>Aanvraag Versturen</span>
                </button>
              </form>
              <p className="text-white/80 text-xs mt-4 text-center">Wij nemen binnen 24 uur contact met u op</p>

              <div className="mt-4 pt-4 border-t border-white/20">
                <a
                  href="tel:0462021430"
                  className="flex items-center justify-center w-full py-3 px-4 border border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 mr-2 animate-pulse" />
                  <span>Bel Direct: 046 202 1430</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
