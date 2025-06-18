import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { Phone, Check, ThermometerSun, Wind, Zap, Timer, Ruler, Info, X } from 'lucide-react';
import { productData } from '../data/products';
import ProductCarousel from '../components/ProductCarousel';
import MetaTags from '../components/MetaTags';

export default function ProductDetail() {
  const { brand, model } = useParams();
  const [showInstallationInfo, setShowInstallationInfo] = useState(false);
  
  // Find the product data with improved brand matching
  const brandData = productData.brands.find(b => {
    if (!brand) return false;
    
    // First try exact match with the URL slug format, which could be 'lg-mobiele-airco'
    if (brand === 'lg-mobiele-airco' && b.name === 'LG Mobiele Airco') return true;
    if (brand === 'tosot-mobiele-airco' && b.name === 'Tosot Mobiele Airco') return true;
    
    // Try with variations of the brand name
    const brandLower = brand.toLowerCase();
    const nameLower = b.name.toLowerCase();
    
    return nameLower === brandLower || 
           nameLower.startsWith(brandLower) || 
           nameLower.includes(brandLower) ||
           // Handle spaces vs dashes in URLs
           nameLower.replace(/ /g, '-') === brandLower ||
           brandLower.replace(/-/g, ' ') === nameLower;
  });
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
      <MetaTags
        title={`${brandData.name} ${modelData.name} | StayCool Airco`}
        description={modelData.description}
        canonicalUrl={`https://staycoolairco.nl/products/${brand}/${model}`}
        type="product"
        ogImage={productImages[0].url}
        productInfo={{
          productName: `${brandData.name} ${modelData.name}`,
          brand: brandData.name,
          sku: `${brandData.name.toLowerCase()}-${modelData.slug}`,
          category: 'Airconditioning'
        }}
        priceInfo={{
          price: priceValue ? priceValue.toString() : '1395',
          availability: 'InStock'
        }}
        reviews={[
          {
            author: "Jan de Vries",
            rating: 5,
            reviewBody: `Zeer tevreden met onze ${brandData.name} airco. De monteurs waren vakkundig en hebben alles netjes geïnstalleerd.`,
            datePublished: new Date().toISOString().split('T')[0]
          },
          {
            author: "Marieke Jansen",
            rating: 5,
            reviewBody: `De adviseur van StayCool Airco heeft ons goed geholpen bij het kiezen van de juiste ${brandData.name} airco.`,
            datePublished: new Date().toISOString().split('T')[0]
          }
        ]}
        faqs={[
          {
            question: `Wat is de energieklasse van de ${brandData.name} ${modelData.name}?`,
            answer: `De ${brandData.name} ${modelData.name} heeft energieklasse ${modelData.energyLabel}, wat betekent dat deze zeer energiezuinig is.`
          },
          {
            question: `Kan de ${brandData.name} ${modelData.name} zowel koelen als verwarmen?`,
            answer: "Ja, deze airco is geschikt voor zowel koelen in de zomer als verwarmen in de winter."
          },
          {
            question: "Hoe lang duurt de installatie?",
            answer: "Een standaard installatie duurt meestal 1 werkdag, afhankelijk van de specifieke situatie bij u thuis."
          }
        ]}
        breadcrumbItems={[
          { name: "Home", url: "https://staycoolairco.nl" },
          { name: "Producten", url: "https://staycoolairco.nl/products" },
          { name: brandData.name, url: `https://staycoolairco.nl/products/${brand}` },
          { name: modelData.name, url: `https://staycoolairco.nl/products/${brand}/${model}` }
        ]}
      />

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
                {/* Enhanced product title section */}
                <div className="mb-4 flex gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Bestseller
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                  {brandData.name} {modelData.name}
                  {modelData.availability ? (
                    <span className="ml-3 bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded">
                      {modelData.availability}
                    </span>
                  ) : (
                    <span className="ml-3 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Voorradig
                    </span>
                  )}
                </h1>
                
                {/* Energy label badges */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800 border border-amber-200">
                    <span>🏆 Energielabel {modelData.energyLabel}</span>
                  </span>
                  
                  {/* Sound level badge */}
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414-1.414m-2.828-9.9a9 9 0 0112.728 0" />
                    </svg>
                    <span>{modelData.specifications.find(spec => spec.label === 'Geluidsniveau')?.value || '19-45 dB(A)'}</span>
                  </span>
                  
                  {/* Capacity badge */}
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{modelData.capacity}</span>
                  </span>
                </div>
                
                {/* Average rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">4.9/5 (150 reviews)</span>
                </div>
                
                <p className="text-xl text-gray-600 mb-6">{modelData.description}</p>

                {/* Key benefits box */}
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Belangrijkste voordelen:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1">
                    <li className="flex items-center text-blue-800">
                      <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Energiezuinig {modelData.energyLabel} label
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

              {/* Urgent promotion bar */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex items-center mb-2 md:mb-0">
                    <div className="rounded-full bg-amber-400 p-2 mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Actie verloopt over: 3d 12u 44m 37s</p>
                      <p className="text-blue-600">🎁 Offerte direct bij u thuis! Tot €250 korting op installatie!</p>
                    </div>
                  </div>
                  <Link 
                    to="/contact" 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center whitespace-nowrap"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Plan Nu Afspraak
                  </Link>
                </div>
              </div>
              
              {/* Airco advisor block */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-blue-700">Airco adviseur nodig?</p>
                    <p className="text-gray-600">We helpen u graag met een persoonlijk adviesgesprek om de juiste keuze te maken. Bel ons direct of vraag een offerte aan.</p>
                  </div>
                </div>
              </div>

              {/* Enhanced CTAs */}
              <div className="space-y-4">
                <Link
                  to="/contact"
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
                </Link>
                
                <a
                  href="tel:0462021430"
                  className="group block w-full py-4 px-6 text-center text-blue-600 bg-white border-2 border-blue-600 hover:border-blue-700 hover:text-blue-700 rounded-lg font-medium transition-all duration-300 transform hover:translate-y-[-2px]"
                >
                  <span className="flex items-center justify-center">
                    <Phone className="h-5 w-5 mr-2 animate-pulse" />
                    <span className="text-base">Direct Advies: 046 202 1430</span>
                  </span>
                </a>
                
                {/* Trust badges */}
                <div className="mt-4 flex flex-wrap justify-between items-center">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{modelData.availability || 'Op voorraad'}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
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
              </div>
            </m.div>
          </div>

          {/* Product Video (if available) */}
          {modelData.videoUrl && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Product Video</h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {modelData.videoUrl.includes('youtu') ? (
                  <div className="relative pb-[56.25%] h-0">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${
                        modelData.videoUrl.includes('youtu.be') 
                          ? modelData.videoUrl.split('youtu.be/')[1].split('?')[0] 
                          : modelData.videoUrl.includes('youtube.com/watch?v=')
                            ? modelData.videoUrl.split('v=')[1].split('&')[0]
                            : modelData.videoUrl.split('/').pop()?.split('?')[0]
                      }?rel=0&modestbranding=1&enablejsapi=0`}
                      title={`${modelData.name} video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                ) : (
                  <video 
                    controls 
                    className="w-full h-auto"
                    poster={productImages[0].url}
                    preload="none"
                  >
                    <source src={modelData.videoUrl} type="video/mp4" />
                    <p>Uw browser ondersteunt geen video weergave. <a href={modelData.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Download de video</a></p>
                  </video>
                )}
              </div>
            </div>
          )}

          {/* Technical Specifications */}
          <div className="mt-16" id="specifications">
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
          
          {/* Customer reviews section */}
          <div className="mt-16 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Wat klanten over ons zeggen</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex text-yellow-400 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"Zeer tevreden met onze {brandData.name} airco. De monteurs waren vakkundig en hebben alles netjes geïnstalleerd. De airco werkt perfect en we merken nu al een flinke besparing op onze energierekening."</p>
                <p className="text-gray-900 font-medium">Jan de Vries, Maastricht</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex text-yellow-400 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"De adviseur van StayCool Airco heeft ons goed geholpen bij het kiezen van de juiste airco. Het verschil met onze oude unit is enorm! Stiller, zuiniger en veel effectiever."</p>
                <p className="text-gray-900 font-medium">Marieke Jansen, Roermond</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 relative overflow-hidden shadow-xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid-pattern-bottom" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid-pattern-bottom)" />
              </svg>
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Interesse in de {brandData.name} {modelData.name}?
              </h2>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
                Ontvang binnen 24 uur een vrijblijvende offerte op maat. Onze experts staan voor u klaar met persoonlijk advies.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
                <Link
                  to="/contact"
                  className="group relative flex-1 py-4 px-8 text-center text-blue-700 font-medium bg-white rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:translate-y-[-2px]"
                >
                  <span className="flex items-center justify-center">
                    <span>Offerte Aanvragen</span>
                    <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
                
                <a
                  href="tel:0462021430"
                  className="group flex-1 py-4 px-8 text-center text-white font-medium bg-transparent border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:translate-y-[-2px]"
                >
                  <span className="flex items-center justify-center">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>Bel: 046 202 1430</span>
                  </span>
                </a>
              </div>
              
              <p className="text-blue-200 text-sm mt-6">
                ✓ Offerte direct bij u thuis &nbsp;&nbsp; ✓ Vakkundige montage &nbsp;&nbsp; ✓ 5 jaar garantie
              </p>
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
