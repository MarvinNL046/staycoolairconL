import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Play, Star, MapPin, Quote } from 'lucide-react';

interface VideoTestimonial {
  id: string;
  customerName: string;
  location: string;
  rating: number;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  quote: string;
  projectType: string;
  installationDate: string;
}

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);

  const testimonials: VideoTestimonial[] = [
    {
      id: '1',
      customerName: 'Familie Janssen',
      location: 'Maastricht',
      rating: 5,
      videoUrl: 'https://example.com/testimonial-janssen.mp4',
      thumbnailUrl: '/images/testimonials/janssen-thumbnail.webp',
      duration: '2:15',
      quote: 'Perfecte service van begin tot eind. De airco werkt fantastisch!',
      projectType: 'Daikin Emura installatie',
      installationDate: '2024-06'
    },
    {
      id: '2',
      customerName: 'Jan van der Berg',
      location: 'Roermond', 
      rating: 5,
      videoUrl: 'https://example.com/testimonial-vandenberg.mp4',
      thumbnailUrl: '/images/testimonials/vandenberg-thumbnail.webp',
      duration: '1:45',
      quote: 'Zeer professioneel team, keurig op tijd en netjes afgewerkt.',
      projectType: 'Mitsubishi Multi-split systeem',
      installationDate: '2024-05'
    },
    {
      id: '3',
      customerName: 'Sandra Mols',
      location: 'Venlo',
      rating: 5,
      videoUrl: 'https://example.com/testimonial-mols.mp4',
      thumbnailUrl: '/images/testimonials/mols-thumbnail.webp',
      duration: '3:20',
      quote: 'Eindelijk geen last meer van de hitte! Aanrader.',
      projectType: 'LG DualCool installatie',
      installationDate: '2024-07'
    }
  ];

  // Generate Video Testimonial Schema
  const getTestimonialSchema = (testimonial: VideoTestimonial) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `Klantervaring ${testimonial.customerName} - ${testimonial.projectType}`,
    "description": `${testimonial.customerName} uit ${testimonial.location} deelt hun ervaring met StayCool Airco`,
    "thumbnailUrl": testimonial.thumbnailUrl,
    "contentUrl": testimonial.videoUrl,
    "duration": `PT${testimonial.duration.replace(':', 'M')}S`,
    "uploadDate": new Date(testimonial.installationDate).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "StayCool Airco"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "StayCool Airco",
      "logo": {
        "@type": "ImageObject",
        "url": "https://staycoolairco.nl/images/logo.svg"
      }
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": testimonial.customerName,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": testimonial.location,
          "addressRegion": "Limburg",
          "addressCountry": "NL"
        }
      },
      "reviewBody": testimonial.quote,
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "StayCool Airco"
      }
    }
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Onze Klanten aan het Woord
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hoor rechtstreeks van onze tevreden klanten over hun ervaring met StayCool Airco. 
            Echte verhalen van echte mensen uit heel Limburg.
          </p>
        </m.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <img
                  src={testimonial.thumbnailUrl}
                  alt={`${testimonial.customerName} testimonial`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button
                    onClick={() => setActiveVideo(testimonial)}
                    className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all transform hover:scale-105"
                  >
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </button>
                </div>
                <div className="absolute top-3 left-3">
                  <div className="flex items-center bg-white bg-opacity-90 rounded-full px-2 py-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {testimonial.duration}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-medium text-sm">
                      {testimonial.customerName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.customerName}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-1 -left-1 w-4 h-4 text-blue-200" />
                  <p className="text-gray-700 italic pl-4">"{testimonial.quote}"</p>
                </div>

                <div className="space-y-2 text-xs text-gray-600">
                  <div>
                    <span className="font-medium">Project:</span> {testimonial.projectType}
                  </div>
                  <div>
                    <span className="font-medium">Installatie:</span> {new Date(testimonial.installationDate).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })}
                  </div>
                </div>

                <button
                  onClick={() => setActiveVideo(testimonial)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Bekijk Verhaal
                </button>
              </div>
            </m.div>
          ))}
        </div>

        {/* Stats */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Tevreden Klanten</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Gemiddelde Beoordeling</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Zou ons Aanbevelen</div>
            </div>
          </div>
        </m.div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70"
            >
              ×
            </button>
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  poster={activeVideo.thumbnailUrl}
                >
                  <source src={activeVideo.videoUrl} type="video/mp4" />
                  Uw browser ondersteunt geen video weergave.
                </video>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-medium">
                      {activeVideo.customerName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{activeVideo.customerName}</h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {activeVideo.location}
                      <div className="flex items-center ml-4">
                        {[...Array(activeVideo.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{activeVideo.quote}"</p>
                <div className="text-sm text-gray-600">
                  <strong>Project:</strong> {activeVideo.projectType} • <strong>Geïnstalleerd:</strong> {new Date(activeVideo.installationDate).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schema Markup for each testimonial */}
      {testimonials.map(testimonial => (
        <script
          key={testimonial.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getTestimonialSchema(testimonial))
          }}
        />
      ))}
    </section>
  );
}