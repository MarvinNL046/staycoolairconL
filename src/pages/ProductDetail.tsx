import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { Phone, Check, ThermometerSun, Wind, Zap, Timer, Ruler, Info, X } from 'lucide-react';
import { productData } from '../data/products';
import ProductCarousel from '../components/ProductCarousel';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/SEO/Breadcrumbs';

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
    "sku": `SC-${brandData.name.toLowerCase().replace(/ /g, '-')}-${modelData.slug}`,
    "mpn": modelData.name,
    "brand": {
      "@type": "Brand",
      "name": brandData.name
    },
    "manufacturer": {
      "@type": "Organization",
      "name": brandData.name
    },
    "model": modelData.name,
    "category": "Airconditioning",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 47,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "author": {
          "@type": "Person",
          "name": "Jan de Vries"
        },
        "reviewBody": `Zeer tevreden met onze ${brandData.name} airco. De monteurs waren vakkundig en hebben alles netjes geïnstalleerd.`,
        "datePublished": new Date().toISOString().split('T')[0]
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "author": {
          "@type": "Person",
          "name": "Marieke Jansen"
        },
        "reviewBody": `De adviseur van StayCool Airco heeft ons goed geholpen bij het kiezen van de juiste ${brandData.name} airco.`,
        "datePublished": new Date().toISOString().split('T')[0]
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "author": {
          "@type": "Person",
          "name": "Peter Smits"
        },
        "reviewBody": "Uitstekende service en kwaliteit. De airco werkt perfect en de montage was zeer professioneel.",
        "datePublished": new Date().toISOString().split('T')[0]
      }
    ],
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
        reviews={brand === 'alphaess' ? [
          {
            author: "Peter Hendriks",
            rating: 5,
            reviewBody: `Fantastisch systeem! Onze energierekening is met 40% gedaald sinds we de ${brandData.name} thuisbatterij hebben. De slimme sturing via Frank werkt perfect.`,
            datePublished: new Date().toISOString().split('T')[0]
          },
          {
            author: "Linda van den Berg",
            rating: 5,
            reviewBody: `StayCool Airco heeft de ${brandData.name} batterij vakkundig geïnstalleerd. Ze hebben ook geholpen met de BTW-teruggave aanvraag. Top service!`,
            datePublished: new Date().toISOString().split('T')[0]
          }
        ] : [
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
        faqs={brand === 'alphaess' ? [
          {
            question: `Wat is de terugverdientijd van de ${brandData.name} ${modelData.name} thuisbatterij?`,
            answer: `De terugverdientijd van de ${brandData.name} ${modelData.name} is gemiddeld 4-7 jaar, afhankelijk van uw energiecontract en verbruikspatroon. Met de huidige dynamische energieprijzen kunt u forse besparingen realiseren door slim in te kopen wanneer stroom goedkoop is.`
          },
          {
            question: "Hoe werkt de slimme sturing van deze thuisbatterij?",
            answer: `De ${brandData.name} ${modelData.name} maakt gebruik van de Frank app voor intelligent energiebeheer. Deze app handelt automatisch op de energiemarkt (EPEX) en benut ook onbalans- en congestiemarkten voor maximaal rendement. U hoeft zelf niets te doen - het systeem optimaliseert automatisch uw energiegebruik.`
          },
          {
            question: "Kan ik deze batterij ook zonder zonnepanelen gebruiken?",
            answer: `Ja, de ${brandData.name} ${modelData.name} werkt uitstekend zonder zonnepanelen. U kunt profiteren van dynamische energieprijzen door goedkoop in te kopen en duur terug te leveren. Met zonnepanelen heeft u wel extra voordeel door overdag gratis op te laden.`
          },
          {
            question: "Welke garantie krijg ik op deze thuisbatterij?",
            answer: `AlphaESS biedt 10 jaar garantie of 10.000 cycli op de ${modelData.name}. Daarnaast krijgt u gratis 24/7 monitoring via AlphaCloud. Het systeem is VDE, IEC en UN38.3 gecertificeerd voor maximale veiligheid en betrouwbaarheid.`
          },
          {
            question: "Hoeveel capaciteit heb ik nodig voor mijn huishouden?",
            answer: `Voor een gemiddeld huishouden is ${modelData.capacity} meestal voldoende. Dit dekt het dagelijkse verbruik en biedt ruimte voor handel op de energiemarkt. Onze adviseurs maken graag een berekening op maat op basis van uw verbruik en wensen.`
          },
          {
            question: "Hoe snel kan de thuisbatterij geïnstalleerd worden?",
            answer: `De ${brandData.name} ${modelData.name} kan binnen 4 weken geïnstalleerd worden. De installatie zelf duurt ongeveer een halve dag. AlphaESS helpt ook met de BTW-teruggave van 21%, wat het netto nog voordeliger maakt.`
          }
        ] : [
          {
            question: `Voor welke ruimtegrootte is deze ${brandData.name} ${modelData.name} geschikt?`,
            answer: `De ${brandData.name} ${modelData.name} met ${modelData.capacity} is geschikt voor ruimtes van ongeveer ${
              modelData.capacity.includes('2.5') ? '25-30 m²' :
              modelData.capacity.includes('3.5') ? '30-40 m²' :
              modelData.capacity.includes('5.0') ? '45-60 m²' :
              modelData.capacity.includes('7.0') ? '60-80 m²' :
              '25-50 m²'
            }. Voor een exacte berekening adviseren onze experts u graag op basis van isolatie en raamoppervlak.`
          },
          {
            question: "Wat zijn de jaarlijkse energiekosten van deze airco?",
            answer: `Bij gemiddeld gebruik (1000 uur koelen en 1000 uur verwarmen per jaar) kost deze ${brandData.name} ${modelData.name} ongeveer €${
              modelData.capacity.includes('2.5') ? '180-220' :
              modelData.capacity.includes('3.5') ? '220-280' :
              modelData.capacity.includes('5.0') ? '280-350' :
              modelData.capacity.includes('7.0') ? '350-450' :
              '200-300'
            } per jaar aan elektriciteit. Dit is aanzienlijk goedkoper dan elektrische verwarming.`
          },
          {
            question: "Hoe stil is deze airco tijdens gebruik?",
            answer: `De binnenunit produceert slechts ${modelData.specifications.find(spec => spec.label === 'Geluidsniveau')?.value || '19-45 dB(A)'} geluid, wat vergelijkbaar is met fluisteren. De buitenunit is ontworpen om geluidsoverlast voor buren te minimaliseren.`
          },
          {
            question: "Kan deze airco ook verwarmen in de winter?",
            answer: `Ja, de ${brandData.name} ${modelData.name} is een warmtepomp die tot -15°C effectief kan verwarmen. Dit maakt het een perfecte oplossing voor duurzame verwarming met zonnepanelen, waarmee u terugleverkosten kunt vermijden.`
          },
          {
            question: "Welke garantie krijg ik op deze airco?",
            answer: "U krijgt 5 jaar garantie op het hele systeem en speciaal 10 jaar garantie op de compressor. Daarnaast bieden wij 2 jaar garantie op de installatie door onze F-gassen gecertificeerde monteurs."
          },
          {
            question: "Hoe lang duurt de installatie van deze airco?",
            answer: `Een standaard installatie van de ${brandData.name} ${modelData.name} duurt meestal 1 werkdag (4-6 uur). Dit omvat plaatsing van binnen- en buitenunit, doorvoering maken, leidingwerk en inbedrijfname van het systeem.`
          }
        ]}
        breadcrumbItems={[
          { name: "Home", url: "https://staycoolairco.nl" },
          { name: "Producten", url: "https://staycoolairco.nl/products" },
          { name: brandData.name, url: `https://staycoolairco.nl/products/${brand}` },
          { name: modelData.name, url: `https://staycoolairco.nl/products/${brand}/${model}` }
        ]}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { name: "Producten", path: "/products" },
          { name: brandData.name, path: `/products/${brand}` },
          { name: modelData.name, path: `/products/${brand}/${model}` }
        ]}
      />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          
          {/* Product Q&A Section */}
          <div className="mt-16" id="product-qa">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Veelgestelde vragen over de {brandData.name} {modelData.name}</h2>
            
            <div className="space-y-6">
              {brand === 'alphaess' ? (
                <>
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      Wat is de terugverdientijd van de {brandData.name} {modelData.name} thuisbatterij?
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p>De terugverdientijd van de {brandData.name} {modelData.name} is gemiddeld 4-7 jaar, afhankelijk van uw energiecontract en verbruikspatroon. Met de huidige dynamische energieprijzen kunt u forse besparingen realiseren door slim in te kopen wanneer stroom goedkoop is.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      Hoe werkt de slimme sturing van deze thuisbatterij?
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p>De {brandData.name} {modelData.name} maakt gebruik van de Frank app voor intelligent energiebeheer. Deze app handelt automatisch op de energiemarkt (EPEX) en benut ook onbalans- en congestiemarkten voor maximaal rendement. U hoeft zelf niets te doen - het systeem optimaliseert automatisch uw energiegebruik.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      Kan ik deze batterij ook zonder zonnepanelen gebruiken?
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p>Ja, de {brandData.name} {modelData.name} werkt uitstekend zonder zonnepanelen. U kunt profiteren van dynamische energieprijzen door goedkoop in te kopen en duur terug te leveren. Met zonnepanelen heeft u wel extra voordeel door overdag gratis op te laden.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      Welke garantie krijg ik op deze thuisbatterij?
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p>AlphaESS biedt 10 jaar garantie of 10.000 cycli op de {modelData.name}. Daarnaast krijgt u gratis 24/7 monitoring via AlphaCloud. Het systeem is VDE, IEC en UN38.3 gecertificeerd voor maximale veiligheid en betrouwbaarheid.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      Hoeveel capaciteit heb ik nodig voor mijn huishouden?
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p>Voor een gemiddeld huishouden is {modelData.capacity} meestal voldoende. Dit dekt het dagelijkse verbruik en biedt ruimte voor handel op de energiemarkt. Onze adviseurs maken graag een berekening op maat op basis van uw verbruik en wensen.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      Hoe snel kan de thuisbatterij geïnstalleerd worden?
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p>De {brandData.name} {modelData.name} kan binnen 4 weken geïnstalleerd worden. De installatie zelf duurt ongeveer een halve dag. AlphaESS helpt ook met de BTW-teruggave van 21%, wat het netto nog voordeliger maakt.</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      Voor welke ruimtegrootte is deze {brandData.name} {modelData.name} geschikt?
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p>De {brandData.name} {modelData.name} met {modelData.capacity} is geschikt voor ruimtes van ongeveer {
                        modelData.capacity.includes('2.5') ? '25-30 m²' :
                        modelData.capacity.includes('3.5') ? '30-40 m²' :
                        modelData.capacity.includes('5.0') ? '45-60 m²' :
                        modelData.capacity.includes('7.0') ? '60-80 m²' :
                        '25-50 m²'
                      }. Voor een exacte berekening adviseren onze experts u graag op basis van isolatie en raamoppervlak.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      Wat zijn de jaarlijkse energiekosten van deze airco?
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p>Bij gemiddeld gebruik (1000 uur koelen en 1000 uur verwarmen per jaar) kost deze {brandData.name} {modelData.name} ongeveer €{
                        modelData.capacity.includes('2.5') ? '180-220' :
                        modelData.capacity.includes('3.5') ? '220-280' :
                        modelData.capacity.includes('5.0') ? '280-350' :
                        modelData.capacity.includes('7.0') ? '350-450' :
                        '200-300'
                      } per jaar aan elektriciteit. Dit is aanzienlijk goedkoper dan elektrische verwarming.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      Hoe stil is deze airco tijdens gebruik?
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p>De binnenunit produceert slechts {modelData.specifications.find(spec => spec.label === 'Geluidsniveau')?.value || '19-45 dB(A)'} geluid, wat vergelijkbaar is met fluisteren. De buitenunit is ontworpen om geluidsoverlast voor buren te minimaliseren.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      Kan deze airco ook verwarmen in de winter?
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p>Ja, de {brandData.name} {modelData.name} is een warmtepomp die tot -15°C effectief kan verwarmen. Dit maakt het een perfecte oplossing voor duurzame verwarming met zonnepanelen, waarmee u terugleverkosten kunt vermijden.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      Welke garantie krijg ik op deze airco?
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p>U krijgt 5 jaar garantie op het hele systeem en speciaal 10 jaar garantie op de compressor. Daarnaast bieden wij 2 jaar garantie op de installatie door onze F-gassen gecertificeerde monteurs.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      Hoe lang duurt de installatie van deze airco?
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p>Een standaard installatie van de {brandData.name} {modelData.name} duurt meestal 1 werkdag (4-6 uur). Dit omvat plaatsing van binnen- en buitenunit, doorvoering maken, leidingwerk en inbedrijfname van het systeem.</p>
                    </div>
                  </div>
                </>
              )}
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
                <p className="text-gray-700 italic mb-4">{brand === 'alphaess' 
                  ? `"Fantastisch systeem! Onze energierekening is met 40% gedaald sinds we de ${brandData.name} thuisbatterij hebben. De slimme sturing via Frank werkt perfect."`
                  : `"Zeer tevreden met onze ${brandData.name} airco. De monteurs waren vakkundig en hebben alles netjes geïnstalleerd. De airco werkt perfect en we merken nu al een flinke besparing op onze energierekening."`
                }</p>
                <p className="text-gray-900 font-medium">{brand === 'alphaess' ? 'Peter Hendriks, Sittard' : 'Jan de Vries, Maastricht'}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex text-yellow-400 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">{brand === 'alphaess'
                  ? `"StayCool Airco heeft de ${brandData.name} batterij vakkundig geïnstalleerd. Ze hebben ook geholpen met de BTW-teruggave aanvraag. Top service!"`
                  : `"De adviseur van StayCool Airco heeft ons goed geholpen bij het kiezen van de juiste airco. Het verschil met onze oude unit is enorm! Stiller, zuiniger en veel effectiever."`
                }</p>
                <p className="text-gray-900 font-medium">{brand === 'alphaess' ? 'Linda van den Berg, Roermond' : 'Marieke Jansen, Roermond'}</p>
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
