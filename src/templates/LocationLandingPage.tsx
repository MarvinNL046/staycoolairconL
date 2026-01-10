import React from 'react';
import { Helmet } from 'react-helmet-async';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Wrench, Wind } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import MetaTags from '../components/MetaTags';
import SchemaMarkup from '../components/SchemaMarkup';
import Contact from '../components/Contact';
import { getUnsplashImageForCity } from '../utils/unsplashImages';
import { getCoordinatesForCity } from '../data/geoCoordinates';

interface FAQ {
  question: string;
  answer: string;
}

interface LocationLandingPageProps {
  city: string;
  region: string;
  postalCodes?: string;
  populationCount?: number;
  locationImage?: string;
  climateFacts?: string[];
  specialFeatures?: string[];
  testimonials?: Array<{
    name: string;
    rating: number;
    comment: string;
    date?: string;
  }>;
  faqs?: FAQ[];
  nearbyLocations?: Array<{
    name: string;
    url: string;
    distance?: string;
  }>;
  installationCount?: number;
}

export default function LocationLandingPage({
  city,
  region,
  postalCodes,
  populationCount,
  locationImage,
  climateFacts = [],
  specialFeatures = [],
  testimonials = [],
  faqs = [],
  nearbyLocations = [],
  installationCount = 50
}: LocationLandingPageProps) {
  // Get Unsplash image for this city or use provided image
  const unsplashImage = getUnsplashImageForCity(city.toLowerCase());
  
  // Get geo coordinates for this city
  const cityCoordinates = getCoordinatesForCity(city);
  
  // Default values for SEO
  const serviceType = "Airco Installatie";
  // Use Unsplash image or provided location image
  const imageUrl = locationImage || unsplashImage.url;
  
  // Calculate average rating from testimonials
  const averageRating = testimonials.length 
    ? testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length 
    : 4.7; // Default rating if no testimonials - company's actual rating
  
  // Format postal codes for display
  const formattedPostalCodes = postalCodes 
    ? postalCodes.split(',').map(code => code.trim()).join(', ') 
    : '';
  
  // Create SEO-optimized title and description
  const pageTitle = `Airco Installateur ${city} | Bij u in de Buurt | StayCool Airco`;
  const pageDescription = `Erkend airco installateur ${city} ✓ Gratis advies ✓ F-gassen gecertificeerd ✓ ${installationCount}+ klanten in ${region}. Nu offerte!`;
  
  // Prepare FAQ data for schema markup
  const faqSchemaData = {
    questions: faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  };

  // Prepare review data for schema
  const reviewsData = testimonials.map(testimonial => ({
    author: testimonial.name,
    rating: testimonial.rating,
    reviewBody: testimonial.comment,
    datePublished: testimonial.date
  }));
  
  return (
    <>
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={`https://staycoolairco.nl/airco-installatie/${city.toLowerCase().replace(/\s+/g, '-')}`}
        ogImage={imageUrl}
        type="service"
        serviceType={serviceType}
        locationInfo={{
          city,
          region,
          postalCode: formattedPostalCodes
        }}
        faqs={faqs}
        reviews={reviewsData}
        speakableContent={[
          `StayCool Airco is uw lokale airco specialist in ${city}`,
          `Wij installeren airconditioners in ${region} sinds jaren`,
          `Meer dan ${installationCount} tevreden klanten in de regio`,
          `Snelle service en professionele installatie in ${city}`,
          `Vraag direct een offerte aan voor airco installatie in ${city}`
        ]}
      />
      
      <SchemaMarkup 
        type="Service"
        data={{
          name: `${serviceType} ${city}`,
          description: pageDescription,
        }}
        location={{
          city,
          region,
          postalCode: formattedPostalCodes,
          latitude: cityCoordinates?.latitude,
          longitude: cityCoordinates?.longitude
        }}
      />
      
      {/* FAQ Schema */}
      {faqs.length > 0 && (
        <SchemaMarkup 
          type="FAQPage"
          data={faqSchemaData}
          location={{
            city,
            region
          }}
        />
      )}
      
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 pt-32 pb-12"
      >
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Home', path: '/' },
              { label: 'Werkgebied', path: '/werkgebied' },
              { label: city }
            ]}
          />
          
          {/* Hero Section */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                  {serviceType} {city}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  De beste keuze voor airconditioning in {city}, {region}
                </p>
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {averageRating.toFixed(1)} uit 5 (200+ reviews)
                    </span>
                  </div>
                  <p className="text-green-600 font-medium">
                    1000+ installaties in heel Limburg, waarvan {installationCount}+ in {region}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://afspraken.staycoolairco.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Gratis Adviesgesprek
                  </a>
                  <a
                    href="tel:+31462021430"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300"
                  >
                    Bel Direct: 046-202-1430
                  </a>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={imageUrl} 
                  alt={`Airco installatie in ${city}`}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <p className="font-medium">
                    Wij bedienen heel {region} inclusief {city}
                  </p>
                  {imageUrl === unsplashImage.url && (
                    <p className="text-xs text-gray-300 mt-1">
                      Foto door <a href={unsplashImage.photographerUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{unsplashImage.photographer}</a> op Unsplash
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Static H1 Section - Critical for SEO with beautiful sky gradient! ☁️ */}
          <section className="py-16 mb-12 -mx-4 px-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Airco Installateur bij u in de Buurt in {city}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 mt-2">
                  Professionele Installatie in {region}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
                StayCool Airco is uw erkende airco specialist dichtbij in {city}.
                <strong className="text-blue-600"> Meer dan {installationCount}+ tevreden klanten</strong> in {region} vertrouwen op onze service.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">F-gassen gecertificeerd</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Gratis advies aan huis</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Lokale airco monteur dichtbij</span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2>Professionele Airco Installatie in {city}</h2>
                <p>
                  <strong>Zoekt u een betrouwbare airco installateur bij u in de buurt in {city}?</strong> StayCool Airco is uw lokale specialist voor professionele airconditioning installatie in {city} en omgeving. 
                  Met jarenlange ervaring in {region} hebben wij de kennis en expertise om u te voorzien van de 
                  perfecte klimaatoplossing voor uw woning of bedrijf.
                </p>
                
                <p>
                  Als airco specialist dichtbij in {city} begrijpen wij de lokale behoeften perfect. Het klimaat in {region} kent steeds meer warme dagen, waardoor een betrouwbare airconditioning geen luxe meer is, maar een noodzaak voor comfort en productiviteit.
                  Wij zijn uw airco monteur in de buurt die u graag helpt bij het selecteren, installeren en onderhouden van de perfecte airco voor uw situatie.
                </p>
                
                <h3>Waarom kiezen voor een airco in {city}?</h3>
                
                <ul>
                  {climateFacts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                  ))}
                  <li>Steeds warmere zomers in {region} maken airconditioning essentieel</li>
                  <li>Verbeter uw comfort en nachtrust tijdens hete periodes</li>
                  <li>Moderne aircosystemen zijn ook energiezuinige verwarmingsoplossingen</li>
                </ul>
                
                {postalCodes && (
                  <>
                    <h3>Wij bedienen alle postcodes in {city}</h3>
                    <p>
                      Onze service dekt heel {city} met postcodes {formattedPostalCodes}.
                      Waar u ook woont in {city}, wij komen bij u langs voor een vrijblijvend adviesgesprek
                      en offerte op maat.
                    </p>
                  </>
                )}
                
                {specialFeatures.length > 0 && (
                  <>
                    <h3>Bijzonderheden voor Airco Installatie in {city}</h3>
                    <ul>
                      {specialFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
              <h3 className="text-xl font-semibold mb-4">Waarom StayCool Airco in {city}?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Lokale specialist in {region} met kennis van {city}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Meer dan {installationCount}+ installaties in de regio</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Gecertificeerde monteurs & garantie op installatie</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Snelle responstijd voor service in {city}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Transparante prijzen zonder verborgen kosten</span>
                </li>
              </ul>
            </div>
          </section>
          
          {/* Airco in de buurt Section */}
          <section className="mb-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Uw Airco Specialist bij u in de Buurt</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-lg mb-4">
                  Als lokale airco installateur in {city} zijn wij altijd dichtbij. Of u nu zoekt naar "airco installateur bij mij in de buurt" of "airco monteur dichtbij", StayCool Airco staat voor u klaar met:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span><strong>Snelle responstijd</strong> - Binnen 30 minuten bij u in {city} en omgeving</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    <span><strong>Gratis offerte</strong> - Vrijblijvend advies bij u thuis in {postalCodes || city}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span><strong>Snelle service</strong> - Meestal binnen 24-48 uur ter plaatse voor reparaties</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Direct een airco specialist bij u in de buurt?</h3>
                <p className="mb-4">
                  Wij bedienen alle postcodes in {city} ({formattedPostalCodes || 'en omgeving'}). Waar u ook woont, wij zijn uw lokale airco expert.
                </p>
                <a href="tel:+31462021430" className="inline-block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  Bel direct: 046-202-1430
                </a>
                <p className="text-sm text-gray-600 mt-3 text-center">
                  Of vraag online een offerte aan
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Onze Diensten in {city}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Airco Installatie</h3>
                <p className="text-gray-600 mb-4">
                  Professionele installatie van airconditioningsystemen in woningen en bedrijven in {city}.
                </p>
                <a
                  href="/airco-installatie"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  Bekijk Installatie Opties
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Airco Onderhoud</h3>
                <p className="text-gray-600 mb-4">
                  Regelmatig onderhoud voor efficiënte werking en langere levensduur van uw airconditioning in {city}.
                </p>
                <a
                  href="/airco-onderhoud"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  Bekijk Onderhoud Tarieven
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Airco Reparatie</h3>
                <p className="text-gray-600 mb-4">
                  Snelle en betrouwbare reparatiediensten voor alle soorten airconditioningsystemen in {city}.
                </p>
                <a
                  href="/airco-reparatie"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  Direct Storing Melden
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          {testimonials.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Wat onze klanten in {city} zeggen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-100">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{testimonial.name}</span>
                      {testimonial.date && <span className="text-sm text-gray-500">{testimonial.date}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* FAQs */}
          {faqs.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Veelgestelde vragen over Airco in {city}</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <div className="px-6 py-4 faq-answer speakable-content">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Nearby Locations */}
          {nearbyLocations.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Ook actief in deze omliggende gebieden</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {nearbyLocations.map((location, index) => (
                  <a 
                    key={index} 
                    href={location.url}
                    className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                  >
                    <h3 className="font-medium text-gray-800">{location.name}</h3>
                    {location.distance && (
                      <p className="text-sm text-gray-500">±{location.distance} van {city}</p>
                    )}
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Internal Links CTA Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/airco-kopen-limburg"
                className="group bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-xl hover:shadow-xl transition-all"
              >
                <ShoppingCart className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Airco Kopen in {city}?</h3>
                <p className="text-blue-100 mb-4">A+++ modellen vanaf €1.498 all-in</p>
                <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Bekijk ons assortiment →
                </span>
              </Link>

              <Link
                to="/airco-service-limburg"
                className="group bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-xl hover:shadow-xl transition-all"
              >
                <Wrench className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Service in {city}</h3>
                <p className="text-green-100 mb-4">Snel onderhoud & reparatie in Limburg</p>
                <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Plan service in →
                </span>
              </Link>

              <Link
                to="/kennisbank/klimaatbeheersing"
                className="group bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 rounded-xl hover:shadow-xl transition-all"
              >
                <Wind className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Klimaatbeheersing</h3>
                <p className="text-purple-100 mb-4">Expert advies voor optimaal binnenklimaat</p>
                <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Lees meer →
                </span>
              </Link>
            </div>
          </section>

          {/* Contact Form */}
          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Direct een Airco Installateur bij u in de Buurt in {city}</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="mb-6">
                Zoekt u een airco installateur bij u in de buurt in {city}? Wij zijn uw lokale specialist voor airconditioning in {formattedPostalCodes || city} en omgeving. 
                Vul onderstaand formulier in voor een vrijblijvende offerte en wij nemen binnen 24 uur contact met u op. 
                Als airco monteur dichtbij in {city} kunnen wij snel bij u langskomen voor advies op maat.
              </p>
              <Contact />
            </div>
          </section>
        </div>
      </m.div>
    </>
  );
}
