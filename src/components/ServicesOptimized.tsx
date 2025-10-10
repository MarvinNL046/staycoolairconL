import React, { useState } from 'react';
import { Fan, Wrench, ThermometerSun, ShoppingCart, Wind, Calendar, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesOptimized() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const services = [
    {
      icon: Fan,
      title: 'Airco Installatie',
      description: 'Professionele installatie van verschillende typen airconditioners, perfect afgestemd op uw ruimte.',
      features: ['Gratis vooronderzoek', 'Vakkundige montage', 'Netjes afgewerkt'],
      link: '/airco-installatie'
    },
    {
      icon: ThermometerSun,
      title: 'Duurzaam Verwarmen',
      description: 'Bespaar op teruglevering van zonne-energie door efficiënt koelen in de zomer en verwarmen in de winter.',
      features: ['Voorkom terugleverkosten', 'Energiezuinig verwarmen', 'Optimaal gebruik zonnepanelen'],
      link: '/kennisbank/verwarmen-met-airco'
    },
    {
      icon: Wrench,
      title: 'Onderhoud & Service',
      description: 'Regelmatig onderhoud voor optimale werking en langere levensduur van uw airconditioning.',
      features: ['Preventief onderhoud', 'Snelle reparatie'],
      link: '/airco-service-limburg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Onze Diensten
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Compleet aanbod van airconditioning services in Limburg
          </p>
        </div>

        <div className="mt-20">
          {/* Video container with lazy load - Performance Optimized */}
          <div className="relative w-full max-w-4xl mx-auto mb-20 rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            {!videoLoaded ? (
              // YouTube thumbnail with play button overlay
              <div
                onClick={() => setVideoLoaded(true)}
                className="absolute inset-0 cursor-pointer group"
              >
                <img
                  src="https://img.youtube.com/vi/9m-jkGgfLog/maxresdefault.jpg"
                  alt="StayCool Airco Promotional Video - Klik om af te spelen"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full p-6 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-12 w-12 text-white fill-white" />
                  </div>
                </div>

                {/* Call to action text */}
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg inline-block">
                    🎥 Bekijk onze video - Klik om af te spelen
                  </span>
                </div>
              </div>
            ) : (
              // Load iframe only when clicked
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/9m-jkGgfLog?autoplay=1&mute=0"
                title="StayCool Airco Promotional Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            )}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="bg-blue-800 rounded-full p-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>

                <ul className="mt-6 space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Meer info →
                </Link>
              </div>
            ))}
          </div>

          {/* New CTA Section with key links */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Link
              to="/airco-kopen-limburg"
              className="group bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-xl hover:shadow-xl transition-all"
            >
              <ShoppingCart className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Airco Kopen?</h3>
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
              <h3 className="text-xl font-bold mb-2">Service Nodig?</h3>
              <p className="text-green-100 mb-4">Snel onderhoud & reparatie in Limburg</p>
              <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                Plan service in →
              </span>
            </Link>

            <a
              href="https://afspraken.staycoolairco.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 rounded-xl hover:shadow-xl transition-all"
            >
              <Calendar className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Gratis Adviesgesprek</h3>
              <p className="text-purple-100 mb-4">Plan direct een afspraak met onze specialisten</p>
              <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                Plan afspraak →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}